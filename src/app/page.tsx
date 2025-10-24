import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Next.js Boilerplate
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A comprehensive, production-ready Next.js boilerplate with modern tooling, 
            authentication, state management, and beautiful UI components.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/register">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Next.js 15</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Latest Next.js with App Router for optimal performance and developer experience.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Utility-first CSS framework with custom design system and dark mode support.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-2">Authentication</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Role-based authentication system with protected routes and user management.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">State Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Zustand for global state and TanStack Query for server state management.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Full TypeScript support with strict configuration and type safety.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimized for production with best practices and modern tooling.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to build something amazing?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fork this boilerplate and start building your next project today.
          </p>
          <Button size="lg" asChild>
            <Link href="https://github.com/ahmad-gurmani/nextjs-modern-boilerplate">
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
