(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[3],{119:function(t,e,n){t.exports={contact_list:"List_contact_list__3d9ss",delete_button:"List_delete_button__1Fy4K",contact_item:"List_contact_item__11C51",contact_name:"List_contact_name__J7qw0"}},120:function(t,e,n){t.exports={title:"Form_title__3NbAF",contact_form:"Form_contact_form__n2Wti",contact_input:"Form_contact_input__39-kE",contact_bth:"Form_contact_bth__ETHqf"}},121:function(t,e,n){t.exports={title:"Filter_title__21DuS",contact_input:"Filter_contact_input__3mrr1",search_block:"Filter_search_block__2np_P"}},125:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(10),r=n(3),o=n(19),u=n(25),s=n(26),i=n(28),l=n(27),m=n(31),b=function(t){return t.contact.loading},f=function(t){return t.contact.filter},p=function(t){return t.contact.items},j=Object(m.a)([p,f],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),h=Object(m.a)([p],(function(t){return t.map((function(t){return t.name}))})),_=n(18),d=n.n(_),O=n(24),v=n(20),x=n.n(v),C=n(12),g=function(){return function(){var t=Object(O.a)(d.a.mark((function t(e){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(C.h)()),t.prev=1,t.next=4,x.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(C.i)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(C.g)(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},F=function(t){return function(){var e=Object(O.a)(d.a.mark((function e(n){var c,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(C.b)()),e.prev=1,e.next=4,x.a.post("/contacts",t);case 4:c=e.sent,a=c.data,n(Object(C.c)(Object(o.a)({},a))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(C.a)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},k=function(t){return function(){var e=Object(O.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(C.e)()),e.prev=1,e.next=4,x.a.delete("/contacts/".concat(t));case 4:c=e.sent,c.data,n(Object(C.f)(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(C.d)(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},y=n(45),N=n(120),w=n.n(N),S=n(1),q={name:"",number:""},E=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state=Object(o.a)({},q),t.handleChangeForm=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(r.a)({},c,a))},t.uniqueContact=function(e){return!t.props.name.find((function(t){return t===e}))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state.name;if(t.uniqueContact(n),""!==t.state.name)return t.uniqueContact(n)?(t.props.onSubmit(t.state),void t.resetForm()):void alert("'".concat(n," is already in contacts'"));alert("Enter the name or number")},t.resetForm=function(){return t.setState(q)},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContact()}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(S.jsxs)(S.Fragment,{children:[this.props.loadContact&&Object(S.jsx)(y.a,{}),Object(S.jsx)("h2",{className:w.a.title,children:"Contact Form"}),Object(S.jsxs)("form",{className:w.a.contact_form,onSubmit:this.handleFormSubmit,children:[Object(S.jsx)("input",{className:w.a.contact_input,type:"text",name:"name",placeholder:"Enter name",value:e,onChange:this.handleChangeForm}),Object(S.jsx)("input",{className:w.a.contact_input,type:"tel",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm}),Object(S.jsx)("button",{className:w.a.contact_bth,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),L=Object(a.b)((function(t){return{loadContact:b(t),name:h(t)}}),(function(t){return{fetchContact:function(){return t(g())},onSubmit:function(e){return t(F(e))}}}))(E),R=n(119),D=n.n(R),A=n(6),J=n.n(A),T=function(t){var e=t.id,n=t.name,c=t.number,a=t.onRemove;return Object(S.jsxs)("li",{className:D.a.contact_item,children:[Object(S.jsxs)("p",{className:D.a.contact_name,children:[n," "]})," :",Object(S.jsx)("p",{children:c}),Object(S.jsx)("button",{className:D.a.delete_button,onClick:function(){return a(e)},children:"Delete"})]})};T.propTypes={id:J.a.string.isRequired,name:J.a.string.isRequired,onRemove:J.a.func.isRequired};var H=Object(a.b)((function(t){return{contacts:j(t)}}),(function(t){return{deleteContact:function(e){return t(k(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact;return 0===e.length?null:Object(S.jsx)("ul",{className:D.a.contact_list,children:e.map((function(t){return Object(S.jsx)(T,Object(o.a)(Object(o.a)({},t),{},{onRemove:n}),t.id)}))})})),K=n(121),M=n.n(K),P=Object(a.b)((function(t){return{value:f(t)}}),(function(t){return{onChange:function(e){return t(Object(C.j)(e.target.value))}}}))((function(t){var e=t.filter,n=t.onChange;return Object(S.jsxs)("div",{className:M.a.search_block,children:[Object(S.jsx)("h2",{className:M.a.title,children:"Contacts list"}),Object(S.jsx)("input",{className:M.a.contact_input,type:"text",name:"filter",value:e,onChange:n,placeholder:"Enter name for your Search"})]})}));e.default=function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(L,{}),Object(S.jsx)(P,{}),Object(S.jsx)(H,{})]})}}}]);
//# sourceMappingURL=3.a4d72743.chunk.js.map