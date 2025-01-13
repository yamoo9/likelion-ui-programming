import { loadModule } from 'https://klesun.github.io/ts-browser/src/ts-browser.js';

await loadModule('./scripts/main.tsx', { jsx: 2 /* ts.jsxEmit.React */ });
