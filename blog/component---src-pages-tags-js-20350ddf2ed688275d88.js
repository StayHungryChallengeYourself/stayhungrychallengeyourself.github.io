"use strict";(self.webpackChunkmy_thoughts=self.webpackChunkmy_thoughts||[]).push([[159],{2349:function(e,t,a){var l=a(7294),r=a(4593),n=a(3149);t.Z=e=>{let{url:t,title:a=n.default.title,description:o,image:c,siteTitleAlt:m,isPost:i}=e;return l.createElement(r.q,null,l.createElement("title",null,a),l.createElement("meta",{name:"description",content:o}),l.createElement("meta",{name:"image",content:c}),l.createElement("script",{type:"application/ld+json"},JSON.stringify((e=>{let{url:t,title:a,siteTitleAlt:l,isPost:r,image:n,description:o}=e;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:l||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:n}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:l||"",headline:a,image:{"@type":"ImageObject",url:n},description:o}:""]})({url:t,title:a,siteTitleAlt:m,isPost:i,image:c,description:o}))),l.createElement("meta",{property:"og:url",content:t}),i?l.createElement("meta",{property:"og:type",content:"article"}):l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:title",content:a}),l.createElement("meta",{property:"og:description",content:o}),l.createElement("meta",{property:"og:image",content:c}))}},7071:function(e,t,a){a.d(t,{Z:function(){return v}});var l=a(7294),r=a(4854),n=a(7814),o=a(3149),c=a(1030);const{friends:m=[]}=o.default;var i=()=>l.createElement("div",{className:"friend"},l.createElement("p",null,"友情链接"),m.map((e=>l.createElement(c.Z,{href:null==e?void 0:e.href,title:null==e?void 0:e.title,key:null==e?void 0:e.title,rel:"noopener"}))));var s=e=>{let{posts:t=[]}=e;return console.dir(t),l.createElement("div",{className:"latest-post"},l.createElement("p",null,"最新文章"),t.map((e=>{var t;let{node:a}=e;return l.createElement(r.Link,{to:(null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.url)||a.frontmatter.slug||a.fields.slug,key:a.frontmatter.url||a.frontmatter.slug||a.fields.slug},a.frontmatter.title)})))};var u=e=>{let{totalCount:t,posts:a=[]}=e;return l.createElement("div",{className:"d-none d-lg-block information my-2"},l.createElement("hr",null),l.createElement("p",null,"共 ",t," 篇文章"),l.createElement("hr",null),l.createElement(s,{posts:a}),l.createElement("hr",null),l.createElement(i,null))};const{github:p,name:d,email:E,iconUrl:g,about:f}=o.default,h=e=>{let{href:t,icon:a}=e;return l.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},l.createElement("span",{className:"fa-layers fa-fw fa-2x"},l.createElement(n.G,{icon:a})))},y=e=>{let{totalCount:t=0,latestPosts:a=[]}=e;return l.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},l.createElement("div",{className:"about-me"},l.createElement(r.Link,{to:f,className:"name"},l.createElement("img",{className:"avatar",src:g,alt:"Calpa"}),l.createElement("h4",null,d)),l.createElement(h,{href:p.url,icon:["fab","github"]}),l.createElement(h,{href:"mailto:"+E,icon:["far","envelope"]}),l.createElement(u,{totalCount:t,posts:a})))};var v=()=>l.createElement(r.StaticQuery,{query:"1217046717",render:e=>l.createElement(y,Object.assign({},e.all,e.limited))})},4748:function(e,t,a){var l=a(7294);t.Z=e=>{let{name:t,count:a=""}=e;return l.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)}},1325:function(e,t,a){a.r(t);var l=a(7294),r=a(7071),n=a(4748),o=a(2349),c=a(3149);t.default=e=>{let{data:t}=e;const{allMarkdownRemark:a}=t,m={};a.edges.forEach((e=>{let{node:t}=e;const{tags:a}=t.frontmatter;a.forEach((e=>{m[e]?m[e]+=1:m[e]=1}))}));const i=Array.from(Object.keys(m)).sort(((e,t)=>m[t]-m[e]));return l.createElement("div",{className:"container"},l.createElement("div",{className:"row",style:{margin:15}},l.createElement(r.Z,null),l.createElement("div",{className:"col order-2"},i.map((e=>l.createElement(n.Z,{name:e,key:e,count:m[e]}))))),l.createElement(o.Z,{title:"标签",url:"/tags/",siteTitleAlt:c.default.title,isPost:!1,description:"Tags Page",image:"https://i.imgur.com/M795H8A.jpg"}))}}}]);
//# sourceMappingURL=component---src-pages-tags-js-20350ddf2ed688275d88.js.map