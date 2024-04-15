import{I as x}from"./Icon-b9bd5b83.js";import{L as k}from"./LoadingButton-ff28bb4a.js";import{L as g}from"./LoadingSpinner-aa8ed3ab.js";import{r as p,q as y,o as e,c as f,w as n,K as w,f as m,t as s,u as o,a as r,d as a,b as d,F as A,g as L,k as S,e as B,j as V,O as C}from"./app-0b9725b5.js";import{_ as N}from"./ActionSection-b6ab9220.js";import{_ as D}from"./ConfirmsPassword-1d365341.js";import{r as F}from"./XMarkIcon-b1850349.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./SectionTitle-c29be856.js";import"./Button-f8f7e4df.js";import"./DialogModal-bfb53ba9.js";import"./Modal-b118c061.js";import"./Input-eaff5f73.js";import"./InputError-3f7a3d98.js";import"./SecondaryButton-895a9fac.js";const O={class:"text-lg font-medium text-gray-900 dark:text-gray-300"},$={key:0,class:"flex justify-center mt-3"},b={key:1,class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},j={key:0,class:"space-y-4"},I={class:"flex space-x-2 items-center"},T={key:0},q={class:"text-xs"},E={key:1,class:"italic"},oe={__name:"LinkedSocialAccountsForm",setup(K){const{__:i}=S(),c=p(!0),u=p([]),_=()=>{c.value=!0,w.get(route("auth.social-account.index")).then(l=>{u.value=l.data}).finally(()=>{c.value=!1})};_();const h=l=>{C.delete(route("auth.social-account.delete",l),{preserveScroll:!0,onSuccess:()=>{_()}})};return(l,M)=>{const v=y("tippy");return e(),f(N,null,{title:n(()=>[m(s(o(i)("Linked Social Accounts")),1)]),description:n(()=>[m(s(o(i)("View & Manage your linked social OAuth accounts.")),1)]),content:n(()=>[r("h3",O,s(o(i)("Social Accounts")),1),c.value?(e(),a("div",$,[d(g,{loading:c.value},null,8,["loading"])])):(e(),a("div",b,[u.value.length?(e(),a("ul",j,[(e(!0),a(A,null,L(u.value,t=>(e(),a("li",{key:t.id},[r("div",I,[d(x,{class:"h-8 w-8 fill-current",name:t.provider},null,8,["name"]),r("div",null,[r("p",null,[m(s(t.name)+" ",1),t.nickname?(e(),a("span",T," ("+s(t.nickname)+") ",1)):B("",!0)]),r("p",q,s(t.email),1)]),d(D,{onConfirmed:U=>h(t.id)},{default:n(()=>[V((e(),f(k,{title:o(i)("Unlink Account")},{default:n(()=>[d(o(F),{class:"h-5 w-5 text-gray-400 rounded hover:bg-red-400 hover:text-white"})]),_:1},8,["title"])),[[v]])]),_:2},1032,["onConfirmed"])])]))),128))])):(e(),a("span",E,s(o(i)("You don't have any linked social accounts.")),1))]))]),_:1})}}};export{oe as default};