
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
  telegram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20.2 4.7-3 14.1c-.2 1-.8 1.2-1.6.7l-4.4-3.3-2.1 2c-.2.2-.4.4-.8.4l.3-4.5 8.1-7.3c.4-.4-.1-.6-.6-.2L6.1 12.8l-4.3-1.4c-.9-.3-.9-.9.2-1.3L18.8 4c.8-.3 1.6.2 1.4.7Z" fill="currentColor"/></svg>',
  trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 7.2h15M9 7.2V4.5h6v2.7m-8.5 0 .8 12.3h9.4l.8-12.3M10 11v5.5m4-5.5v5.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

document.getElementById("app").innerHTML = [
  '<section id="age-gate" class="gate-shell" aria-labelledby="gate-title"><div class="gate-glow"></div><div class="gate-card glass-card"><div class="brand brand-large" aria-label="DUMMY HUB"><span>DUMMY</span><strong>HUB</strong></div><div class="gate-seal">'+icons.lock+'<span>PRIVATE ACCESS · 18+</span></div><h1 id="gate-title">Enter on your own terms.</h1><p class="gate-copy">DUMMY HUB contains age-restricted creator content. You must be 18 or older, or the age of majority where you live, to continue.</p><div class="gate-actions"><button id="enter-button" class="button button-primary" type="button">I am 18+ · Enter '+icons.arrow+'</button><button id="exit-button" class="button button-quiet" type="button">I am under 18 · Exit</button></div><p class="fine-print">No ID is requested. Continue only if you are legally allowed to view adult content where you live.</p><div id="gate-message" class="notice hidden" role="status"></div></div></section>',
  '<main id="site-shell" class="app-shell hidden"><aside id="sidebar" class="sidebar glass-card"><div class="sidebar-top"><a class="brand" href="#home" aria-label="DUMMY HUB home"><span>DUMMY</span><strong>HUB</strong></a><button id="close-menu" class="icon-button mobile-only" type="button" aria-label="Close navigation">'+icons.close+'</button></div><div class="side-rule"></div><p class="side-label">Menu</p><nav class="side-nav" aria-label="Main navigation"><a class="nav-link active" href="#home" data-section="home">'+icons.home+'<span>Dummy Hub</span></a><a class="nav-link" href="#categories" data-section="categories">'+icons.grid+'<span>Categories</span></a><a class="nav-link" href="#about" data-section="about">'+icons.info+'<span>About</span></a></nav><div class="sidebar-spacer"></div><a class="admin-link" href="#admin" data-section="admin">'+icons.lock+'<span>Admin</span></a></aside><div id="drawer-scrim" class="drawer-scrim hidden"></div><div class="content-shell"><header class="content-header"><button id="open-menu" class="icon-button mobile-only" type="button" aria-label="Open navigation">'+icons.menu+'</button></header><div id="view-home" class="view active-view"><div class="view-head"><h1>Videos</h1></div><div id="home-video-grid" class="video-grid" aria-live="polite"></div><div id="home-empty-state" class="empty-state glass-card hidden">'+icons.play+'<h4>No videos yet.</h4><a class="button button-outline" href="#admin">Upload video '+icons.arrow+'</a></div></div><div id="view-categories" class="view"><div class="view-head"><h1>Categories</h1></div><div class="category-list"><button class="category-pill active" type="button" data-category="all">All</button><button class="category-pill" type="button" data-category="Featured">Featured</button><button class="category-pill" type="button" data-category="New">New</button><button class="category-pill" type="button" data-category="Originals">Originals</button></div><div id="category-video-grid" class="video-grid category-grid" aria-live="polite"></div><div id="category-empty-state" class="empty-state glass-card hidden">'+icons.grid+'<h4>No videos in this category.</h4></div></div><div id="view-about" class="view"><div class="view-head"><h1>About</h1></div><section class="about-panel glass-card"><div class="about-copy"><div class="about-icon">'+icons.info+'</div><p class="eyebrow">Developer</p><h3>Kyle Gaspari</h3><div class="social-links"><a class="social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">'+icons.facebook+'<span>Kyle Gaspari</span></a><a class="social-link" href="https://t.me/cozybalenciaga" target="_blank" rel="noreferrer noopener">'+icons.telegram+'<span>@cozybalenciaga</span></a></div></div></section></div><div id="view-admin" class="view"><div class="view-head"><h1>Admin</h1></div><section id="admin-login" class="admin-card glass-card"><div class="admin-card-intro"><div class="admin-mark">'+icons.lock+'</div><h3>Login</h3><p>Sign in to upload videos.</p></div><form id="login-form" class="form-stack"><label>Username<input name="username" autocomplete="username" required /></label><label>Password<input name="password" type="password" autocomplete="current-password" required /></label><button class="button button-primary" type="submit">Login '+icons.arrow+'</button></form><div id="login-message" class="notice hidden" role="status"></div></section><section id="admin-studio" class="admin-card glass-card hidden"><div class="studio-header"><h3>Upload video</h3><button id="logout-button" class="button button-quiet button-small" type="button">Log out</button></div><form id="upload-form" class="form-grid"><label>Video title<input name="title" maxlength="120" placeholder="Title" required /></label><label>Category<select name="category"><option>Featured</option><option>New</option><option>Originals</option></select></label><label class="full-width">Description<textarea name="description" maxlength="280" rows="3" placeholder="Description"></textarea></label><label class="full-width file-input">Video file<input name="video" type="file" accept="video/mp4,video/webm,video/quicktime" required /><span>MP4, WebM, or MOV · max 500 MB</span></label><div class="full-width upload-warning">Upload only content with documented consent and distribution rights.</div><button class="button button-primary" type="submit">Publish '+icons.upload+'</button></form><div id="upload-message" class="notice hidden" role="status"></div><div class="admin-video-section"><div class="admin-section-head"><h4>Posted videos</h4><span id="admin-video-count"></span></div><div id="admin-video-list" class="admin-video-list"></div><div id="delete-message" class="notice hidden" role="status"></div></div><div class="studio-note">'+icons.lock+' <span>Media is served through a protected server route. It cannot prevent screen recording.</span></div></section></div><footer class="footer"><div class="brand"><span>DUMMY</span><strong>HUB</strong></div><span>© <b id="year"></b> DUMMY HUB</span></footer></div></main>'
].join("");

