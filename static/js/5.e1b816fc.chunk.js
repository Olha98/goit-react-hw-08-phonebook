(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(9);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},102:function(e,t,n){e.exports={loginBox:"LoginForm_loginBox__18gA2",userBox:"LoginForm_userBox__16_Pb","btn-anim1":"LoginForm_btn-anim1__3vR7n","btn-anim2":"LoginForm_btn-anim2__3NsML","btn-anim3":"LoginForm_btn-anim3__1_8wu","btn-anim4":"LoginForm_btn-anim4__2fbbT"}},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),l=n(101),c=n(44),i=n(45),s=n(47),u=n(46),m=n(102),b=n.n(m),p=n(31),g=n(13),h={email:"",password:""},O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state=Object(l.a)({},h),e.handleChange=function(t){console.log(t.target,"e");var n=t.target.name,a=t.target.value;e.setState(Object(o.a)({},n,a))},e.clickButton=function(){e.props.onLoginUser(Object(l.a)({},e.state)),e.setState(Object(l.a)({},h))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return console.log(this.state),r.a.createElement("div",null,r.a.createElement("div",{className:b.a.loginBox},r.a.createElement("h2",null,"Login"),r.a.createElement("form",null,r.a.createElement("div",{className:b.a.userBox},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",required:"",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:b.a.userBox},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange})),r.a.createElement("a",{onClick:this.clickButton},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),"Submit"))))}}]),n}(a.Component),f=Object(g.b)(null,{onLoginUser:p.a.loginUser})(O);t.default=function(){return r.a.createElement(f,null)}}}]);
//# sourceMappingURL=5.e1b816fc.chunk.js.map