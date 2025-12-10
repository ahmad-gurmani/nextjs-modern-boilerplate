import "@/styles/globals.css";
import QueryProvider from "../components/providers/QueryProvider";
import ZustandProvider from "../components/providers/ZustandProvider";
import { ErrorBoundary } from "../components/ui/error-boundary";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ErrorBoundary>
          <QueryProvider>
            <ZustandProvider>
              {children}
            </ZustandProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
