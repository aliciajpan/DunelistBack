(this.webpackJsonphackthe6ix2020=this.webpackJsonphackthe6ix2020||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},20:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),u=(n(20),n(4)),i=n(3),l=function(t){var e=t.task,n=t.toggleFinished,a=t.deleteTask;return c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",id:"myCheck",onClick:n}),e.content,c.a.createElement("button",{onClick:a},"x"))},s=function(t){var e=t.category;return c.a.createElement("option",{value:e})},f=n(2),d=n.n(f),g=function(){return d.a.get("api/tasks").then((function(t){return t.data}))},h=function(t){return d.a.post("api/tasks",t).then((function(t){return t.data}))},p=function(t,e){return d.a.put("".concat("api/tasks","/").concat(t),e).then((function(t){return t.data}))},m=function(t){return d.a.delete("".concat("api/tasks","/").concat(t))},v=function(){return d.a.get("api/categories").then((function(t){return t.data}))},b=function(t){var e=d.a.post("api/categories",t);return console.log(e.then((function(t){return t.data}))),e.then((function(t){return t.data}))},k=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],o=e[1],r=Object(a.useState)(""),f=Object(i.a)(r,2),d=f[0],k=f[1],E=Object(a.useState)(""),y=Object(i.a)(E,2),j=y[0],O=y[1],x=Object(a.useState)([]),w=Object(i.a)(x,2),S=w[0],C=w[1];Object(a.useEffect)((function(){console.log("effect"),g().then((function(t){o(t)}))}),[]),Object(a.useEffect)((function(){console.log("categories"),v().then((function(t){C(t)}))}),[]);var D=(new Date).toDateString();return c.a.createElement("div",null,c.a.createElement("h2",null,"Task List for ",D),c.a.createElement("div",null,n.map((function(t,e){return c.a.createElement(l,{key:e,task:t,toggleFinished:function(){return function(t){var e=n.find((function(e){return e.id===t})),a=Object(u.a)(Object(u.a)({},e),{},{status:!e.status});p(t,a).then((function(e){o(n.map((function(n){return n.id!==t?n:e})))}))}(t.id)},deleteTask:function(){return e=t.id,void(window.confirm("Are you sure you want to delete this?")&&(m(e),o(n.filter((function(t){return t.id!==e})))));var e}})}))),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e=!0===!j.replace(/\s/g,"").length?"uncategorized":j,a={content:d,id:Math.random(1e7),status:!1,category:e,date:Date()},c=S.find((function(t){return t.id===t}));console.log(c),void 0!==c&&b({category:e}).then((function(t){console.log(t)})),d.replace(/\s/g,"").length?h(a).then((function(t){o(n.concat(t)),k(""),O("")})):(alert("Please enter valid text."),k(""))}},c.a.createElement("input",{value:d,onChange:function(t){console.log(t.target.value),k(t.target.value)}}),c.a.createElement("input",{type:"text",value:j,onChange:function(t){O(t.target.value)},list:"cats"}),c.a.createElement("datalist",{id:"cats"},S.map((function(t,e){return c.a.createElement(s,{key:e,category:t.category})}))),c.a.createElement("button",{type:"submit"},"save")),c.a.createElement("div",null))};r.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c60d97a8.chunk.js.map