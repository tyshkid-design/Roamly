/**
 * MEMEYAI NEWS — Main JavaScript
 * Handles: live ticker, AI search, weather, markets, dark mode, etc.
 */

// ============================================================
// CONFIG
// ============================================================
const CONFIG = {
  siteName: "Memeyai News",
  siteUrl: "https://business.memeyai.com",
  apiKey: "", // Set your Anthropic API key here or use a backend proxy
  weatherApiKey: "", // Optional: OpenWeatherMap key
  refreshInterval: 300000, // 5 minutes
};

// ============================================================
// UTILITIES
// ============================================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const sleep = ms => new Promise(r => setTimeout(r, ms));

function timeAgo(dateStr) {
  const date = new Date(dateStr);
  const diff = (Date.now() - date) / 1000;
  if (diff < 60) return `${Math.floor(diff)}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return date.toLocaleDateString("en-KE", { month: "short", day: "numeric" });
}

function readTime(text) {
  const words = text.split(" ").length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================
// BREAKING NEWS TICKER
// ============================================================
const BREAKING_NEWS = [
  "Nairobi Stock Exchange gains 2.3% as foreign investors return — KSh 4.2B traded",
  "East Africa Community launches new cross-border payment system",
  "Kenya's GDP growth forecast revised upward to 5.8% — World Bank",
  "President announces new infrastructure bill targeting rural broadband connectivity",
  "Tanzania confirms new oil discoveries in Lake Tanganyika region",
  "Rwanda ranked top African country for ease of doing business 2025",
  "Uganda elections commission sets date for local government polls",
  "Kenya Tech Week draws 12,000 attendees — startup investments top $340M",
  "IMF approves $1.2B credit facility for East Africa recovery program",
  "New direct flight routes connect Nairobi to three Asian capitals",
];

function initTicker() {
  const content = $(".ticker-content");
  if (!content) return;
  // Duplicate for seamless loop
  const items = BREAKING_NEWS.map(n => `<a href="#">${n}</a>`).join(" &bull; ");
  content.innerHTML = items + " &bull; " + items;
}

// ============================================================
// LIVE UPDATES FEED
// ============================================================
const LIVE_UPDATES = [
  { time: "NOW", text: "Parliament resumes session — budget debate continues" },
  { time: "12m", text: "NSE: Safaricom shares up 1.4% at market open" },
  { time: "28m", text: "Kenyan shilling strengthens to 128.5 against USD" },
  { time: "45m", text: "Heavy rains forecast for Nairobi, Kisumu this afternoon" },
  { time: "1h", text: "Cabinet meeting underway at State House" },
  { time: "1h 20m", text: "KRA announces new tax filing deadline extension" },
  { time: "2h", text: "Uganda oil pipeline: construction reaches 40% completion" },
  { time: "2h 35m", text: "New bus rapid transit system launches pilot in Nairobi CBD" },
];

function initLiveFeed() {
  const feed = $(".live-feed");
  if (!feed) return;
  feed.innerHTML = LIVE_UPDATES.map(u => `
    <div class="live-item">
      <div class="live-time">${u.time}</div>
      <div class="live-text">${escapeHtml(u.text)}</div>
    </div>
  `).join("");
}

function addLiveUpdate(text) {
  const feed = $(".live-feed");
  if (!feed) return;
  const item = document.createElement("div");
  item.className = "live-item";
  item.innerHTML = `
    <div class="live-time">JUST NOW</div>
    <div class="live-text">${escapeHtml(text)}</div>
  `;
  item.style.opacity = "0";
  item.style.transform = "translateY(-8px)";
  feed.prepend(item);
  requestAnimationFrame(() => {
    item.style.transition = "all 0.4s ease";
    item.style.opacity = "1";
    item.style.transform = "translateY(0)";
  });
  // Remove old items if too many
  const items = $$(".live-item", feed);
  if (items.length > 12) items[items.length - 1].remove();
}

// ============================================================
// MARKET DATA (simulated — replace with real API)
// ============================================================
const MARKET_DATA = [
  { name: "NSE 20", price: "1,842.50", change: "+12.30 (+0.67%)", dir: "up" },
  { name: "SAFCOM", price: "17.45", change: "+0.25 (+1.45%)", dir: "up" },
  { name: "KQ", price: "6.80", change: "-0.10 (-1.45%)", dir: "down" },
  { name: "EQTY", price: "52.00", change: "+1.25 (+2.46%)", dir: "up" },
  { name: "KCB", price: "38.50", change: "+0.50 (+1.32%)", dir: "up" },
  { name: "COOP", price: "14.30", change: "-0.20 (-1.38%)", dir: "down" },
  { name: "USD/KES", price: "128.50", change: "-0.30 (-0.23%)", dir: "down" },
  { name: "EUR/KES", price: "139.20", change: "+0.45 (+0.32%)", dir: "up" },
  { name: "CRUDE OIL", price: "$82.40", change: "+$0.85 (+1.04%)", dir: "up" },
  { name: "GOLD", price: "$2,330.50", change: "+$12.20 (+0.53%)", dir: "up" },
  { name: "BTC/USD", price: "$68,420", change: "+$1,230 (+1.83%)", dir: "up" },
];

function initMarketTicker() {
  const scroll = $(".market-scroll");
  if (!scroll) return;
  const items = [...MARKET_DATA, ...MARKET_DATA].map(m => `
    <div class="market-item">
      <span class="market-name">${m.name}</span>
      <span class="market-price">${m.price}</span>
      <span class="market-change ${m.dir}">${m.dir === "up" ? "▲" : "▼"} ${m.change}</span>
    </div>
  `).join("");
  scroll.innerHTML = items;
}

function simulateMarketUpdates() {
  setInterval(() => {
    const items = $$(".market-item");
    items.forEach(item => {
      const changeEl = item.querySelector(".market-change");
      if (!changeEl) return;
      // Randomly tweak one item
      if (Math.random() > 0.85) {
        item.style.transition = "background 0.3s";
        item.style.background = changeEl.classList.contains("up") ? "rgba(22,163,74,0.1)" : "rgba(200,16,46,0.1)";
        setTimeout(() => { item.style.background = ""; }, 800);
      }
    });
  }, 4000);
}

// ============================================================
// WEATHER WIDGET
// ============================================================
const WEATHER_DATA = [
  { city: "Nairobi", temp: "24°C", condition: "Partly Cloudy", icon: "⛅" },
  { city: "Mombasa", temp: "31°C", condition: "Sunny", icon: "☀️" },
  { city: "Kisumu", temp: "28°C", condition: "Thunderstorms", icon: "⛈️" },
  { city: "Kampala", temp: "26°C", condition: "Light Rain", icon: "🌦️" },
  { city: "Dar es Salaam", temp: "30°C", condition: "Humid", icon: "🌤️" },
];

function initWeather() {
  const container = $(".weather-cities");
  if (!container) return;
  container.innerHTML = WEATHER_DATA.map(w => `
    <div class="weather-city">
      <div class="icon">${w.icon}</div>
      <div class="info">
        <div class="city">${w.city}</div>
        <div class="temp">${w.temp}</div>
        <div class="condition">${w.condition}</div>
      </div>
    </div>
  `).join("");
}

// ============================================================
// AI-POWERED SEARCH (calls Claude API via proxy)
// ============================================================
async function searchWithAI(query) {
  const resultBox = $(".ai-result-box");
  if (!resultBox) return;

  resultBox.classList.add("visible");
  resultBox.innerHTML = `
    <h4>🔍 Searching: "${escapeHtml(query)}"</h4>
    <div class="ai-typing"><span></span><span></span><span></span></div>
  `;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CONFIG.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 600,
        system: `You are a knowledgeable East Africa news assistant for Memeyai News (business.memeyai.com). 
                 Answer news questions concisely, focusing on East Africa (Kenya, Uganda, Tanzania, Rwanda, Ethiopia). 
                 Format your response in 2-3 short paragraphs. Be factual and balanced.
                 Start with the most recent and relevant information.`,
        messages: [{ role: "user", content: `What is the latest news about: ${query}? Focus on East Africa perspective.` }],
        tools: [{ type: "web_search_20250305", name: "web_search" }],
      }),
    });

    if (!response.ok) throw new Error("API error");
    const data = await response.json();

    const text = data.content
      .filter(b => b.type === "text")
      .map(b => b.text)
      .join("\n");

    resultBox.innerHTML = `
      <h4>📰 AI News Brief — ${escapeHtml(query)}</h4>
      <p>${escapeHtml(text).replace(/\n\n/g, "</p><p>")}</p>
      <div style="margin-top:12px; font-size:0.72rem; color:rgba(255,255,255,0.4); font-style:italic;">
        Powered by Memeyai AI · ${new Date().toLocaleTimeString("en-KE")}
      </div>
    `;
  } catch (err) {
    // Fallback demo response
    resultBox.innerHTML = `
      <h4>📰 AI News Brief — ${escapeHtml(query)}</h4>
      <p>Recent developments regarding <strong>${escapeHtml(query)}</strong> in East Africa show continued momentum. 
      Analysts note key economic and political factors shaping the story across the region.</p>
      <p>For full AI-powered live search, configure your Anthropic API key in <code>js/main.js</code> under CONFIG.apiKey, 
      or connect a backend proxy to protect your key.</p>
      <div style="margin-top:12px; font-size:0.72rem; color:rgba(255,255,255,0.4); font-style:italic;">
        Demo mode — configure API key for live results · ${new Date().toLocaleTimeString("en-KE")}
      </div>
    `;
  }
}

function initAISearch() {
  const form = $(".ai-search-bar");
  const input = form ? $("input", form) : null;
  const btn = form ? $("button", form) : null;
  if (!form || !input || !btn) return;

  const doSearch = () => {
    const query = input.value.trim();
    if (query.length < 3) return;
    searchWithAI(query);
  };

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", e => { if (e.key === "Enter") doSearch(); });

  // Chip suggestions
  $$(".ai-suggestion-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      input.value = chip.textContent.trim();
      doSearch();
    });
  });
}

// ============================================================
// NOTIFICATIONS
// ============================================================
const NOTIFICATIONS = [
  "BREAKING: Kenya central bank raises interest rates by 50bps",
  "LIVE: Parliament budget committee session underway",
  "ALERT: NSE trading halted briefly due to technical issues — now restored",
  "UPDATE: East Africa Power Summit begins today in Kampala",
];
let notifIndex = 0;

function showNotification(text) {
  const bar = $("#notification-bar");
  if (!bar) return;
  $(".notif-text", bar).textContent = text;
  bar.classList.add("show");
  setTimeout(() => bar.classList.remove("show"), 8000);
}

function initNotifications() {
  const bar = $("#notification-bar");
  if (!bar) return;
  $(".close-notif", bar).addEventListener("click", () => bar.classList.remove("show"));

  // Show first after 3s, then cycle every 20s
  setTimeout(() => {
    showNotification(NOTIFICATIONS[notifIndex % NOTIFICATIONS.length]);
    notifIndex++;
    setInterval(() => {
      showNotification(NOTIFICATIONS[notifIndex % NOTIFICATIONS.length]);
      notifIndex++;
    }, 20000);
  }, 3000);
}

// ============================================================
// MOBILE NAV
// ============================================================
function initMobileNav() {
  const hamburger = $(".hamburger");
  const navLinks = $(".nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const spans = $$("span", hamburger);
    if (navLinks.classList.contains("open")) {
      spans[0].style.transform = "rotate(45deg) translateY(7px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translateY(-7px)";
    } else {
      spans.forEach(s => { s.style.transform = ""; s.style.opacity = ""; });
    }
  });
}

// ============================================================
// DARK MODE TOGGLE
// ============================================================
function initDarkMode() {
  const toggle = $("#dark-mode-toggle");
  if (!toggle) return;

  const saved = localStorage.getItem("darkMode") === "true";
  if (saved) {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark);
  });
}

// ============================================================
// NEWSLETTER FORM
// ============================================================
function initNewsletter() {
  const forms = $$(".newsletter-form");
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = $("input[type='email']", form);
      if (!input || !input.value) return;
      const btn = $("button", form);
      btn.textContent = "✓ Subscribed!";
      btn.style.background = "#16a34a";
      input.value = "";
      setTimeout(() => {
        btn.textContent = "Subscribe";
        btn.style.background = "";
      }, 3000);
    });
  });
}

// ============================================================
// ARTICLE READING PROGRESS BAR
// ============================================================
function initReadingProgress() {
  const bar = $("#reading-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, pct)}%`;
  }, { passive: true });
}

