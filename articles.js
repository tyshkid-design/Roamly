/**
 * MEMEYAI NEWS — Articles Data & Rendering
 * In production, replace with API/CMS fetches
 */

// ============================================================
// ARTICLES DATABASE (replace with real CMS/API)
// ============================================================
const ARTICLES = [
  {
    id: 1,
    title: "Kenya's Digital Economy Bill Passes Second Reading in Parliament",
    excerpt: "Landmark legislation set to regulate e-commerce, digital services tax, and platform accountability across East Africa's largest tech market.",
    category: "politics",
    tag: "Politics",
    author: "Amina Wanjiku",
    date: "2025-05-24T09:30:00Z",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    slug: "kenya-digital-economy-bill",
    featured: true,
    readTime: "4 min read",
    content: `Kenya's National Assembly passed the Digital Economy Bill in its second reading yesterday, bringing the country closer to a comprehensive regulatory framework for digital services and e-commerce platforms operating within its borders.

The bill, which has been debated for over 18 months, introduces a 1.5% digital services tax on revenue earned by platforms with more than 5,000 active Kenyan users. Companies like Meta, Google, and local unicorn Jumia would fall under this bracket.

Tech industry associations have raised concerns about double taxation, while consumer rights groups broadly support the transparency provisions requiring platforms to disclose algorithmic decision-making processes.

Committee chair Hon. Peter Kariuki indicated the bill should complete its third reading within three weeks, with presidential assent expected before the end of Q2.`,
  },
  {
    id: 2,
    title: "Safaricom M-Pesa Expands to Three New African Markets",
    excerpt: "Africa's dominant mobile money platform announces aggressive expansion into West Africa, targeting $500M in new transaction volume.",
    category: "business",
    tag: "Business",
    author: "James Odhiambo",
    date: "2025-05-24T07:15:00Z",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80",
    slug: "safaricom-mpesa-expansion",
    featured: true,
    readTime: "3 min read",
    content: `Safaricom has announced the expansion of its flagship M-Pesa mobile money service into Ghana, Ivory Coast, and Senegal in a strategic push to dominate West Africa's rapidly growing digital payments market.

The expansion, backed by a $200M investment from Vodacom Group, will see M-Pesa leverage its established technology stack and partner with local financial institutions to navigate regulatory requirements in each new market.

"West Africa represents an enormous opportunity," said CEO Peter Ndegwa at the Nairobi investor briefing. "We expect to onboard 10 million new users within the first 18 months."

The move is seen as a direct challenge to mobile money operators like MTN Mobile Money and Orange Money, who currently dominate the West African market. Analysts at Stanbic forecast M-Pesa could capture 15% market share within five years given its superior product track record.`,
  },
  {
    id: 3,
    title: "Rwanda Opens Africa's Largest Drone Delivery Hub",
    excerpt: "Kigali becomes continental hub for aerial logistics as government launches 200-drone fleet for medical supply distribution.",
    category: "tech",
    tag: "Tech",
    author: "Claire Umutoni",
    date: "2025-05-23T14:00:00Z",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
    slug: "rwanda-drone-delivery-hub",
    readTime: "3 min read",
    content: `Rwanda has opened what is being billed as Africa's largest drone delivery hub at Kigali International Airport, cementing the country's position as a continental leader in autonomous logistics technology.

The facility, developed in partnership with Zipline International and built at a cost of $45 million, will initially operate 200 fixed-wing delivery drones capable of covering the entire country within 30 minutes.

President Paul Kagame officially unveiled the hub, calling it "a blueprint for how African nations can leapfrog traditional infrastructure constraints."

The system will primarily serve Rwanda's health sector, delivering blood products, vaccines, and emergency medications to remote health centers, before expanding to commercial deliveries.`,
  },
  {
    id: 4,
    title: "Tanzania's Tourism Revenue Hits Record $3.5 Billion",
    excerpt: "Serengeti wildebeest migration draws unprecedented international visitors as Tanzania positions itself as Africa's premier safari destination.",
    category: "business",
    tag: "Business",
    author: "Hassan Mkwawa",
    date: "2025-05-23T11:30:00Z",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    slug: "tanzania-tourism-record",
    readTime: "4 min read",
    content: `Tanzania's tourism sector posted record revenue of $3.5 billion in the first quarter of 2025, driven by strong demand from North America, Europe, and a rapidly growing Asian tourist market.

The Tanzania Tourism Board reported a 23% year-on-year increase in arrivals, with the Serengeti-Ngorongoro circuit accounting for 60% of visitor activity.

"These numbers confirm Tanzania's emergence as the continent's most desirable safari and natural heritage destination," said Tourism Minister Damas Ndumbaro.

New luxury lodges, improved air connectivity from Dar es Salaam and Kilimanjaro airports, and a streamlined e-visa system have been credited as key drivers of the surge.`,
  },
  {
    id: 5,
    title: "East Africa Power Pool Achieves Grid Interconnection Milestone",
    excerpt: "Five nations now share electricity across a unified regional grid, slashing costs and improving reliability for 80 million consumers.",
    category: "business",
    tag: "Business",
    author: "Esther Achieng",
    date: "2025-05-22T16:00:00Z",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    slug: "east-africa-power-grid",
    readTime: "5 min read",
    content: `The East African Power Pool has achieved full operational integration of its five-nation grid, marking one of the region's most significant infrastructure milestones in decades.

Kenya, Uganda, Tanzania, Rwanda, and Burundi now share electricity across a 2,800-kilometer high-voltage transmission network, enabling real-time power trading and emergency backup supply between member states.

The interconnection, funded by the African Development Bank and World Bank at a total cost of $1.8 billion over six years, is projected to reduce average electricity tariffs by 12% through economies of scale and optimal dispatch of generation resources.

Ethiopia and South Sudan are expected to join the pool by 2026, further expanding the market to include significant hydropower and renewable energy resources.`,
  },
  {
    id: 6,
    title: "Ugandan Startup Raises $45M to Transform Agricultural Supply Chains",
    excerpt: "Kampala-based AgroLink secures Series B funding to digitize connections between 500,000 smallholder farmers and export markets.",
    category: "tech",
    tag: "Tech",
    author: "Michael Ssekweyama",
    date: "2025-05-22T10:00:00Z",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80",
    slug: "agrolink-funding-round",
    readTime: "3 min read",
    content: `Kampala-based agricultural technology startup AgroLink has raised $45 million in a Series B funding round led by Partech Africa, with participation from the International Finance Corporation and Standard Bank's venture arm.

The funding will enable AgroLink to scale its digital platform connecting smallholder farmers across Uganda, Kenya, and Tanzania to commodity buyers, logistics providers, and financial services in a single ecosystem.

"We've proven the model at 120,000 farmers. This round gets us to half a million in 24 months," said co-founder Diana Atim.

The platform has processed over $180 million in agricultural transactions since its 2021 launch, with farmers on the platform reporting 34% higher income compared to traditional supply chain channels.`,
  },
  {
    id: 7,
    title: "Nairobi Ranked Africa's Top City for Remote Workers",
    excerpt: "Survey of 12,000 digital nomads places Kenya's capital first on the continent for internet infrastructure, affordability, and lifestyle.",
    category: "tech",
    tag: "Tech",
    author: "Fatuma Hassan",
    date: "2025-05-21T13:00:00Z",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
    slug: "nairobi-remote-workers",
    readTime: "3 min read",
    content: `Nairobi has been ranked the top African city for remote workers and digital nomads in the 2025 Global Remote Work Index, beating Cape Town, Lagos, and Kigali in a survey of 12,000 location-independent professionals.

The ranking, compiled by NomadList in partnership with LinkedIn, assessed cities across 50 metrics including internet speed, cost of living, co-working space availability, visa policies, and safety.

Nairobi scored particularly highly for its fiber internet coverage, thriving startup ecosystem, and the government's recently launched "Digital Nomad Visa" which allows remote workers to live and work in Kenya for up to 12 months.

The city's iHub, Nairobi Garage, and Karen Workspace were specifically cited as world-class co-working environments that rival spaces in Singapore and Berlin.`,
  },
  {
    id: 8,
    title: "Kenya-Ethiopia Highway to Cut Travel Time from 18 to 6 Hours",
    excerpt: "Construction on the $2.3B Moyale–Addis Ababa expressway enters final phase, promising to transform regional trade corridors.",
    category: "business",
    tag: "Business",
    author: "Solomon Tadesse",
    date: "2025-05-21T09:00:00Z",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    slug: "kenya-ethiopia-highway",
    readTime: "4 min read",
    content: `The Kenya-Ethiopia Lamu-Moyale-Addis Ababa highway is entering its final construction phase, with officials from both governments confirming a December 2025 target for partial opening of the expressway.

The 650-kilometer all-weather road, financed through a combination of Chinese infrastructure loans and bilateral development funding, will reduce the Moyale border to Addis Ababa journey from 18 hours to approximately 6 hours for freight vehicles.

Trade economists estimate the corridor will unlock $2.8 billion in annual bilateral commerce once fully operational, by dramatically cutting logistics costs for agricultural exports and manufactured imports flowing between the two East African giants.

Kenya's Infrastructure Principal Secretary confirmed that 78% of construction has been completed, with outstanding work concentrated on the highland sections north of Marsabit.`,
  },
];

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function renderArticleCard(article, variant = "default") {
  if (variant === "horizontal") {
    return `
      <a href="article.html?id=${article.id}" class="card-horizontal">
        <div class="card-image">
          <img src="${article.image}" alt="${escapeHtml(article.title)}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="tag ${article.category}">${article.tag}</span>
          <h3>${escapeHtml(article.title)}</h3>
          <div class="meta" style="font-size:0.72rem;color:var(--light-gray);">${timeAgo(article.date)}</div>
        </div>
      </a>
    `;
  }
  return `
    <article class="article-card">
      <a href="article.html?id=${article.id}">
        <div class="card-image">
          <span class="tag ${article.category}">${article.tag}</span>
          <img src="${article.image}" alt="${escapeHtml(article.title)}" loading="lazy">
        </div>
      </a>
      <div class="card-body">
        <a href="article.html?id=${article.id}"><h3>${escapeHtml(article.title)}</h3></a>
        <p class="excerpt">${escapeHtml(article.excerpt)}</p>
        <div class="card-meta">
          <span class="author">${escapeHtml(article.author)}</span>
          <span class="read-time">⏱ ${article.readTime}</span>
          <span>${timeAgo(article.date)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderHeroSection() {
  const heroMain = $(".hero-main");
  const heroSides = $$(".hero-side");
  if (!heroMain) return;

  const featured = ARTICLES.filter(a => a.featured)[0];
  const secondary = ARTICLES.filter(a => !a.featured || ARTICLES.indexOf(a) > 0).slice(0, 2);

  if (featured) {
    heroMain.innerHTML = `
      <img src="${featured.image}" alt="${escapeHtml(featured.title)}">
      <div class="overlay"></div>
      <div class="hero-caption">
        <span class="tag ${featured.category}">${featured.tag}</span>
        <h1><a href="article.html?id=${featured.id}" style="color:inherit">${escapeHtml(featured.title)}</a></h1>
        <p class="excerpt">${escapeHtml(featured.excerpt)}</p>
        <div class="meta">
          <a href="#">${escapeHtml(featured.author)}</a>
          <span>&bull;</span>
          <span>${timeAgo(featured.date)}</span>
          <span>&bull;</span>
          <span>${featured.readTime}</span>
        </div>
      </div>
    `;
  }

  heroSides.forEach((side, i) => {
    const art = secondary[i];
    if (!art) return;
    side.innerHTML = `
      <a href="article.html?id=${art.id}"><img src="${art.image}" alt="${escapeHtml(art.title)}" loading="lazy"></a>
      <div class="content">
        <span class="tag ${art.category}">${art.tag}</span>
        <a href="article.html?id=${art.id}"><h2>${escapeHtml(art.title)}</h2></a>
        <div class="meta">${escapeHtml(art.author)} &bull; ${timeAgo(art.date)}</div>
      </div>
    `;
  });
}

function renderLatestArticles() {
  const container = $("#latest-articles");
  if (!container) return;
  const articles = ARTICLES.slice(0, 4);
  container.innerHTML = articles.map(a => renderArticleCard(a)).join("");
}

function renderTrendingWidget() {
  const container = $(".trending-list");
  if (!container) return;
  const top5 = [...ARTICLES].sort(() => Math.random() - 0.5).slice(0, 5);
  container.innerHTML = top5.map((a, i) => `
    <div class="trending-item" onclick="location.href='article.html?id=${a.id}'">
      <div class="trending-num">${i + 1}</div>
      <div>
        <div class="trending-title">${escapeHtml(a.title)}</div>
        <div class="trending-meta">${escapeHtml(a.author)} &bull; ${timeAgo(a.date)}</div>
      </div>
    </div>
  `).join("");
}

function renderCategoryStrip(category, containerId) {
  const container = $(`#${containerId}`);
  if (!container) return;
  const catArticles = ARTICLES.filter(a => a.category === category).slice(0, 3);
  container.innerHTML = catArticles.map(a => renderArticleCard(a)).join("");
}

