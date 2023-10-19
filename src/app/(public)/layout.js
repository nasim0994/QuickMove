import "@/style/root.css";
import "@/style/common.css";
import PublicHeader from "@/components/PublicHeader/PublicHeader";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <PublicHeader />
      <main className="min-h-[89vh]">{children}</main>
      <Footer />
    </>
  );
}
