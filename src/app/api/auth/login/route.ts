import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Mock authentication - replace with actual authentication logic
    const mockUsers = [
      { id: "1", email: "admin@example.com", password: "password", role: "admin" },
      { id: "2", email: "brand@example.com", password: "password", role: "brand" },
      { id: "3", email: "creator@example.com", password: "password", role: "creator" },
    ];

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create a mock JWT token
    const token = Buffer.from(JSON.stringify({ userId: user.id, role: user.role })).toString("base64");

    // Set cookie
    const response = NextResponse.json(
      { 
        user: { 
          id: user.id, 
          email: user.email, 
          role: user.role 
        } 
      },
      { status: 200 }
    );

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