function renderMoreNews() {
  const container = $("#more-news");
  if (!container) return;
  container.innerHTML = ARTICLES.slice(2).map(a => renderArticleCard(a, "horizontal")).join("");
}

// Article page renderer
function renderArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id") || "1");
  const article = ARTICLES.find(a => a.id === id) || ARTICLES[0];

  const titleEl = $(".article-title");
  if (titleEl) titleEl.textContent = article.title;
  document.title = article.title + " — Memeyai News";

  const tagEl = $(".article-tag");
  if (tagEl) { tagEl.textContent = article.tag; tagEl.className = `tag ${article.category}`; }

  const authorEl = $(".author-name");
  if (authorEl) authorEl.textContent = article.author;

  const dateEl = $(".article-date");
  if (dateEl) dateEl.textContent = new Date(article.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" });

  const heroImg = $(".article-hero-img");
  if (heroImg) { heroImg.src = article.image; heroImg.alt = article.title; }

  const bodyEl = $(".article-body");
  if (bodyEl) {
    bodyEl.innerHTML = article.content.split("\n\n").map(p => `<p>${escapeHtml(p)}</p>`).join("");
  }

  // Related articles
  const relatedContainer = $("#related-articles");
  if (relatedContainer) {
    const related = ARTICLES.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);
    if (related.length === 0) {
      const fallback = ARTICLES.filter(a => a.id !== article.id).slice(0, 3);
      relatedContainer.innerHTML = fallback.map(a => renderArticleCard(a)).join("");
    } else {
      relatedContainer.innerHTML = related.map(a => renderArticleCard(a)).join("");
    }
  }
}

// Category page renderer
function renderCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat") || "all";
  const container = $("#category-articles");
  if (!container) return;

  const filtered = cat === "all" ? ARTICLES : ARTICLES.filter(a => a.category === cat);
  container.innerHTML = filtered.map(a => renderArticleCard(a)).join("");

  const title = $(".category-page-title");
  if (title) title.textContent = cat === "all" ? "All News" : cat.charAt(0).toUpperCase() + cat.slice(1);
}

// Utility re-exports for use in HTML pages
window.ArticleData = {
  ARTICLES,
  renderArticleCard,
  renderHeroSection,
  renderLatestArticles,
  renderTrendingWidget,
  renderCategoryStrip,
  renderMoreNews,
  renderArticlePage,
  renderCategoryPage,
};

// Auto-render on page load
document.addEventListener("DOMContentLoaded", () => {
  renderHeroSection();
  renderLatestArticles();
  renderTrendingWidget();
  renderCategoryStrip("business", "business-articles");
  renderCategoryStrip("tech", "tech-articles");
  renderCategoryStrip("politics", "politics-articles");
  renderMoreNews();
  renderArticlePage();
  renderCategoryPage();
});
