(this.webpackJsonptaskmanager=this.webpackJsonptaskmanager||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(7),i=n.n(s),r=(n(13),n(8)),o=n(6),l=n(3),j=n(0),d=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(localStorage.getItem("myTodoList")?JSON.parse(localStorage.getItem("myTodoList")):[]),i=Object(l.a)(s,2),d=i[0],u=i[1],b=Object(c.useState)("Add Task"),O=Object(l.a)(b,2),f=O[0],m=O[1],h=Object(c.useState)(null),x=Object(l.a)(h,2),g=x[0],p=x[1];Object(c.useEffect)((function(){localStorage.setItem("myTodoList",JSON.stringify(d))}),[d]);return Object(j.jsxs)("div",{className:"mainsection",children:[Object(j.jsx)("h2",{children:"Task Manager"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Task",onChange:function(e){return a(e.target.value)},value:n}),Object(j.jsxs)("div",{className:"task_btns",children:[Object(j.jsx)("button",{onClick:function(){if(!n)return alert("Plz add item");if(n&&g)u(d.map((function(e){return e.id===g?Object(o.a)(Object(o.a)({},d),{},{name:n}):e}))),a(""),p(null),m("Add Task");else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(r.a)(d),[e])),a("")}},children:f}),Object(j.jsx)("span",{children:" "}),Object(j.jsx)("button",{children:"Clear Task"})]}),Object(j.jsx)("div",{className:"result_div",children:d.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsxs)("span",{children:[Object(j.jsx)("span",{onClick:function(){return function(e){m("Edit Task"),console.log(e);var t=d.find((function(t){return t.id===e}));console.log(t),a(t.name),p(t.id)}(e.id)},children:Object(j.jsx)("i",{className:"far fa-edit"})}),Object(j.jsx)("span",{onClick:function(){return function(e){console.log(e);var t=d.filter((function(t){return t.id!==e}));u(t)}(e.id)},children:Object(j.jsx)("i",{className:"far fa-trash-alt"})})]})]},t)}))})]})};var u=function(){return Object(j.jsx)(d,{})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eb9cd00b.chunk.js.map