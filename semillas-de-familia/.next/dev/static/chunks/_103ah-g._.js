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
                                src: slide.img_url || '/images/slider/image1.png',
                                alt: slide.title,
                                title: slide.title,
                                description: slide.subtitle || '',
                                buttonText: slide.btn_text || 'Ver Catálogo'
                            })
                    }["CarouselHero.useEffect.fetchSlides"]));
                } else {
                    // Solo caemos al slide de bienvenida si Supabase realmente no tiene
                    // ningún slide activo (o falló la consulta), nunca como estado inicial.
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
    // Arranca (o reinicia) el temporizador de autoplay
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
    // Cada vez que cambia el índice actual, desplazamos el contenedor hasta ese slide
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
        // Navegación manual: le damos otros 5s completos antes del próximo avance automático
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
            currentSlide && // key={currentSlide.id} fuerza a React a remontar la imagen en cada cambio
            // de slide, lo que reinicia la animación de zoom (Ken Burns) desde cero.
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundOverlay
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, currentSlide.id, true, {
                fileName: "[project]/app/components/Carousel.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContentGrid,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textColumn,
                        children: currentSlide && // key en el wrapper de texto reinicia la animación de entrada (fade + slide up)
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textInner,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainTitle,
                                    children: currentSlide.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                currentSlide.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainDescription,
                                    children: currentSlide.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this),
                                currentSlide.buttonText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainButton,
                                    onClick: handleExploreClick,
                                    children: currentSlide.buttonText
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, currentSlide.id, true, {
                            fileName: "[project]/app/components/Carousel.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/Carousel.tsx",
                        lineNumber: 137,
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
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Carousel.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        }, slide.id, false, {
                                            fileName: "[project]/app/components/Carousel.tsx",
                                            lineNumber: 158,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Carousel.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/Carousel.tsx",
                                lineNumber: 155,
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
                                                lineNumber: 183,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Carousel.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Carousel.tsx",
                                        lineNumber: 181,
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
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Carousel.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Carousel.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/Carousel.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Carousel.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Carousel.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Carousel.tsx",
        lineNumber: 119,
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
"[project]/app/components/NavigationControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavigationControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/AppLayout.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const formatCLP = (value)=>new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    }).format(value);
// Duración de la animación de salida antes de sacar el item del estado real
const REMOVE_ANIMATION_MS = 220;
function NavigationControls({ cartItems, itemCount, onUpdateQuantity, onRemoveItem, lastAddedProduct }) {
    _s();
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Solo controla la animación visual de salida; el carrito real (estado/lógica)
    // no se toca hasta que la animación termina.
    const [removingId, setRemovingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const subtotal = cartItems.reduce((acc, item)=>acc + item.final_price * item.quantity, 0);
    // El envío se define en el siguiente paso (según retiro/despacho), no se cobra desde el carrito
    const total = subtotal;
    const handleRemoveClick = (id)=>{
        setRemovingId(id);
        setTimeout(()=>{
            onRemoveItem(id);
            setRemovingId(null);
        }, REMOVE_ANIMATION_MS);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuFloatingBtn,
                onClick: ()=>setIsSidebarOpen(true),
                "aria-label": "Abrir Menú",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "5",
                            cy: "12",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavigationControls.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavigationControls.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "19",
                            cy: "12",
                            r: "2"
                        }, void 0, false, {
                            fileName: "[project]/app/components/NavigationControls.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NavigationControls.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 50,
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
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartBadge,
                        children: itemCount
                    }, itemCount, false, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarOverlay} ${isSidebarOpen || isCartOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isOpen : ''}`,
                onClick: ()=>{
                    setIsSidebarOpen(false);
                    setIsCartOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar} ${isSidebarOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].isOpen : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarHeader,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "Menú"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: ()=>setIsSidebarOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 96,
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
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    " Mi Cuenta"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLink,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📦"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    " Mis Pedidos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                style: {
                                    border: '0.5px solid #e2e8f0',
                                    margin: '0.75rem 0'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/admin",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebarLink,
                                style: {
                                    textDecoration: 'none'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🛠️"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    " Panel Admin",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].adminBadge,
                                        children: "ADMIN"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 95,
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
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: ()=>setIsCartOpen(false),
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 119,
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
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Tu carrito está vacío por ahora."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/NavigationControls.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NavigationControls.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this) : cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItem} ${removingId === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemRemoving : ''}`,
                                children: [
                                    item.img_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.img_url,
                                        alt: item.title,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemImg
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemTitle,
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/NavigationControls.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartItemPrice,
                                                children: formatCLP(item.final_price)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/NavigationControls.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].quantityControls,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onUpdateQuantity(item.id, -1),
                                                        "aria-label": "Restar uno",
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.quantity
                                                    }, item.quantity, false, {
                                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onUpdateQuantity(item.id, 1),
                                                        "aria-label": "Sumar uno",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                                        lineNumber: 154,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/NavigationControls.tsx",
                                                lineNumber: 147,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 142,
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
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 127,
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
                                                item.title,
                                                item.quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryRowQty,
                                                    children: [
                                                        " ×",
                                                        item.quantity
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/NavigationControls.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/NavigationControls.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryRowValue,
                                            children: formatCLP(item.final_price * item.quantity)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NavigationControls.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/app/components/NavigationControls.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryDivider
                            }, void 0, false, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AppLayout$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].totalPrice,
                                        children: formatCLP(total)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/NavigationControls.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/NavigationControls.tsx",
                                lineNumber: 190,
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
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 118,
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
                        lineNumber: 209,
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
                                lineNumber: 211,
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
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/NavigationControls.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/NavigationControls.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/NavigationControls.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(NavigationControls, "C8b87fHDv1Vy6rIBc2YJlrNuE9M=");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/NovedadesCarousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NovedadesCarousel.useEffect": ()=>{
            let isMounted = true;
            async function fetchNovedades() {
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('id, title, category, price, discount_percent, final_price, description, img_url, badge, is_new').eq('active', true).eq('is_new', true).order('created_at', {
                    ascending: false
                });
                if (!isMounted) return;
                if (!error && data) setProducts(data);
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
    // Mientras carga no mostramos nada (evita parpadeo), y si no hay novedades
    // la sección completa desaparece, tal como se pidió.
    if (loading || products.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                            lineNumber: 52,
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
                                    lineNumber: 57,
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
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollRow,
                    ref: scrollRef,
                    children: products.map((p)=>{
                        const hasDiscount = p.discount_percent > 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageWrap,
                                    children: [
                                        hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discountBadge,
                                            children: [
                                                "-",
                                                p.discount_percent,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                            lineNumber: 73,
                                            columnNumber: 35
                                        }, this),
                                        p.img_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: p.img_url,
                                            alt: p.title,
                                            fill: true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image,
                                            sizes: "240px"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                            lineNumber: 75,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                    lineNumber: 72,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                                            children: p.category
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productTitle,
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceGroup,
                                                    children: [
                                                        hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                                            children: formatCLP(p.price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 39
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                                            children: formatCLP(p.final_price)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                                    onClick: ()=>onAddToCart(p),
                                                    "aria-label": "Agregar al carrito",
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/app/components/NovedadesCarousel.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/components/NovedadesCarousel.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NovedadesCarousel.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/NovedadesCarousel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(NovedadesCarousel, "ZdubaTYTmKAtoDgARyieIlX/530=");
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
  "imageContainer": "ProductGrid-module__5--pqq__imageContainer",
  "modalCard": "ProductGrid-module__5--pqq__modalCard",
  "modalCloseBtn": "ProductGrid-module__5--pqq__modalCloseBtn",
  "modalDescription": "ProductGrid-module__5--pqq__modalDescription",
  "modalImage": "ProductGrid-module__5--pqq__modalImage",
  "modalImageWrap": "ProductGrid-module__5--pqq__modalImageWrap",
  "modalInfoBox": "ProductGrid-module__5--pqq__modalInfoBox",
  "modalOverlay": "ProductGrid-module__5--pqq__modalOverlay",
  "modalTitle": "ProductGrid-module__5--pqq__modalTitle",
  "moreInfoLink": "ProductGrid-module__5--pqq__moreInfoLink",
  "newBadge": "ProductGrid-module__5--pqq__newBadge",
  "originalPrice": "ProductGrid-module__5--pqq__originalPrice",
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
  "tagBadge": "ProductGrid-module__5--pqq__tagBadge",
  "topLeftBadges": "ProductGrid-module__5--pqq__topLeftBadges",
});
}),
"[project]/app/components/ProductGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/ProductGrid.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const formatCLP = (value)=>new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP'
    }).format(value);
function ProductGrid({ onAddToCart }) {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        'Todos'
    ]);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Todos');
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGrid.useEffect": ()=>{
            let isMounted = true;
            async function fetchProducts() {
                setLoading(true);
                const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('products').select('id, title, category, price, discount_percent, final_price, description, img_url, badge, is_new').eq('active', true).order('created_at', {
                    ascending: false
                });
                if (!isMounted) return;
                if (error) {
                    setError('No se pudieron cargar los productos. Intenta de nuevo más tarde.');
                    setLoading(false);
                    return;
                }
                const fetched = data ?? [];
                setProducts(fetched);
                const uniqueCategories = Array.from(new Set(fetched.map({
                    "ProductGrid.useEffect.fetchProducts.uniqueCategories": (p)=>p.category
                }["ProductGrid.useEffect.fetchProducts.uniqueCategories"])));
                setCategories([
                    'Todos',
                    ...uniqueCategories
                ]);
                setLoading(false);
            }
            fetchProducts();
            return ({
                "ProductGrid.useEffect": ()=>{
                    isMounted = false;
                }
            })["ProductGrid.useEffect"];
        }
    }["ProductGrid.useEffect"], []);
    // Cerrar el modal con la tecla Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductGrid.useEffect": ()=>{
            const handleKeyDown = {
                "ProductGrid.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') setSelectedProduct(null);
                }
            }["ProductGrid.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "ProductGrid.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["ProductGrid.useEffect"];
        }
    }["ProductGrid.useEffect"], []);
    const filteredProducts = activeCategory === 'Todos' ? products : products.filter((p)=>p.category === activeCategory);
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
                                children: "Catálogo Seleccionado"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].catalogTitle,
                                children: "Productos para la Siembra"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoriesWrapper,
                                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryBtn} ${activeCategory === cat ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                        onClick: ()=>setActiveCategory(cat),
                                        children: cat
                                    }, cat, false, {
                                        fileName: "[project]/app/components/ProductGrid.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateMessage,
                        children: "Cargando productos..."
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateMessage,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 97,
                        columnNumber: 19
                    }, this),
                    !loading && !error && filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stateMessage,
                        children: "Aún no hay productos en esta categoría."
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productGrid,
                        children: filteredProducts.map((product)=>{
                            const hasDiscount = product.discount_percent > 0;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].imageContainer,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topLeftBadges,
                                                children: product.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagBadge,
                                                    children: product.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 39
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].discountBadge,
                                                children: [
                                                    "-",
                                                    product.discount_percent,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            product.img_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: product.img_url,
                                                alt: product.title,
                                                fill: true,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productImage,
                                                sizes: "(max-width: 768px) 100vw, 300px"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ProductGrid.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCategory,
                                                children: product.category
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productTitle,
                                                children: product.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this),
                                            product.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].moreInfoLink,
                                                onClick: ()=>setSelectedProduct(product),
                                                children: "Más información"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFooter,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceGroup,
                                                        children: [
                                                            hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                                                children: formatCLP(product.price)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                                                children: formatCLP(product.final_price)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/ProductGrid.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                                        onClick: ()=>onAddToCart(product),
                                                        children: "+ Agregar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/ProductGrid.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/ProductGrid.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ProductGrid.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProductGrid.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProductGrid.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            selectedProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay,
                onClick: ()=>setSelectedProduct(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCard,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalCloseBtn,
                            onClick: ()=>setSelectedProduct(null),
                            "aria-label": "Cerrar",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this),
                        selectedProduct.img_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalImageWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: selectedProduct.img_url,
                                alt: selectedProduct.title,
                                fill: true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalImage,
                                sizes: "(max-width: 768px) 100vw, 480px"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ProductGrid.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalInfoBox,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productCategory,
                                    children: selectedProduct.category
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalTitle,
                                    children: selectedProduct.title
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this),
                                selectedProduct.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalDescription,
                                    children: selectedProduct.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFooter,
                                    style: {
                                        margin: 0,
                                        padding: 0,
                                        border: 'none',
                                        background: 'transparent'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].priceGroup,
                                            children: [
                                                selectedProduct.discount_percent > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].originalPrice,
                                                    children: formatCLP(selectedProduct.price)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                                    children: formatCLP(selectedProduct.final_price)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].addBtn,
                                            onClick: ()=>{
                                                onAddToCart(selectedProduct);
                                                setSelectedProduct(null);
                                            },
                                            children: "+ Agregar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ProductGrid.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ProductGrid.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ProductGrid.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ProductGrid.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ProductGrid.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProductGrid.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(ProductGrid, "IMqqwkSA2qJn/hXfpjMXw/QWN3Y=");
