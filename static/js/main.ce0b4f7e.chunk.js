(this["webpackJsonpform-and-weather"]=this["webpackJsonpform-and-weather"]||[]).push([[0],{119:function(e,a,t){},242:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(10),c=t.n(s),i=(t(119),t(69),t(15)),l=t(17),d=t(273),j=t(19),b=t(109),m=t.n(b),o=t(3);function u(e){var a=e.city,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=0c8a1ab5717f74d9705a27b1da25fbc5"),n=Object(r.useState)(null),s=Object(i.a)(n,2),c=s[0],l=s[1],d=Object(r.useState)(null),j=Object(i.a)(d,2),b=j[0],u=j[1];return Object(r.useEffect)((function(){m.a.get(t).then((function(e){l(e.data),console.log(e.data),u(null)})).catch((function(e){return u(e)}))}),[t]),c?b?Object(o.jsx)("div",{children:"City name is not correct."}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"weather",children:[Object(o.jsx)("h1",{children:"Weather"}),Object(o.jsxs)("p",{children:["City Name : ",c.name]}),Object(o.jsxs)("p",{children:["Country : ",c.sys.country]}),Object(o.jsxs)("p",{children:["Temprature : ",Math.round(c.main.temp-273.15)," \u2103"]}),Object(o.jsxs)("p",{children:["Weather : ",c.weather[0].main]}),Object(o.jsxs)("p",{children:["Latitude : ",c.coord.lat]}),Object(o.jsxs)("p",{children:["Longitude : ",c.coord.lon]})]})}):Object(o.jsx)("div",{children:"Loading"})}var h=t(272);function O(e){var a=e.name,t=e.type,r=e.label;return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.b,{variant:"outlined",name:a,label:r,type:t,as:h.a}),Object(o.jsx)("div",{className:"error",children:Object(o.jsx)(l.a,{name:a})})]})}function x(e){var a=e.name,t=e.type,r=e.label;return Object(o.jsxs)("div",{children:[Object(o.jsx)(l.b,{variant:"outlined",name:a,label:r,type:t,as:h.a,InputLabelProps:{shrink:!0}}),Object(o.jsx)("div",{className:"error",children:Object(o.jsx)(l.a,{name:a})})]})}function p(e){var a=e.name,t=e.values,r=e.labels;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{children:[Object(o.jsx)(l.b,{type:"radio",name:a,value:t[0]}),r[0]]}),Object(o.jsxs)("label",{children:[Object(o.jsx)(l.b,{type:"radio",name:a,value:t[1]}),r[1]]}),Object(o.jsxs)("label",{children:[Object(o.jsx)(l.b,{type:"radio",name:a,value:t[2]}),r[2]]}),Object(o.jsx)("div",{className:"error",children:Object(o.jsx)(l.a,{name:a})})]})}var v=j.c().shape({firstName:j.e().required().min(2).max(20).matches(/^[A-Za-z ]*$/,"Please enter valid name"),lastName:j.e().required().min(2).max(20).matches(/^[A-Za-z ]*$/,"Please enter valid name"),email:j.e().email().required(),userName:j.e().required().min(4).max(20),password:j.e().required().min(8).matches(/(?=.*?[A-Z])/g,"Should contain a Capital latter").matches(/(?=.*?[a-z])/g,"Should contain a Small latter").matches(/(?=.*?[0-9])/g,"Should contain a Number").matches(/(?=.*?[#?!@$%^&*-])/g,"Should contain a Spacial latter"),dob:j.a().required().test("age","You must be 18 or older",(function(e){var a=new Date;return a.setFullYear(a.getFullYear()-18),e<=a})),rePassword:j.e().oneOf([j.d("password")],"password should match").required(),city:j.e().required().matches(/^[A-Za-z ]*$/,"Please enter valid city name"),pin:j.b().required().min(1e5,"Pin Code must be of 6 number").max(999999,"Pin Code must be of 6 number"),gender:j.e().required().oneOf(["male","female","other"])}),f={firstName:"",lastName:"",email:"",userName:"",password:"",rePassword:"",city:"",pin:"",dob:"",gender:""};function y(){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],s=Object(r.useState)(""),c=Object(i.a)(s,2),j=c[0],b=c[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Form"}),Object(o.jsx)(l.d,{initialValues:f,validationSchema:v,onSubmit:function(e){b(e.city),n(!0)},children:function(){return Object(o.jsxs)(l.c,{className:"formContainer",children:[Object(o.jsx)(O,{name:"firstName",type:"text",label:"First Name"}),Object(o.jsx)(O,{name:"lastName",type:"text",label:"Last Name"}),Object(o.jsx)(p,{name:"gender",values:["male","female","other"],labels:["Male","Female","Other"]}),Object(o.jsx)(x,{name:"dob",type:"date",label:"Date Of Birth"}),Object(o.jsx)(O,{name:"city",type:"text",label:"City Name"}),Object(o.jsx)(O,{name:"pin",type:"number",label:"Pin Code"}),Object(o.jsx)(O,{name:"email",type:"email",label:"Email"}),Object(o.jsx)(O,{name:"userName",type:"text",label:"username"}),Object(o.jsx)(O,{name:"password",type:"password",label:"Password"}),Object(o.jsx)(O,{name:"rePassword",type:"password",label:"Conform Password"}),Object(o.jsx)("div",{className:"submitBtn",children:Object(o.jsx)(d.a,{variant:"outlined",size:"large",color:"primary",type:"submit",children:"Submit"})})]})}}),t?Object(o.jsx)(u,{city:j}):null]})}var w=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(y,{})})};c.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))},69:function(e,a,t){}},[[242,1,2]]]);
//# sourceMappingURL=main.ce0b4f7e.chunk.js.map