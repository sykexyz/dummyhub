
const icons = {
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 10.8 8.5-7 8.5 7v8.1a2.1 2.1 0 0 1-2.1 2.1H5.6a2.1 2.1 0 0 1-2.1-2.1v-8.1Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8.8 20.7v-6.2h6.4v6.2" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="4" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="4" y="14" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="14" width="6" height="6" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M12 10.8v5.4M12 7.8h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 10V7.4a4 4 0 0 1 8 0V10" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
  upload: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V4m0 0L8 8m4-4 4 4M5 14.5v3.2A2.3 2.3 0 0 0 7.3 20h9.4a2.3 2.3 0 0 0 2.3-2.3v-3.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.2 7.2 7.1 4.8-7.1 4.8V7.2Z" fill="currentColor"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13m-5-5 5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 8.8c0 5-8.4 9.7-8.4 9.7s-8.4-4.7-8.4-9.7A4.5 4.5 0 0 1 12 6.3a4.5 4.5 0 0 1 8.4 2.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 5.5h13.6a2.2 2.2 0 0 1 2.2 2.2v7.1a2.2 2.2 0 0 1-2.2 2.2H11l-4.4 3v-3H5.2A2.2 2.2 0 0 1 3 14.8V7.7a2.2 2.2 0 0 1 2.2-2.2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.8 20v-7h2.4l.4-2.7h-2.8V8.6c0-.8.3-1.4 1.5-1.4h1.6V4.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v1.8H8.6V13H11v7h2.8Z" fill="currentColor"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20.2 4.7-3 14.1c-.2 1-.8 1.2-1.6.7l-4.4-3.3-2.1 2c-.2.2-.4.4-.8.4l.3-4.5 8.1-7.3c.4-.4-.1-.6-.6-.2L6.1 12.8l-4.3-1.4c-.9-.3-.9-.9.2-1.3L18.8 4c.8-.3 1.6.2 1.4.7Z" fill="currentColor"/></svg>'
};

