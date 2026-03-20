import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative w-full py-5 px-6" style={{ background: 'linear-gradient(135deg, hsl(51 100% 50%) 0%, hsl(51 100% 55%) 50%, hsl(51 100% 50%) 100%)' }}>
    <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: 'linear-gradient(90deg, hsl(0 0% 0%), hsl(51 100% 50%), hsl(0 0% 0%))' }} />
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm font-bold">
      <Link
        to="/impressum"
        className="text-primary/80 hover:text-primary transition-colors tracking-wide"
      >
        Impressum
      </Link>
      <span className="hidden sm:inline text-muted-foreground/30">●</span>
      <Link
        to="/datenschutz"
        className="text-primary/80 hover:text-primary transition-colors tracking-wide"
      >
        Datenschutzerklärung
      </Link>
    </div>
  </footer>
);

export default Footer;
