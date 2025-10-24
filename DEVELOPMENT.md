# Development Guide

This guide will help you set up and develop with this Next.js boilerplate.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or yarn/pnpm)
- **Git** for version control

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextjs-modern-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier
npm run format:check # Check code formatting

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# Utilities
npm run clean        # Clean build artifacts
npm run analyze      # Analyze bundle size
```

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Husky** for git hooks

Code is automatically formatted and linted on commit.

### Git Workflow

1. Create a feature branch from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

3. Push and create a pull request
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build/tooling changes

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth route group
│   ├── (public)/          # Public route group
│   ├── dashboard/         # Protected dashboard routes
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── providers/         # Context providers
│   ├── shared/            # Shared components
│   └── ui/                # UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
├── store/                 # Zustand stores
├── styles/                # Global styles
└── types/                 # TypeScript types
```

## 🎨 UI Development

### Component Guidelines

1. **Use TypeScript** for all components
2. **Follow naming conventions** (PascalCase for components)
3. **Use proper props interfaces**
4. **Include proper accessibility attributes**
5. **Use Tailwind CSS** for styling

### Example Component

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick, 
  disabled 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-md font-medium transition-colors",
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-200 text-gray-900 hover:bg-gray-300": variant === "secondary",
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        }
      )}
    >
      {children}
    </button>
  );
}
```

### Styling Guidelines

1. **Use Tailwind CSS** utility classes
2. **Create custom CSS** only when necessary
3. **Use CSS variables** for theming
4. **Follow mobile-first** responsive design
5. **Use dark mode** classes consistently

## 🔐 Authentication

### Auth Flow

1. User submits login/register form
2. API validates credentials
3. Server returns JWT token
4. Token stored in httpOnly cookie
5. Middleware protects routes
6. Client-side auth state managed by Zustand

### Adding Protected Routes

```tsx
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value;
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
```

## 📊 State Management

### Zustand Store Example

```tsx
import { create } from "zustand";

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
```

### TanStack Query Example

```tsx
import { useQuery } from "@tanstack/react-query";

function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      return response.json();
    },
  });
}
```

## 🧪 Testing

### Writing Tests

```tsx
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    screen.getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Test Coverage

Run tests with coverage:
```bash
npm run test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

### Environment Variables

Set these in your deployment platform:
- `NEXT_PUBLIC_API_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- Database URLs
- API keys

## 🐛 Debugging

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run type-check`
   - Verify all imports are correct
   - Ensure environment variables are set

2. **Runtime Errors**
   - Check browser console
   - Use React DevTools
   - Check network requests

3. **Styling Issues**
   - Verify Tailwind classes
   - Check CSS variable definitions
   - Ensure proper dark mode classes

### Debug Tools

- **React DevTools** - Component inspection
- **Next.js DevTools** - Performance monitoring
- **Browser DevTools** - Network and console debugging

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)
- [TanStack Query Documentation](https://tanstack.com/query)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

If you encounter issues:
1. Check the documentation
2. Search existing issues
3. Create a new issue with details
4. Join community discussions

---

Happy coding! 🎉
