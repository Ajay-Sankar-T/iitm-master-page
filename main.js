// ============================================================
//  IITM CENTRAL — MAIN.JS
//  Handles: rendering, role switcher, search, scroll, modals
// ============================================================

(function () {
  "use strict";

  // ── STATE ────────────────────────────────────────────────
  let currentRole = "student";
  let currentFilter = "all";

  // ── DOM REFS ─────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ── INIT ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", () => {
    renderRoleCards(currentRole);
    renderPortals(currentFilter);
    renderDepartments();
    renderResearch();
    renderCampus();
    bindEvents();
    initScrollBehavior();
    initCounters();
    initScrollReveal();
  });

  // ── RENDER: ROLE CARDS ───────────────────────────────────
  function renderRoleCards(role) {
    const container = $("#roleCards");
    const links = ROLE_LINKS[role] || ROLE_LINKS.student;
    container.innerHTML = links
      .map(
        (link) => `
      <a href="${link.url}" target="_blank" rel="noopener" class="role-card" data-reveal>
        <span class="rc-icon">${link.icon}</span>
        <div class="rc-body">
          <span class="rc-label">${link.label}</span>
          <span class="rc-desc">${link.desc}</span>
        </div>
        <svg class="rc-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>`
      )
      .join("");
  }

  // ── RENDER: PORTALS GRID ──────────────────────────────────
  function renderPortals(filter) {
    const container = $("#portalsGrid");
    const filtered =
      filter === "all"
        ? PORTALS
        : PORTALS.filter((p) => p.cat === filter);

    container.innerHTML = filtered
      .map(
        (p) => `
      <a href="${p.url}" target="_blank" rel="noopener" class="portal-card" data-cat="${p.cat}" data-reveal>
        <div class="pc-top">
          <span class="pc-icon">${p.icon}</span>
          <span class="pc-tag">${p.tag}</span>
        </div>
        <h3 class="pc-name">${p.name}</h3>
        <p class="pc-desc">${p.desc}</p>
        <div class="pc-url">${p.url.replace("https://", "")}</div>
      </a>`
      )
      .join("");
  }

  // ── RENDER: DEPARTMENTS ──────────────────────────────────
  function renderDepartments() {
    const container = $("#deptGrid");
    container.innerHTML = DEPARTMENTS.map(
      (d) => `
      <a href="${d.url}" target="_blank" rel="noopener" class="dept-card" data-reveal>
        <div class="dept-abbr">${d.abbr}</div>
        <div class="dept-info">
          <span class="dept-name">${d.name}</span>
          <span class="dept-year">Est. ${d.year}</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>`
    ).join("");
  }

  // ── RENDER: RESEARCH ─────────────────────────────────────
  function renderResearch() {
    const container = $("#researchGrid");
    container.innerHTML = RESEARCH.map(
      (r) => `
      <a href="${r.url}" target="_blank" rel="noopener" class="research-card" data-reveal>
        <div class="rcard-top">
          <span class="rcard-icon">${r.icon}</span>
          <span class="rcard-highlight">${r.highlight}</span>
        </div>
        <h3 class="rcard-name">${r.name}</h3>
        <p class="rcard-desc">${r.desc}</p>
      </a>`
    ).join("");
  }

  // ── RENDER: CAMPUS ───────────────────────────────────────
  function renderCampus() {
    const container = $("#campusGrid");
    container.innerHTML = CAMPUS.map(
      (c) => `
      <a href="${c.url}" target="_blank" rel="noopener" class="campus-card" style="--card-accent:${c.color}" data-reveal>
        <span class="cc-icon">${c.icon}</span>
        <h3 class="cc-name">${c.name}</h3>
        <p class="cc-desc">${c.desc}</p>
      </a>`
    ).join("");
  }

  // ── SEARCH ───────────────────────────────────────────────
  function buildSearchIndex() {
    return PORTALS.map((p) => ({
      name: p.name,
      desc: p.desc,
      url: p.url,
      icon: p.icon,
      tag: p.tag,
    }));
  }

  function doSearch(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    const index = buildSearchIndex();
    return index
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }

  function renderSearchResults(results, query) {
    const container = $("#searchResults");
    if (!query) {
      container.innerHTML = "";
      return;
    }
    if (!results.length) {
      container.innerHTML = `<div class="sr-empty">No results for "<strong>${escapeHtml(query)}</strong>"</div>`;
      return;
    }
    container.innerHTML = results
      .map(
        (r) => `
      <a href="${r.url}" target="_blank" rel="noopener" class="sr-item">
        <span class="sr-icon">${r.icon}</span>
        <div class="sr-body">
          <span class="sr-name">${highlight(r.name, query)}</span>
          <span class="sr-desc">${r.desc}</span>
        </div>
        <span class="sr-tag">${r.tag}</span>
      </a>`
      )
      .join("");
  }

  function highlight(text, query) {
    const re = new RegExp(`(${escapeRegex(query)})`, "gi");
    return text.replace(re, '<mark>$1</mark>');
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

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

    // Filter tabs
    $$(".filter-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".filter-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        currentFilter = tab.dataset.filter;
        const grid = $("#portalsGrid");
        grid.classList.add("grid-exit");
        setTimeout(() => {
          renderPortals(currentFilter);
          grid.classList.remove("grid-exit");
          initScrollReveal();
        }, 200);
      });
    });

    // Search toggle
    $("#searchToggle").addEventListener("click", openSearch);
    $("#searchClose").addEventListener("click", closeSearch);
    $("#searchOverlay").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeSearch();
    });

    // Search input
    let searchTimer;
    $("#globalSearch").addEventListener("input", (e) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        const results = doSearch(e.target.value);
        renderSearchResults(results, e.target.value);
      }, 150);
    });

    // Keyboard search shortcut
    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") {
        closeSearch();
        closeModal();
        closeMobileNav();
      }
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

    // Smooth scroll nav links
    $$('.top-nav a, .mobile-nav a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (href.startsWith("#")) {
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
    setTimeout(() => $("#globalSearch").focus(), 100);
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
    document.body.classList.toggle("nav-open");
  }
  function closeMobileNav() {
    $("#mobileNav").classList.remove("open");
    $("#mobileOverlay").classList.remove("active");
    document.body.classList.remove("nav-open");
  }

  // ── SCROLL HEADER ────────────────────────────────────────
  function initScrollBehavior() {
    let lastY = 0;
    window.addEventListener(
      "scroll",
      () => {
        const y = window.scrollY;
        const header = $("#siteHeader");
        if (y > 80) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
        lastY = y;
      },
      { passive: true }
    );
  }

  // ── SCROLL REVEAL ────────────────────────────────────────
  function initScrollReveal() {
    const items = $$("[data-reveal]");
    if (!items.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${(i % 8) * 60}ms`;
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  // ── COUNTERS ─────────────────────────────────────────────
  function initCounters() {
    const nums = $$(".stat-num");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    nums.forEach((el) => io.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }
})();
