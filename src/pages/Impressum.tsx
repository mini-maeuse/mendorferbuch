import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Impressum = () => (
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

      <h2 className="text-2xl font-bold mb-6 text-foreground">Impressum</h2>

      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p><strong className="text-foreground">Angaben gemäß § 5 TMG:</strong></p>
        <p>
          Mini Mäuse Mendorferbuch e.V.<br />
          {/* Adresse hier eintragen */}
          Am Schloßacker 2a<br />
          92277 Mendorferbuch
        </p>
        <p><strong className="text-foreground">Vertreten durch:</strong><br />{/* Name des 1. Vorsitzenden */}Sebastian Delling (1. Vorsitzender)</p>
        <p><strong className="text-foreground">Kontakt:</strong><br />E-Mail: {/* E-Mail eintragen */}martin.delling@web.de</p>
        <p><strong className="text-foreground">Registereintrag:</strong><br />Eingetragen im Vereinsregister<br />Registergericht: {/* Amtsgericht eintragen */}Amtsgericht Amberg<br />Registernummer: {/* Registernummer eintragen */}VR 748</p>

        <p className="text-primary/50 italic">
          Haftungsausschluss: Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für Inhalte externer Links. Für diese sind ausschließlich die Betreiber verantwortlich.
        </p>
      </div>
    </main>

    <Footer />
  </div>
);

export default Impressum;