(this.webpackJsonplesson1=this.webpackJsonplesson1||[]).push([[0],{109:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){},113:function(t,e,n){},117:function(t,e,n){},118:function(t,e,n){"use strict";n.r(e);var r,c,u=n(0),a=n.n(u),o=n(29),s=n.n(o),i=n(17),b=n(25),j=n(26),l=n(28),O=n(27),d=n(10),f=n(9),h=n(7),g=n(19),p=n(37),x=n(1),m=Object(d.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(p.a)(t,["component","isAuthenticated","redirectTo"]);return Object(x.jsx)(h.b,Object(g.a)(Object(g.a)({},c),{},{render:function(t){return n?Object(x.jsx)(e,Object(g.a)({},t)):Object(x.jsx)(h.a,{to:r})}}))})),v=Object(d.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(p.a)(t,["component","isAuthenticated","redirectTo"]);return Object(x.jsx)(h.b,Object(g.a)(Object(g.a)({},c),{},{render:function(t){return n&&c.restricted?Object(x.jsx)(h.a,{to:r}):Object(x.jsx)(e,Object(g.a)({},t))}}))})),k=n(45),C=Object(u.lazy)((function(){return n.e(4).then(n.bind(null,122))})),y=Object(u.lazy)((function(){return n.e(3).then(n.bind(null,125))})),S=Object(u.lazy)((function(){return n.e(5).then(n.bind(null,123))})),A=Object(u.lazy)((function(){return n.e(6).then(n.bind(null,124))})),E=function(){return Object(x.jsx)(u.Suspense,{fallback:Object(x.jsx)(k.a,{}),children:Object(x.jsxs)(h.d,{children:[Object(x.jsx)(v,{path:"/",exact:!0,component:C}),Object(x.jsx)(m,{path:"/contacts",component:y,redirectTo:"/login"}),Object(x.jsx)(v,{path:"/register",component:A,restricted:!0,redirectTo:"/contacts"}),Object(x.jsx)(v,{path:"/login",component:S,restricted:!0,redirectTo:"/contacts"})]})})},R=(n(109),function(t){var e=t.children;return Object(x.jsx)("main",{className:"container",children:e})}),U=(n(110),Object(d.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(x.jsxs)("nav",{children:[Object(x.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/",exact:!0,children:"Home"}),e&&Object(x.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/contacts",exact:!0,children:"Contacts"})]})}))),N=(n(111),n(112),{logOut:f.a.logOut}),q=Object(d.b)((function(t){return{name:f.c.getUserName(t)}}),N)((function(t){var e=t.name,n=t.logOut;return Object(x.jsxs)("div",{className:"logout-container",children:[Object(x.jsxs)("span",{className:"welcone-text",children:["Welcome ",e," "]}),Object(x.jsx)("button",{className:"logout-button",type:"button",onClick:n,children:"Log out"})]})})),w=(n(113),function(){return Object(x.jsxs)("nav",{children:[Object(x.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/register",exact:!0,children:"Register"}),Object(x.jsx)(i.b,{className:"link",activeClassName:"activeLink",to:"/login",exact:!0,children:"Login"})]})}),L=Object(d.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}),null)((function(t){var e=t.isAuthenticated;return Object(x.jsxs)("header",{className:"header-container",children:[Object(x.jsx)(U,{}),Object(x.jsx)("div",{className:"registerContainer",children:e?Object(x.jsx)(q,{}):Object(x.jsx)(w,{})})]})})),I=function(t){Object(l.a)(n,t);var e=Object(O.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(L,{}),Object(x.jsx)(R,{children:Object(x.jsx)(E,{})})]})}}]),n}(u.Component),T={onGetCurrentUser:f.a.getCurrentUser},z=Object(d.b)(null,T)(I),B=n(36),_=n(2),F=n(21),G=n(22),J=n(35),M=n(3),D=n(8),H=n(12),P=Object(_.c)([],(r={},Object(M.a)(r,H.i,(function(t,e){return e.payload})),Object(M.a)(r,H.c,(function(t,e){var n=e.payload;return[].concat(Object(B.a)(t),[n])})),Object(M.a)(r,H.f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),Q=Object(_.c)(!1,(c={},Object(M.a)(c,H.h,(function(){return!0})),Object(M.a)(c,H.i,(function(){return!1})),Object(M.a)(c,H.g,(function(){return!1})),Object(M.a)(c,H.b,(function(){return!0})),Object(M.a)(c,H.c,(function(){return!1})),Object(M.a)(c,H.a,(function(){return!1})),Object(M.a)(c,H.e,(function(){return!0})),Object(M.a)(c,H.f,(function(){return!1})),Object(M.a)(c,H.d,(function(){return!1})),c)),W=Object(_.c)("",Object(M.a)({},H.j,(function(t,e){return e.payload}))),K=Object(_.c)(null,{}),V=Object(D.c)({items:P,filter:W,loading:Q,error:K}),X=n(57),Y={key:"token",storage:n.n(X).a,whitelist:["token"]},Z=Object(B.a)(Object(_.d)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),$=Object(_.a)({reducer:{contact:V,auth:Object(G.a)(Y,f.b)},middleware:Z,devTools:!1}),tt={store:$,persistor:Object(J.a)($)},et=n(58);n(116),n(117);s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(d.a,{store:tt.store,children:Object(x.jsx)(et.a,{loading:null,persistor:tt.persistor,children:Object(x.jsx)(i.a,{children:Object(x.jsx)(z,{})})})})}),document.getElementById("root"))},12:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return u})),n.d(e,"g",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return b})),n.d(e,"f",(function(){return j})),n.d(e,"d",(function(){return l})),n.d(e,"j",(function(){return O}));var r=n(2),c=Object(r.b)("contacts/fetchContactRequest"),u=Object(r.b)("contacts/fetchContactSuccess"),a=Object(r.b)("contacts/fetchContactError"),o=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),O=Object(r.b)("contacts/changeFilter")},45:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(25),c=n(26),u=n(28),a=n(27),o=n(0),s=n(55),i=n.n(s),b=(n(108),n(56)),j=n.n(b),l=n(1),O=function(t){Object(u.a)(n,t);var e=Object(a.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsx)(i.a,{className:j.a.Loader,type:"Puff",color:"#3f51b5",height:100,width:100})}}]),n}(o.Component)},56:function(t,e,n){t.exports={Loader:"Loader_Loader__BIuQd"}},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return W})),n.d(e,"c",(function(){return K}));var r,c,u,a,o=n(2),s={registerRequest:Object(o.b)("auth/registerRequest"),registerSuccess:Object(o.b)("auth/registerSuccess"),registerError:Object(o.b)("auth/registerError"),loginRequest:Object(o.b)("auth/loginRequest"),loginSuccess:Object(o.b)("auth/loginSuccess"),loginError:Object(o.b)("auth/loginError"),logoutRequest:Object(o.b)("auth/logoutRequest"),logoutSuccess:Object(o.b)("auth/logoutSuccess"),logoutError:Object(o.b)("auth/logoutError"),getCurrentUserRequest:Object(o.b)("auth/gerCurrentUserRequest"),getCurrentUserSuccess:Object(o.b)("auth/gerCurrentUserSuccess"),getCurrentUserError:Object(o.b)("auth/gerCurrentUserError")},i=n(3),b=n(8),j={name:null,email:null},l=s.registerSuccess,O=s.registerError,d=s.loginSuccess,f=s.loginError,h=s.logoutSuccess,g=s.logoutError,p=s.getCurrentUserSuccess,x=s.getCurrentUserError,m=Object(o.c)(j,(r={},Object(i.a)(r,l,(function(t,e){return e.payload.user})),Object(i.a)(r,d,(function(t,e){return e.payload.user})),Object(i.a)(r,h,(function(){return j})),Object(i.a)(r,p,(function(t,e){return e.payload})),r)),v=Object(o.c)(null,(c={},Object(i.a)(c,l,(function(t,e){return e.payload.token})),Object(i.a)(c,d,(function(t,e){return e.payload.token})),Object(i.a)(c,h,(function(){return null})),c)),k=Object(o.c)(null,(u={},Object(i.a)(u,O,(function(t,e){return e.payload})),Object(i.a)(u,f,(function(t,e){return e.payload})),Object(i.a)(u,g,(function(t,e){return e.payload})),Object(i.a)(u,x,(function(t,e){return e.payload})),u)),C=Object(o.c)(!1,(a={},Object(i.a)(a,l,(function(){return!0})),Object(i.a)(a,d,(function(){return!0})),Object(i.a)(a,p,(function(){return!0})),Object(i.a)(a,O,(function(){return!1})),Object(i.a)(a,f,(function(){return!1})),Object(i.a)(a,x,(function(){return!1})),Object(i.a)(a,h,(function(){return!1})),a)),y=Object(b.c)({user:m,isAuthenticated:C,token:v,error:k}),S=n(18),A=n.n(S),E=n(24),R=n(20),U=n.n(R),N=n(42),q=(n(86),n(87),function(){return Object(N.success)({title:"Success!",delay:1e3})}),w=function(){return Object(N.error)({title:"Bad Request",delay:1e3})},L=s.registerRequest,I=s.registerSuccess,T=s.registerError,z=s.loginRequest,B=s.loginSuccess,_=s.loginError,F=s.logoutRequest,G=s.logoutSuccess,J=s.logoutError,M=s.getCurrentUserRequest,D=s.getCurrentUserSuccess,H=s.getCurrentUserError;U.a.defaults.baseURL="https://connections-api.herokuapp.com";var P=function(t){U.a.defaults.headers.common.Authorization="Bearer ".concat(t)},Q=function(){U.a.defaults.headers.common.Authorization=""},W={register:function(t){return function(){var e=Object(E.a)(A.a.mark((function e(n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(L()),e.prev=1,e.next=4,U.a.post("/users/signup",t);case 4:r=e.sent,P(r.data.token),q(),n(I(r.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),w(),n(T(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(E.a)(A.a.mark((function e(n){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(z()),e.prev=1,e.next=4,U.a.post("/users/login",t);case 4:r=e.sent,P(r.data.token),n(B(r.data)),q(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),w(),n(_(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(E.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(F()),t.prev=1,t.next=4,U.a.post("/users/logout");case 4:Q(),e(G()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),w(),e(J(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(E.a)(A.a.mark((function t(e,n){var r,c,u;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return P(c),e(M()),t.prev=5,t.next=8,U.a.get("/users/current");case 8:u=t.sent,e(D(u.data)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),w(),e(H(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},K={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name}}}},[[118,1,2]]]);
//# sourceMappingURL=main.193e69a0.chunk.js.map