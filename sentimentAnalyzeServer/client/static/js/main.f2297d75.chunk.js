(this.webpackJsonpsentimentanalyzeclient=this.webpackJsonpsentimentanalyzeclient||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(8),r=n.n(c),o=(n(13),n(2)),a=n(3),u=n(5),l=n(4),d=(n(7),n(14),n(0)),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=Object.entries(this.props.emotions);return Object(d.jsx)("div",{children:Object(d.jsx)("table",{className:"table table-bordered",children:Object(d.jsx)("tbody",{children:t.map((function(t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t[0]}),Object(d.jsx)("td",{children:t[1]})]})})}))})})})}}]),n}(s.a.Component),j=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={innercomp:Object(d.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderTextArea=function(){document.getElementById("textinput").value="","url"===t.state.mode&&t.setState({innercomp:Object(d.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0})},t.renderTextBox=function(){document.getElementById("textinput").value="","text"===t.state.mode&&t.setState({innercomp:Object(d.jsx)("textarea",{rows:"1",cols:"50",id:"textinput"}),mode:"url",sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".";e="url"===t.state.mode?e+"/url/sentiment?url="+document.getElementById("textinput").value:e+"/text/sentiment?text="+document.getElementById("textinput").value,fetch(e).then((function(e){e.text().then((function(e){t.setState({sentimentOutput:e});var n=e;n="positive"===e?Object(d.jsx)("div",{style:{color:"green",fontSize:20},children:e}):"negative"===e?Object(d.jsx)("div",{style:{color:"red",fontSize:20},children:e}):Object(d.jsx)("div",{style:{color:"yellow",fontSize:20},children:e}),t.setState({sentimentOutput:n})}))}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".";e="url"===t.state.mode?e+"/url/emotion?url="+document.getElementById("textinput").value:e+"/text/emotion/?text="+document.getElementById("textinput").value,fetch(e).then((function(e){e.json().then((function(e){t.setState({sentimentOutput:Object(d.jsx)(m,{emotions:e})})}))}))},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("button",{className:"btn btn-info",onClick:this.renderTextArea,children:"Text"}),Object(d.jsx)("button",{className:"btn btn-dark",onClick:this.renderTextBox,children:"URL"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),this.state.innercomp,Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(d.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(d.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(s.a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),c(t),r(t)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),b()},7:function(t,e,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.f2297d75.chunk.js.map