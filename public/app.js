document.getElementById("app").innerHTML = `
  <section id="age-gate" class="gate-shell" aria-labelledby="gate-title">
    <div class="gate-card glass-card">
      <div class="brand brand-large" aria-label="DUMMY HUB"><span>DUMMY</span><strong>HUB</strong></div>
      <p class="eyebrow">Private access · 18+ only</p>
      <h1 id="gate-title">Before you enter</h1>
      <p class="gate-copy">This website contains age-restricted creator content. You must be 18 or older, or the age of majority where you live, to continue.</p>
      <div class="gate-actions">
        <button id="enter-button" class="button button-primary" type="button">I’m 18+ · Enter</button>
        <button id="exit-button" class="button button-quiet" type="button">I’m under 18 · Exit</button>
      </div>
      <p class="fine-print">By entering, you confirm your age and agree to use this site lawfully.</p>
      <div id="gate-message" class="notice hidden" role="status"></div>
    </div>
  </section>
  <main id="site-shell" class="site-shell hidden">
    <header class="topbar glass-card">
      <a class="brand" href="#home" aria-label="DUMMY HUB home"><span>DUMMY</span><strong>HUB</strong></a>
      <nav class="main-nav" aria-label="Main navigation">
        <a class="nav-link active" href="#home" data-section="home">Home</a>
        <a class="nav-link" href="#categories" data-section="categories">Categories</a>
        <a class="nav-link" href="#about" data-section="about">About</a>
      </nav>
      <a class="button button-small button-outline" href="#admin">Admin login</a>
    </header>
    <section id="home" class="hero section-anchor">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> Curated creator video</p>
        <h1>Make room for<br /><em>the unexpected.</em></h1>
        <p class="hero-subcopy">A private, age-gated home for your video collection. Smooth by design, deliberate by default.</p>
        <a href="#catalog" class="button button-primary">Browse the hub <span aria-hidden="true">↘</span></a>
      </div>
      <div class="hero-orbit" aria-hidden="true">
        <div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div>
        <div class="orbit-core"><span>18+</span><small>ACCESS</small></div>
      </div>
    </section>
    <section id="catalog" class="catalog section-anchor">
      <div class="section-heading">
        <div><p class="eyebrow">Fresh from the hub</p><h2>Featured videos</h2></div>
        <div class="catalog-meta"><span id="video-count">0 videos</span><span class="slash">/</span><span>18+ access</span></div>
      </div>
      <div id="video-grid" class="video-grid" aria-live="polite"></div>
      <div id="empty-state" class="empty-state glass-card hidden">
        <div class="empty-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="m9 8 7 4-7 4V8Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><rect x="3.5" y="4.5" width="17" height="15" rx="3" stroke="currentColor" stroke-width="1.6"/></svg></div>
        <h3>Your first upload is waiting</h3><p>Sign in as admin to add a title and publish a video to the hub.</p><a class="button button-outline" href="#admin">Open admin</a>
      </div>
    </section>
    <section id="categories" class="category-strip section-anchor">
      <div class="section-heading"><div><p class="eyebrow">Find your lane</p><h2>Browse by mood</h2></div></div>
      <div class="category-list">
        <button class="category-pill active" type="button" data-category="all">All videos</button>
        <button class="category-pill" type="button" data-category="Featured">Featured</button>
        <button class="category-pill" type="button" data-category="New">New releases</button>
        <button class="category-pill" type="button" data-category="Originals">Originals</button>
      </div>
    </section>
    <section id="about" class="about-section section-anchor">
      <div class="about-panel glass-card">
        <div><p class="eyebrow">Behind the hub</p><h2>Built with intent.<br /><em>Run with care.</em></h2></div>
        <div class="about-copy">
          <p>DUMMY HUB is an independent creator video project by Kyle Gaspari. The platform is designed around clear age access, creator consent, responsible publishing, and a calm viewing experience.</p>
          <p class="legal-note">Only upload content you own or are authorized to publish. Every production should document adult age verification, identity, consent, and lawful distribution before it goes live.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook — Kyle Gaspari"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h2.2V4.6c-.38-.05-1.7-.16-3.23-.16-3.2 0-5.4 1.95-5.4 5.55V13H4v3.8h3.57V24H12v-7.2h3.44L16 13h-4V10.4c0-1.1.3-2.4 2-2.4Z" fill="currentColor"/></svg><span>Kyle Gaspari</span></a>
            <a href="#" class="social-link" aria-label="Telegram — cozybalenciaga"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21.7 4.35-3.03 14.28c-.23 1.01-.83 1.26-1.68.79l-4.63-3.41-2.23 2.15c-.25.25-.46.46-.94.46l.34-4.72 8.6-7.77c.37-.34-.08-.53-.57-.19L7 12.55l-4.57-1.43c-1-.31-1.02-1 .21-1.47L20.5 3.2c.85-.31 1.6.2 1.2 1.15Z" fill="currentColor"/></svg><span>@cozybalenciaga</span></a>
          </div>
        </div>
      </div>
    </section>
    <section id="admin" class="admin-section section-anchor">
      <div class="section-heading"><div><p class="eyebrow">Owner access</p><h2>Admin studio</h2></div><span class="secure-badge"><span class="lock-icon" aria-hidden="true">⌑</span> Server protected</span></div>
      <div id="admin-login" class="admin-card glass-card">
        <div class="admin-card-intro"><div class="admin-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M8 10V7.8a4 4 0 0 1 8 0V10M12 14v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div><h3>Welcome back, creator.</h3><p>Log in to publish a title. Credentials are checked on the server and never shipped to the browser.</p></div>
        <form id="login-form" class="form-grid"><label>Username<input name="username" autocomplete="username" required /></label><label>Password<input name="password" type="password" autocomplete="current-password" required /></label><button class="button button-primary" type="submit">Unlock studio</button></form>
        <div id="login-message" class="notice hidden" role="status"></div>
      </div>
      <div id="admin-studio" class="admin-card glass-card hidden">
        <div class="studio-header"><div><p class="eyebrow">Publishing desk</p><h3>Upload a new video</h3></div><button id="logout-button" class="button button-quiet" type="button">Log out</button></div>
        <form id="upload-form" class="form-grid upload-form" enctype="multipart/form-data">
          <label>Video title<input name="title" maxlength="120" placeholder="Give this upload a title" required /></label><label>Category<select name="category"><option>Featured</option><option>New</option><option>Originals</option></select></label>
          <label class="full-width">Short description<textarea name="description" maxlength="280" rows="3" placeholder="A little context for viewers"></textarea></label>
          <label class="full-width file-input">Video file<input name="video" type="file" accept="video/mp4,video/webm,video/quicktime" required /><span>MP4, WebM, or MOV · max 500 MB</span></label>
          <div class="full-width upload-warning">Confirm that you have documented consent, age verification, identity verification, and distribution rights for every person shown before publishing.</div>
          <button class="button button-primary" type="submit">Publish to DUMMY HUB</button>
        </form>
        <div id="upload-message" class="notice hidden" role="status"></div>
      </div>
    </section>
    <footer class="footer"><div class="brand"><span>DUMMY</span><strong>HUB</strong></div><p>18+ · Consent-led · Independent</p><p>© <span id="year"></span> DUMMY HUB</p></footer>
  </main>
`;

