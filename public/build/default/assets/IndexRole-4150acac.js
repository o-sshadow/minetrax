import{_ as j}from"./AdminLayout-cf9c4a02.js";import{u as A}from"./useAuthorizable-18c71ef1.js";import{u as T}from"./AppLayout-5f3e8958.js";import{l as b,q as k,o,c as i,w as l,k as C,b as n,u as s,a,t as r,e as d,p as E,f as x,j as h,d as c,g as B,F as L}from"./app-f1704ce4.js";import{D as m,_ as S}from"./DtRowItem-4c95fc92.js";import{I as w}from"./Icon-4144b1c7.js";import{r as V}from"./PencilSquareIcon-2fa56f00.js";import{r as P}from"./TrashIcon-bf1d9404.js";import"./use-resolve-button-type-18f071c1.js";import"./open-closed-113ca95c.js";import"./CloudArrowDownIcon-6c974300.js";import"./index-638ebb4e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./vue-multiselect.esm-88e31988.js";import"./XMarkIcon-2c5e91bb.js";import"./hidden-44fa52d6.js";const U={class:"px-10 py-8 mx-auto text-gray-400"},$={class:"flex justify-between mb-4"},z={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},F={class:"flex"},O={class:"hidden md:inline"},q={class:"px-4 py-4 text-sm font-medium text-center text-gray-800 whitespace-nowrap dark:text-gray-200"},H={class:"flex-shrink-0"},W=["src","alt"],G={class:"px-4 whitespace-nowrap"},J={class:"items-center"},K={class:"text-sm text-gray-500 dark:text-gray-400"},M=["title"],Q={class:"px-4 py-3 space-x-1 text-sm font-medium"},X={key:1,class:"italic text-gray-500"},Y={key:2,class:"inline-flex px-2 mb-1 mr-1 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full dark:bg-opacity-10 dark:text-green-400"},Z={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},he={__name:"IndexRole",props:{roles:Object,filters:Object},setup(y){const{can:u}=A(),{__:e}=C(),{formatTimeAgoToNow:v,formatToDayDateString:D}=T(),R=[{key:"id",label:e("ID"),sortable:!0,class:"text-center"},{key:"image",sortable:!1,label:e("Image")},{key:"name",sortable:!0,label:e("Name")},{key:"users_count",label:e("Users")},{key:"is_staff",label:e("Staff"),sortable:!0},{key:"created_at",label:e("Created"),sortable:!0,class:"w-1/12"},{key:"permissions",sortable:!1,label:e("Permissions"),class:"w-5/12"},{key:"weight",sortable:!0,label:e("Weight")},{key:"actions",label:e("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(p,ee)=>{const I=b("app-head"),f=b("InertiaLink"),_=k("tippy"),N=k("confirm");return o(),i(j,null,{default:l(()=>[n(I,{title:s(e)("Users Roles Administration")},null,8,["title"]),a("div",U,[a("div",$,[a("h1",z,r(s(e)("User Roles & Permissions")),1),a("div",F,[s(u)("create roles")?(o(),i(f,{key:0,href:p.route("admin.role.create"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray"},{default:l(()=>[a("span",null,r(s(e)("Create New")),1),a("span",O," "+r(s(e)("Role")),1)]),_:1},8,["href"])):d("",!0)])]),n(S,{class:"bg-white rounded shadow dark:bg-gray-800",header:R,data:y.roles,filters:y.filters},{default:l(({item:t})=>[a("td",q,r(t.id),1),a("td",null,[a("div",H,[a("img",{class:"max-h-8",src:t.photo_url,alt:s(e)("Role Image")},null,8,W)])]),a("td",G,[a("div",J,[a("div",{class:"text-sm font-semibold text-gray-900 dark:text-gray-300",style:E([t.color?{color:t.color}:null])},r(t.display_name),5),a("div",K,r(t.name),1)])]),n(m,null,{default:l(()=>[x(r(t.users_count),1)]),_:2},1024),n(m,null,{default:l(()=>[t.is_staff?(o(),i(w,{key:0,class:"text-green-500",name:"check-circle"})):(o(),i(w,{key:1,class:"text-red-500",name:"cross-circle"}))]),_:2},1024),n(m,null,{default:l(()=>[h((o(),c("span",{title:s(D)(t.created_at)},[x(r(s(v)(t.created_at)),1)],8,M)),[[_]])]),_:2},1024),a("td",Q,[t.permissions.length>0?(o(!0),c(L,{key:0},B(t.permissions,g=>(o(),c("span",{key:g.id,class:"inline-flex px-2 mb-1 mr-1 text-xs font-semibold leading-5 text-blue-800 bg-blue-100 rounded-full dark:bg-opacity-10 dark:text-light-blue-400"},r(g.name),1))),128)):(o(),c("span",X,r(s(e)("No administration permissions for this role.")),1)),t.name==="superadmin"?(o(),c("span",Y,r(s(e)("All Permissions")),1)):d("",!0)]),n(m,null,{default:l(()=>[x(r(t.weight),1)]),_:2},1024),a("td",Z,[s(u)("update roles")?h((o(),i(f,{key:0,as:"a",href:p.route("admin.role.edit",t.id),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:s(e)("Edit Role")},{default:l(()=>[n(s(V),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[_]]):d("",!0),s(u)("delete roles")?h((o(),i(f,{key:1,as:"button",method:"DELETE",href:p.route("admin.role.delete",t.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:s(e)("Delete Role")},{default:l(()=>[n(s(P),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[N,{message:"Are you sure you want to delete this Role permanently?"}],[_]]):d("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{he as default};