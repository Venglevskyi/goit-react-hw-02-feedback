(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=a(4),u=a(5),i=a(6),s=a(8),d=a(7),b=a(9),v=function(e){var t=e.label,a=e.value;return r.a.createElement("p",null,t,": ",a)},m=function(e){var t=e.message;return r.a.createElement("p",null,t)},f=function(e){var t=e.good,a=e.neutral,n=e.bad,l=e.total,c=e.positivePercentage;return r.a.createElement("section",null,r.a.createElement("h2",null,"Statistics"),l>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{label:"Good",value:String(t)}),r.a.createElement(v,{label:"Neutral",value:String(a)}),r.a.createElement(v,{label:"Bad",value:String(n)}),r.a.createElement(v,{label:"Total",value:String(l)}),r.a.createElement(v,{label:"Positive feedback",value:c})):r.a.createElement(m,{message:"No feedback given"}))},g=a(1),p=a.n(g),E=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("button",{key:e,type:"button",onClick:function(){return a(e)}},e)})))};E.prototype={options:p.a.arrayOf(p.a.string.isRequired),onLeaveFeedback:p.a.func.isRequired};var h=E,k=function(e){var t=e.title,a=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),a)},F=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={good:0,neutral:0,bad:0},a.handleClick=function(e){a.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,t){return e+t}),0)},a.countPositiveFeedbackPercentage=function(){var e=a.state,t=e.good,n=e.neutral,r=e.bad;return Math.round(100*t/(r+n+t))+"%"},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return r.a.createElement("div",null,r.a.createElement(k,{title:"Please leave feedback"},r.a.createElement(h,{options:["good","neutral","bad"],onLeaveFeedback:this.handleClick}),r.a.createElement(f,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})))}}]),t}(n.Component);c.a.render(r.a.createElement(F,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d8ebf57e.chunk.js.map