const state = {
  videos: [],
  category: "all"
};

const $ = (selector) => document.querySelector(selector);
const ageGate = $("#age-gate");
const siteShell = $("#site-shell");
const gateMessage = $("#gate-message");
const videoGrid = $("#video-grid");
const emptyState = $("#empty-state");

function showNotice(element, message, kind = "error") {
  element.textContent = message;
  element.classList.remove("hidden");
  element.dataset.kind = kind;
}

function formatCount(count) {
  return `${count} ${count === 1 ? "video" : "videos"}`;
}

async function enterSite() {
  const response = await fetch("/api/age-gate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isAdult: true })
  });
  if (!response.ok) throw new Error("Age confirmation could not be saved.");
  ageGate.classList.add("hidden");
  siteShell.classList.remove("hidden");
  await loadVideos();
}

function renderVideoCard(video, index) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.style.animationDelay = `${index * 70}ms`;
  const playable = video.url && !video.demo;
  card.innerHTML = `
    <div class="video-frame">
      <span class="video-tag">${escapeHtml(video.category || "Featured")}</span>
      <div class="video-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d="m9 7 8 5-8 5V7Z" fill="currentColor"/></svg>
      </div>
      ${playable ? `<video class="video-preview" controls preload="metadata" controlsList="nodownload noplaybackrate" disablePictureInPicture src="${escapeAttribute(video.url)}"></video>` : ""}
    </div>
    <h3 class="video-title">${escapeHtml(video.title)}</h3>
    <p class="video-description">${escapeHtml(video.description || "A new upload from the DUMMY HUB studio.")}</p>
    <div class="video-details"><span>${escapeHtml(video.category || "Featured")}</span><span>${escapeHtml(video.duration || "18+ access")}</span></div>
  `;
  return card;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function renderVideos() {
  const filtered = state.category === "all"
    ? state.videos
    : state.videos.filter((video) => video.category === state.category);
  videoGrid.innerHTML = "";
  filtered.forEach((video, index) => videoGrid.appendChild(renderVideoCard(video, index)));
  emptyState.classList.toggle("hidden", filtered.length !== 0);
  $("#video-count").textContent = formatCount(filtered.length);
}

