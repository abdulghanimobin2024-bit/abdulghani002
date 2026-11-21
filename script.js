// Abdul Ghani portfolio — navigation, scroll effects, typing, contact form.
(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Mobile menu ----
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Scrollspy: highlight the nav link for the section in view ----
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav-link[href^='#']"));
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  // ---- Reveal-on-scroll animations (also triggers skill bars) ----
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ---- Typing effect for hero roles ----
  var roles = [
    "Aspiring Software Developer",
    "Web Developer in training",
    "Python & SQL Backend Builder",
    "React.js Learner"
  ];
  var typingEl = document.getElementById("typing");
  if (typingEl && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var ri = 0, ci = 0, deleting = false;
    (function tick() {
      var word = roles[ri];
      typingEl.textContent = word.slice(0, ci);
      var delay = deleting ? 35 : 70;
      if (!deleting && ci === word.length) { delay = 1600; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; delay = 350; }
      else { ci += deleting ? -1 : 1; }
      setTimeout(tick, delay);
    })();
  } else if (typingEl) {
    typingEl.textContent = roles[0];
  }

  // ---- Contact form: AJAX submit, fall back to native POST ----
  var form = document.querySelector('form[name="contact"]');
  if (form) {
    var note = document.getElementById("formNote");
    var btn = document.getElementById("sendBtn");
    form.addEventListener("submit", function (ev) {
      if (!window.fetch || !window.FormData) return; // let the browser POST natively
      ev.preventDefault();
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      var body = new URLSearchParams(new FormData(form)).toString();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body
      }).then(function (res) {
        if (res.ok) { window.location.href = "/thank-you"; }
        else { throw new Error("bad response"); }
      }).catch(function () {
        form.submit(); // fall back to native POST on any error
      });
    });
    if (note && new URLSearchParams(window.location.search).get("sent") === "1") {
      note.textContent = "Message sent — I'll get back to you soon!";
    }
  }
})();
