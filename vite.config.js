import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteSassPlugin from "vite-plugin-sass";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSassPlugin()],
<<<<<<< HEAD
  server:{
    port:3004
=======

  server:{
    port:3000
>>>>>>> 1eb6b7fc18094613276645c05f0e93ef5d784841
  }
});
