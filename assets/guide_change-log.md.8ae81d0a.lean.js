import{_ as c,o as t,c as a,r as h,b as e,t as p,n as v,g as f,F as r,d as y,h as _,i as m,k as b,x as C,u as $}from"./app.fdf9a585.js";import{_ as L}from"./chunks/Badge.018169b1.js";const k=["title"],N={class:"type"},S=["innerHTML"],B={__name:"ChangeLog",props:{type:String,text:{type:String,default:""}},setup(s){const x={feat:"✨",fix:"🐞",perf:"🎈",refactor:"🦄",style:"🌈",docs:"📃"};return(i,l)=>(t(),a("li",{class:v(["log",s.type]),title:s.type},[h(i.$slots,"default",{},()=>[e("span",N,p(x[s.type])+"：",1),e("span",{innerHTML:s.text},null,8,S)],!0)],10,k))}},D=c(B,[["__scopeId","data-v-0b5e2f63"]]),T=[{large_version:"v1.2.x",children:[{version:"1.2.13",date:"2023-01-04",logs:[{type:"feat",text:"支持内置插件切换 CDN 源"},{type:"fix",text:"修复 Pjax 下,插件插入 style 标签丢失"},{type:"fix",text:"修复 flink 重复构建时报错"}]},{version:"1.2.12",date:"2023-01-03",logs:[{type:"feat",text:"支持阅读模式、单双栏切换"},{type:"feat",text:"增加 tabs、imgs、gallery、caniuse、flink 标签插件"},{type:"feat",text:"可调整上下篇文章卡片大小"},{type:"style",text:"优化 table、details 样式"},{type:"style",text:"优化 footer 移动端样式"},{type:"fix",text:"修复自定义页面不显示评论插件"}]},{version:"1.2.11",date:"2022-12-30",logs:[{type:"feat",text:"支持复制代码片段"},{type:"feat",text:"支持根据主题模式设置黑白两种logo、文章图片、封面等"},{type:"feat",text:"支持自定义页面"},{type:"perf",text:"优化代码片段样式"}]},{version:"1.2.9",date:"2022-12-23",logs:[{type:"fix",text:"修复 sidebar.social 覆盖问题"}]},{version:"1.2.8",date:"2022-12-19",logs:[{type:"feat",text:"支持首页自定义分类"},{type:"feat",text:"支持文章可设置原文链接"}]},{version:"1.2.7",date:"2022-12-14",logs:[{type:"fix",text:"修复 typedText 无法被覆盖"}]},{version:"1.2.6",date:"2022-12-09",logs:[{type:"feat",text:"支持封面日期添加格式化配置"},{type:"perf",text:"优化移动端中banner、文章详情里svg样式"},{type:"fix",text:"修改文章目录截断显示，激活时显示全部"}]},{version:"1.2.5",date:"2022-11-26",logs:[{type:"feat",text:"支持可自定义默认封面图"},{type:"feat",text:"支持文章增加自定义作者"},{type:"fix",text:"修复复制时版权信息显示文章作者错误"},{type:"fix",text:"优化分割线显示"}]},{version:"1.2.4",date:"2022-11-19",logs:[{type:"fix",text:"修复首页 banner 覆盖问题"},{type:"fix",text:"修复 logo 样式宽度不可覆盖"},{type:"fix",text:"修复版本显示多了个 v"}]},{version:"1.2.3",date:"2022-10-23",logs:[{type:"feat",text:"支持标签和分类的汇总页"},{type:"fix",text:"修复图片注释样式失效"}]},{version:"1.2.2",date:"2022-10-12",logs:[{type:"feat",text:"适配 bComments, twikoo"},{type:"feat",text:"添加日期格式化配置"},{type:"perf",text:"banner 支持配置背景定位信息"},{type:"fix",text:"修复单篇文章强制关闭目录失效"}]},{version:"1.2.1",date:"2022-10-11",logs:[{type:"refactor",text:"修改主题切换方式"},{type:"perf",text:"优化移动端间距"},{type:"perf",text:"优化文章目录"},{type:"fix",text:"修复嵌套导航 target 设置失效"}]}]},{large_version:"v1.1.x",children:[{version:"1.1.10",date:"2022-09-28",logs:[{type:"perf",text:"可关闭 Swup 插件"},{type:"perf",text:"优化移动端样式"},{type:"fix",text:"修复自定义 CDN 配置渲染错误"}]},{version:"1.1.8",date:"2022-09-26",logs:[{type:"feat",text:"增加百度自动推送"},{type:"feat",text:"增加文章版权信息"},{type:"perf",text:"分类页可选择只显示标题"},{type:"perf",text:"主题可根据系统选择加载样式"},{type:"perf",text:"Pjax 下支持动态加载脚本插件"},{type:"fix",text:"修复单闭合 img 懒加载替换错误"},{type:"fix",text:"修复 lang 属性取值错误"},{type:"fix",text:"修复移动端 theme-color 取值异常"},{type:"fix",text:"修复初次安装无配置时兼容处理"}]},{version:"1.1.7",date:"2022-09-20",logs:[{type:"feat",text:"文章支持显示打赏功能"},{type:"feat",text:"文章图片支持懒加载"},{type:"perf",text:"优化 footer 区域显示和配置（不兼容，详情见：<a href='#/guide/config.html#页脚-footer'>页脚-footer</a>）"},{type:"perf",text:"优化 about 配置可省略"},{type:"fix",text:"修复开启 sw 时，内置插件更新异常"}]},{version:"1.1.6",date:"2022-09-19",logs:[{type:"feat",text:"增加本地搜索功能"},{type:"fix",text:"修复页面切换时主题按钮状态丢失"},{type:"fix",text:"窗体大小变化时，滚动插件未刷新 （详情见：<a href='https://github.com/MaLuns/hexo-theme-async/issues/9' target='_blank' rel='noreferrer'>issues</a>）"}]},{version:"1.1.4",date:"2022-09-13",logs:[{type:"feat",text:"支持文章详情页单栏预览（展示空间更大）"},{type:"feat",text:"添加项目列表模板"},{type:"style",text:"增强文章详情中链接显示"},{type:"refactor",text:"拆分友链信息配置(详情见 页面配置-友链 文档吧🤣)"}]},{version:"1.1.3",date:"2022-09-12",logs:[{type:"fix",text:"修复动态增加 dom, 滚动插件渲染异常"},{type:"feat",text:"返回顶部"}]},{version:"1.1.2",date:"2022-09-08",logs:[{type:"feat",text:"增加 toc"},{type:"feat",text:"增加文章详情页自定义 banner"}]},{version:"1.1.1",date:"2022-09-07",logs:[{type:"fix",text:"友链渲染异常"},{type:"style",text:"优化文章详情页面"}]},{version:"1.1.0",date:"2022-09-06",logs:[{type:"docs",text:"增加使用文档（没错就是俺）"},{type:"feat",text:"增加 404 模板"},{type:"feat",text:"添加自定义样式支持"},{type:"feat",text:"添加个性化语言支持"},{type:"feat",text:"添加对 KaTex 支持"},{type:"perf",text:"剥离对 Jquery 依赖"},{type:"perf",text:"三方插件依赖调整为动态加载，并切换为 CDN 加载"},{type:"perf",text:"文章封面图字段变更"},{type:"perf",text:"移除内置置顶脚本，使用 hexo-generator-index"},{type:"fix",text:"修复无需要主题切换时，初始化异常"}]}]},{large_version:"v1.0.x",children:[{version:"1.0.11",logs:[{type:"feat",text:"允许设置默认主题"},{type:"fix",text:"友链配置为空渲染异常"}]},{version:"1.0.10",logs:[{type:"fix",text:"修复 动态区域加载异常，暗黑模式刷新丢失"}]}]}];const w=["id"],P=["href"],M={__name:"ChangeLogs",setup(s){return(x,i)=>{const l=L,d=D;return t(!0),a(r,null,f($(T),o=>(t(),a(r,null,[e("h2",{id:o.large_version.replace(/\./g,"-")},[y(p(o.large_version)+" ",1),e("a",{class:"header-anchor",href:`#${o.large_version.replace(/\./g,"-")}`,"aria-hidden":"true"},"#",8,P)],8,w),(t(!0),a(r,null,f(o.children,n=>(t(),a(r,null,[e("blockquote",null,[_(l,null,{default:m(()=>[y(p(n.version),1)]),_:2},1024),e("span",null,p(n.date),1)]),e("ul",null,[(t(!0),a(r,null,f(n.logs,(g,u)=>(t(),b(d,C(g,{key:u}),null,16))),128))])],64))),256))],64))),256)}}},V=c(M,[["__scopeId","data-v-f2803bc9"]]),J=JSON.parse('{"title":"更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/change-log.md","lastUpdated":1672820598000}'),j={name:"guide/change-log.md"},q=e("h1",{id:"更新日志",tabindex:"-1"},[y("更新日志 "),e("a",{class:"header-anchor",href:"#更新日志","aria-hidden":"true"},"#")],-1);function F(s,x,i,l,d,o){const n=V;return t(),a("div",null,[q,_(n)])}const z=c(j,[["render",F]]);export{J as __pageData,z as default};
