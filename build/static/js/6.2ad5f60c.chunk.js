(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[6],{124:function(e,a,t){"use strict";t.r(a);var n=t(3),s=t(25),l=t(26),i=t(28),r=t(27),c=t(0),o=t(10),h=t(9),m=t(1),p=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(s.a)(this,t);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={name:"",email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,l=t.value;e.setState(Object(n.a)({},s,l))},e.handleSubmit=function(a){a.preventDefault(),e.props.onRegister(e.state),e.setState({name:"",email:"",password:""})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.password;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"title-login",children:"Register page"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:"login_form",autoComplete:"off",children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{className:"login_input",type:"text",name:"name",placeholder:"Name",value:a,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:["Email",Object(m.jsx)("input",{className:"login_input",type:"email",name:"email",placeholder:"Email",value:t,onChange:this.handleChange})]}),Object(m.jsxs)("label",{children:["Password",Object(m.jsx)("input",{className:"login_input",type:"password",name:"password",placeholder:"Enter password at least seven symbol",value:n,onChange:this.handleChange})]}),Object(m.jsx)("button",{className:"login-bth",type:"submit",children:"Register"})]})]})}}]),t}(c.Component),u={onRegister:h.a.register};a.default=Object(o.b)(null,u)(p)}}]);
//# sourceMappingURL=6.2ad5f60c.chunk.js.map