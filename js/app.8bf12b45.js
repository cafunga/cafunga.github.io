(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},c={app:0},r={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-00909c42":"f45d22d6","chunk-1f44a446":"fbabaa18","chunk-91281684":"2e1d9f7b","chunk-e688c2a8":"cc9ae1a7"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a={"chunk-00909c42":1,"chunk-1f44a446":1,"chunk-91281684":1,"chunk-e688c2a8":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-00909c42":"21b14af4","chunk-1f44a446":"3953d12a","chunk-91281684":"e570c0dc","chunk-e688c2a8":"b2729ea8"}[e]+".css",r=s.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[e],f.parentNode.removeChild(f),a(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,a[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"01d8":function(e,t,a){"use strict";var n=a("7a23");Object(n["w"])("data-v-0b243778");var c={class:"head"},r={class:"menu"},o=Object(n["f"])("figure",null,[Object(n["f"])("img",{class:"caf_ico",src:"https://imgur.com/MaXQWYf.png",alt:"Logo Cafunga"})],-1),i=Object(n["h"])("Principal"),s=Object(n["h"])("Log In"),u=Object(n["h"])("Registrarse"),l=Object(n["h"])("FAQ");function d(e,t,a,d,f,p){var b=Object(n["A"])("router-link");return Object(n["t"])(),Object(n["e"])("div",c,[Object(n["f"])("div",r,[o,Object(n["f"])("figure",null,[Object(n["f"])("img",{onClick:t[0]||(t[0]=function(){return p.toggle&&p.toggle.apply(p,arguments)}),class:"caf_menu",src:"https://imgur.com/Vl8Q1Gm.png",alt:"Menu"})])]),Object(n["f"])("div",{class:Object(n["o"])(["barra",{showhide:f.showhide}])},[Object(n["f"])("ul",null,[Object(n["f"])("li",null,[Object(n["i"])(b,{to:"/"},{default:Object(n["F"])((function(){return[i]})),_:1})]),Object(n["f"])("li",null,[Object(n["i"])(b,{to:"/login"},{default:Object(n["F"])((function(){return[s]})),_:1})]),Object(n["f"])("li",null,[Object(n["i"])(b,{to:"/register"},{default:Object(n["F"])((function(){return[u]})),_:1})]),Object(n["f"])("li",null,[Object(n["i"])(b,{to:"/FAQ"},{default:Object(n["F"])((function(){return[l]})),_:1})])])],2)])}Object(n["u"])();var f={data:function(){return{showhide:!1}},methods:{toggle:function(){this.showhide=!this.showhide}}};a("b7a8");f.render=d,f.__scopeId="data-v-0b243778";t["a"]=f},"0996":function(e,t,a){},"0d18":function(e,t,a){"use strict";a("86a3")},"2b16":function(e,t,a){"use strict";a("846b")},3636:function(e,t,a){"use strict";a("86d1")},"42c5":function(e,t,a){"use strict";a("6a7f")},4413:function(e,t,a){},"448a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(e,t){var a=Object(n["A"])("router-view");return Object(n["t"])(),Object(n["d"])(a)}a("42c5");const r={};r.render=c;var o=r,i=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02"));Object(n["w"])("data-v-c0006ea8");var s=Object(n["f"])("div",{class:"description"},[Object(n["f"])("p",null,"Ventas de ropa, accesorios y artículos para el hogar,todos diseñados y confeccionados en Cuba, 100% artesanales ")],-1);function u(e,t,a,c,r,o){var i=Object(n["A"])("Header"),u=Object(n["A"])("Slide"),l=Object(n["A"])("Boton"),d=Object(n["A"])("Catalogo"),f=Object(n["A"])("Footer");return Object(n["t"])(),Object(n["e"])(n["a"],null,[Object(n["i"])(i),Object(n["i"])(u),s,Object(n["i"])(l),Object(n["i"])(d),Object(n["i"])(f)],64)}Object(n["u"])();var l=a("01d8");Object(n["w"])("data-v-6ec94544");var d=Object(n["g"])('<footer data-v-6ec94544><ul data-v-6ec94544><li data-v-6ec94544> Mapa del sitio</li><li data-v-6ec94544><a href="cafunga.html" data-v-6ec94544><p data-v-6ec94544>Home</p><span class="material-icons" data-v-6ec94544> home </span></a></li><li data-v-6ec94544><a href="cafunga.html" data-v-6ec94544><p data-v-6ec94544>¿Quiénes somos?</p><span class="material-icons" data-v-6ec94544> face </span></a></li><li data-v-6ec94544><a href="preguntas.html" data-v-6ec94544><p data-v-6ec94544>FAQ</p><span class="material-icons" data-v-6ec94544> live_help </span></a></li><li data-v-6ec94544><a href="preguntas.html" data-v-6ec94544><p data-v-6ec94544>Catálogo</p><span class="material-icons" data-v-6ec94544> download </span></a></li><li data-v-6ec94544><a href="mailto:maryliansanchez2000@gmail.com" data-v-6ec94544><p data-v-6ec94544>maryliansanchez2000@gmail.com</p><span class="material-icons" data-v-6ec94544> mail </span></a></li><li data-v-6ec94544><a class="address" href="preguntas.html" data-v-6ec94544><p data-v-6ec94544>Sancti Spíritus - Cuba </p><span class="material-icons" data-v-6ec94544> my_location </span></a></li></ul></footer><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" data-v-6ec94544>',2);function f(e,t,a,n,c,r){return d}Object(n["u"])();var p={props:{msg:String}};a("6324");p.render=f,p.__scopeId="data-v-6ec94544";var b=p;Object(n["w"])("data-v-553601a8");var h={class:"box"},m=Object(n["f"])("div",{class:"catalogos"},null,-1),v={class:"products-container"},j={class:"description-product"};function g(e,t,a,c,r,o){return Object(n["t"])(),Object(n["e"])("div",h,[m,Object(n["f"])("div",v,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(r.catalogos,(function(e){return Object(n["t"])(),Object(n["e"])("div",{key:e.id,class:"container"},[Object(n["f"])("div",{style:Object(n["p"])({"background-image":"url(".concat(e.url,")")}),class:"product-img"},null,4),Object(n["f"])("div",j,Object(n["C"])(e.info),1)])})),128))])])}Object(n["u"])();var O=[{name:"Pomito",id:1,url:"https://imgur.com/Q5on2N8.jpg",info:"Ofrecemos artículos por encargo personalizables que cuentan con la mejor calidad graciasa las excepcionales habilidades de nuestros artesanos en sus distintas especialidades"},{name:"Laura",id:2,url:"https://imgur.com/tzD9aPW.jpg",info:"Contamos con modelos de alto porte seleccionadas rigurosamente bajo los canones de belleza actuales. Estas bellas jóvenes son en su mayoría pertenecientes a la región central, principalmente de las provincias Cienfuegos, Ciego de Avila  y Sancti Spíritus"},{name:"Lampara",id:3,url:"https://imgur.com/ugXsTU2.jpg",info:"Nuestros productos no embellecen solamente casas o lugares privados. El arte cafunguero ha logrado establecerse en los lugares mas públicos de nuestra yayabera provincia. Siendo acogidos cariñosamente por personalidades de la cultura local"},{name:"Bambi",id:4,url:"https://imgur.com/S3mz0yW.jpg",info:"Gracias a nuetras hábiles costureras hemos incursionado recientemente en el mundo de las confecciones textiles minoristas. Con diseños modernos adaptados especialmente a las condiciones climatológicas de Cuba. Se acabaron las Chopitrapos!!! "},{name:"Bijol",id:5,url:"https://imgur.com/PctMWMB.jpg",info:"No se queda atrás nuestra rama de productos destinados a la cocina cubana. Desde funcionalidad hasta diseño de alta calidad caracterizan nuestros utensilios de cocina. Garantizando una alta demanda por parte de nuestros fieles y amables clientes"}],y=O,k={data:function(){return{catalogos:y}}};a("c913");k.render=g,k.__scopeId="data-v-553601a8";var _=k;Object(n["w"])("data-v-484f58a7");var w={class:"slide"},C={class:"presentacion"},A={class:"contenedor"},S=Object(n["f"])("p",null,"Laboratorio de diseño!!!",-1),P=[S];function E(e,t,a,c,r,o){return Object(n["t"])(),Object(n["e"])("div",w,[Object(n["f"])("div",C,[Object(n["f"])("div",A,[(Object(n["t"])(),Object(n["e"])(n["a"],null,Object(n["z"])(4,(function(e){return Object(n["f"])("div",{class:"foto",key:e},P)})),64))])])])}Object(n["u"])();var F={};a("3636");F.render=E,F.__scopeId="data-v-484f58a7";var M=F;Object(n["w"])("data-v-43aac28e");var x={href:""},z=Object(n["f"])("button",null,"Contactar",-1),L=[z];function I(e,t){return Object(n["t"])(),Object(n["e"])("a",x,L)}Object(n["u"])();a("0d18");const B={};B.render=I,B.__scopeId="data-v-43aac28e";var N=B,Q={name:"App",components:{Header:l["a"],Footer:b,Catalogo:_,Slide:M,Boton:N}};a("2b16");Q.render=u,Q.__scopeId="data-v-c0006ea8";var T=Q,q=[{path:"/",component:T},{path:"/login",component:function(){return a.e("chunk-1f44a446").then(a.bind(null,"e3e7"))}},{path:"/register",component:function(){return a.e("chunk-91281684").then(a.bind(null,"16eb"))}},{path:"/FAQ",component:function(){return a.e("chunk-00909c42").then(a.bind(null,"ab02"))}},{path:"/:pathMatch(.*)*",component:function(){return a.e("chunk-e688c2a8").then(a.bind(null,"6c29"))}}],D=Object(i["a"])({history:Object(i["b"])(),routes:q}),H=D;Object(n["c"])(o).use(H).mount("#app")},6324:function(e,t,a){"use strict";a("4413")},"6a7f":function(e,t,a){},"846b":function(e,t,a){},"86a3":function(e,t,a){},"86d1":function(e,t,a){},b7a8:function(e,t,a){"use strict";a("0996")},c913:function(e,t,a){"use strict";a("448a")}});
//# sourceMappingURL=app.8bf12b45.js.map