_c = ProductGrid;
var _c;
__turbopack_context__.k.register(_c, "ProductGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/TrustBanner.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "trustGrid": "TrustBanner-module__Rko1JG__trustGrid",
  "trustIcon": "TrustBanner-module__Rko1JG__trustIcon",
  "trustItem": "TrustBanner-module__Rko1JG__trustItem",
  "trustSection": "TrustBanner-module__Rko1JG__trustSection",
  "trustText": "TrustBanner-module__Rko1JG__trustText",
});
}),
"[project]/app/components/TrustBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrustBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/components/TrustBanner.module.css [app-client] (css module)");
'use client';
;
;
function TrustBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustSection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustGrid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "22",
                                height: "22",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5 13l4 4L19 7"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 13,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/TrustBanner.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TrustBanner.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustText,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: "100% Orgánico"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Semillas libres de transgénicos"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TrustBanner.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TrustBanner.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "22",
                                height: "22",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/TrustBanner.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TrustBanner.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustText,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: "Envíos Seguros"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Despacho directo a todo el país"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TrustBanner.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TrustBanner.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "22",
                                height: "22",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/TrustBanner.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/TrustBanner.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustText,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: "Calidad Probada"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Alta tasa de germinación"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/TrustBanner.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/TrustBanner.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/TrustBanner.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/TrustBanner.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/TrustBanner.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TrustBanner;
