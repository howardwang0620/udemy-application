(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(6),o=n.n(r),c=(n(12),n(1)),i=n(2),u=n(3),l=n(4),h=(n(13),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={questionID:a.props.questionID,question:null,options:[],selected:-1,answer:null,answered:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/getQuestion/".concat(this.state.questionID)).then((function(e){return e.json()})).then((function(t){var n=[];for(var a in t.options)n.push(t.options[a]);e.setState({question:t.question,options:n,answer:parseInt(t.answer)})}))}},{key:"handleOnChange",value:function(e){var t=this.state.selected;t=t===e.target.value?-1:e.target.value,this.setState({selected:t})}},{key:"handleOnClick",value:function(e){this.props.onQuestionChange(this.state.selected==this.state.answer)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"question-wrapper"},s.a.createElement("div",{className:"question"},s.a.createElement("h1",null,this.state.question),s.a.createElement("br",null),s.a.createElement("div",{className:"options"},this.state.options.map((function(t,n){return s.a.createElement("div",{key:n},s.a.createElement("input",{type:"checkbox",id:"check:"+n,value:n,onChange:function(t){return e.handleOnChange(t)},checked:e.state.selected==n}),s.a.createElement("label",{htmlFor:"check:"+n},t))})))),s.a.createElement("input",{className:"next-button",type:"button",value:"Next",onClick:function(t){return e.handleOnClick(t)}}))}}]),n}(s.a.Component)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={numQuestions:5,questionsAnswered:0,correctlyAnswered:0,currentQuestion:0},e}return Object(i.a)(n,[{key:"onQuestionChange",value:function(e){var t=this;console.log(e),this.setState((function(t){return{questionsAnswered:t.questionsAnswered+1,correctlyAnswered:e?t.correctlyAnswered+1:t.correctlyAnswered,currentQuestion:t.currentQuestion+1}}),(function(){return console.log(t.state)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(h,{key:this.state.currentQuestion,questionID:this.state.currentQuestion,onQuestionChange:function(t){return e.onQuestionChange(t)}}))}}]),n}(s.a.Component);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.cdeeea16.chunk.js.map