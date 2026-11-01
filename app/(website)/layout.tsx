import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
