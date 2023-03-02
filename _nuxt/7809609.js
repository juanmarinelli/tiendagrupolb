(window.webpackJsonp=window.webpackJsonp||[]).push([[38,4,5,23,24],{323:function(t,e,r){t.exports=r.p+"img/logo.5624fcb.png"},327:function(t,e,r){"use strict";r.r(e);r(40),r(29),r(39),r(58),r(59);var o=r(22),n=(r(16),r(34),r(331)),c=(r(88),r(47));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"carrito-modal",components:{TablaCarrito:n.default},props:{},mounted:function(){},data:function(){return{alert:""}},methods:d(d({},Object(c.b)("cart",["setCompra","setEmptyCart"])),{},{closeCarrito:function(){this.$emit("cerrar-carrito",!1)},vaciarCarrito:function(){this.setEmptyCart()}}),computed:d(d(d(d({},Object(c.c)("user",["user"])),Object(c.c)("cart",["cart","showCart"])),{},{sumTotal:function(){var t=0;return this.items.forEach((function(e){t=parseFloat(t)+parseFloat(e.precio)*parseFloat(e.quantity)})),t}},Object(c.c)({items:"cart/items"})),{},{countItems:function(){return this.items.reduce((function(t,i){return t+i.quantity}),0)}})},m=r(57),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCart,expression:"showCart"}],staticClass:"relative z-10",attrs:{"aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t._v(" "),e("div",{staticClass:"fixed inset-0 overflow-hidden"},[e("div",{staticClass:"absolute inset-0 overflow-hidden"},[e("div",{staticClass:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},[e("div",{staticClass:"pointer-events-auto w-screen max-w-md"},[e("div",{staticClass:"flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-900 shadow-xl"},[e("div",{staticClass:"flex-1 overflow-y-auto py-6 px-4 sm:px-6"},[e("div",{staticClass:"flex items-start justify-between"},[e("h2",{staticClass:"text-lg font-medium text-gray-900 dark:text-gray-200",attrs:{id:"slide-over-title"}},[t._v("Carrito de compra")]),t._v(" "),e("div",{staticClass:"ml-3 flex h-7 items-center"},[e("button",{staticClass:"-m-2 p-2 text-gray-400 hover:text-gray-500",attrs:{type:"button"},on:{click:function(e){return t.closeCarrito()}}},[e("span",{staticClass:"sr-only"},[t._v("Cerrar panel")]),t._v(" "),e("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])])]),t._v(" "),e("div",{staticClass:"mt-8"},[e("div",{staticClass:"flow-root"},[e("TablaCarrito",{attrs:{productos:t.items}})],1)])]),t._v(" "),e("div",{staticClass:"border-t border-gray-200 py-6 px-4 sm:px-6"},[e("div",{staticClass:"flex justify-between text-base font-medium text-gray-900"},[e("p",[t._v("Subtotal")]),t._v(" "),e("p",[t._v("$"+t._s(t.sumTotal))])]),t._v(" "),e("p",{staticClass:"mt-0.5 text-sm text-gray-500"},[t._v("Envio y pago serán calculados en el checkout.")]),t._v(" "),e("div",{staticClass:"mt-6"},[e("NuxtLink",{staticClass:"cursor-pointer flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm",class:0===t.items.length?"cursor-not-allowed bg-gray-200":"bg-black hover:bg-gray-50 hover:text-gray-900",attrs:{to:"/checkout"}},[t._v("\n                  Finalizar compra\n            ")])],1),t._v(" "),e("div",{staticClass:"mt-6 flex justify-center text-center text-sm text-gray-500"},[e("p",[t._v("\n                  o "),e("button",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500",attrs:{type:"button"},on:{click:function(e){return t.closeCarrito()}}},[t._v("Continuar comprando"),e("span",{attrs:{"aria-hidden":"true"}},[t._v(" →")])])])])])])])])])])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,r){var content=r(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("b88076de",content,!0,{sourceMap:!1})},330:function(t,e,r){"use strict";r.r(e);r(31),r(146),r(40),r(29),r(39),r(58),r(34),r(59);var o=r(22),n=(r(16),r(327)),c=r(47);r(10);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"nav-bar",props:{},components:{CarritoModal:n.default},data:function(){return{darkMode:!0,show:!0,search:"",results:[],scrollAmount:0}},watch:{search:function(t){var e=this;if(t.length>=2){var r={value:t};this.$axios.get("/search",{params:r}).then((function(t){e.results=t.data}))}}},methods:d(d({scroll_left:function(){document.querySelector(".wrapper-box").scrollLeft-=300},scroll_right:function(){document.querySelector(".wrapper-box").scrollLeft+=300},scrollLeft:function(){console.log("asd"),this.$refs.menu.scrollTo({left:this.scrollAmount+=200,behavior:"smooth"})},scrollRight:function(){this.$refs.menu.scrollTo({left:this.scrollAmount-=200,behavior:"smooth"})},changeTheme:function(){this.darkMode?(localStorage.setItem("theme","light"),this.darkMode=!1,document.documentElement.classList.remove("dark")):(this.darkMode=!0,localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark"))},verCarrito:function(){this.toSetOpenCartStorage(!0)},closeCarrito:function(){this.toSetOpenCartStorage(!1)},logOut:function(){this.toSetUserStorage(null),this.$router.push("/").catch((function(){}))}},Object(c.b)("user",["setUser","toSetUserStorage"])),Object(c.b)("cart",["setCart","toSetOpenCartStorage"])),computed:d(d(d(d({},Object(c.c)("user",["user"])),Object(c.c)("cart",["showCart","alertAdd","nameAdd"])),Object(c.c)({items:"cart/items"})),{},{countItems:function(){return this.items.reduce((function(t,i){return t+i.quantity}),0)},categories:function(){return this.$store.getters.categories}}),created:function(){this.$store.dispatch("getCategories")}},m=(r(336),r(57)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"relative mx-auto"},[e("nav",{staticClass:"bg-white border-gray-200 px-2 lg:px-4 py-2.5 dark:bg-gray-800 shadow-lg"},[e("div",{staticClass:"flex md:flex-wrap justify-between items-center mx-auto max-w-screen-xl"},[e("NuxtLink",{staticClass:"flex items-center mr-3",attrs:{to:"/"}},[e("img",{staticClass:"mr-3 w-32 md:w-44 md:block hidden",attrs:{src:r(323),alt:"Grupo LB"}}),t._v(" "),e("img",{staticClass:"mr-3 w-12 md:hidden",attrs:{src:r(335),alt:"Grupo LB"}})]),t._v(" "),e("div",{staticClass:"flex items-center order-2"},[e("a",{staticClass:"cursor-pointer dark:text-white text-gray-800 bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800",on:{click:function(e){return t.verCarrito()}}},[e("svg",{staticClass:"w-6 h-6",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})]),t._v(" "),e("span",{staticClass:"flex absolute -mt-5 ml-5"},[e("span",{staticClass:"inline-flex absolute -top-3 -right-3 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900"},[t._v(t._s(t.countItems))])])])]),t._v(" "),e("div",{staticClass:"justify-between items-centerflex md:w-2/3 w-full order-1",attrs:{id:"mobile-menu-2"}},[e("div",{staticClass:"items-center space-x-2 md:flex-1 md:flex justify-center"},[e("div",{staticClass:"relative md:w-1/2 w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"bg-gray-50 shadow rounded-lg border-1 border-gray-300 p-3 w-full text-sm focus:outline-none",attrs:{type:"text",placeholder:"Buscá tu producto..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),e("div",{staticClass:"absolute top-0 right-0 p-4 pr-3 text-gray-800"},[e("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.search,expression:"search != ''"}],staticClass:"h-auto top-16 absolute z-50 -ml-4 transform px-2 md:w-screen max-w-md sm:px-0 lg:ml-0"},[e("div",{staticClass:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"},[e("div",{staticClass:"relative grid gap-6 bg-white px-5 py-6 sm:gap-5 sm:p-5"},[e("h4",{staticClass:"pl-0 text-gray-900 text-base"},[t._v("Resultados de busqueda")]),t._v(" "),t.results.length>0?e("div",t._l(t.results,(function(r){return e("NuxtLink",{key:r.id,staticClass:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",attrs:{to:"/productos/"+r.slug}},[e("img",{staticClass:"rounded-lg h-10 w-10 object-cover",attrs:{src:t.$config.url_img+r.imagen,alt:r.articulo}}),t._v(" "),e("div",{staticClass:"ml-4"},[e("p",{staticClass:"text-base font-medium text-gray-900"},[t._v("\n                                        "+t._s(r.articulo)+"\n                                      ")]),t._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-500"},[t._v("\n                                      "+t._s(r.nom_categoria)+"\n                                      ")])])])})),1):t._e(),t._v(" "),0===t.results.length?e("a",{staticClass:"text-sm"},[t._v("No hay resultados..")]):t._e()])])])])])])],1)]),t._v(" "),e("div",{staticClass:"relative"},[e("nav",{ref:"menu",staticClass:"wrapper-box flex items-center bg-gray-100 text-gray-800 bg-white border-y border-gray-400 px-4 overflow-x-auto no-scrollbar shadow-lg h-14"},[e("ul",{staticClass:"flex-shrink-0 p-2 space-x-5 space-y-2 text-center"},[t._l(t.categories,(function(r,i){return e("li",{key:i,staticClass:"flex-shrink-0 inline-flex items-center px-3 py-1 text-sm border border-gray-800 rounded-full leading-sm cursor-pointer"},[e("NuxtLink",{attrs:{to:"/"+r.slag}},[t._v("\n                                "+t._s(r.nombre)+"\n                                 ")])],1)})),t._v(" "),e("div")],2),t._v(" "),e("a",{staticClass:"left-arrow arrow items-center cursor-pointer hover:bg-gray-200/60 md:flex hidden",on:{click:t.scrollRight}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"}})])]),t._v(" "),e("a",{staticClass:"right-arrow arrow items-center cursor-pointer hover:bg-gray-200/60 md:flex hidden",on:{click:t.scrollLeft}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}})])])])])]),t._v(" "),e("CarritoModal",{attrs:{showCart:t.showCart},on:{"cerrar-carrito":function(e){return t.closeCarrito()}}}),t._v(" "),t.alertAdd?e("div",{staticClass:"z-50 fixed right-0 top-0 flex w-full p-4 mt-2 origin-bottom-right bg-white rounded-md shadow-lg md:mr-10 md:w-64 white-arrow-top ring-1 ring-black ring-opacity-5"},[e("div",{staticClass:"pr-2"},[e("svg",{staticClass:"w-5 h-5 text-green-600",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"data-v-e4de269c":"","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})])]),t._v(" "),e("div",[e("div",{staticClass:"pb-2 text-sm text-gray-700"},[t._v("\n            Carrito de Compras\n            ")]),t._v(" "),e("div",{staticClass:"text-sm tracking-tight text-gray-600"},[t._v("\n              Agregamos "),e("strong",[t._v(t._s(t.nameAdd))]),t._v(" al carrito\n              de compras.\n          ")])])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CarritoModal:r(327).default})},331:function(t,e,r){"use strict";r.r(e);r(40),r(29),r(39),r(16),r(58),r(34),r(59);var o=r(22),n=r(47);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"tabla-carrito",props:{productos:{type:Array,required:!0}},mounted:function(){console.log(this.$config)},data:function(){return{}},methods:l(l({},Object(n.b)("cart",["removeItem"])),{},{deleteProduct:function(t){console.log(t),this.removeItem(t.id_producto)}}),computed:{}},f=r(57),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[t.productos.length>0?e("ul",{staticClass:"-my-6 divide-y divide-gray-200"},t._l(t.productos,(function(r,i){return e("li",{key:i,staticClass:"flex py-6"},[e("div",{staticClass:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"},[e("img",{staticClass:"h-full w-full object-cover object-center",attrs:{src:t.$config.url_img+r.imagen,alt:r.articulo}})]),t._v(" "),e("div",{staticClass:"ml-4 flex flex-1 flex-col"},[e("div",[e("div",{staticClass:"flex justify-between text-base font-medium text-gray-900 dark:text-gray-200"},[e("h3",[e("a",{attrs:{href:"#"}},[t._v(t._s(r.articulo)+" ")])]),t._v(" "),e("p",{staticClass:"ml-4"},[t._v("$"+t._s(r.precio))])]),t._v(" "),e("p",{staticClass:"mt-1 text-sm text-gray-500 dark:text-gray-100"},[t._v(t._s(r.articulo))])]),t._v(" "),e("div",{staticClass:"flex flex-1 items-end justify-between text-sm"},[e("p",{staticClass:"text-gray-500 dark:text-gray-100"},[t._v("Cantidad "+t._s(r.quantity))]),t._v(" "),e("div",{staticClass:"flex"},[e("button",{staticClass:"font-medium text-indigo-600 hover:text-indigo-500",attrs:{type:"button"},on:{click:function(e){return t.deleteProduct(r)}}},[t._v("Eliminar")])])])])])})),0):e("ul",{staticClass:"-my-6 divide-y divide-gray-200",attrs:{role:"list"}},[e("li",{staticClass:"flex py-6"},[t._v("\n                           No hay productos en el carrito\n                     ")])])])}),[],!1,null,"8cd694b0",null);e.default=component.exports},335:function(t,e,r){t.exports=r.p+"img/icono.b099f96.jpg"},336:function(t,e,r){"use strict";r(329)},337:function(t,e,r){var o=r(27)((function(i){return i[1]}));o.push([t.i,".arrow{position:absolute;height:100%;z-index:2020;flex-direction:row;justify-content:center}.left-arrow{left:0}.right-arrow{right:0}.wrapper-box{overflow-x:hidden;overflow-y:hidden}",""]),o.locals={},t.exports=o},338:function(t,e,r){"use strict";r.r(e);r(40),r(29),r(39),r(16),r(58),r(34),r(59);var o=r(22),n=r(47);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"producto-d",props:{producto:{type:Object,required:!0}},mounted:function(){},data:function(){return{cantidad:1}},methods:l(l({},Object(n.b)("cart",["addItem"])),{},{agregarAlCarrito:function(){var t=l(l({},this.producto),{},{cantidad:this.cantidad});this.addItem(t),this.cantidad=1},sumar:function(){this.cantidad++},restar:function(){this.cantidad--,this.cantidad<=0&&(this.cantidad=1)}}),computed:{}},f=r(57),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full px-3 mb-6 lg:mb-0 rounded-lg flex flex-col"},[e("div",{staticClass:"relative bg-gray-50 flex-1"},[t.producto.descuento>0?e("span",{staticClass:"absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500"},[t._v("-"+t._s(t.producto.descuento)+"%")]):t._e(),t._v(" "),e("NuxtLink",{staticClass:"block",attrs:{to:"/productos/"+t.producto.slug}},[e("img",{staticClass:"w-full object-cover rounded-lg",attrs:{src:t.$config.url_img+t.producto.imagen,alt:t.producto.articulo}})]),t._v(" "),e("div",{staticClass:"px-2 pb-6 mt-2"},[e("NuxtLink",{staticClass:"block mb-2",attrs:{to:"/productos/"+t.producto.slug}},[e("h3",{staticClass:"mb-2 text-md font-normal font-heading"},[t._v(t._s(t.producto.articulo))])]),t._v(" "),e("div",{staticClass:"flex justify-between items-center"},[e("p",{staticClass:"text-lg font-bold font-heading text-gray-900"},[e("span",[t._v("$"+t._s(t.producto.precio))]),t._v(" "),t.producto.descuento>0?e("span",{staticClass:"text-xs text-gray-500 font-semibold font-heading line-through"},[t._v("$"+t._s(t.producto.precio_sin_descuento))]):t._e()]),t._v(" "),e("div",{staticClass:"inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"},[e("button",{staticClass:"py-2 hover:text-gray-700",on:{click:function(e){return t.restar()}}},[e("svg",{attrs:{width:"12",height:"2",viewbox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{opacity:"0.35"}},[e("rect",{attrs:{x:"12",width:"2",height:"12",transform:"rotate(90 12 0)",fill:"currentColor"}})])])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cantidad,expression:"cantidad"}],staticClass:"w-12 m-0 px-2 py-2 text-center border-0 focus:ring-transparent focus:outline-none rounded-md",attrs:{readonly:"",type:"number",placeholder:"1"},domProps:{value:t.cantidad},on:{input:function(e){e.target.composing||(t.cantidad=e.target.value)}}}),t._v(" "),e("button",{staticClass:"py-2 hover:text-gray-700",on:{click:function(e){return t.sumar()}}},[e("svg",{attrs:{width:"12",height:"12",viewbox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{opacity:"0.35"}},[e("rect",{attrs:{x:"5",width:"2",height:"12",fill:"currentColor"}}),e("rect",{attrs:{x:"12",y:"5",width:"2",height:"12",transform:"rotate(90 12 5)",fill:"currentColor"}})])])])])]),t._v(" "),e("div",{staticClass:"mt-2 w-full flex"},[e("a",{staticClass:"cursor-pointer items-center justify-center text-white w-full bg-black hover:text-black hover:border-gray-100 border-2 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",on:{click:function(e){return t.agregarAlCarrito()}}},[t._v("\n          Agregar al carrito "),e("svg",{staticClass:"w-4 h-4 inline",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}})])])])],1)],1)])}),[],!1,null,"da2f92e4",null);e.default=component.exports},377:function(t,e,r){"use strict";r.r(e);r(40),r(29),r(39),r(16),r(58),r(34),r(59);var o=r(2),n=r(22),c=(r(30),r(88)),l=r(47),d=r(338);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"productos-list",components:{NavBar:r(330).default,Producto:d.default},props:{},mounted:function(){},data:function(){return{cantidad:1,products:[],categoria:"",show:!1}},methods:m(m({},Object(l.b)("cart",["toAddToCart"])),{},{agregarAlCarrito:function(){var t=m(m({},this.producto),{},{cantidad:this.cantidad});this.toAddToCart(t),this.cantidad=1},sumar:function(){this.cantidad++},restar:function(){this.cantidad--,this.cantidad<0&&(this.cantidad=1)},getProducts:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.getProductos();case 2:e.products=r.sent,console.log(t);case 4:case"end":return r.stop()}}),r)})))()}}),computed:m(m({},Object(l.c)("cart",["getCantProd"])),{},{categories:function(){return this.$store.getters.categories}}),created:function(){this.getProducts()}},h=r(57),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),t._v(" "),e("section",{staticClass:"py-12 bg-gray-100"},[e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex flex-wrap -mx-4 mb-20 items-center justify-between"},[e("div",{staticClass:"w-full lg:w-auto px-4 mb-12 xl:mb-0"},[e("h2",{staticClass:"text-3xl font-bold font-heading"},[e("span",[t._v(t._s(t.products.length)+" Productos encontrados")])])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"flex flex-wrap -mx-3 mb-24"},[e("div",{staticClass:"w-full lg:hidden px-3"},[e("div",{staticClass:"flex flex-wrap -mx-2"},[e("div",{staticClass:"w-1/2 md:w-1/3 px-2 mb-4"},[e("div",{staticClass:"py-6 px-2 text-center bg-gray-50"},[e("a",{staticClass:"font-bold font-heading",attrs:{href:"#"}},[t._v("Categorias")]),t._v(" "),e("ul",{staticClass:"hidden text-left mt-6"},t._l(t.categories,(function(r,i){return e("li",{key:i,staticClass:"mb-4"},[e("a",{attrs:{href:"#"}},[t._v(t._s(r.nombre))])])})),0)])])])]),t._v(" "),e("div",{staticClass:"hidden lg:block w-1/4 px-3"},[e("div",{staticClass:"mb-6 py-10 px-12 bg-gray-50"},[e("h3",{staticClass:"mb-8 text-2xl font-bold font-heading"},[t._v("Categorías")]),t._v(" "),e("ul",t._l(t.categories,(function(r,i){return e("li",{key:i,staticClass:"mb-4"},[e("NuxtLink",{staticClass:"text-md",attrs:{to:"/"+r.slag}},[t._v(t._s(r.nombre))])],1)})),0)])]),t._v(" "),e("div",{staticClass:"w-full lg:w-3/4 mx-auto md:px-4 px-6"},[e("div",{staticClass:"grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4"},t._l(t.products,(function(t,i){return e("Producto",{key:i,attrs:{producto:t}})})),1)])])])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full lg:w-auto px-4 flex flex-wrap items-center"},[e("div",{staticClass:"w-full sm:w-auto mb-4 sm:mb-0 mr-5"},[e("select",{staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{id:"countries"}},[e("option",{attrs:{selected:""}},[t._v("Orden")]),t._v(" "),e("option",{attrs:{value:"mas_vendidos"}},[t._v("Más vendidos")]),t._v(" "),e("option",{attrs:{value:"por_precio"}},[t._v("Por precio")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:r(330).default})}}]);