import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, password, role } = body;

    // Validate input
    if (!firstName || !lastName || !email || !password || !role) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    // Validate role
    const validRoles = ["admin", "brand", "creator"];
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role" },
        { status: 400 }
      );
    }

    // Mock user creation - replace with actual database logic
    const newUser = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      role,
      createdAt: new Date().toISOString(),
    };

    // Create a mock JWT token
    const token = Buffer.from(JSON.stringify({ userId: newUser.id, role: newUser.role })).toString("base64");

    // Set cookie
    const response = NextResponse.json(
      { 
        user: { 
          id: newUser.id, 
          email: newUser.email, 
          role: newUser.role 
        } 
      },
      { status: 201 }
    );

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
