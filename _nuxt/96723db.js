(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{368:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(30),{name:"OrderSummary",data:function(){return{order:null}},beforeMount:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios("/orders/".concat(t.$route.params.id));case 2:r=e.sent,n=r.data.order,t.order=n;case 5:case"end":return e.stop()}}),e)})))()}}),c=o,d=r(57),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto p-8"},[t.order?e("div",{staticClass:"layout-base flex justify-center pb-16"},[e("div",{staticClass:"max-w-xl"},[e("span",{staticClass:"text-xs font-medium mb-2"},[t._v("THANK YOU")]),t._v(" "),e("h1",{staticClass:"text-2xl font-bold"},[t._v("\n        Order Confirmed\n      ")]),t._v(" "),e("p",{staticClass:"text-md font-light mt-3"},[t._v("\n        Your order "),e("span",{staticClass:"font-semibold"},[t._v("#"+t._s(t.order.display_id))]),t._v(" was successfully processed. You will\n        receive an email with the tracking number of your parcel once it’s\n        available.\n      ")]),t._v(" "),e("div",{staticClass:"my-8"},t._l(t.order.items,(function(r){return e("order-item",{key:r.id,attrs:{item:r,currency:t.order.currency_code}})})),1),t._v(" "),e("div",[e("totals",{attrs:{item:t.order}})],1)])]):e("div",[t._v("\n    \"We couldn't find your order, it might have gone through but we can't seem to find it at the moment. Please check your email for an order confirmation.\"\n  ")])])}),[],!1,null,null,null);e.default=component.exports}}]);