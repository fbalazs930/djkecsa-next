(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{1562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/arajanlat",function(){return n(8289)}])},8289:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var s=n(5893);const a={_origin:"https://api.emailjs.com"},r=(e,t,n)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class i{constructor(e){this.status=e.status,this.text=e.responseText}}const o=(e,t,n={})=>new Promise(((s,r)=>{const o=new XMLHttpRequest;o.addEventListener("load",(({target:e})=>{const t=new i(e);200===t.status||"OK"===t.text?s(t):r(t)})),o.addEventListener("error",(({target:e})=>{r(new i(e))})),o.open("POST",a._origin+e,!0),Object.keys(n).forEach((e=>{o.setRequestHeader(e,n[e])})),o.send(t)}));var l=(e,t,n,s)=>{const i=s||a._userID,l=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(n);r(i,e,t);const d=new FormData(l);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",i),o("/api/v1.0/email/send-form",d)};function d(){return(0,s.jsxs)("div",{className:"bidding",children:[(0,s.jsx)("h1",{children:"K\xe9rj \xe1raj\xe1nlatot"}),(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l("service_33gx7rg","kecsaForm",e.target,"user_J1ob3Ryk5QebuFnmmgVdQ").then((function(e){alert("Elk\xfcldve!")}),(function(e){alert("Sikertelen!")})),e.target.reset()},children:[(0,s.jsx)("input",{className:"name",type:"text",placeholder:"N\xe9v",name:"name"}),(0,s.jsx)("input",{className:"email",type:"email",placeholder:"E-mail c\xedm",name:"email"}),(0,s.jsx)("input",{className:"tel",type:"tel",placeholder:"Telefonsz\xe1m",name:"tel"}),(0,s.jsx)("input",{type:"text",placeholder:"Rendezv\xe9ny t\xedpusa",name:"type"}),(0,s.jsx)("input",{type:"text",placeholder:"Rendezv\xe9ny helysz\xedne",name:"place"}),(0,s.jsx)("input",{className:"date",type:"date",placeholder:"Rendezv\xe9ny d\xe1tuma",name:"date"}),(0,s.jsx)("input",{type:"number",placeholder:"L\xe9tsz\xe1m (kb)",name:"headcount"}),(0,s.jsx)("textarea",{className:"message",placeholder:"K\xfcl\xf6nb\xf6z\u0151 ig\xe9nyek(kezd\xe9s,befejez\xe9se,k\xfcl\xf6nb\xf6z\u0151 ig\xe9nyek)",name:"text"}),(0,s.jsx)("button",{className:"send",type:"submit",children:"K\xfcld\xe9s"})]})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=1562,e(e.s=t);var t}));var t=e.O();_N_E=t}]);