// ============================================================
// INFINITE SCROLL / LOAD MORE
// ============================================================
function initLoadMore() {
  const btn = $("#load-more-btn");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    btn.textContent = "Loading...";
    btn.disabled = true;
    await sleep(1200);
    btn.textContent = "Load More Stories";
    btn.disabled = false;
    // In production, fetch and append new articles here
  });
}

// ============================================================
// STICKY HEADER BEHAVIOR
// ============================================================
function initStickyNav() {
  const nav = $(".primary-nav");
  if (!nav) return;
  let lastY = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > lastY && y > 80) {
      nav.style.transform = "translateY(-100%)";
      nav.style.transition = "transform 0.3s ease";
    } else {
      nav.style.transform = "translateY(0)";
    }
    lastY = y;
  }, { passive: true });
}

// ============================================================
// LIVE TIME DISPLAY
// ============================================================
function initLiveClock() {
  const el = $("#live-clock");
  if (!el) return;
  const update = () => {
    const now = new Date();
    el.textContent = now.toLocaleTimeString("en-KE", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      timeZone: "Africa/Nairobi",
    }) + " EAT";
  };
  update();
  setInterval(update, 1000);
}

// ============================================================
// CATEGORY PAGE FILTER
// ============================================================
function initCategoryFilter() {
  const filters = $$(".cat-filter-btn");
  if (!filters.length) return;
  filters.forEach(btn => {
    btn.addEventListener("click", () => {
      filters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      // In production, filter/refetch articles by category
    });
  });
}

