import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";
export default defineConfig({ 
    base: "/ChanelStore/", 
    plugins: [], 
    resolve: { 
        /*something*/ 
        },
        css: {
    postcss: {
    plugins: [tailwindcss],
    },
    },
        build: {
        rollupoptions: { 
      input: {
        main: resolve(__dirname, "./index.html"), 
        checkout: resolve(__dirname, "./checkout.html"), 
        pedidos: resolve(__dirname, "./pedidos.html"),
          },
       },
    },
});