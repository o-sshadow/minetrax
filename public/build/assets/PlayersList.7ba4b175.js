import{c as y,w as l,I as x,o as s,b as o,u as a,C as w,a as n,s as f,d as _,t as r,f as c,l as g,q as T}from"./app.42cd3c13.js";import{u as D}from"./AppLayout.53d1bc61.js";import{_ as P}from"./AdminLayout.fcfbb7fc.js";import{_ as S}from"./ServerIntelServerSelector.406820de.js";import{D as i,_ as j}from"./DtRowItem.5fc2e81e.js";import{_ as V}from"./millify.524d1bf5.js";import"./useAuthorizable.e8864582.js";import"./XSelect.2fbfba22.js";import"./XMarkIcon.a5cfc26e.js";const A={class:"p-4 mx-auto space-y-4 px-10"},B={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},C={class:"flex items-center"},L=["content"],N=["src"],U={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},H={class:"flex items-center"},I={class:"flex-shrink-0 h-10 w-10"},M=["src"],O={class:"ml-4"},$={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},F={key:1,class:"text-red-500 italic"},R={key:0},q={key:1},E={key:0},J={key:1},z={key:0},G={key:1},le={__name:"PlayersList",props:{serverList:{type:Object},filters:{type:Object},data:{type:Object}},setup(d){const{__:t}=x(),{formatTimeAgoToNow:p,formatToDayDateString:h,secondsToHMS:m}=D(),k=[{key:"country_id",label:t("Flag"),sortable:!0,class:"text-left"},{key:"player_username",label:t("Username"),sortable:!0,class:"text-left"},{key:"server_play_count",label:t("Servers Played"),sortable:!0},{key:"play_time",label:t("Play Time"),sortable:!0},{key:"afk_time",label:t("Afk Time"),sortable:!0},{key:"vault_balance",label:t("Vault Money"),sortable:!0},{key:"last_join_address",label:t("Join Address"),sortable:!0},{key:"last_minecraft_version",label:t("MC Version"),sortable:!0},{key:"first_seen_at",label:t("First Seen"),sortable:!0},{key:"last_seen_at",label:t("Last Seen"),sortable:!0}];return(b,K)=>{const v=g("inertia-link"),u=T("tippy");return s(),y(P,null,{default:l(()=>[o(w,{title:a(t)("Players - PlayerIntel")},null,8,["title"]),n("div",A,[o(S,{title:a(t)("Players"),"server-list":d.serverList,filters:d.filters},null,8,["title","server-list","filters"]),n("div",null,[o(j,{class:"bg-white rounded shadow dark:bg-gray-800",header:k,data:d.data,filters:d.filters},{default:l(({item:e})=>[n("td",B,[n("div",C,[f((s(),_("div",{class:"flex-shrink-0 h-10 w-10 focus:outline-none",content:e.country.name},[n("img",{class:"h-10 w-10",src:e.country.photo_path,alt:""},null,8,N)],8,L)),[[u]])])]),n("td",U,[n("div",H,[n("div",I,[n("img",{class:"h-10 w-10",src:e.player.avatar_url,alt:""},null,8,M)]),n("div",O,[f((s(),y(v,{as:"div",href:b.route("player.show",e.player.uuid),class:"text-sm font-medium text-gray-900 dark:text-gray-200 focus:outline-none cursor-pointer hover:underline",content:e.player.uuid},{default:l(()=>[e.player_username?(s(),_("span",$,r(e.player_username),1)):(s(),_("span",F,r(a(t)("Unknown")),1))]),_:2},1032,["href","content"])),[[u]])])])]),o(i,null,{default:l(()=>[c(r(e.server_play_count)+" "+r(a(t)("servers")),1)]),_:2},1024),o(i,null,{default:l(()=>[e.play_time?(s(),_("span",R,r(a(m)(e.play_time,!0)),1)):(s(),_("span",q," -- "))]),_:2},1024),o(i,null,{default:l(()=>[e.afk_time?(s(),_("span",E,r(a(m)(e.afk_time,!0)),1)):(s(),_("span",J," -- "))]),_:2},1024),o(i,null,{default:l(()=>[e.vault_balance?(s(),_("span",z,r(a(V)(e.vault_balance,{precision:2})),1)):(s(),_("span",G," -- "))]),_:2},1024),o(i,null,{default:l(()=>[c(r(e.last_join_address||a(t)("Unknown")),1)]),_:2},1024),o(i,null,{default:l(()=>[c(r(e.last_minecraft_version||a(t)("Unknown")),1)]),_:2},1024),f((s(),y(i,{content:a(h)(e.first_seen_at)},{default:l(()=>[c(r(a(p)(e.first_seen_at)),1)]),_:2},1032,["content"])),[[u]]),f((s(),y(i,{content:a(h)(e.last_seen_at)},{default:l(()=>[c(r(a(p)(e.last_seen_at)),1)]),_:2},1032,["content"])),[[u]])]),_:1},8,["data","filters"])])])]),_:1})}}};export{le as default};
