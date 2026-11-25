import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Common Ground Studio",
  description: "Thoughtful design and digital experiences, made with purpose.",
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link aria-label="Common Ground Studio home" className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">
                cg
              </span>
              <span>
                common
                <br />
                ground
              </span>
            </Link>
            <nav aria-label="Main navigation" className="site-nav">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link className="header-cta" href="/contact">
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </Link>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <Link className="footer-brand" href="/">
              Common Ground Studio
            </Link>
            <p>Good things happen when we work together.</p>
            <span>© Common Ground Studio</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
