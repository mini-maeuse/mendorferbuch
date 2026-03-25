import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

// PDF & Bilder direkt aus public
const PDF_PATH = "/assets/ausschreibung.pdf";
const PDF_IMAGES = [
  "/assets/ausschreibung1.jpg",
  "/assets/ausschreibung2.jpg",
  "/assets/ausschreibung3.jpg",
  "/assets/ausschreibung4.jpg",
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-sporty">
      {/* Header */}
      <header className="header-dynamic w-full py-8 sm:py-10 px-4">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Speed lines */}
          <div className="hidden sm:block">
            <div className="speed-line" style={{ top: "20%", left: "5%", width: "60px" }} />
            <div className="speed-line" style={{ top: "50%", left: "2%", width: "40px" }} />
            <div
              className="speed-line"
              style={{
                top: "30%",
                right: "5%",
                width: "50px",
                background: "linear-gradient(270deg, hsl(0 0% 0% / 0.4), transparent)"
              }}
            />
            <div
              className="speed-line"
              style={{
                top: "70%",
                right: "8%",
                width: "35px",
                background: "linear-gradient(270deg, hsl(0 0% 0% / 0.4), transparent)"
              }}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-black drop-shadow-lg">
            Mini Mäuse Mendorferbuch
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground tracking-widest uppercase">
            Laufverein
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-8 gap-6">
        <div className="pdf-border-glow w-full max-w-4xl rounded-xl overflow-hidden">
          <div className="bg-card rounded-xl overflow-hidden">

            {/* Desktop: scrollbarer iframe */}
            <div className="hidden sm:block">
              <iframe
                src={PDF_PATH}
                className="w-full"
                style={{ height: "90vh", minHeight: "600px", border: "none", overflow: "auto" }}
                title="PDF Viewer"
              />
            </div>

            {/* Mobile: Bilder + Button */}
            <div className="sm:hidden flex flex-col items-center p-4 gap-4">
              <Button asChild size="lg" className="btn-sport font-bold">
                <a href={PDF_PATH} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2" />
                  PDF öffnen
                </a>
              </Button>

              {PDF_IMAGES.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`PDF Seite ${idx + 1}`}
                  className="rounded-lg shadow-lg w-full"
                />
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;