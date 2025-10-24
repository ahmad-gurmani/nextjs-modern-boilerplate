"use client";

import { useState } from "react";
import { ErrorBoundary, InlineErrorFallback, withErrorBoundary } from "@/components/ui/error-boundary";
import { Button } from "@/components/ui/button";

// Example component that can throw an error
function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error("This is a test error!");
  }
  
  return (
    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
      <p className="text-green-800 dark:text-green-200">
        This component is working correctly! 🎉
      </p>
    </div>
  );
}

// Component wrapped with error boundary
const SafeBuggyComponent = withErrorBoundary(BuggyComponent, InlineErrorFallback);

export default function ErrorBoundaryExample() {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Error Boundary Examples</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Click the buttons below to see different error boundary implementations in action.
        </p>
      </div>

      {/* Example 1: Default Error Boundary */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">1. Default Error Boundary</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Uses the default full-screen error fallback
        </p>
        <ErrorBoundary>
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
        <Button 
          onClick={() => setShouldThrow(!shouldThrow)}
          variant="outline"
        >
          {shouldThrow ? "Fix Component" : "Break Component"}
        </Button>
      </div>

      {/* Example 2: Inline Error Boundary */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">2. Inline Error Boundary</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Uses a smaller inline error fallback
        </p>
        <ErrorBoundary fallback={InlineErrorFallback}>
          <BuggyComponent shouldThrow={shouldThrow} />
        </ErrorBoundary>
      </div>

      {/* Example 3: HOC Error Boundary */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">3. Higher-Order Component</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Component wrapped with error boundary using HOC pattern
        </p>
        <SafeBuggyComponent shouldThrow={shouldThrow} />
      </div>

      {/* Example 4: Multiple Components */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">4. Multiple Components</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Each component has its own error boundary
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ErrorBoundary fallback={InlineErrorFallback}>
            <BuggyComponent shouldThrow={shouldThrow} />
          </ErrorBoundary>
          <ErrorBoundary fallback={InlineErrorFallback}>
            <BuggyComponent shouldThrow={false} />
          </ErrorBoundary>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
          How to Use Error Boundaries
        </h3>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Wrap components that might throw errors</li>
          <li>• Use different fallback components for different contexts</li>
          <li>• Error boundaries catch errors in their children, not themselves</li>
          <li>• Use the HOC pattern for reusable error handling</li>
        </ul>
      </div>
    </div>
  );
}
