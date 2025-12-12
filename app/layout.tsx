import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Yogita I J",
  description: "Portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* Fullscreen Background */}
        <div className="background-layer"></div>

        {/* All Page Content */}
        <div className="content-wrapper">{children}</div>
      </body>
    </html>
  );
}
