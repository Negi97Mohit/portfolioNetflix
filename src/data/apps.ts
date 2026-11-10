// src/data/apps.ts

export interface AppItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  badge?: string;
  stats?: string;
  category: "Chrome Extension" | "Web App / Platform" | "AI System";
  link: string;
  linkLabel?: string;
  features: string[];
}

export const publishedApps: AppItem[] = [
  {
    id: "gaki",
    name: "GAKI & GAKI Toolkit",
    tagline: "Autonomous DevOps/AIOps Multi-Agent System",
    description: "Coordinator-worker architecture with triple-fallback LLM parser, eval CI integration, RCA, and automated remediation workflows.",
    icon: "/apps/gaki.png",
    badge: "Production Agent",
    stats: "Multi-Agent Hub",
    category: "AI System",
    link: "https://gaki.netlify.app/",
    linkLabel: "gaki.netlify.app",
    features: [
      "Coordinator-worker architecture (Discord / Desktop / CLI)",
      "Triple-fallback LLM parser & eval CI pipeline",
      "Automated root-cause analysis & remediation"
    ]
  },
  {
    id: "mytake",
    name: "MyTake",
    tagline: "On-Device AI via Gemini Nano (1,000+ MAU)",
    description: "4-phase AI agent pipeline (Planner → Governor → Implementor → Executor/Debugger) running 100% locally via Chrome's Gemini Nano Prompt API.",
    icon: "/apps/mytake.png",
    badge: "1,000+ MAU",
    stats: "Gemini Nano",
    category: "Chrome Extension",
    link: "https://chromewebstore.google.com/",
    linkLabel: "Chrome Web Store",
    features: [
      "Natural-language DOM manipulation",
      "Zero external latency with on-device AI",
      "Autonomous 4-phase error-recovering agent"
    ]
  },
  {
    id: "popup-search",
    name: "Popup Search by FUJM",
    tagline: "AI Selection & Preview Tool {Featured Badge}",
    description: "Smartest select tool for your browser. Chat with AI, copy with smart formatting, and dynamic variable templates.",
    icon: "/apps/popupsearch.png",
    badge: "Featured Badge",
    stats: "Part of 3,500+ DLs",
    category: "Chrome Extension",
    link: "https://chromewebstore.google.com/",
    linkLabel: "Chrome Web Store",
    features: [
      "Official Chrome Web Store Featured Badge",
      "Contextual AI queries & text manipulation",
      "Dynamic smart templates"
    ]
  },
  {
    id: "linkedinease",
    name: "LinkedIn Ease",
    tagline: "LinkedIn Productivity & Workflow Suite",
    description: "In-browser productivity companion built to streamline professional networking, connection management, and messaging workflows on LinkedIn.",
    icon: "/apps/linkedinease.png",
    badge: "Productivity",
    stats: "Chrome Web Store",
    category: "Chrome Extension",
    link: "https://chromewebstore.google.com/",
    linkLabel: "Chrome Web Store",
    features: [
      "Workflow shortcuts for LinkedIn profiles",
      "Streamlined outreach & engagement speed",
      "Seamless in-browser integration"
    ]
  },
  {
    id: "opensesame",
    name: "OpenSesame (Imagine)",
    tagline: "Universal Image & Web Asset Manipulation Layer",
    description: "Interactive visual layer over web images recognized by visual geometry rather than fragile URLs, with real-time generation overlays.",
    icon: "/apps/opensesame.png",
    badge: "Visual AI",
    stats: "Cross-Site Layer",
    category: "Chrome Extension",
    link: "https://chromewebstore.google.com/",
    linkLabel: "Chrome Web Store",
    features: [
      "Visual content-based image identification",
      "In-browser canvas & image generation overlays",
      "Cross-domain persistence"
    ]
  },
  {
    id: "aitab",
    name: "AI Tab by FUJM",
    tagline: "Active Browser Tab Q&A via GPT",
    description: "Extracts DOM context and answers complex queries without leaving your active tab.",
    icon: "/apps/aitab.png",
    badge: "GPT-Powered",
    stats: "Active Tab Agent",
    category: "Chrome Extension",
    link: "https://chromewebstore.google.com/",
    linkLabel: "Chrome Web Store",
    features: [
      "Instant DOM distillation",
      "In-tab conversational multi-turn Q&A",
      "Zero context switching"
    ]
  },
  {
    id: "pagediff",
    name: "PageDiff",
    tagline: "Web Page Visual & DOM Difference Tracker",
    description: "Automated web page diffing to notify users and track dynamic DOM updates and content alterations.",
    icon: "/apps/pagediff.png",
    badge: "Change Tracker",
    stats: "DOM Monitor",
    category: "Chrome Extension",
    link: "https://chromewebstore.google.com/",
    linkLabel: "Chrome Web Store",
    features: [
      "Automated DOM snapshot comparisons",
      "Visual change highlights & logs",
      "Real-time page update notifications"
    ]
  }
];
