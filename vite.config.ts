import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      // Instead of just marking as external, provide a CDN fallback
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        // Add globals configuration for externals
        globals: {
          '@splinetool/runtime': 'splinetool_runtime',
        },
      },
    },
  },
}));