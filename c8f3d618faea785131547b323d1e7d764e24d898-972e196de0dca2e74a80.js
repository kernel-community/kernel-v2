(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[1701],{51223:function(e,t,r){var n=r(5112),o=r(70030),i=r(3070),a=n("unscopables"),l=Array.prototype;null==l[a]&&i.f(l,a,{configurable:!0,value:o(null)}),e.exports=function(e){l[a][e]=!0}},77475:function(e,t,r){var n=r(43157),o=r(4411),i=r(70111),a=r(5112)("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,(o(t)&&(t===Array||n(t.prototype))||i(t)&&null===(t=t[a]))&&(t=void 0)),void 0===t?Array:t}},65417:function(e,t,r){var n=r(77475);e.exports=function(e,t){return new(n(e))(0===t?0:t)}},6790:function(e,t,r){"use strict";var n=r(43157),o=r(17466),i=r(49974),a=function(e,t,r,l,u,c,s,d){for(var f,p=u,v=0,g=!!s&&i(s,d,3);v<l;){if(v in r){if(f=g?g(r[v],v,t):r[v],c>0&&n(f))p=a(e,t,f,o(f.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=f}p++}v++}return p};e.exports=a},60490:function(e,t,r){var n=r(35005);e.exports=n("document","documentElement")},43157:function(e,t,r){var n=r(84326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},4411:function(e,t,r){var n=r(47293),o=r(60614),i=r(70648),a=r(35005),l=r(42788),u=[],c=a("Reflect","construct"),s=/^\s*(?:class|function)\b/,d=s.exec,f=!s.exec((function(){})),p=function(e){if(!o(e))return!1;try{return c(Object,u,e),!0}catch(t){return!1}};e.exports=!c||n((function(){var e;return p(p.call)||!p(Object)||!p((function(){e=!0}))||e}))?function(e){if(!o(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return f||!!d.call(s,l(e))}:p},70030:function(e,t,r){var n,o=r(19670),i=r(36048),a=r(80748),l=r(3501),u=r(60490),c=r(80317),s=r(6200),d=s("IE_PROTO"),f=function(){},p=function(e){return"<script>"+e+"</"+"script>"},v=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},g=function(){try{n=new ActiveXObject("htmlfile")}catch(o){}var e,t;g="undefined"!=typeof document?document.domain&&n?v(n):((t=c("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):v(n);for(var r=a.length;r--;)delete g.prototype[a[r]];return g()};l[d]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(f.prototype=o(e),r=new f,f.prototype=null,r[d]=e):r=g(),void 0===t?r:i(r,t)}},36048:function(e,t,r){var n=r(19781),o=r(3070),i=r(19670),a=r(81956);e.exports=n?Object.defineProperties:function(e,t){i(e);for(var r,n=a(t),l=n.length,u=0;l>u;)o.f(e,r=n[u++],t[r]);return e}},81956:function(e,t,r){var n=r(16324),o=r(80748);e.exports=Object.keys||function(e){return n(e,o)}},86535:function(e,t,r){"use strict";var n=r(82109),o=r(6790),i=r(19662),a=r(47908),l=r(17466),u=r(65417);n({target:"Array",proto:!0},{flatMap:function(e){var t,r=a(this),n=l(r.length);return i(e),(t=u(r,0)).length=o(t,r,r,n,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},99244:function(e,t,r){r(51223)("flatMap")},60975:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(96156),o=r(67294),i=r(31191),a=r(47938),l=r(48819),u=r(14293),c=r.n(u),s=r(25444),d=r(59694),f=r(11414),p=r(55452),v=r(43532),g=r(87329),x=(r(86535),r(99244),r(528));function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=r(7460),m=r(13439);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var O=function(e){var t,r,u=(0,p.$G)(),h=u.locale,O=u.t,w=u.DEFAULT_LOCALE,P=(0,s.useStaticQuery)("263894237").allMdx,A=e.children,k=e.pageContext,S=e.uri,C=k.pagePath,D=k.frontmatter,E=D.title,F=D.description,L=D.keywords,$=D.featuredImage,I=D.status,M=D.hideLanguageSelector,_=D.hideBreadcrumbs;if(D.isCorePage)return(0,i.jsx)(o.Fragment,null,A);var T=C.replace(/^\/|\/$/g,"").split("/").slice(1),H=T.join("/"),W=function(e,t,r,n,o){void 0===e&&(e=[]),void 0===r&&(r="en"),void 0===n&&(n="en");var i=function(e,r){return e.filter((function(e){var n=e.node;return-1!==n.fileAbsolutePath.indexOf("/"+r+"/"+t+"/")&&-1===n.fileAbsolutePath.indexOf("/"+r+"/"+t+"/index.mdx")})).flatMap((function(e){var t=e.node,n=t.headings,o=t.frontmatter,i=t.fileAbsolutePath,a=i.slice(i.indexOf("/"+r+"/"),i.length).replace(/(.mdx|index.mdx|.md)$/gm,"").replace(/\/$/,""),l=a.replace(/^\/([\w]{2})\//,"/"),u=a.split("/").slice(-1)[0];return{title:o.title||(n.length>0?n[0].value:null)||u,slug:a,rawSlug:l,slugPart:u,order:o.order}}))},a=i(e,r),l=r!==n?i(e,n):[],u=(0,g.Z)(l),c=l.length<=0?a:a.map((function(e){var t=l.find((function(t,r){var n=t.rawSlug===e.rawSlug;return n&&u.splice(r,1),n}));return null!=t?t:e})).concat(u),s=t?[{part:t,title:(0,x.Qs)(t.replace(/-|_|\./g," ")),url:"/"+n+"/"+t}]:[];return{sidenavData:c.reduce((function(e,r){for(var i,a=r.title,l=r.slug,u=r.rawSlug,c=r.order,d=u.split("/"),f=e.items,p=function(){var e=i.value,r=f&&f.find((function(t){return t.slugPart===e}));r?r.items||(r.items=[]):(r={slugPart:e,title:(0,x.Qs)(e.replace(/-|_|\./g," ")),items:[],url:"/"+n+"/"+t},f.push(r)),f=r.items.sort((function(e,t){return null===e.order&&null!==t.order?1:null!==e.order&&null===t.order?-1:null===e.order&&null===t.order||e.order===t.order?e.title===t.title?0:e.title.localeCompare(t.title):e.order<t.order?-1:e.order>t.order?1:0}))},v=y(d.slice(1,-1));!(i=v()).done;)p();var g=d.length-1,h=f.find((function(e){return e.slugPart===d[g]}));return h?(h.url=l,h.title=a,h.order=c,o.includes(h.slugPart)&&s.push({part:h.slugPart,title:h.title,url:l})):(f.push({slugPart:d[g],url:l,items:[],title:a,order:c}),o.includes(d[g])&&s.push({part:d[g],title:a,url:l}),f.sort((function(e,t){return null===e.order&&null!==t.order?1:null!==e.order&&null===t.order?-1:null===e.order&&null===t.order||e.order===t.order?e.title===t.title?0:e.title.localeCompare(t.title):e.order<t.order?-1:e.order>t.order?1:0}))),e}),{items:[]}),breadcrumbData:s}}(P.edges,T[0],w,h,T),Z=W.sidenavData,z=W.breadcrumbData,G=P.edges.filter((function(e){var t=e.node;return(0,x.af)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===H&&(0,x.bL)(t.fileAbsolutePath)!==h})).map((function(e){var t=e.node;return{value:(0,x.af)(t),label:O("Language",null,null,(0,x.bL)(t.fileAbsolutePath))}})),Q=null===(t=P.edges.find((function(e){var t=(0,x.af)(e.node);return e.node.fileAbsolutePath.includes("index.mdx")||(t+="/"),!c()(e.node)&&t===C})))||void 0===t?void 0:t.node.tableOfContents,U="object"==typeof I?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({children:I.text},I):{children:I},B=(0,d.useLocation)().pathname.split("/")[2],R=E||function(){var e=o.Children.toArray(A).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||S.split("/").pop(),J=void 0!==B&&""!==B,X=k.frontmatter&&!k.frontmatter.hideSidenav&&J,q=J&&!M,K=!c()(Q)&&0!==(null===(r=Q.items)||void 0===r?void 0:r.length),N=!_||J&&!M,V={title:R,description:F,keywords:L,featuredImage:$},Y=q||K?234:0;return X&&(Y+=256),(0,i.jsx)(o.Fragment,null,X&&(0,i.jsx)(a.xu,{sx:{width:"256px",display:["none","none","initial"]}},(0,i.jsx)(l.ZP,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},(0,i.jsx)(f.t7,{data:Z,currentPath:C}))),(0,i.jsx)(a.xu,{as:"article",sx:{width:["100%","100%","calc(100% - "+Y+"px)"],mt:J?[4,4,"64px"]:0,pl:J?[4,4,"32px"]:0,pr:J?[4,4,0]:0,pb:4}},(0,i.jsx)(b.HJ,V),I&&(0,i.jsx)(a.xu,{sx:{marginTop:J?2:0}},(0,i.jsx)(v.E_,Object.assign({sticky:!0},U,{sx:{width:"100%"}}))),N&&(0,i.jsx)(a.kC,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:J?0:[3,3,0]}},(0,i.jsx)(f.Oo,{data:z,pathDirs:T})),(0,i.jsx)(a.xu,{sx:{display:["block","block","none"]}},q&&(0,i.jsx)(p.$z,{data:G,pagePath:C}),K&&(0,i.jsx)(f.o5,{isMobile:!0,data:Q})),(0,i.jsx)(a.xu,null,A),(0,i.jsx)(m.u,{sidenavData:Z,pagePath:C})),(0,i.jsx)(a.xu,{sx:{position:"relative",display:["none","none","block"]}},q&&(0,i.jsx)(p.$z,{data:G,pagePath:C}),K&&(0,i.jsx)(f.o5,{styles:{display:["none","none","block"]},data:Q})),(0,i.jsx)(f.zM,{sidenavData:Z}))}}}]);
//# sourceMappingURL=c8f3d618faea785131547b323d1e7d764e24d898-972e196de0dca2e74a80.js.map