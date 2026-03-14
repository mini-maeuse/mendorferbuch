import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Datenschutz = () => (
  <div className="flex flex-col min-h-screen bg-sporty">
    <header className="header-dynamic w-full py-5 px-4">
      <h1
        className="text-xl sm:text-2xl font-black text-center uppercase tracking-wider"
        style={{ color: 'hsl(51 100% 50%)', textShadow: '0 2px 8px hsl(51 100% 50% / 0.3)' }}
      >
        Mini Mäuse Mendorferbuch
      </h1>
    </header>

    <main className="flex-1 max-w-3xl mx-auto px-4 py-10">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-primary/70 hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
      </Link>
      <h2 className="text-2xl font-bold mb-6 text-foreground">Datenschutzerklärung</h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">1. Datenschutz auf einen Blick</strong></p>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
        <p><strong className="text-foreground">2. Verantwortliche Stelle</strong></p>
        <p>
          Mini Mäuse Mendorferbuch e.V.<br />
          Musterstraße 1<br />
          12345 Mendorferbuch<br />
          E-Mail: info@mini-maeuse-mendorferbuch.de
        </p>
        <p><strong className="text-foreground">3. Datenerfassung auf dieser Website</strong></p>
        <p>Diese Website erhebt keine personenbezogenen Daten. Es werden keine Cookies gesetzt und keine Analyse-Tools verwendet.</p>
        <p className="text-primary/50 italic">— Platzhalter-Inhalte. Bitte durch echte Datenschutzerklärung ersetzen. —</p>
      </div>
    </main>

    <Footer />
  </div>
);

export default Datenschutz;
