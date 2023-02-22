(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{371:function(e,t,r){"use strict";r.r(t);r(40),r(29),r(39),r(16),r(58),r(34),r(59);var o=r(22),n=r(2),l=(r(30),r(88)),c=r(47);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var m={name:"ProductoForm",data:function(){return{form:{nombre:"",precio:"",imagen:"",stock:""},alert:""}},props:{id:{type:String},item:{type:Object}},mounted:function(){this.user?this.item&&(this.form=Object.assign({},this.item)):this.$router.push("/")},methods:{getProductos:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user){t.next=6;break}return t.next=3,l.a.getProductos();case 3:e.productos=t.sent,t.next=7;break;case 6:e.$router.push("/");case 7:case"end":return t.stop()}}),t)})))()},guardarProducto:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""==e.form.nombre||""==e.form.precio||""==e.form.imagen||""==e.form.stock){t.next=8;break}return t.next=3,l.a.saveProducto(e.form);case 3:r=t.sent,e.$router.push("/admin"),e.$emit("add-producto",r),t.next=9;break;case 8:e.alert="Por favor complete los campos con asterisco";case 9:case"end":return t.stop()}}),t)})))()},actualizarProducto:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.updateProducto(e.id,e.form);case 2:r=t.sent,e.$router.push("/admin"),e.$emit("upd-producto",r);case 5:case"end":return t.stop()}}),t)})))()}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)("user",["user"]))},f=m,v=r(57),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"w-full max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"},[t("div",{staticClass:"grid gap-8 grid-cols-1"},[t("div",{staticClass:"flex flex-col"},[t("div",{staticClass:"flex flex-col sm:flex-row items-center"},[e.item?e._e():t("h2",{staticClass:"font-semibold text-lg mr-auto"},[e._v("Alta de Producto")]),e._v(" "),e.item?t("h2",{staticClass:"font-semibold text-lg mr-auto"},[e._v("Editar de Producto")]):e._e(),e._v(" "),t("div",{staticClass:"w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"})]),e._v(" "),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"form"},[t("form",{attrs:{method:"POST",id:"formulario"}},[t("div",{staticClass:"md:flex flex-row md:space-x-4 w-full text-xs"},[t("div",{staticClass:"mb-3 space-y-2 w-full text-xs"},[t("label",{staticClass:"font-semibold text-gray-600 py-2"},[e._v("Nombre Producto "),t("abbr",{attrs:{title:"required"}},[e._v("*")]),e._v(" "),!e.alert.nombre_completo&&e.form.nombre_completo?t("span",[t("svg",{staticClass:"w-4 h-4 inline",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]):e._e()]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nombre,expression:"form.nombre"}],staticClass:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4",attrs:{name:"nombre",placeholder:"Nombre Producto",required:"required",type:"text"},domProps:{value:e.form.nombre},on:{input:function(t){t.target.composing||e.$set(e.form,"nombre",t.target.value)}}}),e._v(" "),e.alert.nombre?t("p",{staticClass:"text-red-500 bold text-xs"},[e._v(e._s(e.alert.nombre))]):e._e()])]),e._v(" "),t("div",{staticClass:"mb-3 space-y-2 w-full text-xs"},[t("label",{staticClass:"font-semibold text-gray-600 py-2"},[e._v(" Precio "),t("abbr",{attrs:{title:"required"}},[e._v("*")]),!e.alert.email&&e.form.email?t("span",[t("svg",{staticClass:"w-4 h-4 inline",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]):e._e()]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.precio,expression:"form.precio"}],staticClass:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4",attrs:{placeholder:"Precio ",required:"required",type:"text"},domProps:{value:e.form.precio},on:{input:function(t){t.target.composing||e.$set(e.form,"precio",t.target.value)}}}),e._v(" "),e.alert.precio?t("p",{staticClass:"text-red-500 bold text-xs"},[e._v(e._s(e.alert.precio))]):e._e()]),e._v(" "),t("div",{staticClass:"mb-3 space-y-2 w-full text-xs"},[t("label",{staticClass:"font-semibold text-gray-600 py-2"},[e._v(" Imagen "),t("abbr",{attrs:{title:"required"}},[e._v("*")]),!e.alert.email&&e.form.email?t("span",[t("svg",{staticClass:"w-4 h-4 inline",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]):e._e()]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.imagen,expression:"form.imagen"}],staticClass:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4",attrs:{placeholder:"URL de Imagen ",required:"required",type:"text"},domProps:{value:e.form.imagen},on:{input:function(t){t.target.composing||e.$set(e.form,"imagen",t.target.value)}}}),e._v(" "),e.alert.imagen?t("p",{staticClass:"text-red-500 bold text-xs"},[e._v(e._s(e.alert.imagen))]):e._e()]),e._v(" "),t("div",{staticClass:"md:flex md:flex-row md:space-x-4 w-full text-xs"},[t("div",{staticClass:"w-full flex flex-col mb-3"},[t("label",{staticClass:"font-semibold text-gray-600 py-2"},[e._v("Stock"),t("abbr",{attrs:{title:"required"}},[e._v("*")]),!e.alert.telefono&&e.form.telefono?t("span",[t("svg",{staticClass:"w-4 h-4 inline",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"}})])]):e._e()]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.stock,expression:"form.stock"}],staticClass:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4",attrs:{name:"stock",placeholder:"stock",type:"text"},domProps:{value:e.form.stock},on:{input:function(t){t.target.composing||e.$set(e.form,"stock",t.target.value)}}}),e._v(" "),e.alert.stock?t("p",{staticClass:"text-red-500 bold text-xs"},[e._v(e._s(e.alert.stock))]):e._e()])]),e._v(" "),t("p",{staticClass:"text-md text-red-500 font-bold text-right my-3"},[e._v(e._s(this.alert))]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"mt-5 text-right md:space-x-3 md:block flex flex-col-reverse"},[t("router-link",{staticClass:"mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100",attrs:{to:{name:"admin"}}},[e._v(" Cancelar")]),e._v(" "),e.item?e._e():t("button",{staticClass:"mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500",attrs:{type:"button"},on:{click:function(t){return e.guardarProducto()}}},[e._v("Guardar")]),e._v(" "),e.item?t("button",{staticClass:"mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500",attrs:{type:"button"},on:{click:function(t){return e.actualizarProducto()}}},[e._v("Actualizar")]):e._e()],1)])])])])])])])}),[function(){var e=this,t=e._self._c;return t("p",{staticClass:"text-xs text-red-500 text-right my-3"},[e._v("Campos requeridos con asterisco "),t("abbr",{attrs:{title:"Required field"}},[e._v("*")])])}],!1,null,null,null);t.default=component.exports}}]);