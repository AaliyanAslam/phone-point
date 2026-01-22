import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