document.getElementById("app").innerHTML = [
  '<section id="age-gate" class="gate-shell" aria-labelledby="gate-title">',
    '<div class="gate-glow"></div><div class="gate-card glass-card">',
      '<div class="brand brand-large" aria-label="DUMMY HUB"><span>DUMMY</span><strong>HUB</strong></div>',
      '<div class="gate-seal">'+icons.lock+'<span>PRIVATE ACCESS · 18+</span></div>',
      '<h1 id="gate-title">Enter on your own terms.</h1>',
      '<p class="gate-copy">DUMMY HUB contains age-restricted creator content. You must be 18 or older, or the age of majority where you live, to continue.</p>',
      '<div class="gate-actions"><button id="enter-button" class="button button-primary" type="button">I am 18+ · Enter '+icons.arrow+'</button><button id="exit-button" class="button button-quiet" type="button">I am under 18 · Exit</button></div>',
      '<p class="fine-print">No ID is requested. Continue only if you are legally allowed to view adult content where you live.</p>',
      '<div id="gate-message" class="notice hidden" role="status"></div>',
    '</div>',
  '</section>',
  '<main id="site-shell" class="app-shell hidden">',
    '<aside id="sidebar" class="sidebar glass-card">',
      '<div class="sidebar-top"><a class="brand" href="#home" aria-label="DUMMY HUB home"><span>DUMMY</span><strong>HUB</strong></a><button id="close-menu" class="icon-button mobile-only" type="button" aria-label="Close navigation">'+icons.close+'</button></div>',
      '<div class="side-rule"></div><p class="side-label">Explore</p>',
      '<nav class="side-nav" aria-label="Main navigation">',
        '<a class="nav-link active" href="#home" data-section="home">'+icons.home+'<span>Dummy Hub</span></a>',
        '<a class="nav-link" href="#categories" data-section="categories">'+icons.grid+'<span>Categories</span></a>',
        '<a class="nav-link" href="#about" data-section="about">'+icons.info+'<span>About</span></a>',
      '</nav>',
      '<div class="sidebar-spacer"></div>',
      '<a class="admin-link" href="#admin" data-section="admin">'+icons.lock+'<span>Admin studio</span><small>OWNER</small></a>',
      '<div class="sidebar-foot"><span class="live-dot"></span><span>Age-gated space</span></div>',
    '</aside>',
    '<div id="drawer-scrim" class="drawer-scrim hidden"></div>',
    '<div class="content-shell">',
      '<header class="content-header"><button id="open-menu" class="icon-button mobile-only" type="button" aria-label="Open navigation">'+icons.menu+'</button><div><p id="view-kicker" class="eyebrow">DUMMY HUB / HOME</p><h2 id="view-title">The private collection.</h2></div><div class="header-mark">'+icons.lock+'<span>18+ only</span></div></header>',
      '<div id="view-home" class="view active-view">',
        '<section class="hero-panel glass-card"><div class="hero-copy"><p class="eyebrow"><span class="status-dot"></span> Curated creator video</p><h1>A little less ordinary.</h1><p class="hero-subcopy">A private, age-gated home for your video collection. Smooth by design, deliberate by default.</p><a href="#categories" class="button button-primary">Browse the hub '+icons.arrow+'</a></div><div class="hero-orbit" aria-hidden="true"><div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div><div class="orbit-core"><strong>18<span>+</span></strong><small>ACCESS</small></div></div><div class="hero-index">01 <span>/</span> 03</div></section>',
        '<section class="view-section"><div class="section-heading"><div><p class="eyebrow">Fresh from the hub</p><h3>Featured videos</h3></div><div class="catalog-meta"><span id="home-video-count">0 videos</span><span class="slash">/</span><span>18+ access</span></div></div><div id="home-video-grid" class="video-grid" aria-live="polite"></div><div id="home-empty-state" class="empty-state glass-card hidden">'+icons.play+'<h4>Your first upload is waiting</h4><p>Sign in to the admin studio to add a title and publish a video.</p><a class="button button-outline" href="#admin">Open studio '+icons.arrow+'</a></div></section>',
      '</div>',
      '<div id="view-categories" class="view"><section class="page-intro"><p class="eyebrow">Organize the collection</p><h1>Find your lane.</h1><p>Browse published titles by the category you set in the studio.</p></section><section class="view-section"><div class="category-list"><button class="category-pill active" type="button" data-category="all">All videos</button><button class="category-pill" type="button" data-category="Featured">Featured</button><button class="category-pill" type="button" data-category="New">New releases</button><button class="category-pill" type="button" data-category="Originals">Originals</button></div><div class="section-heading category-heading"><div><p class="eyebrow">Selected category</p><h3 id="category-title">All videos</h3></div><span id="category-video-count" class="catalog-meta">0 videos</span></div><div id="category-video-grid" class="video-grid" aria-live="polite"></div><div id="category-empty-state" class="empty-state glass-card hidden">'+icons.grid+'<h4>Nothing here yet.</h4><p>Choose another category or publish a new title in the admin studio.</p></div></section></div>',
      '<div id="view-about" class="view"><section class="page-intro"><p class="eyebrow">The person behind the hub</p><h1>Built with intention.</h1><p>A small independent home for a carefully managed video collection.</p></section><section class="about-panel glass-card"><div class="about-copy"><div class="about-icon">'+icons.info+'</div><p class="eyebrow">About the owner</p><h3>DUMMY HUB, by Kyle Gaspari.</h3><p>DUMMY HUB is an independent, age-gated publishing space. Every upload should be shared with documented consent, verified adult performers, and the right to distribute.</p><p class="legal-note">This site is not a promise of legal compliance by itself. Before launch, review local age-gating, privacy, records, consent, copyright, payment, and takedown requirements with a qualified professional.</p><div class="social-links"><a class="social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">'+icons.facebook+'<span>Kyle Gaspari</span></a><a class="social-link" href="https://t.me/cozybalenciaga" target="_blank" rel="noreferrer noopener">'+icons.telegram+'<span>@cozybalenciaga</span></a></div></div><div class="about-points"><div class="point"><span>01</span><div><strong>Consent first</strong><p>Publish only content you have the documented right to distribute.</p></div></div><div class="point"><span>02</span><div><strong>Private by default</strong><p>Uploads stay behind the server media route; storage filenames are never listed in the API.</p></div></div><div class="point"><span>03</span><div><strong>Responsible access</strong><p>Age confirmation is required before catalog or media requests are served.</p></div></div></div></section></div>',
      '<div id="view-admin" class="view"><section class="page-intro"><p class="eyebrow">Owner access</p><h1>Run the studio.</h1><p>Manage titles privately. Credentials stay on the server, never in this interface.</p></section><section id="admin-login" class="admin-card glass-card"><div class="admin-card-intro"><div class="admin-mark">'+icons.lock+'</div><p class="eyebrow">Protected area</p><h3>Admin login</h3><p>Use the server-side credentials configured in your host secrets.</p></div><form id="login-form" class="form-stack"><label>Username<input name="username" autocomplete="username" required /></label><label>Password<input name="password" type="password" autocomplete="current-password" required /></label><button class="button button-primary" type="submit">Unlock studio '+icons.arrow+'</button></form><div id="login-message" class="notice hidden" role="status"></div></section><section id="admin-studio" class="admin-card glass-card hidden"><div class="studio-header"><div><p class="eyebrow">Publishing desk</p><h3>New upload</h3></div><button id="logout-button" class="button button-quiet button-small" type="button">Log out</button></div><form id="upload-form" class="form-grid"><label>Video title<input name="title" maxlength="120" placeholder="Give this upload a title" required /></label><label>Category<select name="category"><option>Featured</option><option>New</option><option>Originals</option></select></label><label class="full-width">Short description<textarea name="description" maxlength="280" rows="3" placeholder="A little context for viewers"></textarea></label><label class="full-width file-input">Video file<input name="video" type="file" accept="video/mp4,video/webm,video/quicktime" required /><span>MP4, WebM, or MOV · max 500 MB</span></label><div class="full-width upload-warning">Confirm documented consent, adult age/identity verification, and distribution rights for every person shown before publishing.</div><button class="button button-primary" type="submit">Publish to DUMMY HUB '+icons.upload+'</button></form><div id="upload-message" class="notice hidden" role="status"></div><div class="studio-note">'+icons.lock+' <span>Media is delivered through a protected server route. This reduces casual URL exposure but cannot prevent screen recording or a determined capture.</span></div></section></div>',
      '<footer class="footer"><div class="brand"><span>DUMMY</span><strong>HUB</strong></div><span>18+ · Consent-led · Independent</span><span>© <b id="year"></b> DUMMY HUB</span></footer>',
    '</div>',
  '</main>'
].join("");

