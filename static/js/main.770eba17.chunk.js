(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),u=a(4),o=a(5),i=a(6),d=a(8),s=a(7),m=a(9),b=function(e){var t=e.message;return l.a.createElement("p",null,t)},E=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,c=e.positivePercentage;return l.a.createElement(l.a.Fragment,null,r>0?l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Good"),l.a.createElement("td",null,t)),l.a.createElement("tr",null,l.a.createElement("td",null,"Neutral"),l.a.createElement("td",null,a)),l.a.createElement("tr",null,l.a.createElement("td",null,"Bad"),l.a.createElement("td",null,n)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total"),l.a.createElement("td",null,r)),l.a.createElement("tr",null,l.a.createElement("td",null,"Positive feedback"),l.a.createElement("td",null,c,"%")))):l.a.createElement(b,{message:"No feedback given"}))},f=a(1),v=a.n(f),g=function(e){var t=e.options,a=e.onLeaveFeedback;return l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement("button",{key:e,type:"button",onClick:function(){return a(e)}},e)})))};g.prototype={options:v.a.arrayOf(v.a.string.isRequired),onLeaveFeedback:v.a.func.isRequired};var k=g,p=function(e){var t=e.title,a=e.children;return l.a.createElement("section",null,l.a.createElement("h2",null,t),a)},h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0},a.handleClick=function(e){a.setState((function(t){return Object(u.a)({},e,t[e]+1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,t){return e+t}),0)},a.countPositiveFeedbackPercentage=function(){var e=a.state,t=e.good,n=e.neutral,l=e.bad;return Math.round(100*t/(l+n+t))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{title:"Please leave feedback"},l.a.createElement(k,{options:["good","neutral","bad"],onLeaveFeedback:this.handleClick})),l.a.createElement(p,{title:"Statistics"},l.a.createElement(E,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),t}(n.Component);c.a.render(l.a.createElement(h,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.770eba17.chunk.js.map