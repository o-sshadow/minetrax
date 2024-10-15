import{J as h}from"./AuthenticationCard-8397475e.js";import{L as g}from"./LoadingButton-48824f65.js";import{A as w}from"./AppLayout-e973448b.js";import{X as b}from"./XInput-5de78b04.js";import{I as y}from"./Icon-07002ff2.js";import{T as x,l as o,o as v,c as C,w as a,b as e,a as s,t as l,f as V,i as I}from"./app-10f1fbb6.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-a9d4f38f.js";const B={components:{XInput:b,AppLayout:w,LoadingButton:g,JetAuthenticationCard:h,Icon:y},data(){return{form:x({password:""})}},methods:{submit(){this.form.post(this.route("password.confirm"),{onFinish:()=>this.form.reset()})}}},P={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},k={class:"text-gray-500 text-xs italic"},A={class:"flex justify-end mt-4"};function L(t,r,N,T,n,p){const u=o("app-head"),m=o("Icon"),d=o("x-input"),c=o("loading-button"),f=o("jet-authentication-card"),_=o("app-layout");return v(),C(_,null,{default:a(()=>[e(u,{title:t.__("Confirm your Password")},null,8,["title"]),e(f,null,{logo:a(()=>[e(m,{name:"finger-print2",class:"w-20 h-20 fill-current text-light-blue-500"})]),default:a(()=>[s("div",P,l(t.__("This is a secure area of the application. Please confirm your password before continuing.")),1),s("form",{onSubmit:r[1]||(r[1]=I((...i)=>p.submit&&p.submit(...i),["prevent"]))},[s("div",null,[e(d,{id:"password",modelValue:n.form.password,"onUpdate:modelValue":r[0]||(r[0]=i=>n.form.password=i),label:t.__("Password"),required:!1,autocomplete:"current-password",error:n.form.errors.password,autofocus:!0,type:"password",name:"password"},null,8,["modelValue","label","error"]),s("span",k,l(t.__("Continue with empty password if you have no password.")),1)]),s("div",A,[e(c,{loading:n.form.processing,class:"inline-flex justify-center px-4 py-2 ml-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50"},{default:a(()=>[V(l(t.__("Confirm")),1)]),_:1},8,["loading"])])],32)]),_:1})]),_:1})}const z=j(B,[["render",L]]);export{z as default};