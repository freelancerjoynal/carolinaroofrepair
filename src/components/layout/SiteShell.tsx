import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
