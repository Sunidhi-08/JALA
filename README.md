# JALA Front-End Assignments

Browser-based solutions to the JALA Academy front-end exercises. Start at [index.html](index.html) to browse each assignment.

## Run locally

Serve the repository root over HTTP so AngularJS can load local JSON and templates:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`. The AngularJS pages load AngularJS 1.8.2 from Google's CDN, so they need an internet connection.

## Assignment status

- [x] HTML Basics
- [x] HTML5 Input Attributes
- [x] HTML5 Semantic Elements
- [x] CSS Basics
- [x] CSS Page Adjustments
- [x] CSS Effects
- [x] CSS Compatibility
- [x] JavaScript Basics
- [x] JavaScript Access and Properties
- [x] JavaScript Events
- [x] AngularJS Basics (optional legacy set)
- [x] AngularJS Filters
- [x] AngularJS JSON
- [x] AngularJS Events
- [x] AngularJS Elements and Validations

## MySQL exercise

`angular/events.html` runs against sample JSON by default. The MySQL button expects a PHP-enabled server and MySQL database. Apply `angular/mysql/schema.sql`, configure `DB_HOST`, `DB_NAME`, `DB_USER`, and `DB_PASSWORD` as environment variables, then serve the PHP endpoint. GitHub Pages does not execute PHP.

The assignment PDFs remain in the local workspace and are excluded from this repository.