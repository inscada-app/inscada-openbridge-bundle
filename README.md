# @inscada/openbridge-bundle

Pre-bundled [OpenBridge Web Components](https://github.com/nicatbayram/inscada-openbridge-bundle) for maritime and industrial SCADA dashboards. Single JS + CSS — no build tools required, CDN-ready.

This package bundles the entire **[@oicl/openbridge-webcomponents](https://www.npmjs.com/package/@oicl/openbridge-webcomponents)** library (IEC 62288 compliant) into a single ES module file so you can use all 180+ components and 1900+ icons with just two `<link>`/`<script>` tags.

## Quick Start (CDN)

```html
<!-- 1. Font (required) -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap">

<!-- 2. OpenBridge theme CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@inscada/openbridge-bundle/dist/openbridge.css">

<!-- 3. All components (single file) -->
<script src="https://cdn.jsdelivr.net/npm/@inscada/openbridge-bundle/dist/inscada-openbridge.min.js"></script>
```

That's it. All `<obc-*>` and `<obi-*>` custom elements are now available globally.

### unpkg alternative

```html
<link rel="stylesheet" href="https://unpkg.com/@inscada/openbridge-bundle/dist/openbridge.css">
<script src="https://unpkg.com/@inscada/openbridge-bundle/dist/inscada-openbridge.min.js"></script>
```

### Pin a specific version

```html
<script src="https://cdn.jsdelivr.net/npm/@inscada/openbridge-bundle@1.0.0/dist/inscada-openbridge.min.js"></script>
```

## Install via npm

```bash
npm install @inscada/openbridge-bundle
```

```js
// ES module — registers all custom elements as a side effect
import '@inscada/openbridge-bundle';
```

```css
/* Import the theme CSS */
@import '@inscada/openbridge-bundle/openbridge.css';
```

## What's Included

**186 components** across 4 categories + **1900+ SVG icons** — all bundled into a single 9.5 MB JS file (~1.2 MB gzipped).

### Navigation Instruments (34)

Gauges, compasses, and vessel motion indicators compliant with IEC 62288.

| Component | Tag |
|-----------|-----|
| Azimuth Thruster | `<obc-azimuth-thruster>` |
| Compass | `<obc-compass>` |
| Compass Flat | `<obc-compass-flat>` |
| Gauge Radial | `<obc-gauge-radial>` |
| Gauge Horizontal | `<obc-gauge-horizontal>` |
| Gauge Vertical | `<obc-gauge-vertical>` |
| Gauge Trend | `<obc-gauge-trend>` |
| Heading | `<obc-heading>` |
| Heave | `<obc-heave>` |
| Main Engine | `<obc-main-engine>` |
| Pitch / Roll | `<obc-pitch>` `<obc-roll>` `<obc-pitch-roll>` |
| Rate of Turn | `<obc-rate-of-turn>` |
| Rudder | `<obc-rudder>` |
| Speed Gauge | `<obc-speed-gauge>` |
| Speed Arrows | `<obc-speed-arrows>` |
| Thruster | `<obc-thruster>` |
| Watch / Watch Flat | `<obc-watch>` `<obc-watch-flat>` |
| Wind | `<obc-wind>` |
| Wind Indicator | `<obc-wind-indicator>` |
| Graph Mini | `<obc-graph-mini>` |
| Instrument Field | `<obc-instrument-field>` |
| *...and more* | |

### Automation & Schematic (33)

Process equipment, electrical symbols, and wiring primitives for P&ID and electrical diagrams.

| Component | Tag |
|-----------|-----|
| Pump | `<obc-pump>` |
| Motor | `<obc-motor>` |
| Fan | `<obc-fan>` |
| Tank | `<obc-automation-tank>` |
| Valves | `<obc-digital-valve>` `<obc-analog-valve>` |
| Damper | `<obc-damper>` |
| Filter | `<obc-filter>` |
| Resistor / Capacitor | `<obc-resistor>` `<obc-capacitor>` |
| Transformer / Converter | `<obc-transformer>` `<obc-converter>` |
| MOSFET / Transistor / Diodes | `<obc-mosfet>` `<obc-bipolar-transistor>` `<obc-diodes>` |
| Switch / Source / Ground | `<obc-switch>` `<obc-source>` `<obc-ground>` |
| Wiring Primitives | `<obc-horizontal-line>` `<obc-vertical-line>` `<obc-corner-line>` `<obc-three-way-line>` `<obc-line-cross>` `<obc-direction-line>` |

### Bars & Graphs (6)

| Component | Tag |
|-----------|-----|
| Line Graph | `<obc-line-graph>` |
| Area Graph | `<obc-area-graph>` |
| Pie Chart | `<obc-pie-chart>` |
| Donut Chart | `<obc-donut-chart>` |
| Polar Chart | `<obc-polar-chart>` |
| Radial Bar Chart | `<obc-radial-bar-chart>` |

### UI Components (112+)

Buttons, cards, menus, alerts, tables, forms, sequences, and layout components.

| Category | Examples |
|----------|----------|
| **Alerts** | `<obc-alert-button>` `<obc-alert-menu>` `<obc-alert-list-details>` `<obc-alert-frame>` |
| **Buttons** | `<obc-app-button>` `<obc-system-button>` `<obc-rich-button>` `<obc-split-button>` `<obc-slide-button>` |
| **Cards & Layout** | `<obc-brilliance-menu>` `<obc-accordion-card>` `<obc-tabbed-card>` `<obc-title-container>` |
| **Forms** | `<obc-text-input-field>` `<obc-textarea-field>` `<obc-checkbox>` `<obc-radio>` `<obc-slider>` `<obc-toggle-switch>` |
| **Navigation** | `<obc-top-bar>` `<obc-navigation-item>` `<obc-breadcrumb>` `<obc-tab-row>` |
| **Notifications** | `<obc-notification-message-item>` `<obc-topbar-message-item>` `<obc-badge>` `<obc-tag>` |
| **Sequence** | `<obc-sequence-card>` `<obc-sequence-toolbar>` `<obc-sequence-step>` `<obc-sequence-connector>` |
| **Progress** | `<obc-progress-bar>` `<obc-progress-button>` `<obc-circular-progress>` |
| **Data Display** | `<obc-table>` `<obc-table-header-item>` `<obc-battery-icon>` `<obc-status-indicator>` |
| **Toggles** | `<obc-toggle-button-group>` `<obc-toggle-button-three-state>` `<obc-start-stop-switch>` |
| *...and more* | |

### Icons (1900+)

All OpenBridge SVG icons are registered as `<obi-*>` custom elements (e.g. `<obi-wind>`, `<obi-bolt-google>`, `<obi-resistor-1-on>`).

## Themes

OpenBridge supports 5 built-in themes via a CSS class on a container element:

| Theme | Class | Use Case |
|-------|-------|----------|
| Day | `<div class="obc-day">` | Bright daylight conditions |
| Day Bright | `<div class="obc-day-bright">` | Direct sunlight / high glare |
| Dusk | `<div class="obc-dusk">` | Low light transition |
| Night | `<div class="obc-night">` | Nighttime bridge operations |
| Night Bright | `<div class="obc-night-bright">` | Night with some ambient light |

```html
<div class="obc-night" style="padding: 24px;">
  <obc-gauge-radial value="72" min="0" max="100" label="RPM"></obc-gauge-radial>
</div>
```

## Example

A minimal dashboard with a radial gauge and a compass:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OpenBridge Dashboard</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@inscada/openbridge-bundle/dist/openbridge.css">
  <script src="https://cdn.jsdelivr.net/npm/@inscada/openbridge-bundle/dist/inscada-openbridge.min.js"></script>
  <style>
    body { margin: 0; font-family: 'Noto Sans', sans-serif; }
    .dashboard { display: flex; gap: 24px; padding: 24px; }
    .instrument { width: 280px; height: 280px; }
  </style>
</head>
<body>
  <div class="obc-day">
    <div class="dashboard">
      <div class="instrument">
        <obc-gauge-radial value="72" min="0" max="100" label="RPM"></obc-gauge-radial>
      </div>
      <div class="instrument">
        <obc-compass heading="245"></obc-compass>
      </div>
      <div class="instrument">
        <obc-wind heading="180" speedKnots="12"></obc-wind>
      </div>
    </div>
  </div>
</body>
</html>
```

## Browser Support

Works in all modern browsers that support ES modules and Web Components:

- Chrome 67+
- Firefox 63+
- Safari 12.1+
- Edge 79+

## Bundle Size

| File | Raw | Gzipped |
|------|-----|---------|
| `inscada-openbridge.min.js` | 9.5 MB | ~1.2 MB |
| `openbridge.css` | 680 KB | ~85 KB |

The JS bundle is large because it includes **all** 180+ components and 1900+ icons. CDN providers (jsdelivr, unpkg) serve gzipped/brotli compressed versions automatically, so actual transfer size is ~1.2 MB.

## Patches

`patches/` holds a [patch-package](https://github.com/ds300/patch-package) patch, applied on `npm install`/`npm ci` (`postinstall`, fails the install if it no longer applies). Chart legends are written with `innerHTML`, so the patched `generateLegendHTML` HTML-escapes `label`, `value` and `unit` and only emits `fillStyle` when it is a valid CSS color. `npm test` (also run before `npm run build`) checks the patched helper.

## About

This bundle is maintained by **[inSCADA](https://inscada.com)** — an industrial IoT and SCADA platform. The underlying components are from the [OpenBridge Design System](https://www.openbridge.no/) by Ocean Industries Concept Lab (OICL), designed for maritime bridge systems in compliance with **IEC 62288**.

## License

MIT
