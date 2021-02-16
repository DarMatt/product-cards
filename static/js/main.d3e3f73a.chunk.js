(this["webpackJsonpproduct-cards"]=this["webpackJsonpproduct-cards"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),s=c.n(r),i=(c(13),c(5)),u=c(4),l=c(2),o=(c(14),c(0)),j=function(e){var t=e.product,c=e.currency,n=e.onSelectedId,a=t.image?"https://darmatt.github.io/product-cards/".concat(t.image):URL.createObjectURL(t.file);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("figure",{className:"product-image-wrapper",children:Object(o.jsx)("img",{className:"product-image",src:a,alt:t.name,onClick:function(){return n(t.id)}})}),Object(o.jsxs)("div",{className:"product-inner",onClick:function(){return n(t.id)},children:[Object(o.jsx)("h3",{className:"product-title",children:t.name}),"USD"===c?Object(o.jsxs)("p",{className:"product-price",children:[Math.round(t.price)," USD"]}):Object(o.jsxs)("p",{className:"product-price",children:[Math.round(t.price)," UAH"]}),Object(o.jsx)("p",{className:"product-desc",children:t.description})]})]})},d=(c(16),function(e){var t=e.products,c=e.currency,n=e.onSelectedId;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{className:"product-list",children:t.map((function(e){return Object(o.jsx)("li",{className:"product-item",children:Object(o.jsx)(j,{product:e,currency:c,onSelectedId:n})},e.id)}))})})}),b=(c(17),c(18),function(e){var t=e.addProduct,c=Object(n.useState)({}),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),j=u[0],d=u[1],b=Object(n.useState)(1e3),O=Object(l.a)(b,2),m=O[0],h=O[1],f=Object(n.useState)(""),x=Object(l.a)(f,2),g=x[0],N=x[1],v=Object(n.useState)(""),S=Object(l.a)(v,2),y=S[0],w=S[1];Object(n.useEffect)((function(){s({id:+new Date,name:j,price:m,file:g,description:y})}),[j,m,g,y]);return Object(o.jsxs)("form",{className:"new-product",onSubmit:function(e){e.preventDefault(),t(r),d(""),h(""),w(""),N("")},children:[Object(o.jsxs)("label",{className:"new-product-insert",children:["\u0418\u043c\u044f",Object(o.jsx)("input",{type:"text",placeholder:"Name",className:"new-product-input new-name",required:!0,value:j,onChange:function(e){return d(e.target.value.trimLeft())}})]}),Object(o.jsx)("label",{className:"new-product-insert"}),"\u0426\u0435\u043d\u0430",Object(o.jsx)("input",{type:"number",required:!0,className:"new-product-input new-price",value:m,onChange:function(e){return h(e.target.value)}}),Object(o.jsxs)("div",{className:"input__wrapper",id:"upload-box",children:[Object(o.jsx)("input",{name:"file",type:"file",id:"input__file",required:!0,className:"input input__file",multiple:!0,onChange:function(e){N(e.target.files[0])}}),Object(o.jsx)("div",{className:"art",children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(o.jsx)("label",{htmlFor:"input__file",className:"input__file-button",children:Object(o.jsx)("span",{className:"input__file-icon-wrapper",children:"+"})}),g&&Object(o.jsx)(p,{image:g})]}),Object(o.jsx)("textarea",{placeholder:"Description",className:"new-product-label",required:!0,value:y,onChange:function(e){return w(e.target.value.trimLeft())}}),Object(o.jsx)("button",{type:"submit",className:"new-product-save",children:"Save"})]})}),p=function(e){var t=e.image;return Object(o.jsx)("img",{src:URL.createObjectURL(t),alt:t.name})},O=(c(19),function(e){var t=e.product,c=e.currency,n=e.reset;return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsxs)("div",{className:"details-img",children:[Object(o.jsxs)("div",{className:"details__inner",children:[Object(o.jsx)("div",{className:"details__img-inner",children:Object(o.jsx)("img",{className:"phone",src:"https://darmatt.github.io/product-cards/".concat(t.image),alt:t.name})}),Object(o.jsx)("button",{className:"reset-btn",type:"button",onClick:function(){return n()},children:"Back"})]}),Object(o.jsxs)("div",{className:"text",children:[Object(o.jsx)("h1",{children:t.name}),"USD"===c?Object(o.jsxs)("p",{className:"product-price",children:[Math.round(t.price)," USD"]}):Object(o.jsxs)("p",{className:"product-price",children:[Math.round(t.price)," UAH"]}),Object(o.jsx)("p",{children:t.description}),Object(o.jsx)("span",{children:"Availability and Networks"})]})]})})}),m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("alphabetically"),s=Object(l.a)(r,2),j=s[0],p=s[1],m=Object(n.useState)(0),h=Object(l.a)(m,2),f=h[0],x=h[1],g=Object(n.useState)(1e5),N=Object(l.a)(g,2),v=N[0],S=N[1],y=Object(n.useState)("UAH"),w=Object(l.a)(y,2),C=w[0],U=w[1],_=Object(n.useState)(""),k=Object(l.a)(_,2),D=k[0],F=k[1],L=Object(n.useState)({}),M=Object(l.a)(L,2),A=M[0],I=M[1];Object(n.useEffect)((function(){fetch("".concat("https://darmatt.github.io/product-cards","/api/products.json")).then((function(e){if(e.ok)return e.json()})).then((function(e){a(e.products)}))}),[]);var E=Object(n.useMemo)((function(){return c.filter((function(e){return e.price>=f&&e.price<=v}))}),[v,f,j,c]),H=Object(n.useMemo)((function(){switch(j){case"alphabetically":return Object(u.a)(E).sort((function(e,t){return e.name.localeCompare(t.name)}));case"ascending":return Object(u.a)(E).sort((function(e,t){return e.price-t.price}));case"descending":return Object(u.a)(E).sort((function(e,t){return t.price-e.price}));default:return E}}),[j,E]);Object(n.useEffect)((function(){a(c.map((function(e){return"USD"===C?Object(i.a)(Object(i.a)({},e),{},{price:+e.price/28}):Object(i.a)(Object(i.a)({},e),{},{price:28*+e.price})})))}),[C]);return Object(n.useEffect)((function(){I(c.filter((function(e){return e.id===D})))}),[D]),Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsx)("div",{className:"content",children:D?Object(o.jsx)(O,{product:A[0],currency:C,reset:function(){F("")}}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"content-sort",children:[Object(o.jsxs)("form",{children:[Object(o.jsx)("h2",{className:"content-price",children:"\u0426\u0435\u043d\u0430"}),Object(o.jsxs)("div",{className:"content-inner-label",children:[Object(o.jsxs)("label",{className:"content-from-label",children:["\u043e\u0442:",Object(o.jsx)("input",{className:"content-from",type:"number",onChange:function(e){return x(e.target.value)}})]}),Object(o.jsxs)("label",{className:"content-to-label",children:["\u0434\u043e:",Object(o.jsx)("input",{type:"number",className:"content-to",onChange:function(e){e.target.value?S(e.target.value):S(1/0)}})]})]}),Object(o.jsx)("h2",{className:"currency",children:"\u0412\u0430\u043b\u044e\u0442\u0430"}),Object(o.jsx)("button",{className:"usd",type:"button",value:"USD",onClick:function(e){return U(e.target.value)},children:"USD"}),Object(o.jsx)("button",{className:"uah",type:"button",value:"UAH",onClick:function(e){return U(e.target.value)},children:"UAH"}),Object(o.jsx)("h2",{className:"content-sorting",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(o.jsxs)("label",{className:"radio-button",children:[Object(o.jsx)("input",{className:"radio-input",type:"radio",name:"sorting",value:"ascending",onClick:function(e){return p(e.target.value)}}),"\u043f\u043e \u0432\u043e\u0437\u0440\u043e\u0441\u0442\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"]}),Object(o.jsxs)("label",{className:"radio-button",children:[Object(o.jsx)("input",{className:"radio-input",type:"radio",name:"sorting",value:"descending",onClick:function(e){return p(e.target.value)}}),"\u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b"]}),Object(o.jsxs)("label",{className:"radio-button",children:[Object(o.jsx)("input",{className:"radio-input",type:"radio",name:"sorting",value:"alphabetically",onClick:function(e){return p(e.target.value)}}),"\u043f\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443"]})]}),Object(o.jsx)(b,{addProduct:function(e){a([].concat(Object(u.a)(c),[e]))}})]}),Object(o.jsx)("div",{className:"product-wrapper-list",children:Object(o.jsx)(d,{products:H,currency:C,onSelectedId:function(e){F(e)}})})]})})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),h()}],[[20,1,2]]]);
//# sourceMappingURL=main.d3e3f73a.chunk.js.map