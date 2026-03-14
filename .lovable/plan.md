

## Mini Mäuse Mendorferbuch – PDF Portal

### Übersicht
Eine minimalistische Single-Page-Website für den Laufverein, die eine PDF-Datei prominent anzeigt und zum Download bereitstellt.

### Seiten & Komponenten

**1. Hauptseite (Index)**
- **Header**: Gelber (#FFD700) Full-Width-Balken mit Vereinsname "MINI MÄUSE MENDORFERBUCH" in schwarzer, fetter Montserrat-Schrift
- **PDF-Viewer**: Zentrierter Container (max 1000px) mit eingebettetem PDF via `<iframe>` / `<embed>` (ca. 70vh Höhe)
- **Download-Button**: Prominenter gelber Button direkt unter dem Header zum PDF-Download
- **Platzhalter-PDF-Pfad**: `pdf/dateiname.pdf`

**2. Footer**
- Schwarzer, schmaler Footer am unteren Rand
- Links zu "Impressum" und "Datenschutzerklärung" (als eigene Routen mit Platzhalter-Inhalten)

**3. Impressum & Datenschutz Seiten**
- Einfache Textseiten mit Platzhalter-Inhalten
- Zurück-Link zur Hauptseite

### Design
- **Farben**: Gelb (#FFD700), Schwarz (#000000), Hellgrau (#F4F4F4) Hintergrund, Weiß für PDF-Container
- **Fonts**: Montserrat (Bold) für Überschriften, Inter für Body-Text
- **Keine Animationen**, keine Navigation – rein funktional
- **Responsive**: Große Touch-Targets, PDF-Viewer passt sich der Bildschirmgröße an

