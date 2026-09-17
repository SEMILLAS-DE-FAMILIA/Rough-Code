(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/AlertBanner.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "alerta": "AlertBanner-module__0tMRIa__alerta",
  "banner": "AlertBanner-module__0tMRIa__banner",
  "closeBtn": "AlertBanner-module__0tMRIa__closeBtn",
  "info": "AlertBanner-module__0tMRIa__info",
  "message": "AlertBanner-module__0tMRIa__message",
});
}),
"[project]/app/components/AlertBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AlertBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/AlertBanner.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function AlertBanner() {
    _s();
    const [banner, setBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlertBanner.useEffect": ()=>{
            async function fetchBanner() {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('site_banner').select('id, message, type').eq('active', true).order('id', {
                    ascending: false
                }).limit(1).maybeSingle();
                if (data) setBanner(data);
            }
            fetchBanner();
        }
    }["AlertBanner.useEffect"], []);
    if (!banner || dismissed) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].banner} ${banner.type === 'alerta' ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alerta : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message,
                children: banner.message
            }, void 0, false, {
                fileName: "[project]/app/components/AlertBanner.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                onClick: ()=>setDismissed(true),
                "aria-label": "Cerrar aviso",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/app/components/AlertBanner.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/AlertBanner.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(AlertBanner, "AZM4clQAT7ahd6lkpEKJ4nrZgRU=");
_c = AlertBanner;
var _c;
__turbopack_context__.k.register(_c, "AlertBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/AppLayout.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "AppLayout-module__RrbURa__active",
  "adminBadge": "AppLayout-module__RrbURa__adminBadge",
  "badgePop": "AppLayout-module__RrbURa__badgePop",
  "cartBadge": "AppLayout-module__RrbURa__cartBadge",
  "cartCheckoutBtn": "AppLayout-module__RrbURa__cartCheckoutBtn",
  "cartDrawer": "AppLayout-module__RrbURa__cartDrawer",
  "cartFloatingBtn": "AppLayout-module__RrbURa__cartFloatingBtn",
  "cartFooter": "AppLayout-module__RrbURa__cartFooter",
  "cartItem": "AppLayout-module__RrbURa__cartItem",
  "cartItemImg": "AppLayout-module__RrbURa__cartItemImg",
  "cartItemPrice": "AppLayout-module__RrbURa__cartItemPrice",
  "cartItemRemoving": "AppLayout-module__RrbURa__cartItemRemoving",
  "cartItemTitle": "AppLayout-module__RrbURa__cartItemTitle",
  "cartList": "AppLayout-module__RrbURa__cartList",
  "closeBtn": "AppLayout-module__RrbURa__closeBtn",
  "deleteBtn": "AppLayout-module__RrbURa__deleteBtn",
  "emptyCartState": "AppLayout-module__RrbURa__emptyCartState",
  "isOpen": "AppLayout-module__RrbURa__isOpen",
  "menuFloatingBtn": "AppLayout-module__RrbURa__menuFloatingBtn",
  "qtyPop": "AppLayout-module__RrbURa__qtyPop",
  "quantityControls": "AppLayout-module__RrbURa__quantityControls",
  "sidebar": "AppLayout-module__RrbURa__sidebar",
  "sidebarHeader": "AppLayout-module__RrbURa__sidebarHeader",
  "sidebarLink": "AppLayout-module__RrbURa__sidebarLink",
  "sidebarNav": "AppLayout-module__RrbURa__sidebarNav",
  "sidebarOverlay": "AppLayout-module__RrbURa__sidebarOverlay",
  "slideUp": "AppLayout-module__RrbURa__slideUp",
  "summaryDivider": "AppLayout-module__RrbURa__summaryDivider",
  "summaryRow": "AppLayout-module__RrbURa__summaryRow",
  "summaryRowLabel": "AppLayout-module__RrbURa__summaryRowLabel",
  "summaryRowQty": "AppLayout-module__RrbURa__summaryRowQty",
  "summaryRowValue": "AppLayout-module__RrbURa__summaryRowValue",
  "toastNotification": "AppLayout-module__RrbURa__toastNotification",
  "totalPrice": "AppLayout-module__RrbURa__totalPrice",
  "totalRow": "AppLayout-module__RrbURa__totalRow",
});
}),
"[project]/app/components/Carousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowButton": "Carousel-module__5OSfgq__arrowButton",
  "arrowControls": "Carousel-module__5OSfgq__arrowControls",
  "backgroundImage": "Carousel-module__5OSfgq__backgroundImage",
  "backgroundImageWrapper": "Carousel-module__5OSfgq__backgroundImageWrapper",
  "backgroundOverlay": "Carousel-module__5OSfgq__backgroundOverlay",
  "carouselColumn": "Carousel-module__5OSfgq__carouselColumn",
  "carouselImage": "Carousel-module__5OSfgq__carouselImage",
  "carouselSlide": "Carousel-module__5OSfgq__carouselSlide",
  "carouselSlideContainer": "Carousel-module__5OSfgq__carouselSlideContainer",
  "carouselViewport": "Carousel-module__5OSfgq__carouselViewport",
  "fadeSlideUp": "Carousel-module__5OSfgq__fadeSlideUp",
  "heroContainer": "Carousel-module__5OSfgq__heroContainer",
  "heroContentGrid": "Carousel-module__5OSfgq__heroContentGrid",
  "imageInner": "Carousel-module__5OSfgq__imageInner",
  "isActive": "Carousel-module__5OSfgq__isActive",
  "kenBurns": "Carousel-module__5OSfgq__kenBurns",
  "mainButton": "Carousel-module__5OSfgq__mainButton",
  "mainDescription": "Carousel-module__5OSfgq__mainDescription",
  "mainTitle": "Carousel-module__5OSfgq__mainTitle",
  "textColumn": "Carousel-module__5OSfgq__textColumn",
  "textInner": "Carousel-module__5OSfgq__textInner",
});
}),
"[project]/app/components/Carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarouselHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/Carousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const FALLBACK_SLIDE = {
    id: 'fallback',
    src: '/images/slider/image1.png',
    alt: 'Semillas de Familia',
    title: 'Bienvenido a Semillas de Familia',
    description: 'Configura tu primer slide desde el panel admin para personalizar este espacio.',
    buttonText: 'Ver Catálogo'
};
const AUTOPLAY_DELAY = 5000;
// Parsea y extrae una URL limpia en caso de que en la DB exista un JSON/Array mal formateado
const cleanImageUrl = (rawUrl)=>{
    if (!rawUrl) return '/images/slider/image1.png';
    if (typeof rawUrl === 'string' && rawUrl.startsWith('[')) {
        try {
            const parsed = JSON.parse(rawUrl);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed[0];
            }
        } catch  {
        // Si falla el parseo, se utiliza el valor original
        }
    }
    return rawUrl;
};
function CarouselHero() {
    _s();
    const [slides, setSlides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const autoplayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselHero.useEffect": ()=>{
            let isMounted = true;
            async function fetchSlides() {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('carousel_slides').select('id, title, subtitle, img_url, btn_text').eq('active', true).order('sort_order', {
                    ascending: true
                });
                if (!isMounted) return;
                if (!error && data && data.length > 0) {
                    setSlides(data.map({
                        "CarouselHero.useEffect.fetchSlides": (slide)=>({
                                id: slide.id,
                                src: cleanImageUrl(slide.img_url),
                                alt: slide.title,
                                title: slide.title,
                                description: slide.subtitle || '',
                                buttonText: slide.btn_text || 'Ver Catálogo'
                            })
                    }["CarouselHero.useEffect.fetchSlides"]));
                } else {
                    setSlides([
                        FALLBACK_SLIDE
                    ]);
                }
                setCurrentIndex(0);
                setIsLoading(false);
            }
            fetchSlides();
            return ({
                "CarouselHero.useEffect": ()=>{
                    isMounted = false;
                }
            })["CarouselHero.useEffect"];
        }
    }["CarouselHero.useEffect"], []);
    const startAutoplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CarouselHero.useCallback[startAutoplay]": ()=>{
            if (autoplayRef.current) clearInterval(autoplayRef.current);
            if (slides.length > 1) {
                autoplayRef.current = setInterval({
                    "CarouselHero.useCallback[startAutoplay]": ()=>{
                        setCurrentIndex({
                            "CarouselHero.useCallback[startAutoplay]": (prev)=>(prev + 1) % slides.length
                        }["CarouselHero.useCallback[startAutoplay]"]);
                    }
                }["CarouselHero.useCallback[startAutoplay]"], AUTOPLAY_DELAY);
            }
        }
    }["CarouselHero.useCallback[startAutoplay]"], [
        slides.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselHero.useEffect": ()=>{
            startAutoplay();
            return ({
                "CarouselHero.useEffect": ()=>{
                    if (autoplayRef.current) clearInterval(autoplayRef.current);
                }
            })["CarouselHero.useEffect"];
        }
    }["CarouselHero.useEffect"], [
        startAutoplay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselHero.useEffect": ()=>{
            const container = viewportRef.current;
            if (!container) return;
            const slideEl = container.querySelector(`[data-slide-index="${currentIndex}"]`);
            if (slideEl) {
                container.scrollTo({
                    left: slideEl.offsetLeft,
                    behavior: 'smooth'
                });
            }
        }
    }["CarouselHero.useEffect"], [
        currentIndex,
        slides
    ]);
    const goToSlide = (index)=>{
        setCurrentIndex((index % slides.length + slides.length) % slides.length);
        startAutoplay();
    };
    const scrollPrev = ()=>goToSlide(currentIndex - 1);
    const scrollNext = ()=>goToSlide(currentIndex + 1);
    const handleExploreClick = ()=>{
        const catalogSection = document.getElementById('catalogo');
        if (catalogSection) {
            catalogSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    const currentSlide = !isLoading ? slides[currentIndex] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContainer,
        children: [
            currentSlide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundImageWrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: currentSlide.src,
                        alt: "Fondo de pantalla",
                        fill: true,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundImage,
                        priority: true,
                        quality: 60
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundOverlay
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, currentSlide.id, true, {
                fileName: "[project]/app/components/Carousel.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContentGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textColumn,
                        children: currentSlide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textInner,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainTitle,
                                    children: currentSlide.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this),
                                currentSlide.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainDescription,
                                    children: currentSlide.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this),
                                currentSlide.buttonText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainButton,
                                    onClick: handleExploreClick,
                                    children: currentSlide.buttonText
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, currentSlide.id, true, {
                            fileName: "[project]/app/components/Carousel.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselColumn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselViewport,
                                ref: viewportRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselSlideContainer,
                                    children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-slide-index": index,
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselSlide} ${index === currentIndex ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isActive : ''}`,
                                            onClick: ()=>goToSlide(index),
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageInner,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: slide.src,
                                                    alt: slide.alt,
                                                    fill: true,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselImage,
                                                    sizes: "(max-width: 768px) 30vw, 15vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/Carousel.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Carousel.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        }, slide.id, false, {
                                            fileName: "[project]/app/components/Carousel.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Carousel.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            slides.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowControls,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: scrollPrev,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                                        "aria-label": "Anterior",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2.25,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M15 18l-6-6 6-6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Carousel.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Carousel.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Carousel.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: scrollNext,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowButton,
                                        "aria-label": "Siguiente",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2.25,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 18l6-6-6-6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Carousel.tsx",
                                                lineNumber: 196,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Carousel.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Carousel.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Carousel.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Carousel.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Carousel.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Carousel.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(CarouselHero, "k48nB2HbSrqZmhGJhnwcfgc+QNA=");
_c = CarouselHero;
var _c;
__turbopack_context__.k.register(_c, "CarouselHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/HeaderNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeaderNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useDistributorStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/AppLayout.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HeaderNav({ cartItems, onRemoveFromCart, onOpenDistributorModal }) {
    _s();
    const isDistributor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "HeaderNav.useDistributorStore[isDistributor]": (s)=>s.status === 'approved'
    }["HeaderNav.useDistributorStore[isDistributor]"]);
    const distributorName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "HeaderNav.useDistributorStore[distributorName]": (s)=>s.profile?.company_name
    }["HeaderNav.useDistributorStore[distributorName]"]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "HeaderNav.useDistributorStore[logout]": (s)=>s.logout
    }["HeaderNav.useDistributorStore[logout]"]);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floatingNavbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                onClick: ()=>setIsSidebarOpen(true),
                                "aria-label": "Abrir Menú",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    width: "20",
                                    height: "20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HeaderNav.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandLogo,
                                onClick: ()=>window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    }),
                                children: "Semillas de Familia"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeaderNav.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navActions,
                        style: {
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: isDistributor ? logout : onOpenDistributorModal,
                                style: {
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    padding: '6px 12px',
                                    borderRadius: '20px',
                                    background: isDistributor ? '#15803d' : '#1e293b',
                                    color: '#fff',
                                    border: 'none',
                                    cursor: 'pointer'
                                },
                                children: isDistributor ? `✓ ${distributorName}` : 'Soy Distribuidor'
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                onClick: ()=>setIsCartOpen(true),
                                "aria-label": "Ver Carrito",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        width: "20",
                                        height: "20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/HeaderNav.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartBadge,
                                        children: cartItems.length
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeaderNav.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HeaderNav.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarOverlay} ${isSidebarOpen || isCartOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isOpen : ''}`,
                onClick: ()=>{
                    setIsSidebarOpen(false);
                    setIsCartOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/app/components/HeaderNav.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar} ${isSidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isOpen : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Panel Control"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                onClick: ()=>setIsSidebarOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeaderNav.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarNav,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLink} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    " Mi Cuenta"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📦"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    " Mis Pedidos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                style: {
                                    border: '0.5px solid rgba(255,255,255,0.1)',
                                    margin: '0.5rem 0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLink,
                                onClick: ()=>{
                                    setIsSidebarOpen(false);
                                    onOpenDistributorModal();
                                },
                                style: {
                                    color: '#38bdf8'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🤝"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    isDistributor ? 'Configuración Mayorista' : 'Acceso Distribuidores'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🛠️"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    " Panel Admin",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminBadge,
                                        children: "ADMIN"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeaderNav.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HeaderNav.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartDrawer} ${isCartOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isOpen : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    "Carrito (",
                                    cartItems.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                onClick: ()=>setIsCartOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/HeaderNav.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartList,
                        children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#94a3b8',
                                textAlign: 'center',
                                marginTop: '2rem'
                            },
                            children: "El carrito está vacío."
                        }, void 0, false, {
                            fileName: "[project]/app/components/HeaderNav.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this) : cartItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItem,
                                children: [
                                    item.img && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.img,
                                        alt: item.title,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemImg
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 126,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '0.9rem',
                                                    fontWeight: '600'
                                                },
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeaderNav.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: '#ef4444',
                                                    fontSize: '0.85rem',
                                                    fontWeight: '700'
                                                },
                                                children: item.price
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/HeaderNav.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconBtn,
                                        onClick: ()=>onRemoveFromCart(index),
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/HeaderNav.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/app/components/HeaderNav.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeaderNav.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartCheckoutBtn,
                        children: "Finalizar Compra"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HeaderNav.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HeaderNav.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HeaderNav.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(HeaderNav, "QxYlXh7joQF7qkU16yZVMW3OeD4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"]
    ];
});
_c = HeaderNav;
var _c;
__turbopack_context__.k.register(_c, "HeaderNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NavigationControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/AppLayout.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useCartStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const formatCLP = (value)=>new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    }).format(value);
const REMOVE_ANIMATION_MS = 220;
function useIsHydrated() {
    _s();
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsHydrated.useEffect": ()=>setIsHydrated(true)
    }["useIsHydrated.useEffect"], []);
    return isHydrated;
}
_s(useIsHydrated, "I77IOq3pAPHaLortJPfCkmuM/a0=");
function NavigationControls({ lastAddedProduct }) {
    _s1();
    const isHydrated = useIsHydrated();
    const storeCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "NavigationControls.useCartStore[storeCart]": (state)=>state.cart
    }["NavigationControls.useCartStore[storeCart]"]);
    const storeItemCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "NavigationControls.useCartStore[storeItemCount]": (state)=>state.itemCount()
    }["NavigationControls.useCartStore[storeItemCount]"]);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "NavigationControls.useCartStore[updateQuantity]": (state)=>state.updateQuantity
    }["NavigationControls.useCartStore[updateQuantity]"]);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "NavigationControls.useCartStore[removeItem]": (state)=>state.removeItem
    }["NavigationControls.useCartStore[removeItem]"]);
    const cartItems = isHydrated ? storeCart : [];
    const itemCount = isHydrated ? storeItemCount : 0;
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [removingId, setRemovingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const subtotal = cartItems.reduce((acc, item)=>acc + item.unit_price * item.quantity, 0);
    const total = subtotal;
    const handleRemoveClick = (id)=>{
        setRemovingId(id);
        setTimeout(()=>{
            removeItem(id);
            setRemovingId(null);
        }, REMOVE_ANIMATION_MS);
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuFloatingBtn,
                onClick: scrollToTop,
                "aria-label": "Ir al inicio",
                style: {
                    padding: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    cursor: 'pointer'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/logo/logo.png",
                    alt: "Inicio",
                    width: 62,
                    height: 62,
                    style: {
                        objectFit: 'contain'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/components/NavigationControls.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartFloatingBtn,
                onClick: ()=>setIsCartOpen(true),
                "aria-label": "Ver Carrito",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        width: "22",
                        height: "22",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavigationControls.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartBadge,
                        children: itemCount
                    }, itemCount, false, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarOverlay} ${isCartOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isOpen : ''}`,
                onClick: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartDrawer} ${isCartOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isOpen : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: [
                                    "Tu Carrito (",
                                    itemCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: ()=>setIsCartOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartList,
                        children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyCartState,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "🌱"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavigationControls.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Tu carrito está vacío por ahora."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavigationControls.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavigationControls.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this) : cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItem} ${removingId === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemRemoving : ''}`,
                                children: [
                                    item.img_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.img_url,
                                        alt: item.product_title,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemImg
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemTitle,
                                                children: item.product_title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/NavigationControls.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemPrice,
                                                children: formatCLP(item.unit_price)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/NavigationControls.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quantityControls,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>updateQuantity(item.id, -1),
                                                        "aria-label": "Restar uno",
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.quantity
                                                    }, item.quantity, false, {
                                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>updateQuantity(item.id, 1),
                                                        "aria-label": "Sumar uno",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/NavigationControls.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                        onClick: ()=>handleRemoveClick(item.id),
                                        title: "Eliminar producto",
                                        "aria-label": "Eliminar producto",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartFooter,
                        children: [
                            cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryRowLabel,
                                            children: [
                                                item.product_title,
                                                item.quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryRowQty,
                                                    children: [
                                                        " ×",
                                                        item.quantity
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/NavigationControls.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/NavigationControls.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryRowValue,
                                            children: formatCLP(item.unit_price * item.quantity)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NavigationControls.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/components/NavigationControls.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryDivider
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalPrice,
                                        children: formatCLP(total)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 179,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pedidos",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartCheckoutBtn,
                                style: {
                                    display: 'block',
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                },
                                children: "Ir a Pagar"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            lastAddedProduct && !isCartOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toastNotification,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '1.2rem'
                        },
                        children: "🌿"
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontWeight: 600
                                },
                                children: "Agregado a tu selección"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#64748b',
                                    fontSize: '0.8rem'
                                },
                                children: lastAddedProduct
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/NavigationControls.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s1(NavigationControls, "A+aL6L9apCbeJl7QdLLtHuBNbPE=", false, function() {
    return [
        useIsHydrated,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = NavigationControls;
var _c;
__turbopack_context__.k.register(_c, "NavigationControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/NovedadesCarousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "addBtn": "NovedadesCarousel-module__mx4VTG__addBtn",
  "arrowBtn": "NovedadesCarousel-module__mx4VTG__arrowBtn",
  "arrowGroup": "NovedadesCarousel-module__mx4VTG__arrowGroup",
  "card": "NovedadesCarousel-module__mx4VTG__card",
  "cardContent": "NovedadesCarousel-module__mx4VTG__cardContent",
  "category": "NovedadesCarousel-module__mx4VTG__category",
  "container": "NovedadesCarousel-module__mx4VTG__container",
  "discountBadge": "NovedadesCarousel-module__mx4VTG__discountBadge",
  "footer": "NovedadesCarousel-module__mx4VTG__footer",
  "header": "NovedadesCarousel-module__mx4VTG__header",
  "image": "NovedadesCarousel-module__mx4VTG__image",
  "imageWrap": "NovedadesCarousel-module__mx4VTG__imageWrap",
  "newBadge": "NovedadesCarousel-module__mx4VTG__newBadge",
  "originalPrice": "NovedadesCarousel-module__mx4VTG__originalPrice",
  "outOfStockBadge": "NovedadesCarousel-module__mx4VTG__outOfStockBadge",
  "outOfStockCard": "NovedadesCarousel-module__mx4VTG__outOfStockCard",
  "preTitle": "NovedadesCarousel-module__mx4VTG__preTitle",
  "price": "NovedadesCarousel-module__mx4VTG__price",
  "priceGroup": "NovedadesCarousel-module__mx4VTG__priceGroup",
  "productTitle": "NovedadesCarousel-module__mx4VTG__productTitle",
  "scrollRow": "NovedadesCarousel-module__mx4VTG__scrollRow",
  "section": "NovedadesCarousel-module__mx4VTG__section",
  "title": "NovedadesCarousel-module__mx4VTG__title",
});
}),
"[project]/app/components/NovedadesCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NovedadesCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProductGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useDistributorStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/NovedadesCarousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const formatCLP = (value)=>new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    }).format(value);
function NovedadesCarousel({ onAddToCart }) {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isDistributorLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "NovedadesCarousel.useDistributorStore[isDistributorLoggedIn]": (s)=>s.status === 'approved'
    }["NovedadesCarousel.useDistributorStore[isDistributorLoggedIn]"]);
    const distributorPrices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "NovedadesCarousel.useDistributorStore[distributorPrices]": (s)=>s.prices
    }["NovedadesCarousel.useDistributorStore[distributorPrices]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NovedadesCarousel.useEffect": ()=>{
            let isMounted = true;
            async function fetchNovedades() {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select(`
          id,
          title,
          category_id,
          description,
          img_url,
          images,
          badge,
          is_new,
          is_distributor,
          categories ( name ),
          product_variants (
            id,
            weight,
            price,
            discount_percent,
            variant_flavor_stock ( flavor_id, stock )
          ),
          product_flavors ( id, flavor_name )
        `).eq('active', true).eq('is_new', true).order('created_at', {
                    ascending: false
                });
                if (!isMounted) return;
                if (!error && data) {
                    const fetched = data.map({
                        "NovedadesCarousel.useEffect.fetchNovedades.fetched": (item)=>({
                                ...item,
                                category_name: item.categories?.name || 'Sin categoría',
                                variants: (item.product_variants || []).map({
                                    "NovedadesCarousel.useEffect.fetchNovedades.fetched": (v)=>({
                                            id: v.id,
                                            weight: v.weight,
                                            price: v.price,
                                            discount_percent: v.discount_percent,
                                            stocks: (v.variant_flavor_stock || []).map({
                                                "NovedadesCarousel.useEffect.fetchNovedades.fetched": (s)=>({
                                                        flavor_id: s.flavor_id,
                                                        stock: s.stock
                                                    })
                                            }["NovedadesCarousel.useEffect.fetchNovedades.fetched"])
                                        })
                                }["NovedadesCarousel.useEffect.fetchNovedades.fetched"]),
                                flavors: item.product_flavors || []
                            })
                    }["NovedadesCarousel.useEffect.fetchNovedades.fetched"]);
                    setProducts(fetched);
                }
                setLoading(false);
            }
            fetchNovedades();
            return ({
                "NovedadesCarousel.useEffect": ()=>{
                    isMounted = false;
                }
            })["NovedadesCarousel.useEffect"];
        }
    }["NovedadesCarousel.useEffect"], []);
    const scroll = (direction)=>{
        scrollRef.current?.scrollBy({
            left: direction * 320,
            behavior: 'smooth'
        });
    };
    if (loading || products.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                    children: "Novedades"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            products.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowBtn,
                                        onClick: ()=>scroll(-1),
                                        "aria-label": "Anterior",
                                        children: "❮"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowBtn,
                                        onClick: ()=>scroll(1),
                                        "aria-label": "Siguiente",
                                        children: "❯"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollRow,
                        ref: scrollRef,
                        children: products.map((p)=>{
                            const firstVariant = p.variants[0];
                            const hasDiscount = firstVariant && firstVariant.discount_percent > 0;
                            const totalStock = p.variants.reduce((sum, v)=>sum + v.stocks.reduce((s, entry)=>s + entry.stock, 0), 0);
                            const showDistributorPrice = p.is_distributor && isDistributorLoggedIn && firstVariant && distributorPrices[firstVariant.id] != null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrap,
                                        children: [
                                            hasDiscount && !showDistributorPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discountBadge,
                                                children: [
                                                    "-",
                                                    firstVariant.discount_percent,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                lineNumber: 123,
                                                columnNumber: 60
                                            }, this),
                                            p.img_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: p.img_url,
                                                alt: p.title,
                                                fill: true,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                                                sizes: "240px"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                                                children: p.category_name
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productTitle,
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceGroup,
                                                        children: firstVariant && (showDistributorPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                                                    children: formatCLP(firstVariant.price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                                                    style: {
                                                                        color: '#2563eb'
                                                                    },
                                                                    children: formatCLP(distributorPrices[firstVariant.id])
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                                                    children: formatCLP(firstVariant.price)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                                                    children: [
                                                                        "Desde ",
                                                                        formatCLP(hasDiscount ? firstVariant.price * (1 - firstVariant.discount_percent / 100) : firstVariant.price)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 27
                                                        }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                                        onClick: ()=>setSelectedProduct(p),
                                                        "aria-label": "Ver opciones",
                                                        disabled: totalStock <= 0,
                                                        style: {
                                                            opacity: totalStock <= 0 ? 0.5 : 1,
                                                            cursor: totalStock <= 0 ? 'not-allowed' : 'pointer'
                                                        },
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                lineNumber: 133,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/NovedadesCarousel.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductModalDetails"], {
                product: selectedProduct,
                onClose: ()=>setSelectedProduct(null),
                onAddToCart: onAddToCart,
                distributorPrices: selectedProduct.is_distributor && isDistributorLoggedIn ? distributorPrices : undefined
            }, void 0, false, {
                fileName: "[project]/app/components/NovedadesCarousel.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/NovedadesCarousel.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(NovedadesCarousel, "uQNuNhAK4eCjbjPUMcD5X0mwSEw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"]
    ];
});
_c = NovedadesCarousel;
var _c;
__turbopack_context__.k.register(_c, "NovedadesCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/ProductGrid.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ProductGrid-module__5--pqq__active",
  "addBtn": "ProductGrid-module__5--pqq__addBtn",
  "cardContent": "ProductGrid-module__5--pqq__cardContent",
  "cardFooter": "ProductGrid-module__5--pqq__cardFooter",
  "catalogContainer": "ProductGrid-module__5--pqq__catalogContainer",
  "catalogHeader": "ProductGrid-module__5--pqq__catalogHeader",
  "catalogSection": "ProductGrid-module__5--pqq__catalogSection",
  "catalogTitle": "ProductGrid-module__5--pqq__catalogTitle",
  "categoriesWrapper": "ProductGrid-module__5--pqq__categoriesWrapper",
  "categoryBtn": "ProductGrid-module__5--pqq__categoryBtn",
  "discountBadge": "ProductGrid-module__5--pqq__discountBadge",
  "fadeImage": "ProductGrid-module__5--pqq__fadeImage",
  "fadeImageActive": "ProductGrid-module__5--pqq__fadeImageActive",
  "fadeImageWrap": "ProductGrid-module__5--pqq__fadeImageWrap",
  "imageContainer": "ProductGrid-module__5--pqq__imageContainer",
  "modalCard": "ProductGrid-module__5--pqq__modalCard",
  "modalCloseBtn": "ProductGrid-module__5--pqq__modalCloseBtn",
  "modalDescription": "ProductGrid-module__5--pqq__modalDescription",
  "modalEnter": "ProductGrid-module__5--pqq__modalEnter",
  "modalImage": "ProductGrid-module__5--pqq__modalImage",
  "modalImageWrap": "ProductGrid-module__5--pqq__modalImageWrap",
  "modalInfoBox": "ProductGrid-module__5--pqq__modalInfoBox",
  "modalOverlay": "ProductGrid-module__5--pqq__modalOverlay",
  "modalTitle": "ProductGrid-module__5--pqq__modalTitle",
  "moreInfoLink": "ProductGrid-module__5--pqq__moreInfoLink",
  "newBadge": "ProductGrid-module__5--pqq__newBadge",
  "originalPrice": "ProductGrid-module__5--pqq__originalPrice",
  "outOfStockBadge": "ProductGrid-module__5--pqq__outOfStockBadge",
  "outOfStockCard": "ProductGrid-module__5--pqq__outOfStockCard",
  "overlayFadeIn": "ProductGrid-module__5--pqq__overlayFadeIn",
  "preTitle": "ProductGrid-module__5--pqq__preTitle",
  "price": "ProductGrid-module__5--pqq__price",
  "priceGroup": "ProductGrid-module__5--pqq__priceGroup",
  "productCard": "ProductGrid-module__5--pqq__productCard",
  "productCategory": "ProductGrid-module__5--pqq__productCategory",
  "productGrid": "ProductGrid-module__5--pqq__productGrid",
  "productImage": "ProductGrid-module__5--pqq__productImage",
  "productTitle": "ProductGrid-module__5--pqq__productTitle",
  "shimmer": "ProductGrid-module__5--pqq__shimmer",
  "stateMessage": "ProductGrid-module__5--pqq__stateMessage",
  "stockText": "ProductGrid-module__5--pqq__stockText",
  "tagBadge": "ProductGrid-module__5--pqq__tagBadge",
  "topLeftBadges": "ProductGrid-module__5--pqq__topLeftBadges",
});
}),
"[project]/app/components/ProductGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductModalDetails",
    ()=>ProductModalDetails,
    "default",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useDistributorStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/ProductGrid.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const formatCLP = (value)=>new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    }).format(value);
