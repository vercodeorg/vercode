import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ToastifyProvider from "~/components/ToastifyProvider";
import { AuthProvider } from "./contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastifyProvider>
            <AuthProvider>{children}</AuthProvider>
          </ToastifyProvider>
        </Providers>
      </body>
    </html>
  );
}
