import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#c9d6f0] via-[var(--color-brand-Blue)] to-[var(--color-brand-Blue)]">
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}