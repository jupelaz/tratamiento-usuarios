(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{182:function(e,a,t){e.exports=t(374)},187:function(e,a,t){},373:function(e,a,t){"use strict";t.r(a),t.d(a,"register",(function(){return r})),t.d(a,"unregister",(function(){return l}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");n?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}))}}function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function l(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},374:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),l=t.n(o),c=(t(187),t(34)),i=t(41),s=function(){return r.a.createElement("div",null)},m=t(14),u=t(20),d=t.n(u),p=function(){return d.a.get("/api/empleados")},f=function(e){return d.a.get("/api/empleados/"+e)},E=function(e){return d.a.delete("/api/empleados/"+e)},b=function(e){return d.a.post("/api/empleados",e)},h=function(e){return d.a.put("/api/empleados/"+e._id,e)},g=function(){return d.a.get("/api/empresas")},v=function(e){return d.a.get("/api/empresas/"+e)},y=function(e){return d.a.delete("/api/empresas/"+e)},w=function(e){return d.a.post("/api/empresas",e)},j=function(e){return d.a.put("/api/empresas/"+e._id,e)},C=t(379),O=t(380),k=t(375),I=t(30),F=t(376),S=t(378),A=t(381),_=void 0,z=C.a.Title,T=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(!1),c=Object(m.a)(l,2),i=c[0],s=c[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),g=d[0],v=d[1],y=Object(n.useState)(0),w=Object(m.a)(y,2),j=w[0],C=w[1],T=O.a.useForm(),x=Object(m.a)(T,1)[0],N={marginTop:20},W={wrapperCol:{offset:8,span:16}};Object(n.useEffect)((function(){R(),s(!0),p().then((function(e){var a=e.data;a.forEach((function(e){return e.nombreCompleto="".concat(e.nombre," ").concat(e.apellido1," ").concat(e.apellido2)})),o(a)})).catch(console.log),j?f(j).then((function(e){var a=e.data;x.setFieldsValue(a)})).catch(console.log):x.setFieldsValue({_id:"",nombre:"",apellido1:"",apellido2:""}),s(!1)}),[g,x,j]);var q=[{title:"Nombre",dataIndex:"nombreCompleto",key:"nombreCompleto"},{title:"Acci\xf3n",key:"action",render:function(e,a){return r.a.createElement(k.a,{size:"middle"},r.a.createElement(I.a,{type:"primary",disabled:g,onClick:function(){C(a._id),v(!0)}},"Editar"),r.a.createElement(F.a,null),r.a.createElement(I.a,{type:"primary",disabled:g,danger:!0,onClick:function(){return V(a._id)}},"Borrar"))}}],R=function(){s(!0),p().then((function(e){var a=e.data;a.forEach((function(e){return e.nombreCompleto="".concat(e.nombre," ").concat(e.apellido1," ").concat(e.apellido2)})),o(a)})).catch(console.log),s(!1)},V=function(e){E(e).then((function(e){return _.loadEmpleados()})).catch(console.log)};return r.a.createElement("div",null,i?r.a.createElement("div",null,"Loading ..."):r.a.createElement("div",null,r.a.createElement(z,{style:N,level:3},"Lista de empleados"),r.a.createElement(S.a,{columns:q,dataSource:t,footer:function(){return r.a.createElement(I.a,{disabled:g,type:"primary",onClick:function(){return v(!0)}},"Crear Empleado")}}),r.a.createElement(z,{style:N,level:4},"Empleado"),r.a.createElement(O.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{form:x,onFinish:function(e){e._id?h(e).then(v(0)).catch(console.log):(e.fechaAlta=Date.now().toString(),b(e).then(v(0)).catch(console.log)),console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(O.a.Item,{name:"_id"}),r.a.createElement(O.a.Item,{label:"Nombre",name:"nombre",rules:[{required:!0,message:"Introduzca un nombre"}]},r.a.createElement(A.a,{disabled:!g})),r.a.createElement(O.a.Item,{label:"Apellido 1",name:"apellido1",rules:[{required:!0,message:"Introduzca el primer apellido"}]},r.a.createElement(A.a,{disabled:!g})),r.a.createElement(O.a.Item,{label:"Apellido 2",name:"apellido2",rules:[{required:!0,message:"Introduzca el segundo apellido"}]},r.a.createElement(A.a,{disabled:!g})),r.a.createElement(O.a.Item,W,r.a.createElement(k.a,{size:"middle"},r.a.createElement(I.a,{disabled:!g,type:"primary",htmlType:"submit"},"Guardar"),r.a.createElement(F.a,null),r.a.createElement(I.a,{disabled:!g,type:"primary",danger:!0,onClick:function(){C(0),v(!1)}},"Volver"))))))},x=C.a.Title,N=function(e){var a=O.a.useForm(),t=Object(m.a)(a,1)[0];f(e.match.params.id).then((function(e){var a=e.data;t.setFieldsValue(a)})).catch(console.log);var n=Object(i.f)(),o={wrapperCol:{offset:8,span:16}};return r.a.createElement("div",null,r.a.createElement(x,{style:{marginTop:20},level:4},e.match.params.id?"Editar empleado":"A\xf1adir empleado"),r.a.createElement(O.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{form:t,onFinish:function(e){e._id?h(e).then(n.push("/empleados")).catch(console.log):(e.fechaAlta=Date.now().toString(),b(e).then(n.push("/empleados")).catch(console.log)),console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(O.a.Item,{name:"_id"}),r.a.createElement(O.a.Item,{label:"Nombre",name:"nombre",rules:[{required:!0,message:"Introduzca un nombre"}]},r.a.createElement(A.a,null)),r.a.createElement(O.a.Item,{label:"Apellido 1",name:"apellido1",rules:[{required:!0,message:"Introduzca el primer apellido"}]},r.a.createElement(A.a,null)),r.a.createElement(O.a.Item,{label:"Apellido 2",name:"apellido2",rules:[{required:!0,message:"Introduzca el segundo apellido"}]},r.a.createElement(A.a,null)),r.a.createElement(O.a.Item,o,r.a.createElement(k.a,{size:"middle"},r.a.createElement(I.a,{type:"primary",htmlType:"submit"},e.match.params.id?"Editar":"Crear"),r.a.createElement(F.a,null),r.a.createElement(I.a,{type:"primary",danger:!0},"Cancelar")))),r.a.createElement(c.b,{to:"/empleados"},"\u2190 Volver a Empleados"))},W=C.a.Title,q=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],o=a[1],l=Object(n.useState)(0),i=Object(m.a)(l,2),s=i[0],u=i[1];Object(n.useEffect)((function(){g().then((function(e){e.data.forEach((function(e){return e.nombreResponsable="".concat(e.responsable.nombre," ").concat(e.responsable.apellido1," ").concat(e.responsable.apellido2)})),o(e.data),u(0)})).catch(console.log)}),[s]);var d=[{title:"Nombre",dataIndex:"nombre",key:"nombre"},{title:"Responsable",dataIndex:"nombreResponsable",key:"nombreResponsable"},{title:"Acci\xf3n",key:"action",render:function(e,a){return r.a.createElement(k.a,{size:"middle"},r.a.createElement(I.a,{type:"primary"},r.a.createElement(c.b,{to:"/empresas/"+a._id},"Editar")),r.a.createElement(F.a,null),r.a.createElement(I.a,{type:"primary",danger:!0,onClick:function(){return p(a._id)}},"Borrar"))}}],p=function(e){y(e).then(u).catch(console.log)};return r.a.createElement("div",null,r.a.createElement(W,{style:{marginTop:20},level:3},"Lista de empresas"),r.a.createElement(S.a,{columns:d,dataSource:t,footer:function(){return r.a.createElement(c.b,{to:"/empresas/0"},"Crear Empresa")}}))},R=t(180),V=t(75),L=C.a.Title,B=V.a.Option,D=function(e){var a=Object(i.f)(),t=O.a.useForm(),o=Object(m.a)(t,1)[0],l=Object(n.useState)(0),s=Object(m.a)(l,2),u=s[0],d=s[1],f=Object(n.useState)([{_id:"",nombre:""}]),E=Object(m.a)(f,2),b=E[0],h=E[1];Object(n.useEffect)((function(){v(e.match.params.id).then((function(e){var a=e.data;d(a),o.setFieldsValue(a)})).catch(console.log),y()}),[e.match.params.id,o]);var g={wrapperCol:{offset:8,span:16}},y=function(){p().then((function(e){var a=e.data;h(a)})).catch(console.log)};return r.a.createElement("div",null,r.a.createElement(L,{style:{marginTop:20},level:4},u._id?"Editar empresa":"A\xf1adir empresa"),r.a.createElement(O.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:16}},{form:o,onFinish:function(e){var t=e.nombre,n=e.responsable;t&&(u._id?(d({nombre:t,responsable:n}),j(u).then(a.push("/empresas")).catch(console.log)):w({nombre:t,responsable:n,fechaAlta:Date.now().toString()}).then(a.push("/empresas")).catch(console.log)),console.log("Success:",{nombre:t,responsable:n})},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(O.a.Item,{label:"Nombre",name:"nombre",value:u.nombre,rules:[{required:!0,message:"Introduzca un nombre"}]},r.a.createElement(A.a,null)),r.a.createElement(O.a.Item,{label:"Select",name:"responsable",value:u.nombre,hasFeedback:!0,rules:[{required:!0,message:"Selecciona un responsable"}]},r.a.createElement(V.a,null,b.map((function(e){var a=e._id,t=e.nombre;return r.a.createElement(B,{value:a},t)})))),r.a.createElement(O.a.Item,g,r.a.createElement(k.a,{size:"middle"},r.a.createElement(I.a,{type:"primary",htmlType:"submit"},u._id?"Editar":"Crear"),r.a.createElement(F.a,null),r.a.createElement(I.a,{type:"primary",danger:!0,onClick:function(){u._id?o.setFieldsValue(Object(R.a)({},u)):o.resetFields()}},"Cancelar")))),r.a.createElement(c.b,{to:"/empresas"},"\u2190 Volver a Empresas"))},P=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))},U=(t(372),t(377)),J=t(50),G=U.a.Header,H=U.a.Content,M=U.a.Footer,$=function(){return r.a.createElement(c.a,null,r.a.createElement(U.a,{className:"layout"},r.a.createElement(G,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(J.a,{theme:"dark",mode:"horizontal"},r.a.createElement(J.a.Item,{key:"1"},r.a.createElement("a",{href:"/"},"Inicio")),r.a.createElement(J.a.Item,{key:"2"},r.a.createElement("a",{href:"/empleados"},"Empleados")),r.a.createElement(J.a.Item,{key:"3"},r.a.createElement("a",{href:"/empresas"}," Empresas")))),r.a.createElement(H,{style:{padding:"0 50px"}},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:s}),r.a.createElement(i.a,{exact:!0,path:"/empleados",component:T}),r.a.createElement(i.a,{exact:!0,path:"/empleados/:id",component:N}),r.a.createElement(i.a,{exact:!0,path:"/empresas",component:q}),r.a.createElement(i.a,{exact:!0,path:"/empresas/:id",component:D}),r.a.createElement(i.a,{component:P})))),r.a.createElement(M,{style:{textAlign:"center"}},"Atenci\xf3n a usuarios \xa92020 Created by Lurconis")))},K=t(373);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),K.unregister()}},[[182,1,2]]]);
//# sourceMappingURL=main.bd85bf51.chunk.js.map