const state = { videos: [], category: "all", currentView: "home" };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
document.addEventListener("contextmenu", (event) => {
  if (event.target.closest(".video-frame")) event.preventDefault();
}, { capture: true });
document.addEventListener("dragstart", (event) => {
  if (event.target.closest(".video-frame")) event.preventDefault();
}, { capture: true });
const ageGate = $("#age-gate");
const siteShell = $("#site-shell");
const topBrand = document.createElement("a");
topBrand.className = "brand top-brand";
topBrand.href = "#home";
topBrand.setAttribute("aria-label", "DUMMY HUB home");
topBrand.innerHTML = "<span>DUMMY</span><strong>HUB</strong>";
const topStatus = document.createElement("span");
topStatus.className = "top-status";
topStatus.setAttribute("aria-label", "Online");
$(".content-header").append(topBrand, topStatus);
function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character])); }
function showNotice(element, message, kind = "error") { element.textContent = message; element.classList.remove("hidden"); element.dataset.kind = kind; }
const uploadProgress = document.createElement("div");
uploadProgress.className = "upload-progress hidden";
uploadProgress.setAttribute("role", "status");
uploadProgress.setAttribute("aria-live", "polite");
uploadProgress.innerHTML = '<div class="upload-progress-top"><span class="upload-progress-label">Preparing upload…</span><span class="upload-progress-value">0%</span></div><div class="upload-progress-track"><span class="upload-progress-bar"></span></div>';
$("#upload-message").after(uploadProgress);
const uploadProgressLabel = $(".upload-progress-label", uploadProgress);
const uploadProgressValue = $(".upload-progress-value", uploadProgress);
const uploadProgressBar = $(".upload-progress-bar", uploadProgress);
function setUploadProgress(percent, label) {
  const rounded = Math.max(0, Math.min(100, Math.round(percent)));
  uploadProgressLabel.textContent = label;
  uploadProgressValue.textContent = rounded + "%";
  uploadProgressBar.style.width = rounded + "%";
  uploadProgress.classList.remove("hidden");
}
function uploadChunkRequest(uploadId, chunkIndex, totalChunks, blob) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", "/api/admin/upload/chunk");
    // Let a slow but active connection finish instead of failing on a fixed timer.
    request.timeout = 0;
    request.upload.onprogress = (event) => {
      if (!event.lengthComputable) return;
      const progress = ((chunkIndex + event.loaded / event.total) / totalChunks) * 100;
      setUploadProgress(progress, "Uploading part " + (chunkIndex + 1) + " of " + totalChunks);
    };
    request.onload = () => {
      let data;
      try { data = JSON.parse(request.responseText || "{}"); } catch { data = {}; }
      if (request.status >= 200 && request.status < 300) return resolve(data);
      reject(new Error(data.error || "A video part could not be uploaded."));
    };
    request.onerror = () => reject(new Error("Network error while uploading. Check your connection and try again."));
    request.ontimeout = () => reject(new Error("A video part took too long to upload. Please try again."));
    const body = new FormData();
    body.append("uploadId", uploadId);
    body.append("chunkIndex", String(chunkIndex));
    body.append("chunk", blob, "video-part");
    request.send(body);
  });
}
async function uploadChunkWithRetry(uploadId, chunkIndex, totalChunks, blob) {
  let lastError;
  for (let attempt = 1; attempt <= 8; attempt += 1) {
    try { return await uploadChunkRequest(uploadId, chunkIndex, totalChunks, blob); }
    catch (error) {
      lastError = error;
      if (attempt < 8) {
        setUploadProgress((chunkIndex / totalChunks) * 100, "Connection interrupted — retrying part " + (chunkIndex + 1));
        if (navigator.onLine === false) {
          await new Promise((resolve) => window.addEventListener("online", resolve, { once: true }));
        } else {
          await new Promise((resolve) => setTimeout(resolve, Math.min(15000, 1000 * 2 ** (attempt - 1))));
        }
      }
    }
  }
  throw lastError;
}
function filteredVideos() { return state.category === "all" ? state.videos : state.videos.filter((video) => video.category === state.category); }

