import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                shop: resolve(__dirname, "./src/category_page.html"),
                detail: resolve(__dirname, "./src/product_details.html"),

            },
        },
    },
});