(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{353:function(e,n,t){"use strict";t.r(n);var r=t(2),c=(t(30),t(88)),o={name:"Pago",props:{},data:function(){return{url:""}},components:{},methods:{createPayment:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.getPayment();case 2:e.url=n.sent,console.log(e.url),new MercadoPago("APP_USR-f8ec72ab-6b91-4c35-b479-a7d262f46b07",{locale:"es-AR"}).checkout({preference:{id:e.url.id},render:{container:".cho-container",label:"Pagar"}});case 6:case"end":return n.stop()}}),n)})))()}},created:function(){},mounted:function(){this.createPayment()},computed:{}},l=t(57),component=Object(l.a)(o,(function(){return(0,this._self._c)("div",{staticClass:"cho-container"})}),[],!1,null,null,null);n.default=component.exports}}]);