import "./globals.css";

export const metadata = {
  title: "Yogita I J",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
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
