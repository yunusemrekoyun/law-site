import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh bg-bg text-foreground">
      <Header />
      <main className="container-x">{children}</main>
      <Footer />
    </div>
  );
}
