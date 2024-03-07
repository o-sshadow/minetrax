import{J as x}from"./AuthenticationCard-53907d0f.js";import{_ as j}from"./Checkbox-bb22c8e0.js";import{_ as P}from"./Label-7acc4f97.js";import{L as A}from"./LoadingButton-fb621ec2.js";import{A as U}from"./AppLayout-e54058db.js";import{S as B}from"./SocialAuthButtons-f2795064.js";import{X as C}from"./XInput-7d07c8ec.js";import{P as S}from"./PasswordStrengthMeter-272919a4.js";import{T as q,l as a,o as u,c as N,w as i,b as s,d as f,a as n,f as d,t as l,e as _,i as J}from"./app-9aeeedd5.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-5842a37e.js";const T={components:{PasswordStrengthMeter:S,XInput:C,SocialAuthButtons:B,AppLayout:U,LoadingButton:A,JetAuthenticationCard:x,JetCheckbox:j,JetLabel:P},data(){return{form:q({name:"",email:"",username:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit(){this.form.post(this.route("register"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},E={class:"mt-4"},F={class:"mt-4"},R={class:"mt-4"},I={class:"mt-4"},M={key:0,class:"mt-4"},X={class:"flex items-center"},D={class:"ml-2"},z=["href"],G=["href"],H={class:"flex items-center justify-end mt-4"};function K(o,r,O,Q,e,p){const c=a("app-head"),m=a("x-input"),h=a("password-strength-meter"),g=a("jet-checkbox"),b=a("jet-label"),w=a("inertia-link"),y=a("loading-button"),V=a("social-auth-buttons"),v=a("jet-authentication-card"),k=a("app-layout");return u(),N(k,null,{default:i(()=>[s(c,{title:o.__("Register")},null,8,["title"]),s(v,null,{default:i(()=>[o.$page.props.disableEmailPasswordAuth?_("",!0):(u(),f("form",{key:0,class:"mt-5",onSubmit:r[6]||(r[6]=J((...t)=>p.submit&&p.submit(...t),["prevent"]))},[n("div",null,[s(m,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=t=>e.form.name=t),label:o.__("Full Name"),error:e.form.errors.name,autocomplete:"name",autofocus:!0,required:!0,type:"text",name:"name"},null,8,["modelValue","label","error"])]),n("div",E,[s(m,{id:"email",modelValue:e.form.email,"onUpdate:modelValue":r[1]||(r[1]=t=>e.form.email=t),label:o.__("Email Address"),error:e.form.errors.email,required:!0,type:"email",name:"email"},null,8,["modelValue","label","error"])]),n("div",F,[s(m,{id:"username",modelValue:e.form.username,"onUpdate:modelValue":r[2]||(r[2]=t=>e.form.username=t),label:o.__("Username"),error:e.form.errors.username,required:!0,type:"text",name:"username"},null,8,["modelValue","label","error"])]),n("div",R,[s(m,{id:"password",modelValue:e.form.password,"onUpdate:modelValue":r[3]||(r[3]=t=>e.form.password=t),label:o.__("Password"),error:e.form.errors.password,required:!0,autocomplete:"new-password",type:"password",name:"password"},null,8,["modelValue","label","error"])]),n("div",I,[s(m,{id:"password_confirmation",modelValue:e.form.password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=t=>e.form.password_confirmation=t),label:o.__("Confirm Password"),error:e.form.errors.password_confirmation,required:!0,autocomplete:"new-password",type:"password",name:"password_confirmation"},null,8,["modelValue","label","error"])]),s(h,{class:"mt-2",value:e.form.password},null,8,["value"]),o.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(u(),f("div",M,[s(b,{for:"terms"},{default:i(()=>[n("div",X,[s(g,{id:"terms",modelValue:e.form.terms,"onUpdate:modelValue":r[5]||(r[5]=t=>e.form.terms=t),name:"terms"},null,8,["modelValue"]),n("div",D,[d(l(o.__("I agree to the "))+" ",1),n("a",{target:"_blank",href:o.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},l(o.__("Terms of Service")),9,z),d(" "+l(o.__("and"))+" ",1),n("a",{target:"_blank",href:o.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},l(o.__("Privacy Policy")),9,G)])])]),_:1})])):_("",!0),n("div",H,[s(w,{href:o.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"},{default:i(()=>[d(l(o.__("Already registered?")),1)]),_:1},8,["href"]),s(y,{loading:e.form.processing,class:"ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:i(()=>[d(l(o.__("Register")),1)]),_:1},8,["loading"])])],32)),s(V)]),_:1})]),_:1})}const le=L(T,[["render",K]]);export{le as default};
