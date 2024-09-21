import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CXYoSmn9.mjs';
import { manifest } from './manifest_CykEiwMM.mjs';
import { onRequest } from './_noop-middleware.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_CPZ-UfXB.mjs')],
]);;

const _page0 = () => import('./pages/libro/_book_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/libro/[book].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "2a31f672-61c0-4b5e-a018-fa2b44299303",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