function stockFor(variant, flavorId) {
    if (!variant || flavorId == null) return 0;
    return variant.stocks.find((s)=>s.flavor_id === flavorId)?.stock ?? 0;
}
function ProductCard({ product, onOpenModal, viewingDistributorTab, isDistributorLoggedIn, distributorPrices, onOpenDistributorModal }) {
    _s();
    const [activeImageIndex, setActiveImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const images = product.images && product.images.length > 0 ? product.images : product.img_url ? [
        product.img_url
    ] : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductCard.useEffect": ()=>{
            if (images.length <= 1) return;
            const interval = setInterval({
                "ProductCard.useEffect.interval": ()=>{
                    setActiveImageIndex({
                        "ProductCard.useEffect.interval": (prev)=>(prev + 1) % images.length
                    }["ProductCard.useEffect.interval"]);
                }
            }["ProductCard.useEffect.interval"], 2000);
            return ({
                "ProductCard.useEffect": ()=>clearInterval(interval)
            })["ProductCard.useEffect"];
        }
    }["ProductCard.useEffect"], [
        images.length
    ]);
    const totalStock = product.variants.reduce((sum, v)=>sum + v.stocks.reduce((s, e)=>s + e.stock, 0), 0);
    const isOutOfStock = totalStock <= 0;
    const firstVariant = product.variants[0];
    const hasDiscount = firstVariant && firstVariant.discount_percent > 0;
    const isLocked = viewingDistributorTab && !isDistributorLoggedIn;
    const variantsWithDistPrice = product.variants.map((v)=>({
            v,
            dp: distributorPrices[v.id]
        })).filter((x)=>x.dp != null);
    const cheapestDistributor = variantsWithDistPrice.length > 0 ? variantsWithDistPrice.reduce((min, x)=>x.dp < min.dp ? x : min) : undefined;
    const showDistributorPrice = viewingDistributorTab && isDistributorLoggedIn && cheapestDistributor != null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCard} ${isOutOfStock ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outOfStockCard : ''} ${isLocked ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outOfStockCard : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topLeftBadges,
                        children: [
                            isOutOfStock ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outOfStockBadge,
                                children: "Sin stock"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this) : product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagBadge,
                                children: product.badge
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 101,
                                columnNumber: 30
                            }, this),
                            product.is_distributor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: '#1e293b',
                                    color: '#fff',
                                    fontSize: '0.7rem',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    fontWeight: 600
                                },
                                children: "MAYORISTA"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    hasDiscount && !isLocked && !showDistributorPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discountBadge,
                        children: [
                            "-",
                            firstVariant.discount_percent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 109,
                        columnNumber: 63
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeImageWrap,
                        children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: img,
                                alt: product.title,
                                fill: true,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeImage} ${activeImageIndex === idx ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeImageActive : ''}`,
                                sizes: "(max-width: 768px) 100vw, 300px"
                            }, img + idx, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProductGrid.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCategory,
                        children: product.category_name || 'Sin categoría'
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productTitle,
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stockText,
                        style: {
                            fontSize: '0.8rem',
                            color: '#64748b',
                            margin: '0.2rem 0'
                        },
                        children: totalStock > 0 ? `${product.variants.length} opciones de peso` : 'Agotado'
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFooter,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceGroup,
                                children: isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.8rem',
                                        color: '#d97706',
                                        fontWeight: 600
                                    },
                                    children: "Inicia sesión para ver precio"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this) : showDistributorPrice ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                            children: formatCLP(cheapestDistributor.v.price)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                            style: {
                                                color: '#2563eb'
                                            },
                                            children: [
                                                "Desde ",
                                                formatCLP(cheapestDistributor.dp)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this) : firstVariant ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                            children: formatCLP(firstVariant.price)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 145,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                            children: [
                                                "Desde ",
                                                formatCLP(hasDiscount ? firstVariant.price * (1 - firstVariant.discount_percent / 100) : firstVariant.price)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this) : null
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                style: {
                                    background: '#334155'
                                },
                                onClick: onOpenDistributorModal,
                                children: "Acceso"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                onClick: ()=>onOpenModal(product),
                                disabled: isOutOfStock,
                                children: "Ver Opciones"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProductGrid.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProductGrid.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "qk7JntPPiTNaiCQw83ORGnspzyQ=");
_c = ProductCard;
function ProductModalDetails({ product, onClose, onAddToCart, distributorPrices }) {
    _s1();
    const [activeImageIndex, setActiveImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedVariantId, setSelectedVariantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(product.variants[0]?.id || 0);
    const [flavorQuantities, setFlavorQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const images = product.images && product.images.length > 0 ? product.images : product.img_url ? [
        product.img_url
    ] : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductModalDetails.useEffect": ()=>{
            if (images.length <= 1) return;
            const interval = setInterval({
                "ProductModalDetails.useEffect.interval": ()=>{
                    setActiveImageIndex({
                        "ProductModalDetails.useEffect.interval": (prev)=>(prev + 1) % images.length
                    }["ProductModalDetails.useEffect.interval"]);
                }
            }["ProductModalDetails.useEffect.interval"], 2000);
            return ({
                "ProductModalDetails.useEffect": ()=>clearInterval(interval)
            })["ProductModalDetails.useEffect"];
        }
    }["ProductModalDetails.useEffect"], [
        images.length
    ]);
    const currentVariant = product.variants.find((v)=>v.id === selectedVariantId) || product.variants[0];
    const handleQuantityChange = (flavorId, qty, maxStock)=>{
        const validQty = Math.max(0, Math.min(qty, maxStock));
        setFlavorQuantities((prev)=>({
                ...prev,
                [flavorId]: validQty
            }));
    };
    const currentDistributorPrice = currentVariant && distributorPrices ? distributorPrices[currentVariant.id] : undefined;
    const unitPrice = ()=>{
        if (!currentVariant) return 0;
        if (currentDistributorPrice != null) return currentDistributorPrice;
        const disc = currentVariant.discount_percent || 0;
        return disc > 0 ? currentVariant.price * (1 - disc / 100) : currentVariant.price;
    };
    const handleAddAll = ()=>{
        if (!currentVariant) return;
        const finalPrice = unitPrice();
        Object.entries(flavorQuantities).forEach(([flavorIdStr, qty])=>{
            if (qty > 0) {
                const flavorId = parseInt(flavorIdStr, 10);
                const flavorObj = product.flavors.find((f)=>f.id === flavorId);
                if (flavorObj) {
                    const maxStock = stockFor(currentVariant, flavorObj.id);
                    onAddToCart({
                        product_id: product.id,
                        product_title: `${product.title} (${currentVariant.weight} - ${flavorObj.flavor_name})`,
                        variant_id: currentVariant.id,
                        flavor_id: flavorObj.id,
                        selected_weight: currentVariant.weight,
                        selected_flavor: flavorObj.flavor_name,
                        unit_price: finalPrice,
                        quantity: qty,
                        img_url: product.img_url,
                        max_stock: maxStock
                    });
                }
            }
        });
        onClose();
    };
    const totalSelectedCount = Object.values(flavorQuantities).reduce((sum, q)=>sum + q, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCard,
            onClick: (e)=>e.stopPropagation(),
            style: {
                maxWidth: '520px',
                maxHeight: '90vh',
                overflowY: 'auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCloseBtn,
                    onClick: onClose,
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/app/components/ProductGrid.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalImageWrap,
                    style: {
                        position: 'relative'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeImageWrap,
                        children: images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: img,
                                alt: product.title,
                                fill: true,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalImage} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeImage} ${activeImageIndex === idx ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeImageActive : ''}`
                            }, img + idx, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 249,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 247,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/ProductGrid.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInfoBox,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCategory,
                            children: product.category_name || 'Sin categoría'
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalTitle,
                            children: product.title
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        product.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalDescription,
                            children: product.description
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 258,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                margin: '1rem 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        display: 'block',
                                        marginBottom: '0.4rem'
                                    },
                                    children: "Selecciona el Peso:"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '8px',
                                        flexWrap: 'wrap'
                                    },
                                    children: product.variants.map((v)=>{
                                        const isSelected = selectedVariantId === v.id;
                                        const vDistPrice = distributorPrices?.[v.id];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setSelectedVariantId(v.id);
                                                setFlavorQuantities({});
                                            },
                                            style: {
                                                padding: '8px 14px',
                                                borderRadius: '8px',
                                                border: isSelected ? '2px solid #22c55e' : '1px solid #cbd5e1',
                                                background: isSelected ? '#f0fdf4' : '#fff',
                                                color: isSelected ? '#15803d' : '#334155',
                                                fontWeight: isSelected ? 600 : 400,
                                                cursor: 'pointer',
                                                fontSize: '0.85rem'
                                            },
                                            children: [
                                                v.weight,
                                                " -",
                                                ' ',
                                                vDistPrice != null ? formatCLP(vDistPrice) : formatCLP(v.discount_percent > 0 ? v.price * (1 - v.discount_percent / 100) : v.price),
                                                vDistPrice == null && v.discount_percent > 0 && ` (-${v.discount_percent}%)`
                                            ]
                                        }, v.id, true, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                margin: '1.2rem 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: {
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        display: 'block',
                                        marginBottom: '0.6rem'
                                    },
                                    children: "Elige los sabores y cantidades:"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px'
                                    },
                                    children: product.flavors.map((f)=>{
                                        const maxStock = stockFor(currentVariant, f.id);
                                        const currentQty = flavorQuantities[f.id] || 0;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '10px 12px',
                                                borderRadius: '8px',
                                                border: currentQty > 0 ? '2px solid #22c55e' : '1px solid #e2e8f0',
                                                background: currentQty > 0 ? '#f0fdf4' : '#fafaf9'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: 600,
                                                                fontSize: '0.9rem',
                                                                color: '#1e293b',
                                                                display: 'block'
                                                            },
                                                            children: f.flavor_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                                            lineNumber: 319,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.75rem',
                                                                color: maxStock > 0 ? '#64748b' : '#dc2626'
                                                            },
                                                            children: maxStock > 0 ? `Stock disponible: ${maxStock}` : 'Agotado'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: maxStock <= 0 || currentQty <= 0,
                                                            onClick: ()=>handleQuantityChange(f.id, currentQty - 1, maxStock),
                                                            style: {
                                                                width: '28px',
                                                                height: '28px',
                                                                borderRadius: '6px',
                                                                border: '1px solid #cbd5e1',
                                                                background: '#fff',
                                                                cursor: 'pointer'
                                                            },
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            max: maxStock,
                                                            value: currentQty,
                                                            onChange: (e)=>handleQuantityChange(f.id, parseInt(e.target.value) || 0, maxStock),
                                                            style: {
                                                                width: '45px',
                                                                textAlign: 'center',
                                                                padding: '4px',
                                                                borderRadius: '6px',
                                                                border: '1px solid #cbd5e1',
                                                                fontSize: '0.85rem'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                                            lineNumber: 334,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: maxStock <= 0 || currentQty >= maxStock,
                                                            onClick: ()=>handleQuantityChange(f.id, currentQty + 1, maxStock),
                                                            style: {
                                                                width: '28px',
                                                                height: '28px',
                                                                borderRadius: '6px',
                                                                border: '1px solid #cbd5e1',
                                                                background: '#fff',
                                                                cursor: 'pointer'
                                                            },
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, f.id, true, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 306,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFooter,
                            style: {
                                margin: '1.2rem 0 0 0',
                                padding: 0,
                                border: 'none',
                                background: 'transparent',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceGroup,
                                    children: [
                                        currentDistributorPrice != null && currentVariant && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                            children: formatCLP(currentVariant.price)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                            style: currentDistributorPrice != null ? {
                                                color: '#2563eb'
                                            } : undefined,
                                            children: [
                                                formatCLP(unitPrice()),
                                                " c/u"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 358,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                    disabled: totalSelectedCount <= 0,
                                    onClick: handleAddAll,
                                    style: {
                                        opacity: totalSelectedCount <= 0 ? 0.6 : 1
                                    },
                                    children: [
                                        "+ Agregar al carrito (",
                                        totalSelectedCount,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 357,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ProductGrid.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/ProductGrid.tsx",
            lineNumber: 242,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ProductGrid.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
_s1(ProductModalDetails, "c91fKGq+ODjsGolVs160/FA2w84=");
_c1 = ProductModalDetails;
function ProductGrid({ onAddToCart, onOpenDistributorModal }) {
    _s2();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Todos'
    ]);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Todos');
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const ITEMS_PER_PAGE = 12;
    const isDistributorLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "ProductGrid.useDistributorStore[isDistributorLoggedIn]": (s)=>s.status === 'approved'
    }["ProductGrid.useDistributorStore[isDistributorLoggedIn]"]);
    const distributorPrices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "ProductGrid.useDistributorStore[distributorPrices]": (s)=>s.prices
    }["ProductGrid.useDistributorStore[distributorPrices]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGrid.useEffect": ()=>{
            async function fetchProducts() {
                setLoading(true);
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select(`
          id,
          title,
          category_id,
          description,
          img_url,
          images,
          badge,
          is_new,
          is_distributor,
          categories ( name ),
          product_variants (
            id,
            weight,
            price,
            discount_percent,
            variant_flavor_stock ( flavor_id, stock )
          ),
          product_flavors ( id, flavor_name )
        `).eq('active', true).order('created_at', {
                    ascending: false
                });
                if (error) {
                    console.error('Error fetching products:', error.message || error);
                    setError('No se pudieron cargar los productos.');
                    setLoading(false);
                    return;
                }
                if (data) {
                    const fetched = data.map({
                        "ProductGrid.useEffect.fetchProducts.fetched": (item)=>({
                                ...item,
                                category_name: item.categories?.name || 'Sin categoría',
                                variants: (item.product_variants || []).map({
                                    "ProductGrid.useEffect.fetchProducts.fetched": (v)=>({
                                            id: v.id,
                                            weight: v.weight,
                                            price: v.price,
                                            discount_percent: v.discount_percent,
                                            stocks: (v.variant_flavor_stock || []).map({
                                                "ProductGrid.useEffect.fetchProducts.fetched": (s)=>({
                                                        flavor_id: s.flavor_id,
                                                        stock: s.stock
                                                    })
                                            }["ProductGrid.useEffect.fetchProducts.fetched"])
                                        })
                                }["ProductGrid.useEffect.fetchProducts.fetched"]),
                                flavors: item.product_flavors || []
                            })
                    }["ProductGrid.useEffect.fetchProducts.fetched"]);
                    setProducts(fetched);
                    const categoryNames = Array.from(new Set(fetched.map({
                        "ProductGrid.useEffect.fetchProducts.categoryNames": (p)=>p.category_name
                    }["ProductGrid.useEffect.fetchProducts.categoryNames"]).filter({
                        "ProductGrid.useEffect.fetchProducts.categoryNames": (name)=>Boolean(name)
                    }["ProductGrid.useEffect.fetchProducts.categoryNames"])));
                    const hasDistributorProducts = fetched.some({
                        "ProductGrid.useEffect.fetchProducts.hasDistributorProducts": (p)=>p.is_distributor
                    }["ProductGrid.useEffect.fetchProducts.hasDistributorProducts"]);
                    setCategories([
                        'Todos',
                        ...categoryNames,
                        ...hasDistributorProducts ? [
                            'Distribuidor'
                        ] : []
                    ]);
                }
                setLoading(false);
            }
            fetchProducts();
        }
    }["ProductGrid.useEffect"], []);
    // Vuelve a la página 1 cada vez que cambia el filtro de categoría
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGrid.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["ProductGrid.useEffect"], [
        activeCategory
    ]);
    const goToPage = (page)=>{
        setCurrentPage(page);
        const catalogSection = document.getElementById('catalogo');
        if (catalogSection) {
            catalogSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    const viewingDistributorTab = activeCategory === 'Distribuidor';
    const filteredProducts = viewingDistributorTab ? products.filter((p)=>p.is_distributor) : activeCategory === 'Todos' ? products : products.filter((p)=>p.category_name === activeCategory);
    const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    // Ventana de números visibles alrededor de la página actual (máx. 7 botones + flechas)
    const getVisiblePages = ()=>{
        if (totalPages <= 7) return Array.from({
            length: totalPages
        }, (_, i)=>i + 1);
        const pages = new Set([
            1,
            totalPages,
            currentPage,
            currentPage - 1,
            currentPage + 1
        ]);
        const sorted = Array.from(pages).filter((p)=>p >= 1 && p <= totalPages).sort((a, b)=>a - b);
        const withEllipsis = [];
        sorted.forEach((p, idx)=>{
            if (idx > 0 && p - sorted[idx - 1] > 1) withEllipsis.push('ellipsis');
            withEllipsis.push(p);
        });
        return withEllipsis;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "catalogo",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalogSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalogContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalogHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].preTitle,
                                children: "Catálogo"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalogTitle,
                                children: "Nuestros Productos"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoriesWrapper,
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryBtn} ${activeCategory === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                        onClick: ()=>setActiveCategory(cat),
                                        children: cat === 'Distribuidor' ? '🤝 Zona Distribuidores' : cat
                                    }, cat, false, {
                                        fileName: "[project]/app/components/ProductGrid.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateMessage,
                        children: "Cargando..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 524,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateMessage,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 525,
                        columnNumber: 19
                    }, this),
                    !loading && !error && filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateMessage,
                        children: "No hay productos disponibles."
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 526,
                        columnNumber: 65
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGrid,
                        children: paginatedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductCard, {
                                product: product,
                                onOpenModal: (p)=>setSelectedProduct(p),
                                viewingDistributorTab: viewingDistributorTab,
                                isDistributorLoggedIn: isDistributorLoggedIn,
                                distributorPrices: distributorPrices,
                                onOpenDistributorModal: onOpenDistributorModal
                            }, product.id, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 530,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    !loading && !error && totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.4rem',
                            marginTop: '2.5rem',
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>goToPage(Math.max(1, currentPage - 1)),
                                disabled: currentPage === 1,
                                style: {
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '9999px',
                                    border: '1px solid #e2e8f0',
                                    background: '#fff',
                                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                    opacity: currentPage === 1 ? 0.4 : 1,
                                    fontSize: '0.9rem'
                                },
                                "aria-label": "Página anterior",
                                children: "‹"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 553,
                                columnNumber: 13
                            }, this),
                            getVisiblePages().map((p, idx)=>p === 'ellipsis' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        padding: '0 0.3rem',
                                        color: '#a8a29e'
                                    },
                                    children: "…"
                                }, `ellipsis-${idx}`, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 574,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>goToPage(p),
                                    style: {
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '9999px',
                                        border: p === currentPage ? 'none' : '1px solid #e2e8f0',
                                        background: p === currentPage ? '#1c1917' : '#fff',
                                        color: p === currentPage ? '#fff' : '#334155',
                                        fontWeight: p === currentPage ? 700 : 500,
                                        cursor: 'pointer',
                                        fontSize: '0.85rem'
                                    },
                                    children: p
                                }, p, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>goToPage(Math.min(totalPages, currentPage + 1)),
                                disabled: currentPage === totalPages,
                                style: {
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '9999px',
                                    border: '1px solid #e2e8f0',
                                    background: '#fff',
                                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                    opacity: currentPage === totalPages ? 0.4 : 1,
                                    fontSize: '0.9rem'
                                },
                                "aria-label": "Página siguiente",
                                children: "›"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 599,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 543,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProductGrid.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductModalDetails, {
                product: selectedProduct,
                onClose: ()=>setSelectedProduct(null),
                onAddToCart: onAddToCart,
                distributorPrices: viewingDistributorTab && isDistributorLoggedIn ? distributorPrices : undefined
            }, void 0, false, {
                fileName: "[project]/app/components/ProductGrid.tsx",
                lineNumber: 622,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProductGrid.tsx",
        lineNumber: 509,
        columnNumber: 5
    }, this);
}
_s2(ProductGrid, "8H5X8z+hGZoRatl3Lz0jFVeNYJ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"]
    ];
});
_c2 = ProductGrid;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProductCard");
__turbopack_context__.k.register(_c1, "ProductModalDetails");
__turbopack_context__.k.register(_c2, "ProductGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/WholesaleAuthModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WholesaleAuthModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useDistributorStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rut$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rut.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function WholesaleAuthModal({ onClose }) {
    _s();
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "WholesaleAuthModal.useDistributorStore[login]": (s)=>s.login
    }["WholesaleAuthModal.useDistributorStore[login]"]);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"])({
        "WholesaleAuthModal.useDistributorStore[register]": (s)=>s.register
    }["WholesaleAuthModal.useDistributorStore[register]"]);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('login');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [rut, setRut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [regEmail, setRegEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [regPassword, setRegPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const inputStyle = {
        width: '100%',
        padding: '0.6rem',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
    };
    const labelStyle = {
        fontSize: '0.8rem',
        fontWeight: 600,
        display: 'block',
        marginBottom: '0.3rem'
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        setError(null);
        setLoading(true);
        const { error } = await login(email.trim(), password);
        setLoading(false);
        if (error) return setError(error);
        onClose();
    };
    const handleRegister = async (e)=>{
        e.preventDefault();
        setError(null);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rut$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidRut"])(rut)) return setError('El RUT ingresado no es válido.');
        if (!companyName.trim() || !phone.trim() || !regEmail.trim() || regPassword.length < 6) {
            return setError('Completa todos los campos. La contraseña debe tener al menos 6 caracteres.');
        }
        setLoading(true);
        const { error } = await register({
            rut: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rut$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRut"])(rut),
            company_name: companyName.trim(),
            phone: phone.trim(),
            email: regEmail.trim(),
            password: regPassword
        });
        setLoading(false);
        if (error) return setError(error);
        const whatsappNumber = ("TURBOPACK compile-time value", "56942677678");
        if ("TURBOPACK compile-time truthy", 1) {
            const message = `Me acabo de inscribir para distribuidor, revisa mi solicitud.\n\nEmpresa: ${companyName.trim()}\nRUT: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rut$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRut"])(rut)}\nTeléfono: ${phone.trim()}\nCorreo: ${regEmail.trim()}`;
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
        }
        setSuccess(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '1rem'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: '#fff',
                padding: '2rem',
                borderRadius: '12px',
                maxWidth: '420px',
                width: '100%',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                    },
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginBottom: '0.75rem',
                                fontWeight: 'bold'
                            },
                            children: "¡Solicitud enviada!"
                        }, void 0, false, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '0.85rem',
                                color: '#64748b',
                                marginBottom: '1.5rem'
                            },
                            children: "Recibimos tu inscripción. Te avisaremos cuando tu cuenta esté aprobada y podrás iniciar sesión aquí mismo."
                        }, void 0, false, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            style: {
                                width: '100%',
                                padding: '10px',
                                background: '#1c1917',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 600,
                                cursor: 'pointer'
                            },
                            children: "Entendido"
                        }, void 0, false, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            style: {
                                marginBottom: '0.25rem',
                                fontWeight: 'bold'
                            },
                            children: "Portal de Distribuidores"
                        }, void 0, false, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '0.85rem',
                                color: '#64748b',
                                marginBottom: '1.25rem'
                            },
                            children: mode === 'login' ? 'Ingresa con tu cuenta de distribuidor.' : 'Inscríbete para acceder a precios mayoristas.'
                        }, void 0, false, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '8px',
                                marginBottom: '1.25rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setMode('login');
                                        setError(null);
                                    },
                                    style: {
                                        flex: 1,
                                        padding: '8px',
                                        borderRadius: '8px',
                                        border: mode === 'login' ? '2px solid #16a34a' : '1px solid #e2e8f0',
                                        background: mode === 'login' ? '#f0fdf4' : '#fff',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        fontSize: '0.85rem'
                                    },
                                    children: "Iniciar sesión"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setMode('register');
                                        setError(null);
                                    },
                                    style: {
                                        flex: 1,
                                        padding: '8px',
                                        borderRadius: '8px',
                                        border: mode === 'register' ? '2px solid #16a34a' : '1px solid #e2e8f0',
                                        background: mode === 'register' ? '#f0fdf4' : '#fff',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        fontSize: '0.85rem'
                                    },
                                    children: "Inscribirme"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this),
                        mode === 'login' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleLogin,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '0.9rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Correo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            required: true,
                                            style: inputStyle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Contraseña"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            required: true,
                                            style: inputStyle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 107,
                                    columnNumber: 17
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#dc2626',
                                        fontSize: '0.82rem',
                                        marginBottom: '0.9rem'
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    style: {
                                        width: '100%',
                                        padding: '10px',
                                        background: '#16a34a',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    },
                                    children: loading ? 'Ingresando...' : 'Ingresar'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 112,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 102,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleRegister,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '0.7rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "RUT"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: rut,
                                            onChange: (e)=>setRut(e.target.value),
                                            placeholder: "12345678-9",
                                            required: true,
                                            style: inputStyle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '0.7rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Nombre de la empresa"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: companyName,
                                            onChange: (e)=>setCompanyName(e.target.value),
                                            required: true,
                                            style: inputStyle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '0.7rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Teléfono"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: phone,
                                            onChange: (e)=>setPhone(e.target.value),
                                            required: true,
                                            style: inputStyle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '0.7rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Correo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: regEmail,
                                            onChange: (e)=>setRegEmail(e.target.value),
                                            required: true,
                                            style: inputStyle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '1rem'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "Contraseña"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: regPassword,
                                            onChange: (e)=>setRegPassword(e.target.value),
                                            required: true,
                                            minLength: 6,
                                            style: inputStyle
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#dc2626',
                                        fontSize: '0.82rem',
                                        marginBottom: '0.9rem'
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: loading,
                                    style: {
                                        width: '100%',
                                        padding: '10px',
                                        background: '#16a34a',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    },
                                    children: loading ? 'Enviando...' : 'Enviar solicitud'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                            lineNumber: 117,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/WholesaleAuthModal.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/WholesaleAuthModal.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/WholesaleAuthModal.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(WholesaleAuthModal, "TECxLcgEgHX1uNwHTVy5yIawbxg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useDistributorStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDistributorStore"]
    ];
});
_c = WholesaleAuthModal;
var _c;
__turbopack_context__.k.register(_c, "WholesaleAuthModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NovedadesCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ProductGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/HeaderNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WholesaleAuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/WholesaleAuthModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavigationControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavigationControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AlertBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useCartStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "Home.useCartStore[addToCart]": (state)=>state.addToCart
    }["Home.useCartStore[addToCart]"]);
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "Home.useCartStore[cartItems]": (state)=>state.cart
    }["Home.useCartStore[cartItems]"]);
    const removeFromCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"])({
        "Home.useCartStore[removeFromCart]": (state)=>state.removeItem
    }["Home.useCartStore[removeFromCart]"]);
    const [lastAdded, setLastAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDistributorModalOpen, setIsDistributorModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAddToCart = (item)=>{
        addToCart(item);
        setLastAdded(item.product_title);
        setTimeout(()=>setLastAdded(null), 3500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            backgroundColor: '#fdfcf1',
            minHeight: '100vh'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HeaderNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cartItems: cartItems.map((i)=>({
                        id: i.product_id,
                        title: i.product_title,
                        price: String(i.unit_price),
                        img: i.img_url || ''
                    })),
                onRemoveFromCart: (index)=>{
                    const itemToRemove = cartItems[index];
                    if (itemToRemove) {
                        removeFromCart(itemToRemove.product_id);
                    }
                },
                onOpenDistributorModal: ()=>setIsDistributorModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavigationControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                lastAddedProduct: lastAdded
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            "+     ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onAddToCart: handleAddToCart
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onAddToCart: handleAddToCart,
                onOpenDistributorModal: ()=>setIsDistributorModalOpen(true)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            isDistributorModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$WholesaleAuthModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setIsDistributorModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 48,
                columnNumber: 33
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Home, "Wo8IBPI2R/fQZcdDVS010c/mbUE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCartStore"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/rut.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Utilidades para validar y formatear RUT chileno.
 */ // Limpia el RUT dejando solo dígitos y la K/k final
__turbopack_context__.s([
    "cleanRut",
    ()=>cleanRut,
    "formatRut",
    ()=>formatRut,
    "isValidRut",
    ()=>isValidRut
]);
function cleanRut(rut) {
    return rut.replace(/[^0-9kK]/g, '').toUpperCase();
}
// Calcula el dígito verificador con el algoritmo módulo 11
function computeVerifier(rutBody) {
    let sum = 0;
    let multiplier = 2;
    for(let i = rutBody.length - 1; i >= 0; i--){
        sum += parseInt(rutBody[i], 10) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    const remainder = 11 - sum % 11;
    if (remainder === 11) return '0';
    if (remainder === 10) return 'K';
    return String(remainder);
}
function isValidRut(rut) {
    const clean = cleanRut(rut);
    if (clean.length < 2) return false;
    const body = clean.slice(0, -1);
    const verifier = clean.slice(-1);
    if (!/^\d+$/.test(body)) return false;
    return computeVerifier(body) === verifier;
}
function formatRut(rut) {
    const clean = cleanRut(rut);
    if (clean.length < 2) return clean;
    const body = clean.slice(0, -1);
    const verifier = clean.slice(-1);
    const bodyWithDots = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${bodyWithDots}-${verifier}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$12$2e$7_$40$supabase$2b$supabase$2d$js$40$2$2e$112$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.12.7_@supabase+supabase-js@2.112.3/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://yczueyygfqjqfcvastse.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljenVleXlnZnFqcWZjdmFzdHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxNDI0MjEsImV4cCI6MjEwMzcxODQyMX0.rVGafkzVsbE7ViWVoLyyx7HcDZFulnVMcp-rJueV8PQ");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$12$2e$7_$40$supabase$2b$supabase$2d$js$40$2$2e$112$2e$3$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseAnonKey);
if ("TURBOPACK compile-time truthy", 1) {
    window.supabase = supabase;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useCartStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react_cd645592ff6ce0ffd2f86ae215c2ba25$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.15_@types+react_cd645592ff6ce0ffd2f86ae215c2ba25/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react_cd645592ff6ce0ffd2f86ae215c2ba25$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.15_@types+react_cd645592ff6ce0ffd2f86ae215c2ba25/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react_cd645592ff6ce0ffd2f86ae215c2ba25$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react_cd645592ff6ce0ffd2f86ae215c2ba25$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        cart: [],
        lastUpdated: null,
        addToCart: (item)=>{
            set((state)=>{
                const compositeId = `${item.variant_id}-${item.flavor_id}`;
                const existingIndex = state.cart.findIndex((c)=>c.id === compositeId);
                const incomingQty = Number.isFinite(item.quantity) && item.quantity > 0 ? item.quantity : 1;
                const itemMaxStock = Number.isFinite(item.max_stock) ? item.max_stock : 0;
                let newCart;
                console.log('[addToCart] item recibido:', item);
                console.log('[addToCart] compositeId:', compositeId, 'incomingQty:', incomingQty, 'itemMaxStock:', itemMaxStock);
                if (existingIndex > -1) {
                    const current = state.cart[existingIndex];
                    const currentQty = Number.isFinite(current.quantity) ? current.quantity : 0;
                    const newQty = Math.min(currentQty + incomingQty, itemMaxStock);
                    if (newQty <= currentQty) {
                        console.warn('[addToCart] BLOQUEADO: ya en el tope de stock', {
                            currentQty,
                            itemMaxStock
                        });
                        return state;
                    }
                    newCart = [
                        ...state.cart
                    ];
                    newCart[existingIndex] = {
                        ...current,
                        unit_price: item.unit_price,
                        max_stock: itemMaxStock,
                        quantity: newQty
                    };
                } else {
                    if (itemMaxStock <= 0) {
                        console.warn('[addToCart] BLOQUEADO: itemMaxStock <= 0', item);
                        return state;
                    }
                    const cappedQty = Math.min(incomingQty, itemMaxStock);
                    newCart = [
                        ...state.cart,
                        {
                            ...item,
                            id: compositeId,
                            quantity: cappedQty,
                            max_stock: itemMaxStock
                        }
                    ];
                }
                console.log('[addToCart] carrito resultante:', newCart);
                return {
                    cart: newCart,
                    lastUpdated: Date.now()
                };
            });
        },
        updateQuantity: (id, delta)=>{
            set((state)=>({
                    cart: state.cart.map((item)=>{
                        if (item.id === id) {
                            const currentQty = Number.isFinite(item.quantity) ? item.quantity : 0;
                            const maxStock = Number.isFinite(item.max_stock) ? item.max_stock : 0;
                            const newQty = currentQty + delta;
                            if (newQty <= 0) return null;
                            if (delta > 0 && newQty > maxStock) return item;
                            return {
                                ...item,
                                quantity: newQty
                            };
                        }
                        return item;
                    }).filter(Boolean),
                    lastUpdated: Date.now()
                }));
        },
        removeItem: (id)=>{
            set((state)=>({
                    cart: state.cart.filter((item)=>item.id !== id),
                    lastUpdated: Date.now()
                }));
        },
        clearCart: ()=>set({
                cart: [],
                lastUpdated: null
            }),
        itemCount: ()=>get().cart.reduce((total, item)=>total + (Number.isFinite(item.quantity) ? item.quantity : 0), 0)
    }), {
    name: 'cart-storage',
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react_cd645592ff6ce0ffd2f86ae215c2ba25$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage),
    onRehydrateStorage: ()=>(state)=>{
            if (!state) return;
            // Descarta cualquier ítem corrupto o de una versión anterior del carrito
            // (forma vieja, quantity/max_stock inválidos, etc.) antes de que llegue a renderizarse.
            state.cart = (state.cart || []).filter((item)=>item && typeof item.id === 'string' && typeof item.variant_id === 'number' && typeof item.flavor_id === 'number' && Number.isFinite(item.quantity) && item.quantity > 0 && Number.isFinite(item.max_stock) && Number.isFinite(item.unit_price));
            if (state.lastUpdated) {
                const now = Date.now();
                if (now - state.lastUpdated > THREE_DAYS_IN_MS) {
                    state.clearCart();
                }
            }
        }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useDistributorStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDistributorStore",
    ()=>useDistributorStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react_cd645592ff6ce0ffd2f86ae215c2ba25$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.15_@types+react_cd645592ff6ce0ffd2f86ae215c2ba25/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
;
;
const useDistributorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react_cd645592ff6ce0ffd2f86ae215c2ba25$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        profile: null,
        prices: {},
        status: 'checking',
        refresh: async ()=>{
            const { data: { session } } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
            if (!session) {
                set({
                    profile: null,
                    prices: {},
                    status: 'guest'
                });
                return;
            }
            const { data: distRow } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('distributors').select('company_name, active').eq('user_id', session.user.id).maybeSingle();
            if (distRow && distRow.active) {
                const { data: priceRows } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].rpc('get_distributor_prices');
                const priceMap = {};
                (priceRows || []).forEach((r)=>{
                    priceMap[r.variant_id] = r.price;
                });
                set({
                    profile: {
                        company_name: distRow.company_name,
                        email: session.user.email || ''
                    },
                    prices: priceMap,
                    status: 'approved'
                });
                return;
            }
            const { data: appRow } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('distributor_applications').select('id').eq('user_id', session.user.id).maybeSingle();
            set({
                profile: null,
                prices: {},
                status: appRow ? 'pending' : 'guest'
            });
        },
        login: async (email, password)=>{
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email,
                password
            });
            if (error) return {
                error: error.message
            };
            await get().refresh();
            if (get().status === 'pending') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                set({
                    status: 'guest'
                });
                return {
                    error: 'Tu solicitud todavía está en revisión. Te avisaremos cuando esté aprobada.'
                };
            }
            if (get().status === 'guest') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
                return {
                    error: 'Esta cuenta no está registrada como distribuidor.'
                };
            }
            return {
                error: null
            };
        },
        register: async ({ rut, company_name, phone, email, password })=>{
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                email,
                password
            });
            if (error) return {
                error: error.message
            };
            if (!data.user) return {
                error: 'No se pudo crear la cuenta.'
            };
            const { error: appError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('distributor_applications').insert({
                rut,
                company_name,
                phone,
                email,
                user_id: data.user.id
            });
            if (appError) return {
                error: appError.message
            };
            await get().refresh();
            return {
                error: null
            };
        },
        logout: async ()=>{
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            set({
                profile: null,
                prices: {},
                status: 'guest'
            });
        }
    }));
// Mantiene la sesión sincronizada al cargar la página y entre pestañas
if ("TURBOPACK compile-time truthy", 1) {
    useDistributorStore.getState().refresh();
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange(()=>{
        useDistributorStore.getState().refresh();
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0uas6cx._.js.map