const state = { videos: [], category: "all", currentView: "home" };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const ageGate = $("#age-gate");
const siteShell = $("#site-shell");

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
}
function showNotice(element, message, kind = "error") { element.textContent = message; element.classList.remove("hidden"); element.dataset.kind = kind; }
function formatCount(count) { return count + " " + (count === 1 ? "video" : "videos"); }
function filteredVideos() { return state.category === "all" ? state.videos : state.videos.filter((video) => video.category === state.category); }

async function enterSite() {
  const response = await fetch("/api/age-gate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isAdult: true }) });
  if (!response.ok) throw new Error("Age confirmation could not be saved.");
  ageGate.classList.add("hidden");
  siteShell.classList.remove("hidden");
  await loadVideos();
  routeView();
}

function createVideoCard(video, index) {
  const card = document.createElement("article");
  card.className = "video-card";
  card.style.animationDelay = (index * 65) + "ms";
  const palette = ["violet", "amber", "blue", "rose"][index % 4];
  card.innerHTML = '<div class="video-frame ' + palette + '"><div class="frame-grid"></div><span class="video-tag">' + escapeHtml(video.category || "Featured") + '</span><div class="video-art"><span class="art-index">0' + ((index % 9) + 1) + '</span><span class="art-word">DUMMY<br/>HUB</span></div><button class="video-play" type="button" aria-label="Play ' + escapeHtml(video.title) + '">' + icons.play + '</button></div><div class="video-card-body"><div><h4 class="video-title">' + escapeHtml(video.title) + '</h4><p class="video-description">' + escapeHtml(video.description || "A new upload from the DUMMY HUB studio.") + '</p></div><div class="video-details"><span>' + escapeHtml(video.category || "Featured") + '</span><span>' + escapeHtml(video.duration || "18+ access") + '</span></div><div class="video-actions"><button class="action-button like-button ' + (video.liked ? "liked" : "") + '" type="button" aria-pressed="' + Boolean(video.liked) + '">' + icons.heart + '<span>Like</span><b>' + Number(video.likeCount || 0) + '</b></button><button class="action-button comments-toggle" type="button" aria-expanded="false">' + icons.message + '<span>Talk</span><b>' + Number(video.commentCount || 0) + '</b></button></div><div class="comments-panel hidden"><div class="comments-header"><span>Visitor comments</span><small>No login or ID required</small></div><div class="comment-list"><p class="comment-empty">Open comments to load the conversation.</p></div><form class="comment-form"><input name="username" maxlength="32" placeholder="Your username" autocomplete="nickname" required /><textarea name="text" maxlength="500" rows="2" placeholder="Write a comment..." required></textarea><button class="button button-primary button-small" type="submit">Post comment</button></form><div class="comment-message notice hidden" role="status"></div></div></div>';
  const frame = $(".video-frame", card);
  const playButton = $(".video-play", card);
  if (!video.url) { playButton.disabled = true; playButton.setAttribute("aria-label", "Demo preview only"); }
  playButton.addEventListener("click", () => {
    if (!video.url || $("video", frame)) return;
    const player = document.createElement("video");
    player.className = "video-player";
    player.controls = true;
    player.preload = "metadata";
    player.setAttribute("controlsList", "nodownload noplaybackrate");
    player.setAttribute("disablePictureInPicture", "true");
    player.src = video.url;
    frame.querySelector(".video-art").classList.add("hidden");
    frame.querySelector(".frame-grid").classList.add("hidden");
    playButton.classList.add("hidden");
    frame.appendChild(player);
    player.play().catch(() => {});
  });
  const likeButton = $(".like-button", card);
  likeButton.addEventListener("click", async () => {
    const nextLiked = !video.liked;
    video.liked = nextLiked;
    video.likeCount = Math.max(0, Number(video.likeCount || 0) + (nextLiked ? 1 : -1));
    updateLikeButton(likeButton, video);
    try {
      const response = await fetch("/api/videos/" + encodeURIComponent(video.id) + "/like", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ liked: nextLiked }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Like failed.");
      video.liked = data.liked; video.likeCount = data.likeCount; updateLikeButton(likeButton, video);
    } catch (_error) { video.liked = !nextLiked; video.likeCount = Math.max(0, Number(video.likeCount || 0) + (nextLiked ? -1 : 1)); updateLikeButton(likeButton, video); }
  });
  const commentsToggle = $(".comments-toggle", card);
  const commentsPanel = $(".comments-panel", card);
  commentsToggle.addEventListener("click", async () => { const wasOpen = !commentsPanel.classList.contains("hidden"); commentsPanel.classList.toggle("hidden", wasOpen); commentsToggle.setAttribute("aria-expanded", String(!wasOpen)); if (!wasOpen && !commentsPanel.dataset.loaded) await loadComments(video, commentsPanel); });
  $(".comment-form", card).addEventListener("submit", async (event) => {
    event.preventDefault(); const form = event.currentTarget; const button = $("button[type=submit]", form); button.disabled = true;
    try {
      const response = await fetch("/api/videos/" + encodeURIComponent(video.id) + "/comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || "Comment failed.");
      form.reset(); video.commentCount = Number(video.commentCount || 0) + 1; $("b", commentsToggle).textContent = video.commentCount; await loadComments(video, commentsPanel); showNotice($(".comment-message", card), "Comment posted.", "success");
    } catch (error) { showNotice($(".comment-message", card), error.message); } finally { button.disabled = false; }
  });
  return card;
}
function updateLikeButton(button, video) { button.classList.toggle("liked", Boolean(video.liked)); button.setAttribute("aria-pressed", String(Boolean(video.liked))); $("b", button).textContent = Number(video.likeCount || 0); }
async function loadComments(video, panel) {
  try {
    const response = await fetch("/api/videos/" + encodeURIComponent(video.id) + "/comments"); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Comments could not be loaded.");
    const list = $(".comment-list", panel); list.innerHTML = data.comments.length ? data.comments.map((comment) => '<div class="comment"><strong>' + escapeHtml(comment.username) + '</strong><p>' + escapeHtml(comment.text) + '</p></div>').join("") : '<p class="comment-empty">No comments yet. Start the conversation.</p>'; panel.dataset.loaded = "true";
  } catch (error) { showNotice($(".comment-message", panel), error.message); }
}
function renderInto(gridSelector, emptySelector, countSelector, videos) {
  const grid = $(gridSelector); const empty = $(emptySelector); grid.innerHTML = ""; videos.forEach((video, index) => grid.appendChild(createVideoCard(video, index))); empty.classList.toggle("hidden", videos.length !== 0); if (countSelector) $(countSelector).textContent = formatCount(videos.length);
}
function renderAll() {
  renderInto("#home-video-grid", "#home-empty-state", "#home-video-count", state.videos);
  const visible = filteredVideos(); renderInto("#category-video-grid", "#category-empty-state", "#category-video-count", visible); $("#category-title").textContent = state.category === "all" ? "All videos" : state.category;
}
async function loadVideos() { const response = await fetch("/api/videos"); if (!response.ok) throw new Error("The video catalog could not be loaded."); const data = await response.json(); state.videos = data.videos || []; renderAll(); }
async function checkAdminSession() { const response = await fetch("/api/admin/session"); const data = await response.json(); setAdminView(Boolean(data.authenticated)); }
function setAdminView(authenticated) { $("#admin-login").classList.toggle("hidden", authenticated); $("#admin-studio").classList.toggle("hidden", !authenticated); }
function routeView() {
  const requested = window.location.hash.replace("#", "") || "home"; const view = ["home", "categories", "about", "admin"].includes(requested) ? requested : "home"; state.currentView = view;
  $$(".view").forEach((item) => item.classList.toggle("active-view", item.id === "view-" + view));
  $$(".nav-link, .admin-link").forEach((item) => item.classList.toggle("active", item.dataset.section === view));
  const copy = { home: ["DUMMY HUB / HOME", "The private collection."], categories: ["DUMMY HUB / CATEGORIES", "Find your lane."], about: ["DUMMY HUB / ABOUT", "Built with intention."], admin: ["DUMMY HUB / STUDIO", "Run the studio."] }[view]; $("#view-kicker").textContent = copy[0]; $("#view-title").textContent = copy[1]; closeDrawer();
}
function openDrawer() { $("#sidebar").classList.add("drawer-open"); $("#drawer-scrim").classList.remove("hidden"); }
function closeDrawer() { $("#sidebar").classList.remove("drawer-open"); $("#drawer-scrim").classList.add("hidden"); }

$("#enter-button").addEventListener("click", async () => { const button = $("#enter-button"); button.disabled = true; try { await enterSite(); } catch (error) { showNotice($("#gate-message"), error.message); button.disabled = false; } });
$("#exit-button").addEventListener("click", () => { ageGate.innerHTML = '<div class="gate-card glass-card"><div class="brand brand-large"><span>DUMMY</span><strong>HUB</strong></div><div class="gate-seal">'+icons.lock+'<span>ACCESS DECLINED</span></div><h1>Take care out there.</h1><p class="gate-copy">This website is only for adults. You can close this tab now.</p><button id="close-tab" class="button button-quiet" type="button">Close site</button></div>'; $("#close-tab").addEventListener("click", () => window.close()); });
$("#open-menu").addEventListener("click", openDrawer); $("#close-menu").addEventListener("click", closeDrawer); $("#drawer-scrim").addEventListener("click", closeDrawer); window.addEventListener("hashchange", routeView);
$$('.category-pill').forEach((button) => button.addEventListener("click", () => { state.category = button.dataset.category; $$('.category-pill').forEach((item) => item.classList.toggle("active", item === button)); renderAll(); }));
$("#login-form").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; const button = $("button[type=submit]", form); button.disabled = true; try { const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Login failed."); form.reset(); setAdminView(true); showNotice($("#login-message"), "Studio unlocked.", "success"); } catch (error) { showNotice($("#login-message"), error.message); } finally { button.disabled = false; } });
$("#logout-button").addEventListener("click", async () => { await fetch("/api/admin/logout", { method: "POST" }); setAdminView(false); });
$("#upload-form").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; const button = $("button[type=submit]", form); button.disabled = true; try { const response = await fetch("/api/admin/upload", { method: "POST", body: new FormData(form) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Upload failed."); showNotice($("#upload-message"), "Published. The new video is now in the collection.", "success"); form.reset(); state.videos.unshift(data.video); renderAll(); } catch (error) { showNotice($("#upload-message"), error.message); } finally { button.disabled = false; } });
$("#year").textContent = new Date().getFullYear();
checkAdminSession().catch(() => setAdminView(false));
