import{l as g,q as v,o as i,c as k,w as l,k as D,b as a,u as r,A as S,a as t,t as o,j as d,d as p,f as u}from"./app-75c47b55.js";import{u as I,A as T}from"./AppLayout-e8e9e144.js";import{D as _,_ as A}from"./DtRowItem-becf00fe.js";import{_ as j}from"./PlayerSubMenu-04a38cf4.js";import{r as B}from"./EyeIcon-6b9e7415.js";import"./useAuthorizable-ad6a95c3.js";import"./XMarkIcon-51958feb.js";const N={class:"px-2 py-4 md:py-12 md:px-10 max-w-7xl mx-auto space-y-4"},P={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},V={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},q={class:"flex items-center"},H=["content"],L=["src"],O={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},C={class:"flex items-center"},E={class:"flex-shrink-0 h-10 w-10"},R=["src"],$={class:"ml-4"},F={class:"font-extrabold text-gray-700 dark:text-gray-300"},M=["title"],z=["title"],G={key:1,class:"text-gray-400"},J={class:"whitespace-nowrap"},K={class:"px-4 py-3 text-sm font-medium text-center whitespace-nowrap"},se={__name:"IndexSession",props:{player:{type:Object,required:!0},filters:{type:Object},sessions:{type:Object},canShowPlayerIntel:{type:Boolean,required:!0}},setup(n){const{__:s}=D(),{formatTimeAgoToNow:y,formatToDayDateString:h,secondsToHMS:f}=I(),b=[{key:"id",label:s("ID"),sortable:!0,class:"text-left"},{key:"country_id",label:s("Flag"),sortable:!0,class:"text-left"},{key:"player_displayname",label:s("Display name"),sortable:!0},{key:"session_started_at",label:s("Started"),sortable:!0},{key:"session_ended_at",label:s("Ended"),sortable:!0},{key:"server_id",label:s("Server"),sortable:!0},{key:"play_time",label:s("Play Time"),sortable:!0,class:"text-right"},{key:"afk_time",label:s("Afk Time"),sortable:!0,class:"text-right"},{key:"actions",label:s("Actions"),sortable:!1,class:"text-right"}];return(m,Q)=>{const x=g("InertiaLink"),c=v("tippy");return i(),k(T,null,{default:l(()=>[a(S,{title:r(s)(":username's sessions - PlayerIntel",{username:n.player.username})},null,8,["title"]),t("div",N,[a(j,{player:n.player,"can-show-player-intel":n.canShowPlayerIntel},null,8,["player","can-show-player-intel"]),t("div",null,[a(A,{class:"bg-white rounded shadow dark:bg-gray-800",header:b,data:n.sessions,filters:n.filters,"route-params":{player:n.player.uuid}},{default:l(({item:e})=>{var w;return[t("td",P,o(e.id),1),t("td",V,[t("div",q,[d((i(),p("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:e.country.name},[t("img",{class:"h-10 w-10",src:e.country.photo_path,alt:""},null,8,L)],8,H)),[[c]])])]),t("td",O,[t("div",C,[t("div",E,[t("img",{class:"h-10 w-10",src:(w=n.player)==null?void 0:w.avatar_url,alt:""},null,8,R)]),t("div",$,[a(x,{as:"div",href:m.route("player.intel.session.show",{player:e.player_uuid,session:e.id}),class:"text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none cursor-pointer hover:underline"},{default:l(()=>[t("span",F,o(e.player_displayname)+" ("+o(e.player_username)+") ",1)]),_:2},1032,["href"])])])]),a(_,null,{default:l(()=>[d((i(),p("span",{class:"whitespace-nowrap",title:r(h)(e.session_started_at)},[u(o(r(y)(e.session_started_at)),1)],8,M)),[[c]])]),_:2},1024),a(_,null,{default:l(()=>[e.session_ended_at?d((i(),p("span",{key:0,class:"whitespace-nowrap",title:r(h)(e.session_ended_at)},[u(o(r(y)(e.session_ended_at)),1)],8,z)),[[c]]):(i(),p("span",G,"—"))]),_:2},1024),a(_,null,{default:l(()=>[d((i(),p("span",J,[u(o(e.server.name),1)])),[[c]])]),_:2},1024),a(_,{class:"text-right"},{default:l(()=>[u(o(r(f)(e.play_time,!0)),1)]),_:2},1024),a(_,{class:"text-right"},{default:l(()=>[u(o(r(f)(e.afk_time,!0)),1)]),_:2},1024),t("td",K,[d((i(),k(x,{as:"a",href:m.route("player.intel.session.show",{player:e.player_uuid,session:e.id}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:r(s)("View Session Details")},{default:l(()=>[a(r(B),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[c]])])]}),_:1},8,["data","filters","route-params"])])])]),_:1})}}};export{se as default};