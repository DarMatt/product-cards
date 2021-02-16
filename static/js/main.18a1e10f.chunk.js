(this["webpackJsonpproduct-cards"]=this["webpackJsonpproduct-cards"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),s=c.n(r),i=(c(13),c(5)),l=c(3),u=c(2),o=(c(14),c(0)),j=function(e){var t=e.product;console.log(t.image);var c=t.image?"../../../".concat(t.image):URL.createObjectURL(t.file);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("figure",{className:"product-image-wrapper",children:Object(o.jsx)("img",{className:"product-image",src:c,alt:t.name})}),Object(o.jsxs)("div",{className:"product-inner",children:[Object(o.jsx)("h3",{className:"product-title",children:t.name}),Object(o.jsx)("p",{className:"product-price",children:Math.round(t.price)}),Object(o.jsx)("p",{className:"product-desc",children:t.description})]})]})},b=(c(16),function(e){var t=e.products;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{className:"product-list",children:t.map((function(e){return Object(o.jsx)("li",{className:"product-item",children:Object(o.jsx)(j,{product:e})},e.id)}))})})}),d=(c(17),c(18),function(e){var t=e.addProduct,c=Object(n.useState)({}),a=Object(u.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),j=l[0],b=l[1],d=Object(n.useState)(""),O=Object(u.a)(d,2),m=O[0],f=O[1],h=Object(n.useState)(""),g=Object(u.a)(h,2),x=g[0],v=g[1],N=Object(n.useState)(""),S=Object(u.a)(N,2),w=S[0],y=S[1],C=Object(n.useState)(!1),_=Object(u.a)(C,2),U=_[0],k=_[1];Object(n.useEffect)((function(){s({id:+new Date,name:j,price:m,file:x,description:w}),console.log(r)}),[j,m,x,w]);console.log(U);return Object(o.jsxs)("form",{className:"new-product",onSubmit:function(e){e.preventDefault(),console.log(r.file),r.file.Error&&k(!0),t(r),b(""),f(""),y(""),v("")},children:[Object(o.jsxs)("label",{className:"new-product-label",children:["\u0418\u043c\u044f",Object(o.jsx)("input",{type:"text",placeholder:"Name",className:"new-product-input new-name",required:!0,value:j,onChange:function(e){return b(e.target.value.trimLeft())}})]}),Object(o.jsx)("label",{className:"new-product-label"}),"\u0426\u0435\u043d\u0430",Object(o.jsx)("input",{type:"number",required:!0,className:"new-product-input new-price",value:m,onChange:function(e){return f(e.target.value)}}),Object(o.jsxs)("div",{class:"input__wrapper",id:"upload-box",children:[Object(o.jsx)("input",{name:"file",type:"file",id:"input__file",required:!0,class:"input input__file",multiple:!0,onChange:function(e){v(e.target.files[0])}}),U?Object(o.jsx)("p",{className:"visible",children:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}):Object(o.jsx)("p",{className:"hidden"}),Object(o.jsx)("div",{className:"art",children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(o.jsx)("label",{for:"input__file",class:"input__file-button",children:Object(o.jsx)("span",{class:"input__file-icon-wrapper",children:"+"})}),x&&Object(o.jsx)(p,{image:x})]}),Object(o.jsx)("textarea",{placeholder:"Description",className:"new-product-label",required:!0,value:w,onChange:function(e){return y(e.target.value.trimLeft())}}),Object(o.jsx)("button",{type:"submit",className:"new-product-save",children:"Save"})]})}),p=function(e){var t=e.image;return Object(o.jsx)("img",{src:URL.createObjectURL(t),alt:t.name})},O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("alphabetically"),s=Object(u.a)(r,2),j=s[0],p=s[1],O=Object(n.useState)(0),m=Object(u.a)(O,2),f=m[0],h=m[1],g=Object(n.useState)(1e5),x=Object(u.a)(g,2),v=x[0],N=x[1],S=Object(n.useState)("UAH"),w=Object(u.a)(S,2),y=w[0],C=w[1];Object(n.useEffect)((function(){fetch("".concat("https://darmatt.github.io/product-cards","/api/products.json")).then((function(e){if(e.ok)return e.json()})).then((function(e){a(e.products)}))}),[]),Object(n.useEffect)((function(){localStorage.getItem("products"),a(JSON.parse(localStorage.getItem("products")))}),[]);var _=Object(n.useMemo)((function(){return c.filter((function(e){return e.price>=f&&e.price<=v}))}),[v,f,j,c]);console.log(y);var U=Object(n.useMemo)((function(){switch(j){case"alphabetically":return Object(l.a)(_).sort((function(e,t){return e.name.localeCompare(t.name)}));case"ascending":return Object(l.a)(_).sort((function(e,t){return e.price-t.price}));case"descending":return Object(l.a)(_).sort((function(e,t){return t.price-e.price}));default:return _}}),[j,_]);return Object(n.useEffect)((function(){a(c.map((function(e){return"USD"===y?Object(i.a)(Object(i.a)({},e),{},{price:+e.price/28}):Object(i.a)(Object(i.a)({},e),{},{price:28*+e.price})})))}),[y]),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("div",{className:"content-sort",children:[Object(o.jsxs)("form",{children:[Object(o.jsx)("h2",{className:"content-price",children:"\u0426\u0435\u043d\u0430"}),Object(o.jsxs)("div",{className:"content-inner-label",children:[Object(o.jsxs)("label",{className:"content-from-label",children:["\u043e\u0442:",Object(o.jsx)("input",{className:"content-from",type:"number",onChange:function(e){return h(e.target.value)}})]}),Object(o.jsxs)("label",{className:"content-to-label",children:["\u0434\u043e:",Object(o.jsx)("input",{type:"number",className:"content-to",onChange:function(e){e.target.value?N(e.target.value):N(1/0)}})]})]}),Object(o.jsx)("h2",{className:"currency",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(o.jsx)("button",{className:"usd",type:"button",value:"USD",onClick:function(e){return C(e.target.value)},children:"USD"}),Object(o.jsx)("button",{className:"uah",type:"button",value:"UAH",onClick:function(e){return C(e.target.value)},children:"UAH"}),Object(o.jsx)("h2",{className:"content-sorting",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(o.jsxs)("label",{className:"radio-button",children:[Object(o.jsx)("input",{className:"radio-input",type:"radio",name:"sorting",value:"ascending",onClick:function(e){return p(e.target.value)}}),"\u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"]}),Object(o.jsxs)("label",{className:"radio-button",children:[Object(o.jsx)("input",{className:"radio-input",type:"radio",name:"sorting",value:"descending",onClick:function(e){return p(e.target.value)}}),"\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"]}),Object(o.jsxs)("label",{className:"radio-button",children:[Object(o.jsx)("input",{className:"radio-input",type:"radio",name:"sorting",value:"alphabetically",onClick:function(e){return p(e.target.value)}}),"\u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"]})]}),Object(o.jsx)(d,{addProduct:function(e){a([].concat(Object(l.a)(c),[e])),localStorage.setItem("products",JSON.stringify([].concat(Object(l.a)(c),[e])))}})]}),Object(o.jsx)("div",{className:"product-list",children:Object(o.jsx)(b,{products:U})})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.18a1e10f.chunk.js.map