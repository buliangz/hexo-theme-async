import{G as s,aa as i,ab as p,ac as u,ad as c,ae as l,af as d,ag as f,ah as m,ai as h,aj as A,$ as g,d as P,u as v,j as w,A as y,ak as C,al as R,am as _,an as b}from"./chunks/framework.881fc8e3.js";import{t as E}from"./chunks/theme.704e0346.js";const j={...E};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=r(j),D=P({name:"VitePressApp",setup(){const{site:e}=v();return w(()=>{y(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),C(),R(),_(),o.setup&&o.setup(),()=>b(o.Layout)}});async function T(){const e=O(),a=x();a.provide(p,e);const t=u(e.route);return a.provide(c,t),a.component("Content",l),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:f}),{app:a,router:e,data:t}}function x(){return m(D)}function O(){let e=s,a;return h(t=>{let n=A(t);return n?(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),s&&(e=!1),g(()=>import(n),[])):null},o.NotFound)}s&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{T as createApp};
