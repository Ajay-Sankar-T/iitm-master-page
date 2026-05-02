# IITM Central

A polished, responsive, and information-dense **unified portal interface for IIT Madras**, designed to bring major institute websites, academic resources, student services, departments, research ecosystems, clubs, and Zanzibar campus links into one clean experience.   

Built as a frontend product/design submission for an institute **WebOps** application, this project focuses on clarity, structure, usability, and visual polish rather than backend complexity.   

## Overview

IITM Central is an unofficial portal concept that reimagines how students, faculty, parents, alumni, recruiters, and visitors can access the IIT Madras web ecosystem from a single landing page.   

Instead of forcing users to remember multiple scattered institute URLs, the interface organizes official resources into meaningful sections and role-based entry points.   

The project combines:
- A premium editorial visual style.
- Role-based navigation for different user types.
- Categorized institute portals.
- Department and research discovery.
- Expandable student club listings.
- Quick search across key links.
- Responsive layouts for desktop and mobile.    

## Why this project

Large institutes often have excellent resources but fragmented discoverability. IITM Central addresses that problem by creating a single, elegant frontend experience that improves information access and reduces friction for first-time and returning users alike.   

This project was created to demonstrate:
- Product thinking.
- Frontend engineering ability.
- UI/UX sensitivity.
- Information architecture skills.
- Attention to detail suitable for a WebOps-style role.    

## Key Features

### 1. Unified portal directory
The site groups official IIT Madras links into structured categories such as academics, student services, research, administration, and Zanzibar. Each group is rendered as a collapsible accordion for compact but accessible browsing.    

### 2. Role-based quick access
Users can switch between roles such as:
- Student
- Faculty
- Parent
- Alumni
- Recruiter
- Visitor   

Each role dynamically shows the most relevant links for that audience, making the interface more task-oriented and practical.   

### 3. Search overlay
A global search modal lets users quickly find portals by matching names, descriptions, and tags. The search is lightweight, instant, and implemented fully on the frontend.   

### 4. Department explorer
All IITM departments are rendered as a clean grid with abbreviations and establishment year, helping users discover academic units at a glance.   

### 5. Research and innovation section
The project highlights major research and innovation entities such as Research Park, Pravartak TIH, IITM Incubation Cell, Deshpande Center, ICSR, and the Bio Incubator.    

### 6. Student clubs and teams accordion
Student bodies, cultural clubs, sports teams, and technical chapters are presented in an expandable structure with sub-groups where applicable.   

### 7. Zanzibar campus spotlight
A dedicated section highlights IITM Zanzibar and its admissions pathway, giving the overseas campus visible placement within the broader IITM ecosystem.   

### 8. Responsive and interaction-rich UI
The interface includes:
- Sticky header behavior on scroll.
- Reveal animations.
- Animated stat counters.
- Modal-based sign-in UI.
- Mobile navigation drawer.
- Smooth section scrolling.    

## Tech Stack

This project is intentionally lightweight and frontend-focused.   

- **HTML5** for semantic page structure.  
- **CSS3** for the complete visual system, layout, responsiveness, transitions, and design tokens.  
- **Vanilla JavaScript** for rendering dynamic sections, state handling, search, accordions, modal behavior, counters, and scroll interactions.  
- **Static data modules** for storing portals, departments, research entities, clubs, and role-based quick links.  

## Project Structure

```bash
.
├── index.html
├── style.css
├── data.js
└── main.js
```

### File responsibilities

- `index.html`  
  Contains the full page structure, sections, modal shells, navigation, and mounting points for JavaScript-rendered content.  

- `style.css`  
  Defines the complete design language, including typography, spacing, colors, cards, accordions, responsive layouts, animations, and component styling.  

- `data.js`  
  Stores structured content for portals, departments, research organizations, clubs, and role-specific quick links.  

- `main.js`  
  Handles UI rendering, event binding, search logic, accordions, counters, modal toggles, mobile nav, scroll behavior, and reveal effects.  

## Design Decisions

### Editorial visual language
The interface uses a premium academic aesthetic with serif-display headings, muted surfaces, clean borders, and an IITM-inspired burnt-orange accent palette.   

### Information architecture first
The project is less about decorative landing-page design and more about organizing a large institutional web ecosystem into understandable, discoverable sections.   

### Minimal dependencies
No frontend framework was used. This keeps the project lightweight, fast to load, and easy to understand, while also showcasing raw HTML/CSS/JavaScript ability.   

### Progressive interaction
Accordions, animated counters, reveal-on-scroll effects, search, and role-based switching add depth without making the interface feel heavy or overengineered.   

## How it works

### Dynamic rendering
Most repeatable content is stored in `data.js` and injected into the DOM through rendering functions in `main.js`. This avoids hardcoding repetitive cards directly in HTML and makes the project easier to scale.   

### Search
The search system builds a lightweight searchable index from portal data and filters results in real time based on portal names, descriptions, and tags.   

### Role switching
Changing the selected user role updates the quick-link cards shown in the hero section, making the landing page adapt to different audiences.   

### Accordions
Portal categories and clubs use expandable/collapsible UI patterns to present a large amount of information without overwhelming the user.   

## Highlights for WebOps application

This project was built to reflect the kind of thinking relevant to an institute web team.   

### What this demonstrates
- Strong frontend fundamentals without relying on frameworks.   
- Thoughtful UI/UX and hierarchy design.   
- Ability to structure large information systems clearly.   
- Clean separation of structure, styling, logic, and content.     
- Responsiveness and user-centric interaction design.   
- Institutional branding sensitivity and polished visual execution.   

### Why it fits a WebOps-style role
WebOps work is not only about coding pages, but also about improving discoverability, usability, maintainability, and digital presentation for a large audience. This project directly engages with those problems through a practical institute-focused interface.    

## Running the project

Because this is a static frontend project, it can be run very easily.   

### Option 1: Open directly
Open `index.html` in a browser.  

### Option 2: Use a local server
Using a local server is better for development.

```bash
# VS Code Live Server
Right click index.html -> Open with Live Server
```

Or:

```bash
# Python
python -m http.server
```

Then visit:

```bash
http://localhost:8000
```

## Possible improvements

If extended further, this project could include:
- Real authentication integration with institute systems.
- Portal bookmarking or favorites.
- Dark mode.
- Department-level subpages.
- Advanced search with filters.
- Accessibility upgrades such as richer keyboard navigation and ARIA patterns.
- Live API-backed notices or announcements.
- Personal dashboard views for different user types.    

## Disclaimer

This is an **unofficial frontend concept** for IIT Madras and is intended as a design/development showcase. External links point toward official institute resources, but the interface itself is a student-built aggregation experience.   

## Author note

Created as part of an application/demo for institute **WebOps**, with emphasis on frontend craftsmanship, structured information design, and a premium user experience.   

---
## Short pitch

**IITM Central** is a unified portal experience for IIT Madras that brings scattered institute websites into one elegant, role-aware, searchable interface. It showcases frontend engineering, product thinking, and UI/UX design through a clean static build using HTML, CSS, and vanilla JavaScript.    
