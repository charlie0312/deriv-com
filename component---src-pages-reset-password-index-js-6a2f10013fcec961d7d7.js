(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"1ond":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("vOnD"),o=a("KYPV"),s=a("8k0H"),c=a("Z/CU"),l=a("g2Kc"),m=a("O4Du"),u=a("wYtL"),d=a("Zepl"),p=a("txul"),g=a("wVD5"),b=a("dYUB"),w=Object(i.c)(l.b).withConfig({displayName:"reset-password__StyledContainer",componentId:"sc-1cuzd0f-0"})(["text-align:center;height:100vh;padding:auto 0;justify-content:start;"]),y=i.c.div.withConfig({displayName:"reset-password__ButtonContainer",componentId:"sc-1cuzd0f-1"})(["margin-top:2rem;"]),f=i.c.div.withConfig({displayName:"reset-password__InputGroup",componentId:"sc-1cuzd0f-2"})(["width:40rem;margin:0 auto 3.4rem;"]),h=Object(i.c)(u.a).withConfig({displayName:"reset-password__StyledButton",componentId:"sc-1cuzd0f-3"})(["margin:0.8rem 0.4rem;"]),O=function(e){var t={},a=d.a.email(Object(p.x)(e.email));return a&&(t.email=a),t},j=function(e,t){var a=g.a.init();a.onopen=function(){a.send(JSON.stringify({verify_email:Object(p.x)(e.email),type:"reset_password"}))},a.onmessage=function(e){var r=JSON.parse(e.data);t.setSubmitting(!1),r.error?t.setStatus({error:r.error.message}):(t.resetForm({email:""}),t.setStatus({success:Object(c.g)("Please check your email and click on the link provided to reset your password.")}),a.close())}};t.default=Object(c.e)()((function(){return n.a.createElement(s.b,{type:"static",margin_top:"0"},n.a.createElement(l.h,{title:Object(c.g)("Reset password | Deriv"),description:Object(c.g)("Forgot your Deriv password? Want to reset your password? Send us your email address and we’ll email you the instructions."),no_index:!0}),n.a.createElement(w,{justify:"center",align:"center",direction:"column"},n.a.createElement(m.k,{as:"h2",type:"page-title",align:"center",mt:"80px"},Object(c.g)("Reset password")),n.a.createElement(m.k,{as:"h4",type:"sub-section-title",align:"center",weight:"500",mt:"0.5rem",mb:"3.8rem"},Object(c.g)("We'll email you instructions to reset your password.")),n.a.createElement(o.c,{initialValues:{email:""},initialStatus:{},validate:O,onSubmit:j},(function(e){var t=e.values,a=e.errors,r=e.handleChange,i=e.handleBlur,s=e.isSubmitting,l=e.resetForm,d=e.status;return n.a.createElement(o.b,{noValidate:!0},n.a.createElement(f,null,n.a.createElement(u.b,{id:"email",name:"email",error:a.email,value:Object(p.x)(t.email),handleError:l,onChange:r,onBlur:i,autoComplete:"off",type:"text",label:Object(c.g)("Email"),background:"white",placeholder:"example@mail.com","data-lpignore":"true",required:!0})),n.a.createElement(m.w,{align:"center",color:"red"},d.error&&d.error),n.a.createElement(m.w,{align:"center",color:"green"},d.success&&d.success),n.a.createElement(y,null,n.a.createElement(h,{tertiary:!0,onClick:b.a.redirectToLogin,type:"button"},Object(c.g)("Return to log in")),n.a.createElement(h,{secondary:"true",disabled:s,type:"submit"},Object(c.g)("Reset my password"))))}))))}))},Zepl:function(e,t,a){"use strict";var r=a("Z/CU"),n={email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/},i={email:function(e){return e?n.email.test(e)?null:Object(r.g)("Invalid email address"):Object(r.g)("Email is required")}};t.a=i}}]);
//# sourceMappingURL=component---src-pages-reset-password-index-js-6a2f10013fcec961d7d7.js.map