async function enterSite() { const response = await fetch("/api/age-gate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isAdult: true }) }); if (!response.ok) throw new Error("Age confirmation could not be saved."); ageGate.classList.add("hidden"); siteShell.classList.remove("hidden"); await loadVideos(); routeView(); }
function createVideoCard(video, index) {
  const card = document.createElement("article"); card.className = "video-card"; card.style.animationDelay = (index * 65) + "ms"; const palette = ["violet", "amber", "blue", "rose"][index % 4];
  card.innerHTML = '<div class="video-frame ' + palette + '"><div class="frame-grid"></div><span class="video-tag">' + escapeHtml(video.category || "Featured") + '</span><div class="video-art"><span class="art-index">0' + ((index % 9) + 1) + '</span><span class="art-word">DUMMY<br/>HUB</span></div><button class="video-play" type="button" aria-label="Play ' + escapeHtml(video.title) + '">' + icons.play + '</button></div><div class="video-card-body"><div><h4 class="video-title">' + escapeHtml(video.title) + '</h4><p class="video-description">' + escapeHtml(video.description || "") + '</p></div><div class="video-details"><span>' + escapeHtml(video.category || "Featured") + '</span><span>' + escapeHtml(video.duration || "") + '</span></div><div class="video-actions"><button class="action-button like-button ' + (video.liked ? "liked" : "") + '" type="button" aria-pressed="' + Boolean(video.liked) + '">' + icons.heart + '<span>Like</span><b>' + Number(video.likeCount || 0) + '</b></button><button class="action-button comments-toggle" type="button" aria-expanded="false">' + icons.message + '<span>Talk</span><b>' + Number(video.commentCount || 0) + '</b></button></div><div class="comments-panel hidden"><div class="comments-header"><span>Comments</span><small>No login required</small></div><div class="comment-list"><p class="comment-empty">Open comments.</p></div><form class="comment-form"><input name="username" maxlength="32" placeholder="Username" autocomplete="nickname" required /><textarea name="text" maxlength="500" rows="2" placeholder="Comment" required></textarea><button class="button button-primary button-small" type="submit">Post</button></form><div class="comment-message notice hidden" role="status"></div></div></div>';
  const frame = $(".video-frame", card); const playButton = $(".video-play", card);
  frame.addEventListener("contextmenu", (event) => event.preventDefault());
  frame.addEventListener("dragstart", (event) => event.preventDefault());
  frame.addEventListener("selectstart", (event) => event.preventDefault());
  if (!video.url) { playButton.disabled = true; playButton.setAttribute("aria-label", "Preview only"); }
  playButton.addEventListener("click", () => { if (!video.url || $("video", frame)) return; const player = document.createElement("video"); player.className = "video-player"; player.controls = false; player.preload = "metadata"; player.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback"); player.setAttribute("disablePictureInPicture", "true"); player.disableRemotePlayback = true; player.addEventListener("contextmenu", (event) => event.preventDefault()); player.addEventListener("dragstart", (event) => event.preventDefault()); player.addEventListener("click", () => { if (player.paused) player.play().catch(() => {}); else player.pause(); }); player.src = video.url; $(".video-art", frame).classList.add("hidden"); $(".frame-grid", frame).classList.add("hidden"); playButton.classList.add("hidden"); frame.appendChild(player); player.play().catch(() => {}); });
  const likeButton = $(".like-button", card); likeButton.addEventListener("click", async () => { const nextLiked = !video.liked; video.liked = nextLiked; video.likeCount = Math.max(0, Number(video.likeCount || 0) + (nextLiked ? 1 : -1)); updateLikeButton(likeButton, video); try { const response = await fetch("/api/videos/" + encodeURIComponent(video.id) + "/like", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ liked: nextLiked }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Like failed."); video.liked = data.liked; video.likeCount = data.likeCount; updateLikeButton(likeButton, video); } catch (_error) { video.liked = !nextLiked; video.likeCount = Math.max(0, Number(video.likeCount || 0) + (nextLiked ? -1 : 1)); updateLikeButton(likeButton, video); } });
  const commentsToggle = $(".comments-toggle", card); const commentsPanel = $(".comments-panel", card); commentsToggle.addEventListener("click", async () => { const wasOpen = !commentsPanel.classList.contains("hidden"); commentsPanel.classList.toggle("hidden", wasOpen); commentsToggle.setAttribute("aria-expanded", String(!wasOpen)); if (!wasOpen && !commentsPanel.dataset.loaded) await loadComments(video, commentsPanel); });
  $(".comment-form", card).addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; const button = $("button[type=submit]", form); button.disabled = true; try { const response = await fetch("/api/videos/" + encodeURIComponent(video.id) + "/comments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Comment failed."); form.reset(); video.commentCount = Number(video.commentCount || 0) + 1; $("b", commentsToggle).textContent = video.commentCount; await loadComments(video, commentsPanel); showNotice($(".comment-message", card), "Comment posted.", "success"); } catch (error) { showNotice($(".comment-message", card), error.message); } finally { button.disabled = false; } });
  return card;
}
function updateLikeButton(button, video) { button.classList.toggle("liked", Boolean(video.liked)); button.setAttribute("aria-pressed", String(Boolean(video.liked))); $("b", button).textContent = Number(video.likeCount || 0); }
async function loadComments(video, panel) { try { const response = await fetch("/api/videos/" + encodeURIComponent(video.id) + "/comments"); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Comments could not be loaded."); const list = $(".comment-list", panel); list.innerHTML = data.comments.length ? data.comments.map((comment) => '<div class="comment"><strong>' + escapeHtml(comment.username) + '</strong><p>' + escapeHtml(comment.text) + '</p></div>').join("") : '<p class="comment-empty">No comments yet.</p>'; panel.dataset.loaded = "true"; } catch (error) { showNotice($(".comment-message", panel), error.message); } }
function renderInto(gridSelector, emptySelector, videos) { const grid = $(gridSelector); const empty = $(emptySelector); grid.innerHTML = ""; videos.forEach((video, index) => grid.appendChild(createVideoCard(video, index))); empty.classList.toggle("hidden", videos.length !== 0); }
function renderAll() { renderInto("#home-video-grid", "#home-empty-state", state.videos); renderInto("#category-video-grid", "#category-empty-state", filteredVideos()); }
async function loadVideos() { const response = await fetch("/api/videos"); if (!response.ok) throw new Error("The video catalog could not be loaded."); const data = await response.json(); state.videos = data.videos || []; renderAll(); }
function renderAdminVideos(videos) { const list = $("#admin-video-list"); const count = $("#admin-video-count"); count.textContent = videos.length ? String(videos.length) : ""; list.innerHTML = videos.length ? videos.map((video) => '<div class="admin-video-row"><div><strong>' + escapeHtml(video.title) + '</strong><span>' + escapeHtml(video.category || "") + '</span></div><button class="delete-video-button" type="button" data-video-id="' + escapeHtml(video.id) + '" aria-label="Delete ' + escapeHtml(video.title) + '">' + icons.trash + '</button></div>').join("") : '<p class="admin-empty">No posted videos.</p>'; $$(".delete-video-button", list).forEach((button) => button.addEventListener("click", () => deleteVideo(button.dataset.videoId))); }
async function loadAdminVideos() { const response = await fetch("/api/admin/videos"); if (!response.ok) return; const data = await response.json(); renderAdminVideos(data.videos || []); }
async function deleteVideo(id) { if (!window.confirm("Delete this video? This cannot be undone.")) return; try { const response = await fetch("/api/admin/videos/" + encodeURIComponent(id), { method: "DELETE" }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Delete failed."); state.videos = state.videos.filter((video) => video.id !== id); renderAll(); await loadAdminVideos(); showNotice($("#delete-message"), "Video deleted.", "success"); } catch (error) { showNotice($("#delete-message"), error.message); } }
async function checkAdminSession() { const response = await fetch("/api/admin/session"); const data = await response.json(); setAdminView(Boolean(data.authenticated)); }
function setAdminView(authenticated) { $("#admin-login").classList.toggle("hidden", authenticated); $("#admin-studio").classList.toggle("hidden", !authenticated); if (authenticated) loadAdminVideos(); }
function routeView() { const requested = window.location.hash.replace("#", "") || "home"; const view = ["home", "categories", "about", "admin"].includes(requested) ? requested : "home"; state.currentView = view; $$(".view").forEach((item) => item.classList.toggle("active-view", item.id === "view-" + view)); $$(".nav-link, .admin-link").forEach((item) => item.classList.toggle("active", item.dataset.section === view)); closeDrawer(); }
function openDrawer() { $("#sidebar").classList.add("drawer-open"); $("#drawer-scrim").classList.remove("hidden"); }
function closeDrawer() { $("#sidebar").classList.remove("drawer-open"); $("#drawer-scrim").classList.add("hidden"); }

$("#enter-button").addEventListener("click", async () => { const button = $("#enter-button"); button.disabled = true; try { await enterSite(); } catch (error) { showNotice($("#gate-message"), error.message); button.disabled = false; } });
$("#exit-button").addEventListener("click", () => { ageGate.innerHTML = '<div class="gate-card glass-card"><div class="brand brand-large"><span>DUMMY</span><strong>HUB</strong></div><div class="gate-seal">'+icons.lock+'<span>ACCESS DECLINED</span></div><h1>Take care out there.</h1><p class="gate-copy">This website is only for adults. You can close this tab now.</p><button id="close-tab" class="button button-quiet" type="button">Close site</button></div>'; $("#close-tab").addEventListener("click", () => window.close()); });
$("#open-menu").addEventListener("click", openDrawer); $("#close-menu").addEventListener("click", closeDrawer); $("#drawer-scrim").addEventListener("click", closeDrawer); window.addEventListener("hashchange", routeView);
$$('.category-pill').forEach((button) => button.addEventListener("click", () => { state.category = button.dataset.category; $$('.category-pill').forEach((item) => item.classList.toggle("active", item === button)); renderAll(); }));
$("#login-form").addEventListener("submit", async (event) => { event.preventDefault(); const form = event.currentTarget; const button = $("button[type=submit]", form); button.disabled = true; try { const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); const data = await response.json(); if (!response.ok) throw new Error(data.error || "Login failed."); form.reset(); setAdminView(true); showNotice($("#login-message"), "Logged in.", "success"); } catch (error) { showNotice($("#login-message"), error.message); } finally { button.disabled = false; } });
$("#logout-button").addEventListener("click", async () => { await fetch("/api/admin/logout", { method: "POST" }); setAdminView(false); });
$("#upload-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const button = $("button[type=submit]", form);
  const formData = new FormData(form);
  const file = formData.get("video");
  let uploadId = null;
  button.disabled = true;
  try {
    if (!(file instanceof File) || !file.size) throw new Error("Choose a video file to upload.");
    setUploadProgress(0, "Preparing upload…");
    const initResponse = await fetch("/api/admin/upload/init", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        fileName: file.name,
        fileSize: file.size,
        mimeType: file.type
      })
    });
    const initData = await initResponse.json();
    if (!initResponse.ok) throw new Error(initData.error || "Upload could not be started.");
    uploadId = initData.uploadId;
    const chunkSize = Number(initData.chunkSize);
    const totalChunks = Number(initData.totalChunks);
    for (let index = 0; index < totalChunks; index += 1) {
      const start = index * chunkSize;
      const chunk = file.slice(start, Math.min(start + chunkSize, file.size), file.type);
      await uploadChunkWithRetry(uploadId, index, totalChunks, chunk);
      setUploadProgress(((index + 1) / totalChunks) * 100, index + 1 === totalChunks ? "Finishing upload…" : "Uploading part " + (index + 1) + " of " + totalChunks);
    }
    const completeResponse = await fetch("/api/admin/upload/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uploadId })
    });
    const data = await completeResponse.json();
    if (!completeResponse.ok) throw new Error(data.error || "Upload could not be completed.");
    showNotice($("#upload-message"), "Published.", "success");
    form.reset();
    state.videos.unshift(data.video);
    renderAll();
    await loadAdminVideos();
  } catch (error) {
    if (uploadId) fetch("/api/admin/upload/" + encodeURIComponent(uploadId), { method: "DELETE" }).catch(() => {});
    showNotice($("#upload-message"), error.message || "Upload failed.");
  } finally {
    button.disabled = false;
    uploadProgress.classList.add("hidden");
  }
});
$("#year").textContent = new Date().getFullYear();
checkAdminSession().catch(() => setAdminView(false));
