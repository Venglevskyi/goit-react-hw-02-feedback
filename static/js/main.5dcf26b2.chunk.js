(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=a(3),u=a(4),i=a(5),b=a(7),s=a(6),d=a(8),m=function(e){var t=e.label,a=e.value;return r.a.createElement("p",null,t,": ",a)},v=function(e){var t=e.message;return r.a.createElement("p",null,t)},f=function(e){var t=e.good,a=e.neutral,n=e.bad,l=e.total,c=e.positivePercentage;return r.a.createElement("section",null,r.a.createElement("h2",null,"Statistics"),l()>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{label:"Good",value:t}),r.a.createElement(m,{label:"Neutral",value:a}),r.a.createElement(m,{label:"Bad",value:n}),r.a.createElement(m,{label:"Total",value:l()}),r.a.createElement(m,{label:"Positive feedback",value:c()})):r.a.createElement(v,{message:"No feedback given"}))},E=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:function(){return a(t[0])}},"Good"),r.a.createElement("button",{type:"button",onClick:function(){return a(t[1])}},"Neutral"),r.a.createElement("button",{type:"button",onClick:function(){return a(t[2])}},"Bad"))},h=function(e){var t=e.title,a=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),a)},k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},a.handleClick=function(e){a.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,t){return e+t}),0)},a.countPositiveFeedbackPercentage=function(){var e=a.state,t=e.good,n=e.neutral,r=e.bad;return Math.round(100*t/(r+n+t))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return r.a.createElement("div",null,r.a.createElement(h,{title:"Please leave feedback"},r.a.createElement(E,{options:["good","neutral","bad"],onLeaveFeedback:this.handleClick}),r.a.createElement(f,{good:t,neutral:a,bad:n,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})))}}]),t}(n.Component);c.a.render(r.a.createElement(k,null),document.querySelector("#root"))},9:function(e,t,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.5dcf26b2.chunk.js.map