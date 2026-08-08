# cstrsk-metro-ui

Zwei responsive CSS/JS-Designsysteme aus zwei Epochen der Microsoft-Designsprache. Reines HTML, CSS und Vanilla-JS — keine Build-Schritte, keine Abhängigkeiten.

| Datei | Epoche | Stil |
|---|---|---|
| [`index.html`](index.html) | Windows Phone 7/8 (2010–2014) | **Metro**: flache Farbblöcke, Live-Kacheln, Pivot-Navigation, Segoe UI Light |
| [`fluent.html`](fluent.html) | Windows 10/11 (ab 2017) | **Fluent Design**: Acrylic-Blur, Reveal-Hover-Effekt, Tiefe/Schatten, abgerundete Ecken, NavigationView |
| [`docs.html`](docs.html) | — | **Referenz für Entwickler**: Design-Tokens (Tabellen mit Variablen/Werten) und copy-paste-fertige HTML-Snippets für jede Komponente in beiden Systemen |

> Kurzer Kontext zur Namensgebung: *Metro* war die visuelle Sprache von Windows Phone 7/8 und frühem Windows 8. *UWP* (Universal Windows Platform) kam erst 2015 mit Windows 10 als App-Plattform — visuell zunächst noch Metro-nah, ab ~2017 dann überlagert durch *Fluent Design*. Dieses Repo bildet beide Enden bewusst getrennt ab, statt sie unter einem Namen zu vermischen.

## Merkmale — Metro (`index.html`)

- **Live-Kacheln** (1×1, 2×2, 4×2) mit 3D-Flip-Animation zwischen Icon- und Live-Content-Seite
- **Panorama-Kopfzeile** im typischen überlaufenden Segoe-UI-Light-Großformat
- **Pivot-Navigation** mit vier Bereichen: Start, Steuerelemente, Listen, Dialoge
- **Steuerelemente**: Buttons, Toggle-Switches, Checkboxen, Radiobuttons, Textfelder, Slider, unbestimmte Fortschrittsanzeigen (Punkte & Balken)
- **Listen** mit Avataren, Untertiteln und Chevron-Navigation
- **Toast-Benachrichtigung** und modaler Dialog im klassischen Message-Box-Stil
- **Echtes WP8-Akzentfarbrad** (Cobalt, Emerald, Magenta, Mango, Indigo, Lime) — live umschaltbar
- **Hell-/Dunkel-Theme**
- Vollständig **responsiv**: 4 Kachelspalten mobil → 6 Tablet → 8 Desktop
- Barrierefreiheit: sichtbarer Fokusring, `prefers-reduced-motion` wird respektiert

## Merkmale — Fluent Design (`fluent.html`)

- **NavigationView** links, ein-/ausklappbar, mit Acrylic-Hintergrund (`backdrop-filter: blur`)
- **Reveal Highlight**: Lichtschein, der dem Mauszeiger über Karten und Buttons folgt (via `radial-gradient` + `pointermove`)
- **Acrylic-Karten** mit weicher Elevation (Schattentiefe bei Hover)
- **CommandBar** oben mit Icon-Buttons
- **InfoBar**-Komponenten (info/erfolg/warnung), **ContentDialog**, **ProgressRing**
- Steuerelemente im Fluent-Stil: abgerundete Buttons, Switches, Checkboxen, Textfelder, Dropdown, Slider
- **Hell-/Dunkel-Theme**, responsiv bis Mobile (Navigation klappt zu Overlay)

## Projektstruktur

```
cstrsk-metro-ui/
├── index.html      Metro/WP8-Demoseite
├── fluent.html      Fluent-Design-Demoseite
├── css/
│   ├── metro.css    Metro-Styles (Tokens + Komponenten)
│   └── fluent.css   Fluent-Styles (Tokens + Komponenten)
├── js/
│   ├── metro.js     Interaktion für die Metro-Seite
│   └── fluent.js    Interaktion für die Fluent-Seite
├── README.md
└── LICENSE
```

CSS und JS liegen als eigene, einbindbare Dateien vor — nicht mehr inline in der HTML-Datei. So lässt sich `css/metro.css` bzw. `css/fluent.css` auch in ein anderes Projekt kopieren und per `<link>` einbinden, ohne die Demoseiten mitzunehmen.

## Verwendung

`index.html` bzw. `fluent.html` in einem Browser öffnen oder per statischem Hosting (GitHub Pages, Cloudflare Pages, o. ä.) bereitstellen. Für ein eigenes Projekt genügt es, den passenden `css/`- (und optional `js/`-) Ordner zu übernehmen:

```html
<link rel="stylesheet" href="css/metro.css">
<script src="js/metro.js" defer></script>
```

### Eigene Akzentfarbe

```css
:root{
  --accent: #0050EF; /* beliebigen Hex-Wert einsetzen */
}
```

### Neue Kachel hinzufügen

```html
<div class="tile tile-1x1 c-teal" tabindex="0">
  <div class="tile-flip">
    <div class="tile-face front"><span class="tile-icon">★</span></div>
    <div class="tile-face back c-teal"><span class="tile-label">favoriten</span></div>
  </div>
</div>
```

Größen: `tile-1x1`, `tile-2x2`, `tile-4x2`. Farbklassen: `c-cobalt`, `c-emerald`, `c-magenta`, `c-mango`, `c-teal`, `c-indigo`, `c-crimson`, `c-lime`, `c-steel`, `c-surface`.

## Lizenz

MIT — siehe [LICENSE](LICENSE).

## Autor

[cstrsk.de](https://cstrsk.de)
