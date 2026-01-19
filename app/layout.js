import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Phone Point",
  description: "Buy and Sell Mobile Phones Easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
