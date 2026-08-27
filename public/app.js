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