var _c;
__turbopack_context__.k.register(_c, "TrustBanner");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavigationControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/NavigationControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/TrustBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$AlertBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/AlertBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/useCart.ts [app-client] (ecmascript)");
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
function Home() {
    _s();
    const { cart, addToCart, updateQuantity, removeItem, itemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [lastAdded, setLastAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleAddToCart = (product)=>{
        addToCart(product);
        setLastAdded(product.title);
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
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NavigationControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                cartItems: cart,
                itemCount: itemCount,
                onUpdateQuantity: updateQuantity,
                onRemoveItem: removeItem,
                lastAddedProduct: lastAdded
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NovedadesCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onAddToCart: handleAddToCart
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProductGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onAddToCart: handleAddToCart
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$TrustBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(Home, "6o43KOytByuRoxntPyPHJOjdQEQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$useCart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$112$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+supabase-js@2.112.3/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://yczueyygfqjqfcvastse.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljenVleXlnZnFqcWZjdmFzdHNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxNDI0MjEsImV4cCI6MjEwMzcxODQyMX0.rVGafkzVsbE7ViWVoLyyx7HcDZFulnVMcp-rJueV8PQ");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$112$2e$3$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/useCart.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.2_@babel+core@7.2_bdc055ee4ad2e6131e2219227af943df/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const CART_STORAGE_KEY = 'semillas_familia_cart_v1';
function useCart() {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Cargar el carrito guardado al montar (solo corre en el navegador)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCart.useEffect": ()=>{
            try {
                const stored = window.localStorage.getItem(CART_STORAGE_KEY);
                if (stored) setCart(JSON.parse(stored));
            } catch  {
            // Si el dato guardado está corrupto, seguimos con carrito vacío
            } finally{
                setIsLoaded(true);
            }
        }
    }["useCart.useEffect"], []);
    // Guardar cada vez que el carrito cambia (una vez que ya se cargó el inicial,
    // para no sobrescribir el guardado con un array vacío antes de leerlo)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCart.useEffect": ()=>{
            if (!isLoaded) return;
            try {
                window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
            } catch  {
            // Si el almacenamiento está lleno o bloqueado, no interrumpimos la compra
            }
        }
    }["useCart.useEffect"], [
        cart,
        isLoaded
    ]);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[addToCart]": (product)=>{
            setCart({
                "useCart.useCallback[addToCart]": (prev)=>{
                    const idx = prev.findIndex({
                        "useCart.useCallback[addToCart].idx": (item)=>item.id === product.id
                    }["useCart.useCallback[addToCart].idx"]);
                    if (idx > -1) {
                        const next = [
                            ...prev
                        ];
                        next[idx] = {
                            ...next[idx],
                            quantity: next[idx].quantity + 1
                        };
                        return next;
                    }
                    return [
                        ...prev,
                        {
                            ...product,
                            quantity: 1
                        }
                    ];
                }
            }["useCart.useCallback[addToCart]"]);
        }
    }["useCart.useCallback[addToCart]"], []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[updateQuantity]": (id, delta)=>{
            setCart({
                "useCart.useCallback[updateQuantity]": (prev)=>prev.map({
                        "useCart.useCallback[updateQuantity]": (item)=>{
                            if (item.id === id) {
                                const newQty = item.quantity + delta;
                                return newQty > 0 ? {
                                    ...item,
                                    quantity: newQty
                                } : null;
                            }
                            return item;
                        }
                    }["useCart.useCallback[updateQuantity]"]).filter({
                        "useCart.useCallback[updateQuantity]": (item)=>item !== null
                    }["useCart.useCallback[updateQuantity]"])
            }["useCart.useCallback[updateQuantity]"]);
        }
    }["useCart.useCallback[updateQuantity]"], []);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[removeItem]": (id)=>{
            setCart({
                "useCart.useCallback[removeItem]": (prev)=>prev.filter({
                        "useCart.useCallback[removeItem]": (item)=>item.id !== id
                    }["useCart.useCallback[removeItem]"])
            }["useCart.useCallback[removeItem]"]);
        }
    }["useCart.useCallback[removeItem]"], []);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$2_$40$babel$2b$core$40$7$2e$2_bdc055ee4ad2e6131e2219227af943df$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCart.useCallback[clearCart]": ()=>setCart([])
    }["useCart.useCallback[clearCart]"], []);
    const itemCount = cart.reduce((acc, item)=>acc + item.quantity, 0);
    const total = cart.reduce((acc, item)=>acc + item.final_price * item.quantity, 0);
    return {
        cart,
        isLoaded,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        itemCount,
        total
    };
}
_s(useCart, "Eh5No0CYMit5TtuY3NFyePNcGwo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_103ah-g._.js.map