import{H as x,r as B,c as k,w as g,o as l,b as _,u as r,C as D,a as e,f as h,t as s,e as u,d as n,j as C,s as q,v as E,F as p,g as v,I as H}from"./app.42e0fd93.js";import{_ as V}from"./AlertCard.42a7c10e.js";import{_ as I}from"./AdminLayout.9f0f10d6.js";import{L as T}from"./LoadingButton.4c9d4342.js";import{u as Z}from"./index.8b8ad8f0.js";import"./XMarkIcon.9b9c63d1.js";import"./AppLayout.bc5e16a8.js";import"./useAuthorizable.9ef6cf28.js";import"./index.23781718.js";const M={class:"p-10 mx-auto space-y-4 max-w-5xl"},W={class:"italic text-gray-400 dark:text-gray-500"},L={key:1,class:"rounded p-5 text-red-500 italic bg-white dark:bg-gray-800 text-center"},N={id:"logo",class:"flex items-center justify-center"},S=e("svg",{class:"w-16 mr-2 text-gray-400",fill:"currentColor",viewBox:"0 0 24 24",pathfill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"data-v-94a7a0d7":"",fill:"currentColor",d:"M18.5 10.255c0 .044 0 .089-.003.133A1.537 1.537 0 0 0 17.473 10c-.162 0-.32.025-.473.074V5.75a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0-.75.75v4.505c0 .414.336.75.75.75h8.276l-.01.025-.003.012-.45 1.384-.01.026a1.625 1.625 0 0 1-.019.053H7.75a2.25 2.25 0 0 1-2.25-2.25V5.75A2.25 2.25 0 0 1 7.75 3.5h3.5v-.75a.75.75 0 0 1 .649-.743L12 2a.75.75 0 0 1 .743.649l.007.101-.001.75h3.5a2.25 2.25 0 0 1 2.25 2.25v4.505Zm-5.457 3.781.112-.036H6.254a2.25 2.25 0 0 0-2.25 2.25v.907a3.75 3.75 0 0 0 1.305 2.844c1.563 1.343 3.802 2 6.691 2 2.076 0 3.817-.339 5.213-1.028a1.545 1.545 0 0 1-1.169-1.003l-.004-.012-.03-.093c-1.086.422-2.42.636-4.01.636-2.559 0-4.455-.556-5.713-1.638a2.25 2.25 0 0 1-.783-1.706v-.907a.75.75 0 0 1 .75-.75H12v-.003a1.543 1.543 0 0 1 1.031-1.456l.012-.005ZM10.999 7.75a1.25 1.25 0 1 0-2.499 0 1.25 1.25 0 0 0 2.499 0ZM14.242 6.5a1.25 1.25 0 1 1 0 2.499 1.25 1.25 0 0 1 0-2.499Zm1.847 10.912a2.831 2.831 0 0 0-1.348-.955l-1.377-.448a.544.544 0 0 1 0-1.025l1.377-.448a2.84 2.84 0 0 0 1.76-1.762l.01-.034.449-1.377a.544.544 0 0 1 1.026 0l.448 1.377a2.837 2.837 0 0 0 1.798 1.796l1.378.448.027.007a.544.544 0 0 1 0 1.025l-1.378.448a2.839 2.839 0 0 0-1.798 1.796l-.447 1.377a.55.55 0 0 1-.2.263.544.544 0 0 1-.827-.263l-.448-1.377a2.834 2.834 0 0 0-.45-.848Zm7.694 3.801-.765-.248a1.577 1.577 0 0 1-.999-.998l-.249-.765a.302.302 0 0 0-.57 0l-.249.764a1.577 1.577 0 0 1-.983.999l-.766.248a.302.302 0 0 0 0 .57l.766.249a1.576 1.576 0 0 1 .998 1.002l.25.764a.303.303 0 0 0 .57 0l.248-.764a1.575 1.575 0 0 1 1-.999l.765-.248a.302.302 0 0 0 0-.57l-.016-.004Z"})],-1),$={class:"text-4xl font-bold dark:text-gray-500 text-gray-500"},j={id:"form"},F={class:"flex"},Y=["onSubmit"],G={class:"w-full"},P=["placeholder","disabled"],Q={key:0,class:"text-sm mt-1 text-red-400 text-right"},U={key:0,id:"results",class:"space-y-4"},z={class:"font-semibold text-gray-700 dark:text-gray-300"},J=e("hr",{class:"h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"},null,-1),K={class:"dark:text-gray-300 text-gray-700 whitespace-pre-wrap"},O={key:1,id:"examples"},R={class:"text-gray-500 text-center text-xl font-bold mt-12 mb-2"},X={class:"grid grid-cols-2 gap-4"},ee=["onClick"],ce={__name:"IndexAskDb",props:{featureEnabled:{type:Boolean,required:!0}},setup(m){const{__:o}=H(),b=Z("show-askai-information-alert",!0),t=x({prompt:null,loading:!1,error:null}),y=B(!0);let c=x([]);function f(){t.loading=!0,t.error=null,axios.post(route("admin.ask-db.query"),{prompt:t.prompt}).then(i=>{c.unshift({prompt:t.prompt,result:i.data.data}),t.prompt=null,y.value=!1}).catch(i=>{var d,a;t.error=((a=(d=i.response)==null?void 0:d.data)==null?void 0:a.message)||i.message||o("Failed to Query Database! Try again after rephrasing your question.")}).finally(()=>{t.loading=!1})}function w(i){!i||t.loading||(t.prompt=i,f())}const A=["Who is the most recent user to signup?","Give 5 recent users who have linked their players.","Which player has the most player kills?","Which server has most number of players?","How many user have their email verified?","How many post is created by superadmin?"];return(i,d)=>(l(),k(I,null,{default:g(()=>[_(D,{title:r(o)("AskDB - AI based database query.")},null,8,["title"]),e("div",M,[r(b)?(l(),k(V,{key:0,"close-button":!0,"text-color":"text-light-blue-800 dark:text-light-blue-500","border-color":"border-light-blue-500",onClose:d[0]||(d[0]=a=>b.value=!1)},{body:g(()=>[h(s(r(o)("Ask DB is an AI based database query system. You can ask questions in natural language and it will try to answer it."))+" ",1),e("p",W,s(r(o)("This is an experimental feature and still in beta. It may not always provide correct result. Please use with caution.")),1)]),default:g(()=>[h(s(r(o)("What is Ask DB?"))+" ",1)]),_:1})):u("",!0),m.featureEnabled?u("",!0):(l(),n("div",L,s(r(o)("This feature is not enabled!")),1)),m.featureEnabled?(l(),n(p,{key:2},[e("div",N,[S,e("h1",$,s(r(o)("Ask DB")),1)]),e("div",j,[e("div",F,[e("form",{class:"flex w-full",onSubmit:C(f,["prevent"])},[e("div",G,[q(e("input",{id:"large-input","onUpdate:modelValue":d[1]||(d[1]=a=>t.prompt=a),type:"text",name:"prompt",placeholder:r(o)("Enter your query in natural language.."),class:"block w-full p-4 shadow-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-light-blue-500 focus:border-light-blue-500 dark:bg-gray-700 dark:focus:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-light-blue-500 dark:focus:border-light-blue-500",disabled:t.loading},null,8,P),[[E,t.prompt]]),t.error?(l(),n("p",Q,s(t.error),1)):u("",!0)]),_(T,{loading:t.loading,class:"ml-2 uppercase h-14 whitespace-nowrap inline-flex justify-center py-2 px-4 border-2 border-light-blue-500 shadow-sm text-sm font-bold rounded-md text-light-blue-500 hover:bg-light-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:g(()=>[h(s(r(o)("Ask DB")),1)]),_:1},8,["loading"])],40,Y)])]),r(c)&&r(c).length>0?(l(),n("div",U,[(l(!0),n(p,null,v(r(c),a=>(l(),n("div",{key:a.id,class:"bg-white rounded shadow p-5 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:border"},[e("h3",z,s(a.prompt),1),J,e("p",K,s(a.result),1)]))),128))])):u("",!0),y.value?(l(),n("div",O,[e("h1",R,s(r(o)("You can ask questions like:")),1),e("div",X,[(l(),n(p,null,v(A,a=>e("button",{key:a,class:"block w-full text-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 font-normal text-gray-700 dark:text-gray-400",onClick:te=>w(a)},s(a),9,ee)),64))])])):u("",!0)],64)):u("",!0)])]),_:1}))}};export{ce as default};
