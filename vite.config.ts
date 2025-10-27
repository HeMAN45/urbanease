import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const ROOT_DIR = path.resolve(import.meta.dirname);
const CLIENT_SRC_DIR = path.resolve(ROOT_DIR, "client");

export default defineConfig(async () => ({
  base: "/",

  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(CLIENT_SRC_DIR, "src"),
      "@shared": path.resolve(ROOT_DIR, "shared"),
      "@assets": path.resolve(ROOT_DIR, "attached_assets"),
    },
  },
  root: CLIENT_SRC_DIR,

  build: {
    outDir: path.resolve(ROOT_DIR, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));

