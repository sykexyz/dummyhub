require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const session = require("express-session");
const multer = require("multer");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === "production";
const publicDir = path.join(__dirname, "public");
const dataDir = path.join(__dirname, "data");
const uploadDir = path.join(__dirname, "uploads");
const videoIndexPath = path.join(dataDir, "videos.json");

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(uploadDir, { recursive: true });
if (!fs.existsSync(videoIndexPath)) fs.writeFileSync(videoIndexPath, "[]");

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "same-site" },
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        mediaSrc: ["'self'"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", "data:"],
        frameAncestors: ["'none'"]
      }
    }
  })
);
app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "64kb" }));
app.use(
  session({
    name: "dummyhub_admin",
    secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString("hex"),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: isProduction,
      maxAge: 1000 * 60 * 60 * 8
    }
  })
);

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many login attempts. Try again later." }
});

const allowedMimeTypes = new Set(["video/mp4", "video/webm", "video/quicktime"]);
const demoVideos = [
  {
    id: "demo-neon-after-hours",
    title: "Neon After Hours",
    description: "A demo listing showing how a published title appears in the hub.",
    category: "Featured",
    duration: "Demo",
    createdAt: "2026-01-01T00:00:00.000Z",
    demo: true
  },
  {
    id: "demo-red-room-sessions",
    title: "Red Room Sessions",
    description: "A visual placeholder for your next creator upload.",
    category: "Originals",
    duration: "Demo",
    createdAt: "2026-01-02T00:00:00.000Z",
    demo: true
  },
  {
    id: "demo-late-night-original",
    title: "Late Night Original",
    description: "Replace demo listings with content you have the rights to publish.",
    category: "New",
    duration: "Demo",
    createdAt: "2026-01-03T00:00:00.000Z",
    demo: true
  }
];
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${crypto.randomBytes(18).toString("hex")}${ext}`);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 500 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!allowedMimeTypes.has(file.mimetype)) {
      return cb(new Error("Only MP4, WebM, and QuickTime video files are accepted."));
    }
    cb(null, true);
  }
});

function readVideos() {
  try {
    return JSON.parse(fs.readFileSync(videoIndexPath, "utf8"));
  } catch {
    return [];
  }
}

function writeVideos(videos) {
  const temporaryPath = `${videoIndexPath}.tmp`;
  fs.writeFileSync(temporaryPath, JSON.stringify(videos, null, 2));
  fs.renameSync(temporaryPath, videoIndexPath);
}

function publicVideo(video) {
  return {
    id: video.id,
    title: video.title,
    description: video.description,
    category: video.category,
    duration: video.duration || "—",
    createdAt: video.createdAt,
    demo: Boolean(video.demo),
    url: video.fileName ? `/media/${encodeURIComponent(video.id)}` : null
  };
}

function readCookie(req, name) {
  const cookieHeader = req.headers.cookie || "";
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function isAgeVerified(req) {
  return readCookie(req, "age_verified") === "yes" || req.headers["x-age-verified"] === "true";
}

function requireAge(req, res, next) {
  if (!isAgeVerified(req)) {
    return res.status(403).json({ error: "Age confirmation required." });
  }
  next();
}

function requireAdmin(req, res, next) {
  if (!req.session.isAdmin) return res.status(401).json({ error: "Admin login required." });
  next();
}

function safeSecretMatch(input, configured) {
  if (!configured || typeof input !== "string") return false;
  const inputBuffer = Buffer.from(input);
  const configuredBuffer = Buffer.from(configured);
  return (
    inputBuffer.length === configuredBuffer.length &&
    crypto.timingSafeEqual(inputBuffer, configuredBuffer)
  );
}

app.post("/api/age-gate", (req, res) => {
  if (req.body?.isAdult !== true) {
    return res.status(400).json({ error: "Adult confirmation was not provided." });
  }
  res.cookie("age_verified", "yes", {
    httpOnly: true,
    sameSite: "lax",
    secure: isProduction,
    maxAge: 1000 * 60 * 60 * 24
  });
  res.json({ ok: true });
});

app.get("/api/config", (_req, res) => {
  res.json({
    siteName: "DUMMY HUB",
    ageGateEnabled: true,
    adminEnabled: Boolean(process.env.ADMIN_PASSWORD)
  });
});

app.get("/api/videos", requireAge, (_req, res) => {
  const videos = readVideos();
  res.json({ videos: (videos.length ? videos : demoVideos).map(publicVideo) });
});

app.post("/api/admin/login", loginLimiter, (req, res) => {
  const username = process.env.ADMIN_USERNAME || "kyle";
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return res.status(503).json({
      error: "Admin access is not configured. Set ADMIN_PASSWORD in your server secrets."
    });
  }
  if (req.body?.username !== username || !safeSecretMatch(req.body?.password, password)) {
    return res.status(401).json({ error: "Invalid admin credentials." });
  }
  req.session.isAdmin = true;
  res.json({ ok: true, username });
});

app.post("/api/admin/logout", (req, res) => {
  req.session.destroy(() => res.json({ ok: true }));
});

app.get("/api/admin/session", (req, res) => {
  res.json({ authenticated: Boolean(req.session.isAdmin) });
});

app.get("/api/admin/videos", requireAdmin, (_req, res) => {
  res.json({ videos: readVideos().map(publicVideo) });
});

app.post("/api/admin/upload", requireAdmin, upload.single("video"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "Choose a video file to upload." });
  const title = String(req.body.title || "").trim();
  if (!title || title.length > 120) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ error: "A title between 1 and 120 characters is required." });
  }

  const video = {
    id: crypto.randomBytes(16).toString("hex"),
    title,
    description: String(req.body.description || "").trim().slice(0, 280),
    category: String(req.body.category || "Featured").trim().slice(0, 40) || "Featured",
    fileName: req.file.filename,
    mimeType: req.file.mimetype,
    createdAt: new Date().toISOString()
  };
  const videos = readVideos();
  videos.unshift(video);
  writeVideos(videos);
  res.status(201).json({ video: publicVideo(video) });
});

app.get("/media/:id", requireAge, (req, res) => {
  const video = readVideos().find((item) => item.id === req.params.id);
  if (!video?.fileName) return res.status(404).send("Video not found");

  const filePath = path.join(uploadDir, video.fileName);
  if (!fs.existsSync(filePath)) return res.status(404).send("Video not found");
  res.set({
    "Cache-Control": "private, no-store",
    "Content-Disposition": "inline",
    "X-Content-Type-Options": "nosniff",
    "Accept-Ranges": "bytes"
  });
  res.sendFile(filePath, { headers: { "Content-Type": video.mimeType || "video/mp4" } });
});

app.get("/", (_req, res) => {
  const shell = [
    "<!doctype html><html><head><meta charset=\"UTF-8\">",
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
    "<title>DUMMY HUB</title><link rel=\"stylesheet\" href=\"/styles.css\">",
    "</head><body><div class=\"ambient ambient-one\"></div>",
    "<div class=\"ambient ambient-two\"></div><div id=\"app\"></div>",
    "<", "script src=\"/app.js\" defer>", "</", "script></body></html>"
  ].join("");
  res.type("html").send(shell);
});

app.use(express.static(publicDir, { extensions: ["html"] }));

app.use((err, _req, res, _next) => {
  if (err instanceof multer.MulterError || err?.message) {
    return res.status(400).json({ error: err.message || "Upload failed." });
  }
  console.error(err);
  res.status(500).json({ error: "Something went wrong." });
});

app.listen(PORT, () => {
  console.log(`DUMMY HUB listening on http://localhost:${PORT}`);
  if (!process.env.ADMIN_PASSWORD) {
    console.warn("Admin uploads are disabled until ADMIN_PASSWORD is configured.");
  }
});