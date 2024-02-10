import { headers } from "next/headers";
import "./globals.css";

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  headers();
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-1 flex-col">
        <nav className="border-b border-black w-full max-w-5xl mx-auto p-4">
          <Link href="/" className="underline">
            Link to `/`
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