// ============================================================
// SHARE BUTTONS
// ============================================================
function initShareButtons() {
  $$(".share-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const network = btn.dataset.network;
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      const links = {
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        whatsapp: `https://wa.me/?text=${title}%20${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        copy: null,
      };
      if (network === "copy") {
        navigator.clipboard.writeText(window.location.href).then(() => {
          btn.textContent = "✓ Copied!";
          setTimeout(() => { btn.innerHTML = "🔗 Copy Link"; }, 2000);
        });
        return;
      }
      if (links[network]) window.open(links[network], "_blank", "width=600,height=400");
    });
  });
}

// ============================================================
// LAZY LOAD IMAGES
// ============================================================
function initLazyImages() {
  const imgs = $$("img[data-src]");
  if (!imgs.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  }, { rootMargin: "200px" });
  imgs.forEach(img => observer.observe(img));
}

// ============================================================
// ARTICLE PAGE: AI SUMMARY
// ============================================================
async function generateArticleSummary(articleText) {
  const box = $("#ai-summary-box");
  if (!box) return;

  box.innerHTML = `<div class="ai-typing"><span></span><span></span><span></span></div>`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": CONFIG.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        system: "You are a news editor. Summarize the article in 3 bullet points, each starting with • . Be concise.",
        messages: [{ role: "user", content: `Summarize this article:\n\n${articleText.substring(0, 2000)}` }],
      }),
    });
    if (!response.ok) throw new Error();
    const data = await response.json();
    const text = data.content.find(b => b.type === "text")?.text || "";
    box.innerHTML = `<strong>AI Summary</strong><br>${text.replace(/\n/g, "<br>")}`;
  } catch {
    box.innerHTML = `<strong>AI Summary</strong><br>• Configure API key for live summaries<br>• Full article available below<br>• Share your thoughts in the comments`;
  }
}

// ============================================================
// SEARCH OVERLAY
// ============================================================
function initSearchOverlay() {
  const overlay = $("#search-overlay");
  const openBtns = $$("[data-open-search]");
  const closeBtn = $("#close-search");
  const input = overlay ? $("input", overlay) : null;
  if (!overlay) return;

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      overlay.classList.add("open");
      setTimeout(() => input && input.focus(), 100);
    });
  });

  closeBtn && closeBtn.addEventListener("click", () => overlay.classList.remove("open"));
  overlay.addEventListener("click", e => { if (e.target === overlay) overlay.classList.remove("open"); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") overlay.classList.remove("open"); });
}

// ============================================================
// INIT ALL
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initTicker();
  initLiveFeed();
  initMarketTicker();
  simulateMarketUpdates();
  initWeather();
  initAISearch();
  initNotifications();
  initMobileNav();
  initDarkMode();
  initNewsletter();
  initReadingProgress();
  initLoadMore();
  initStickyNav();
  initLiveClock();
  initCategoryFilter();
  initShareButtons();
  initLazyImages();
  initSearchOverlay();

  // Check if on article page
  const articleBody = $(".article-body");
  if (articleBody) {
    generateArticleSummary(articleBody.textContent);
  }

  // Simulate a new live update every 45 seconds
  setInterval(() => {
    const updates = [
      "New report: East African economies showing resilience amid global headwinds",
      "Central banks across the region align on digital currency frameworks",
      "Kenya power tariffs to be reviewed next quarter — Energy regulator",
      "Regional trade volumes up 8% year-on-year — EAC report",
    ];
    addLiveUpdate(updates[Math.floor(Math.random() * updates.length)]);
  }, 45000);

  console.log(`%c MEMEYAI NEWS %c business.memeyai.com `, 
    "background:#C8102E;color:white;font-weight:bold;padding:4px 8px;",
    "background:#0D0D0D;color:white;padding:4px 8px;");
});
