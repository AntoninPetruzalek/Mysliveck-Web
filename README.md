# 🌲 Myslivecký spolek – Moderní webová prezentace

## 📌 Úvod

Tento projekt vznikl jako ročníková práce do předmětu Webové technologie.

Jedná se o moderní vícestránkovou webovou prezentaci mysliveckého spolku doplněnou o interaktivní loveckou hru vytvořenou v JavaScriptu. Cílem projektu bylo vytvořit responzivní web bez použití frameworků a současně aplikovat principy výkonu, SEO, přístupnosti a moderního UI/UX.

### Živá verze

https://antoninpetruzalek.github.io/Mysliveck-Web/

### GitHub repozitář

https://github.com/AntoninPetruzalek/Mysliveck-Web

---

# 🛠 Použité technologie

* HTML5
* CSS3
* JavaScript (ES6+)
* CSS Grid
* Flexbox
* GitHub Pages
* Visual Studio Code

---

# 📁 Struktura projektu

```text
Mysliveck-Web/
│
├── index.html
├── historie.html
├── clenove.html
├── galerie.html
├── akce.html
├── kontakt.html
├── hra.html
│
├── myslivost.css
├── hra.css
│
├── myslivost.js
├── hra.js
│
├── sitemap.xml
├── robots.txt
│
├── diana.jpg
├── forest.jpg
│
└── README.md
```

---

# ⚡ 1. Performance (Výkon)

## Teoretický popis

Výkon webu ovlivňuje rychlost načítání stránek, velikost souborů a množství požadavků na server.

### Implementace

* Použití čistého HTML, CSS a JavaScriptu bez frameworků
* Optimalizace obrázků
* Omezení externích knihoven
* Dynamické generování objektů ve hře pomocí JavaScriptu

### Ukázka kódu

```html
<img src="forest.jpg" loading="lazy" alt="Les">
```

Atribut `loading="lazy"` umožňuje načítat obrázky až ve chvíli, kdy jsou potřeba.

---

# 🔍 2. SEO

## Teoretický popis

SEO pomáhá vyhledávačům správně indexovat obsah webu.

### Implementace

* Použití sémantických HTML prvků
* Meta tagy
* Sitemap.xml
* Robots.txt
* Nadpisová hierarchie

### Ukázka kódu

```html
<meta name="description" content="Oficiální stránky mysliveckého spolku.">
```

```txt
User-agent: *
Allow: /

Sitemap: https://antoninpetruzalek.github.io/Mysliveck-Web/sitemap.xml
```

---

# ♿ 3. Accessibility

## Teoretický popis

Přístupnost umožňuje používat web i uživatelům se zdravotním omezením.

### Implementace

* Alternativní texty obrázků
* ARIA atributy
* Dobrý kontrast barev
* Ovládání pomocí klávesnice

### Ukázka kódu

```html
<img src="diana.jpg" alt="Myslivecký spolek">
```

```html
<nav aria-label="Hlavní navigace">
```

---

# 🌐 4. Sociální sítě

## Teoretický popis

Open Graph a Twitter Cards zlepšují sdílení webu na sociálních sítích.

### Implementace

```html
<meta property="og:title" content="Myslivecký spolek">
<meta property="og:description" content="Moderní prezentace mysliveckého spolku">
<meta property="og:image" content="diana.jpg">
```

---

# 🎨 5. UI/UX

## Teoretický popis

UI/UX řeší použitelnost a vzhled webu.

### Implementace

* Responzivní design
* Hamburger menu
* Konzistentní barevné schéma
* Přehledná navigace
* Jednotný styl všech stránek

### Ukázka kódu

```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

---

# 🤖 6. AI Integrace

## Teoretický popis

Při tvorbě projektu byla využita umělá inteligence pro návrh a analýzu řešení.

### Implementace

* Návrh designu webu
* Pomoc při tvorbě JavaScriptové hry
* Návrh CSS komponent
* Kontrola a oprava chyb
* Návrh struktury dokumentace

---

# 📓 AI Deník

## Prompt 1

„Navrhni moderní design webu pro myslivecký spolek pomocí HTML, CSS a JavaScriptu.“

Výsledek:

* návrh barevné palety
* návrh rozložení stránky
* základní struktura projektu

## Prompt 2

„Vytvoř jednoduchou loveckou hru v JavaScriptu.“

Výsledek:

* systém spawnování zvířat
* bodovací systém
* interaktivní herní mechaniky

## Prompt 3

„Navrhni responzivní navigační menu s hamburger tlačítkem.“

Výsledek:

* mobilní navigace
* responzivní chování

## Prompt 4

„Pomoz s optimalizací SEO a přístupnosti webu.“

Výsledek:

* meta tagy
* ARIA atributy
* robots.txt
* sitemap.xml

---

# 🚀 Instalace a spuštění

## Lokální spuštění

1. Stáhnout projekt z GitHubu.
2. Otevřít složku projektu ve Visual Studio Code.
3. Nainstalovat rozšíření Live Server.
4. Pravým tlačítkem kliknout na soubor `index.html`.
5. Zvolit „Open with Live Server“.

Web se otevře v internetovém prohlížeči.

---

# 🖼 Galerie projektu

## Desktop verze

* Domovská stránka
* Galerie
* Akce
* Historie

## Mobilní verze

* Responzivní navigace
* Hamburger menu
* Optimalizované rozložení

## Speciální funkce

* Interaktivní lovecká hra
* Galerie fotografií
* Animované pozadí
* Dynamické prvky JavaScriptu

---

# 📄 Autor

Antonín Petružálek

Ročníková práce – Webové technologie

2026
