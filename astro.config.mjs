import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    integrations: [svelte()],
    emitCss: true,
    compilerOptions: { hydratable: true },
    // preprocess: vitePreprocess(),
});
