import{A as r}from"./AppLayout-e54058db.js";import{S as _}from"./ShoutBox-13404d55.js";import{S as l}from"./ServerStatusBox-9222bf09.js";import{D as d,_ as x}from"./DidYouKnowBox-811ae87b.js";import{P as f}from"./Post-a40afc2d.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{l as t,o as h,c as v,w as y,b as s,a as o}from"./app-9aeeedd5.js";import"./useAuthorizable-5842a37e.js";import"./CopyToClipboard-da0e6391.js";import"./Comments-4199f10d.js";import"./UserDisplayname-12a68824.js";const w={components:{DiscordServerBox:d,DidYouKnowBox:x,ServerStatusBox:l,AppLayout:r,ShoutBox:_,Post:f},props:{post:Object}},b={class:"px-2 py-4 md:py-12 md:px-8 max-w-7xl mx-auto"},B={class:"flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"},S={class:"flex-grow"},g={class:"-my-2 overflow-x-auto md:-mx-6 lg:-mx-8"},k={class:"py-2 align-middle inline-block min-w-full md:px-6 lg:px-8"},P={class:""},D={class:"flex flex-col space-y-4 flex-none md:w-1/4 h-screen md:sticky top-5"};function A(a,C,e,N,V,$){const n=t("app-head"),c=t("post"),p=t("server-status-box"),m=t("shout-box"),i=t("app-layout");return h(),v(i,null,{default:y(()=>[s(n,{title:a.__("Post #:id by :name",{id:e.post.id,name:e.post.user.name})},null,8,["title"]),o("div",b,[o("div",B,[o("div",S,[o("div",g,[o("div",k,[o("div",P,[s(c,{post:e.post,"comments-section-opened":!0},null,8,["post"])])])])]),o("div",D,[s(p),s(m)])])])]),_:1})}const I=u(w,[["render",A]]);export{I as default};