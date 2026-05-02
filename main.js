// ============================================================
//  IITM CENTRAL — MAIN.JS  (Redesigned)
//  Portals: collapsible accordion by category
//  Clubs: expandable accordion with sub-clubs
// ============================================================

(function () {
  "use strict";

  // ── STATE ─────────────────────────────────────────────────
  let currentRole = "student";

  // ── DOM HELPERS ──────────────────────────────────────────
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ── INIT ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    renderRoleCards(currentRole);
    renderPortalsAccordion();
    renderDepartments();
    renderResearch();
    renderClubsAccordion();
    bindEvents();
    initScrollHeader();
    initCounters();
    initScrollReveal();
  });

  // ── RENDER: ROLE CARDS ───────────────────────────────────
  function renderRoleCards(role) {
    const container = $("#roleCards");
    const links = ROLE_LINKS[role] || ROLE_LINKS.student;
    container.innerHTML = links.map((link) => `
      <a href="${link.url}" target="_blank" rel="noopener" class="role-card" data-reveal>
        <div>
          <span class="rc-name">${link.label}</span>
          <span class="rc-desc">${link.desc}</span>
        </div>
        <svg class="rc-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>`
    ).join("");
  }

  // ── RENDER: PORTALS ACCORDION ────────────────────────────
  function renderPortalsAccordion() {
    const container = $("#portalsAccordion");

    // Build a map for quick lookup
    const portalMap = {};
    PORTALS.forEach((p) => { portalMap[p.id] = p; });

    const newPortalIds = ["ikollege", "workflow"]; // highlight these

    container.innerHTML = PORTAL_SECTIONS.map((section, si) => {
      const portals = section.ids.map((id) => portalMap[id]).filter(Boolean);
      const isNewInSection = portals.some((p) => newPortalIds.includes(p.id));

      const cardsHtml = portals.map((p) => `
        <a href="${p.url}" target="_blank" rel="noopener"
           class="portal-card"
           ${newPortalIds.includes(p.id) ? "data-new" : ""}
           data-reveal>
          <div class="pc-body">
            <div class="pc-top">
              <span class="pc-name">${p.name}</span>
              <span class="pc-tag">${p.tag}</span>
            </div>
            <p class="pc-desc">${p.desc}</p>
          </div>
          <svg class="pc-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>`
      ).join("");

      return `
        <div class="pa-section${si === 0 ? " open" : ""}" data-section="${section.id}">
          <div class="pa-header">
            <div class="pa-header-left">
              <span class="pa-title">${section.label}</span>
              <span class="pa-count">${portals.length}</span>
              ${isNewInSection ? '<span class="pa-count" style="color:var(--accent);border-color:var(--accent-pale2);background:var(--accent-pale)">New items</span>' : ""}
            </div>
            <svg class="pa-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
          <div class="pa-body">${cardsHtml}</div>
        </div>`;
    }).join("");

    // Accordion toggle
    container.addEventListener("click", (e) => {
      const header = e.target.closest(".pa-header");
      if (!header) return;
      const section = header.closest(".pa-section");
      const isOpen = section.classList.contains("open");
      // Close all
      $$(".pa-section.open").forEach((s) => s.classList.remove("open"));
      // Open clicked (toggle)
      if (!isOpen) {
        section.classList.add("open");
        initScrollReveal();
      }
    });
  }

  // ── RENDER: DEPARTMENTS ──────────────────────────────────
  function renderDepartments() {
    const container = $("#deptGrid");
    container.innerHTML = DEPARTMENTS.map((d) => `
      <a href="${d.url}" target="_blank" rel="noopener" class="dept-card" data-reveal>
        <div class="dept-abbr">${d.abbr}</div>
        <div class="dept-info">
          <span class="dept-name">${d.name}</span>
          <span class="dept-year">Est. ${d.year}</span>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>`
    ).join("");
  }

  // ── RENDER: RESEARCH ─────────────────────────────────────
  function renderResearch() {
    const container = $("#researchGrid");
    container.innerHTML = RESEARCH.map((r) => `
      <a href="${r.url}" target="_blank" rel="noopener" class="rcard" data-reveal>
        <span class="rcard-highlight">${r.highlight}</span>
        <h3 class="rcard-name">${r.name}</h3>
        <p class="rcard-desc">${r.desc}</p>
        <span class="rcard-link">Visit →</span>
      </a>`
    ).join("");
  }

  // ── RENDER: CLUBS ACCORDION ──────────────────────────────
  function renderClubsAccordion() {
    const container = $("#clubsAccordion");

    container.innerHTML = CLUBS.map((category) => {
      const clubsHtml = category.clubs.map((club) => {
        const subHtml = (club.sub || []).map((s) => `
          <a href="${s.url}" target="_blank" rel="noopener" class="ca-sub-link">${s.name}</a>
        `).join("");

        return `
          <div class="ca-club" data-club="${slugify(club.name)}">
            <div class="ca-club-header">
              <div class="ca-club-info">
                <span class="ca-club-name">${club.name}</span>
                <span class="ca-club-desc">${club.desc}</span>
              </div>
              ${club.sub && club.sub.length ? `<span class="ca-club-sub-count">${club.sub.length} sub-groups</span>` : ""}
              <a href="${club.url}" target="_blank" rel="noopener" class="ca-club-link" onclick="event.stopPropagation()">Website</a>
              ${club.sub && club.sub.length ? `
              <svg class="ca-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m6 9 6 6 6-6"/>
              </svg>` : ""}
            </div>
            ${club.sub && club.sub.length ? `
            <div class="ca-sub-panel">
              ${subHtml}
            </div>` : ""}
          </div>`;
      }).join("");

      return `
        <div class="ca-category">
          <div class="ca-cat-header">
            <span class="ca-cat-title">${category.category}</span>
            <span class="ca-cat-count">${category.clubs.length} groups</span>
          </div>
          ${clubsHtml}
        </div>`;
    }).join("");

    // Club accordion toggle
    container.addEventListener("click", (e) => {
      const header = e.target.closest(".ca-club-header");
      if (!header) return;
      // Don't toggle if clicking the website link
      if (e.target.closest(".ca-club-link")) return;
      const club = header.closest(".ca-club");
      if (!club.querySelector(".ca-sub-panel")) return;
      club.classList.toggle("open");
    });
  }

  function slugify(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  }

  // ── SEARCH ───────────────────────────────────────────────
  function buildIndex() {
    return PORTALS.map((p) => ({ name: p.name, desc: p.desc, url: p.url, tag: p.tag }));
  }

  function doSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return buildIndex().filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
    ).slice(0, 8);
  }

  function renderSearchResults(results, query) {
    const container = $("#searchResults");
    if (!query) { container.innerHTML = ""; return; }
    if (!results.length) {
      container.innerHTML = `<div class="sr-empty">No results for "<strong>${escHtml(query)}</strong>"</div>`;
      return;
    }
    container.innerHTML = results.map((r) => `
      <a href="${r.url}" target="_blank" rel="noopener" class="sr-item">
        <div class="sr-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
          </svg>
        </div>
        <div class="sr-body">
          <span class="sr-name">${highlight(r.name, query)}</span>
          <span class="sr-desc">${r.desc}</span>
        </div>
        <span class="sr-tag">${r.tag}</span>
      </a>`
    ).join("");
  }

  function highlight(text, q) {
    return text.replace(new RegExp(`(${escRx(q)})`, "gi"), "<mark>$1</mark>");
  }
  function escHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function escRx(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

  // ── EVENTS ───────────────────────────────────────────────
  function bindEvents() {
    // Role pills
    $$(".role-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        $$(".role-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        currentRole = pill.dataset.role;
        renderRoleCards(currentRole);
        initScrollReveal();
      });
    });

    // Search
    $("#searchToggle").addEventListener("click", openSearch);
    $("#searchClose").addEventListener("click", closeSearch);
    $("#searchOverlay").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeSearch();
    });

    let searchTimer;
    $("#globalSearch").addEventListener("input", (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        renderSearchResults(doSearch(e.target.value), e.target.value);
      }, 150);
    });

    // Keyboard
    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); openSearch(); }
      if (e.key === "Escape") { closeSearch(); closeModal(); closeMobileNav(); }
    });

    // Login modal
    $("#loginBtn").addEventListener("click", openModal);
    $("#modalClose").addEventListener("click", closeModal);
    $("#loginModal").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal();
    });

    // Modal tabs
    $$(".mtab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".mtab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const t = tab.dataset.tab;
        $("#campusTab").classList.toggle("hidden", t !== "campus");
        $("#bsTab").classList.toggle("hidden", t !== "bs");
      });
    });

    // Mobile nav
    $("#hamburger").addEventListener("click", toggleMobileNav);
    $("#mobileOverlay").addEventListener("click", closeMobileNav);

    // Smooth scroll
    $$('.top-nav a, .mobile-nav a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            closeMobileNav();
          }
        }
      });
    });
  }

  function openSearch() {
    $("#searchOverlay").classList.add("active");
    setTimeout(() => $("#globalSearch").focus(), 80);
  }
  function closeSearch() {
    $("#searchOverlay").classList.remove("active");
    $("#globalSearch").value = "";
    $("#searchResults").innerHTML = "";
  }
  function openModal() {
    $("#loginModal").classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#loginModal").classList.remove("active");
    document.body.style.overflow = "";
  }
  function toggleMobileNav() {
    $("#mobileNav").classList.toggle("open");
    $("#mobileOverlay").classList.toggle("active");
  }
  function closeMobileNav() {
    $("#mobileNav").classList.remove("open");
    $("#mobileOverlay").classList.remove("active");
  }

  // ── SCROLL HEADER ─────────────────────────────────────────
  function initScrollHeader() {
    window.addEventListener("scroll", () => {
      $("#siteHeader").classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });
  }

  // ── SCROLL REVEAL ─────────────────────────────────────────
  function initScrollReveal() {
    const items = $$("[data-reveal]:not(.revealed)");
    if (!items.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${(i % 8) * 55}ms`;
          entry.target.classList.add("revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });
    items.forEach((el) => io.observe(el));
  }

  // ── COUNTERS ──────────────────────────────────────────────
  function initCounters() {
    const nums = $$(".stat-num");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    nums.forEach((el) => io.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }
})();