async function loadVideos() {
  const response = await fetch("/api/videos");
  if (!response.ok) throw new Error("The video catalog could not be loaded.");
  const data = await response.json();
  state.videos = data.videos || [];
  renderVideos();
}

async function checkAdminSession() {
  const response = await fetch("/api/admin/session");
  const data = await response.json();
  setAdminView(Boolean(data.authenticated));
}

function setAdminView(isAuthenticated) {
  $("#admin-login").classList.toggle("hidden", isAuthenticated);
  $("#admin-studio").classList.toggle("hidden", !isAuthenticated);
}

$("#enter-button").addEventListener("click", async () => {
  $("#enter-button").disabled = true;
  try {
    await enterSite();
  } catch (error) {
    showNotice(gateMessage, error.message);
    $("#enter-button").disabled = false;
  }
});

$("#exit-button").addEventListener("click", () => {
  ageGate.innerHTML = `
    <div class="gate-card glass-card">
      <div class="brand brand-large"><span>DUMMY</span><strong>HUB</strong></div>
      <p class="eyebrow">Access declined</p>
      <h1>Take care out there.</h1>
      <p class="gate-copy">This website is only for adults. You can close this tab now.</p>
      <button id="close-tab" class="button button-quiet" type="button">Close site</button>
    </div>
  `;
  $("#close-tab").addEventListener("click", () => window.close());
});

document.querySelectorAll(".category-pill").forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    document.querySelectorAll(".category-pill").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderVideos();
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

$("#login-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(form))
  });
  const data = await response.json();
  if (!response.ok) return showNotice($("#login-message"), data.error || "Login failed.");
  event.currentTarget.reset();
  setAdminView(true);
});

$("#logout-button").addEventListener("click", async () => {
  await fetch("/api/admin/logout", { method: "POST" });
  setAdminView(false);
});

$("#upload-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button[type=submit]");
  button.disabled = true;
  const response = await fetch("/api/admin/upload", { method: "POST", body: new FormData(event.currentTarget) });
  const data = await response.json();
  if (!response.ok) {
    showNotice($("#upload-message"), data.error || "Upload failed.");
  } else {
    showNotice($("#upload-message"), "Published. The new video is now in the catalog.", "success");
    event.currentTarget.reset();
    state.videos.unshift(data.video);
    renderVideos();
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
  }
  button.disabled = false;
});

$("#year").textContent = new Date().getFullYear();

// The site always starts behind the age gate. A same-tab refresh does not bypass it.
checkAdminSession().catch(() => setAdminView(false));