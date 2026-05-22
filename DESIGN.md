---
name: Ìrìnkèdú Editorial System
colors:
  surface: '#fef9f0'
  surface-dim: '#dedad1'
  surface-bright: '#fef9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#564238'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e7'
  outline: '#8a7266'
  outline-variant: '#ddc1b2'
  surface-tint: '#9a4600'
  primary: '#974400'
  on-primary: '#ffffff'
  primary-container: '#bd5702'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb68d'
  secondary: '#7b5641'
  on-secondary: '#ffffff'
  secondary-container: '#fecdb3'
  on-secondary-container: '#795540'
  tertiary: '#815200'
  on-tertiary: '#ffffff'
  tertiary-container: '#a26800'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68d'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#763300'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ecbca3'
  on-secondary-fixed: '#2e1505'
  on-secondary-fixed-variant: '#603f2c'
  tertiary-fixed: '#ffddb6'
  tertiary-fixed-dim: '#ffb95a'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#fef9f0'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
  terracotta: '#D96C1E'
  mahogany: '#4A2C1A'
  eggshell: '#FEF9F0'
  marigold: '#FFB347'
  ink: '#1A1A1A'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 120px
    fontWeight: '800'
    lineHeight: 100px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Syne
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 8px
  margin-edge: 5vw
  gutter: 24px
  section-gap: 160px
---

## Brand & Style

The design system is a high-octane blend of contemporary West African luxury and avant-garde editorial design. It captures the relentless energy of Lagos—sophisticated, soulful, and unapologetically bold. The brand personality is "Restless Elegance," catering to a global elite who seek cultural immersion without sacrificing five-star refinement.

The aesthetic leans heavily into **Experimental Modernism**. It rejects the safe, centered layouts of traditional hospitality in favor of high-fashion editorial structures. Key characteristics include:
- **Asymmetrical Compositions:** Intentional imbalance and unconventional placement of imagery and text to create a sense of motion.
- **Color Blocking:** Large, monolithic slabs of Terracotta and Mahogany used to define spatial hierarchy.
- **Immersive Narrative:** Utilizing Yoruba greetings and cultural touchpoints to ground the digital experience in a specific sense of place.
- **Cinematic Pacing:** The use of extreme negative space to allow hero elements to breathe, mimicking the curated halls of a private gallery.

## Colors

The palette is rooted in the earth and the architecture of the region, elevated through luxury finishes. 

- **Primary (Terracotta):** Used for primary calls to action and significant structural blocks. It represents the clay and soil of the land.
- **Secondary (Mahogany):** Provides depth and grounding. Used for headers, immersive footers, and rich typographic moments.
- **Background (Eggshell):** A warm, premium alternative to stark white, creating a "paper-like" editorial feel.
- **Accent (Marigold):** Employed sparingly for micro-interactions, highlights, and specialized "Ritual" indicators.

**Application Strategy:** Use "Color Blocking" where entire sections transition from Eggshell to Mahogany, creating a rhythmic "pulse" as the user scrolls. Avoid gradients in favor of flat, high-contrast intersections.

## Typography

The typography strategy is a study in contrast: the expressive, brutalist weight of **Syne** against the clinical, geometric precision of **Hanken Grotesk** (serving as a refined alternative to Satoshi).

- **Headlines:** Must be set with tight tracking. Syne Extra Bold is the voice of the hotel—loud, confident, and artistic.
- **Body:** Hanken Grotesk provides a modern, high-fashion legibility that balances the experimental headlines.
- **Utility/Labels:** JetBrains Mono is introduced for metadata (room numbers, coordinates, temperatures), injecting a "technical-luxe" feel that suggests precision service.
- **Cultural Markers:** Yoruba terms like *Ẹ káàbọ* should be treated as display elements, often overlapping images or bleeding off the edge of the viewport.

## Layout & Spacing

The layout utilizes a **12-column broken grid**. Elements should rarely align to the same vertical start point, creating a staggered, "cascading" effect as the user moves through the page.

- **Asymmetry:** Key images should occupy 7 columns, while the accompanying text occupies 4 columns, offset by a 1-column "void."
- **Negative Space:** Use massive vertical gaps (`section-gap`) to separate "The Experience" from "The Rooms," forcing a moment of visual silence.
- **Mobile Reflow:** On mobile, the asymmetry collapses into a single-column stack, but maintains the "editorial bleed"—where images go edge-to-edge while text remains inset with generous 5vw margins.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layering** and **Material Translucency**.

- **Glassmorphism:** Navigation menus and overlay modals use a "Frosted Eggshell" effect (high blur, low opacity) to maintain a sense of the vibrant Lagos life continuing behind the UI.
- **Claymorphism:** Subtle, inner-glow "soft-extrusion" is reserved exclusively for interactive "Ritual" circles. These elements should look tactile, like polished terracotta beads.
- **Depth via Overlap:** Depth is created by z-index stacking. Text should frequently overlap images, and "floating" secondary images should sit atop primary content blocks with zero shadow, relying on color contrast for separation.

## Shapes

The primary structural language is **Sharp and Architectural**, utilizing 0px radius for all structural containers, buttons, and image masks to evoke the hard edges of modern Lagos architecture.

However, a secondary language of **Organic Rituals** introduces perfect circles. These are used for:
- Floating "Book Now" triggers.
- Cultural "Ritual" highlights (e.g., *Ìyáwó* spa treatments).
- Custom cursor interactions that expand and contract based on hover states.

## Components

- **Buttons:** Sharp-edged boxes with a Mahogany background and Eggshell text. Hover state triggers a "fill-up" animation from bottom to top in Terracotta.
- **Custom Cursor:** A Marigold-tinted circle that follows the mouse. Upon hovering over images, it should expand and display "VIEW DETAILS" in JetBrains Mono.
- **Input Fields:** Minimalist single lines in Mahogany. The label should be in `label-caps` and sit above the line.
- **Ritual Chips:** Circular, claymorphic elements used to categorize amenities. They pulse slightly to indicate interactivity.
- **Cards:** Asymmetrical image containers. The image should be slightly taller than the card boundary, "breaking" the container to the top or bottom.
- **Lists:** Large-scale list items for room types. Hovering over a list item (e.g., "The Arábìnrin Suite") should trigger a full-screen background image change (the "Immersive Reveal").