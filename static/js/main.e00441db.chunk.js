(this["webpackJsonpavro-data-converter"]=this["webpackJsonpavro-data-converter"]||[]).push([[0],{26:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(31),a(20)),i=a(9),s=a(42),u=a(37),d=a(38),m=a(39),v=function(){var e=/^[0-9\b]+$/,t=function(){return i.b.now().truncatedTo(i.a.MILLIS).toEpochMilli()},a=function(){return i.c.now().toEpochDay()},o={display:"inline-block",padding:"5px",width:"250px",textAlign:"center",margin:"5px"},c={display:"inline-block",margin:"5px"},v={display:"inline-block",width:"500px"},g=Object(n.useState)(a()),p=Object(l.a)(g,2),E=p[0],h=p[1],y=Object(n.useState)(t()),f=Object(l.a)(y,2),b=f[0],w=f[1];return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,{className:"justify-content-md-center border"},r.a.createElement(d.a,{style:v,md:"auto"},r.a.createElement("input",{style:c,value:E,onChange:function(t){(""===t.target.value||e.test(t.target.value))&&h(t.target.value)}.bind(void 0)}),"epoch day is converted to date:"),r.a.createElement(d.a,null,function(){try{return r.a.createElement(s.a,{style:o,variant:"success"},i.c.ofEpochDay(parseInt(E)).toString())}catch(e){return console.log(e),r.a.createElement(s.a,{style:o,variant:"danger"},"Epoch day ",E," not valid")}}(),r.a.createElement(m.a,{style:c,variant:"warning",onClick:function(){return h(a())}},"Reset"))),r.a.createElement(u.a,{className:"justify-content-md-center border"},r.a.createElement(d.a,{style:v,md:"auto"},r.a.createElement("input",{style:c,value:b,onChange:function(t){(""===t.target.value||e.test(t.target.value))&&w(t.target.value)}.bind(void 0)}),"epoch millis is converted to date-time:"),r.a.createElement(d.a,null,function(){try{return r.a.createElement(s.a,{style:o,variant:"success"},i.b.ofEpochMilli(parseInt(b)).toString())}catch(e){return r.a.createElement(s.a,{style:o,variant:"danger"},"Epoch millis ",b," not valid")}}(),r.a.createElement(m.a,{style:c,variant:"warning",onClick:function(){return w(t())}},"Reset"))))},g=(a(34),a(40)),p=a(41),E=function(){return r.a.createElement(g.a,{fluid:"md"},r.a.createElement(p.a,{expand:"lg",variant:"light",bg:"light"},r.a.createElement(p.a.Brand,{href:"#"},"Java 8/Avro Joda Date/DateTime converter")),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e00441db.chunk.js.map