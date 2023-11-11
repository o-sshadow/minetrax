import{q as f,o as i,c as v,w as I,b as p,u as e,A as k,a as t,f as d,t as s,j as x,d as r,e as C,k as b}from"./app-20450175.js";import{u as T,A as D}from"./AppLayout-759a67c4.js";import{_ as S}from"./PlayerSubMenu-a768651b.js";import{_ as o}from"./millify-2865c83f.js";import"./useAuthorizable-8850b194.js";const A={class:"px-2 py-4 md:py-12 md:px-10 max-w-7xl mx-auto space-y-4"},P={class:"flex flex-col shadow bg-white dark:bg-cool-gray-800 rounded p-3"},B={class:"text-lg font-bold text-gray-700 dark:text-gray-300"},M={class:"text-sm font-light"},q={class:"grid grid-cols-1 md:grid-cols-2 grap-2 md:gap-16 w-full dark:text-gray-400 text-gray-600 mt-4"},O={class:"whitespace-nowrap"},V={class:"text-right"},j={class:"whitespace-nowrap"},N={class:"text-right"},L={class:"whitespace-nowrap"},$={class:"text-right"},W={class:"whitespace-nowrap"},E={class:"text-right"},H={class:"whitespace-nowrap"},K={class:"text-right"},z=["title"],G={class:"whitespace-nowrap"},J={class:"text-right"},U=["title"],F={key:1,class:"text-gray-400"},R={class:"whitespace-nowrap"},Q={class:"text-right"},X={class:"whitespace-nowrap"},Y={class:"text-right"},Z={class:"whitespace-nowrap"},tt={class:"text-right"},st={class:"whitespace-nowrap"},et={class:"text-right"},at={class:"whitespace-nowrap"},nt={class:"text-right"},it={class:"whitespace-nowrap"},ot={class:"text-right"},ct={class:"whitespace-nowrap"},lt={class:"text-right"},dt={class:"whitespace-nowrap"},rt={class:"text-right"},ht={class:"whitespace-nowrap"},_t={class:"text-right"},ut={class:"whitespace-nowrap"},wt={class:"text-right"},mt={class:"whitespace-nowrap"},gt={class:"text-right"},pt={class:"whitespace-nowrap"},xt={class:"text-right"},yt={class:"whitespace-nowrap"},ft={class:"text-right"},vt={class:"whitespace-nowrap"},It={class:"text-right"},kt={class:"whitespace-nowrap"},Ct={class:"text-right"},bt={class:"whitespace-nowrap"},Tt={class:"text-right"},Dt={class:"whitespace-nowrap"},St={class:"text-right"},At={class:"whitespace-nowrap"},Pt={class:"text-right"},Bt={class:"whitespace-nowrap"},Mt={class:"text-right"},qt={class:"whitespace-nowrap"},Ot={class:"text-right"},Vt={class:"whitespace-nowrap"},jt={class:"text-right"},Nt={class:"whitespace-nowrap"},Lt={class:"text-right"},$t={class:"whitespace-nowrap"},Wt={class:"text-right"},Et={class:"whitespace-nowrap"},Ht={class:"text-right"},Kt={key:0,class:"flex flex-col shadow bg-white dark:bg-cool-gray-800 rounded p-3"},zt={class:"text-lg font-bold text-gray-700 dark:text-gray-300"},Gt={class:"text-sm font-light"},Jt={class:"grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-16 w-full dark:text-gray-400 text-gray-600 mt-4"},Ut={class:"whitespace-nowrap"},Ft={class:"text-right"},Rt=["href"],Qt={class:"whitespace-nowrap"},Xt={class:"text-right"},Yt={class:"whitespace-nowrap"},Zt={class:"text-right"},ts={class:"whitespace-nowrap"},ss={class:"text-right"},es={class:"whitespace-nowrap"},as={class:"text-right"},ns={class:"whitespace-nowrap"},is={class:"text-right"},os={class:"whitespace-nowrap"},cs={class:"text-right"},ls={class:"whitespace-nowrap"},ds={class:"text-right"},rs={class:"whitespace-nowrap"},hs={class:"text-right"},_s={class:"whitespace-nowrap"},us={class:"text-right"},vs={__name:"ShowSession",props:{player:{type:Object,required:!0},session:{type:Object,required:!0},eventCounts:{type:Object,required:!0},showCriticalInfo:{type:Boolean,required:!0},criticalInfo:{type:Object,required:!1},canShowPlayerIntel:{type:Boolean,required:!0}},setup(a){var m;const c=a,{__:n}=b(),{formatTimeAgoToNow:u,formatToDayDateString:w,secondsToHMS:h}=T(),l=(m=c.criticalInfo)!=null&&m.world_location?JSON.parse(c.criticalInfo.world_location):null,y=l?`x: ${Math.round(l.x)}, y: ${Math.round(l.y)}, z: ${Math.round(l.z)}`:"—";let _=c.session.play_time-c.session.afk_time;return _=Math.max(_,0),(ws,ms)=>{const g=f("tippy");return i(),v(D,null,{default:I(()=>[p(k,{title:e(n)(":username's session #:id - PlayerIntel",{username:a.player.username,id:a.session.id})},null,8,["title"]),t("div",A,[p(S,{player:a.player,"can-show-player-intel":a.canShowPlayerIntel},null,8,["player","can-show-player-intel"]),t("div",P,[t("h1",B,[d(s(e(n)("Session #:id",{id:a.session.id}))+", "+s(a.player.username)+" ",1),t("span",M,"("+s(a.player.uuid)+")",1)]),t("div",q,[t("table",null,[t("tr",null,[t("td",O,s(e(n)("Server")),1),t("td",V,s(a.session.server.name),1)]),t("tr",null,[t("td",j,s(e(n)("Country")),1),t("td",N,s(a.session.country.name),1)]),t("tr",null,[t("td",L,s(e(n)("Username")),1),t("td",$,s(a.session.player_username),1)]),t("tr",null,[t("td",W,s(e(n)("Displayname")),1),t("td",E,s(a.session.player_displayname),1)]),t("tr",null,[t("td",H,s(e(n)("Started At")),1),t("td",K,[x((i(),r("span",{class:"whitespace-nowrap",title:e(w)(a.session.session_started_at)},[d(s(e(u)(a.session.session_started_at)),1)],8,z)),[[g]])])]),t("tr",null,[t("td",G,s(e(n)("Ended At")),1),t("td",J,[a.session.session_ended_at?x((i(),r("span",{key:0,class:"whitespace-nowrap",title:e(w)(a.session.session_ended_at)},[d(s(e(u)(a.session.session_ended_at)),1)],8,U)),[[g]]):(i(),r("span",F,"—"))])]),t("tr",null,[t("td",R,s(e(n)("Play Time")),1),t("td",Q,s(e(h)(a.session.play_time,!0)),1)]),t("tr",null,[t("td",X,s(e(n)("Active Time")),1),t("td",Y,s(e(h)(e(_),!0)),1)]),t("tr",null,[t("td",Z,s(e(n)("Afk Time")),1),t("td",tt,s(e(h)(a.session.afk_time,!0)),1)]),t("tr",null,[t("td",st,s(e(n)("Pvp Damage Given")),1),t("td",et,s(a.eventCounts.pvp_damage_given),1)]),t("tr",null,[t("td",at,s(e(n)("Pvp Damage Taken")),1),t("td",nt,s(a.eventCounts.pvp_damage_taken),1)]),t("tr",null,[t("td",it,s(e(n)("Fish Caught")),1),t("td",ot,s(a.eventCounts.fish_caught),1)]),t("tr",null,[t("td",ct,s(e(n)("Raids Won")),1),t("td",lt,s(a.eventCounts.raids_won),1)]),t("tr",null,[t("td",dt,s(e(n)("Times Slept")),1),t("td",rt,s(a.eventCounts.times_slept_in_bed),1)]),t("tr",null,[t("td",ht,s(e(n)("Items Enchanted")),1),t("td",_t,s(a.eventCounts.items_enchanted),1)])]),t("table",null,[t("tr",null,[t("td",ut,s(e(n)("Player Kills")),1),t("td",wt,s(a.session.player_kills),1)]),t("tr",null,[t("td",mt,s(e(n)("Mob Kills")),1),t("td",gt,s(a.session.mob_kills),1)]),t("tr",null,[t("td",pt,s(e(n)("Deaths")),1),t("td",xt,s(a.session.deaths),1)]),t("tr",null,[t("td",yt,s(e(n)("Items Used")),1),t("td",ft,s(a.eventCounts.items_used),1)]),t("tr",null,[t("td",vt,s(e(n)("Items Mined")),1),t("td",It,s(a.eventCounts.items_mined),1)]),t("tr",null,[t("td",kt,s(e(n)("Items Pickedup")),1),t("td",Ct,s(a.eventCounts.items_picked_up),1)]),t("tr",null,[t("td",bt,s(e(n)("Items Dropped")),1),t("td",Tt,s(a.eventCounts.items_dropped),1)]),t("tr",null,[t("td",Dt,s(e(n)("Items Consumed")),1),t("td",St,s(a.eventCounts.items_consumed),1)]),t("tr",null,[t("td",At,s(e(n)("Items Broken")),1),t("td",Pt,s(a.eventCounts.items_broken),1)]),t("tr",null,[t("td",Bt,s(e(n)("Items Crafted")),1),t("td",Mt,s(a.eventCounts.items_crafted),1)]),t("tr",null,[t("td",qt,s(e(n)("Items Placed")),1),t("td",Ot,s(a.eventCounts.items_placed),1)]),t("tr",null,[t("td",Vt,s(e(n)("Distance Traveled")),1),t("td",jt,s(e(o)(a.eventCounts.distance_traveled))+" "+s(e(n)("meters")),1)]),t("tr",null,[t("td",Nt,s(e(n)("Distance Traveled on Land")),1),t("td",Lt,s(e(o)(a.eventCounts.distance_traveled_on_land))+" "+s(e(n)("meters")),1)]),t("tr",null,[t("td",$t,s(e(n)("Distance Traveled on Air")),1),t("td",Wt,s(e(o)(a.eventCounts.distance_traveled_on_air))+" "+s(e(n)("meters")),1)]),t("tr",null,[t("td",Et,s(e(n)("Distance Traveled on Water")),1),t("td",Ht,s(e(o)(a.eventCounts.distance_traveled_on_water))+" "+s(e(n)("meters")),1)])])])]),a.showCriticalInfo&&a.criticalInfo?(i(),r("div",Kt,[t("h1",zt,[d(s(e(n)("Critical Info"))+" ",1),t("span",Gt,"("+s(e(n)("Only visible to Staff with permission"))+")",1)]),t("div",Jt,[t("table",null,[t("tr",null,[t("td",Ut,s(e(n)("IP Address")),1),t("td",Ft,[t("a",{class:"hover:text-light-blue-400 hover:underline",target:"_blank",href:`https://whois.domaintools.com/${a.criticalInfo.player_ip_address}`},s(a.criticalInfo.player_ip_address),9,Rt)])]),t("tr",null,[t("td",Qt,s(e(n)("Join Address")),1),t("td",Xt,s(a.criticalInfo.join_address),1)]),t("tr",null,[t("td",Yt,s(e(n)("Minecraft Version")),1),t("td",Zt,s(a.criticalInfo.minecraft_version),1)]),t("tr",null,[t("td",ts,s(e(n)("Player Ping")),1),t("td",ss,s(a.criticalInfo.player_ping),1)]),t("tr",null,[t("td",es,s(e(n)("Vault Balance")),1),t("td",as,s(e(o)(a.criticalInfo.vault_balance,{precision:2})),1)])]),t("table",null,[t("tr",null,[t("td",ns,s(e(n)("Kicked")),1),t("td",is,s(a.criticalInfo.is_kicked),1)]),t("tr",null,[t("td",os,s(e(n)("Banned")),1),t("td",cs,s(a.criticalInfo.is_banned),1)]),t("tr",null,[t("td",ls,s(e(n)("Oped")),1),t("td",ds,s(a.criticalInfo.is_op),1)]),t("tr",null,[t("td",rs,s(e(n)("Vault Groups")),1),t("td",hs,s(a.criticalInfo.vault_groups),1)]),t("tr",null,[t("td",_s,s(e(n)("World Location")),1),t("td",us,s(e(y)),1)])])])])):C("",!0)])]),_:1})}}};export{vs as default};