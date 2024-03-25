import{Q as v}from"./QItemLabel.9fc1e402.js";import{Q as z,b as c,a as i}from"./QList.51918774.js";import{_ as H,aD as O,L as P,aS as X,r as Y,c as e,w as f,o as F,R as l,S as d,U as n,f as s,Y as o,Z as V,a1 as g,V as r,X as m,aH as u}from"./index.f89e22ff.js";import{u as G}from"./use-quasar.9196b276.js";import"./axios.e6fce94e.js";import{u as J}from"./vue-i18n.runtime.esm-bundler.386ff9c8.js";const K=O({name:"EquipmentSupport",data(){return{}},setup(){const a=P();X();const _=G(),p=Y(0),{t:h}=J(),b=e({get:()=>a.state.fabchange.fab1}),S=e({get:()=>a.state.fabchange.fab2}),Q=e({get:()=>a.state.fabchange.fab3}),$=e({get:()=>a.state.fabchange.fab4}),C=e({get:()=>a.state.screenchange.screenscroll}),q=e({get:()=>a.state.loginauth.authin}),y=e({get:()=>a.state.loginauth.login_name}),k=e({get:()=>a.state.loginauth.operator}),w=e({get:()=>a.state.settings.openid}),N=e({get:()=>a.state.langchange.lang}),A=e({get:()=>a.state.settings.server}),I=e({get:()=>a.state.scanchanged.scandata,set:t=>{a.commit("scanchanged/ScanChanged",t)}}),B=e({get:()=>a.state.scanchanged.datadetail,set:t=>{a.commit("scanchanged/ScanDataChanged",t)}}),U=e({get:()=>a.state.scanchanged.asndata,set:t=>{a.commit("scanchanged/ASNDataChanged",t)}}),L=e({get:()=>a.state.scanchanged.dndata,set:t=>{a.commit("scanchanged/DNDataChanged",t)}}),R=e({get:()=>a.state.scanchanged.bindata,set:t=>{a.commit("scanchanged/BinDataChanged",t)}}),T=e({get:()=>a.state.scanchanged.tablelist,set:t=>{a.commit("scanchanged/TableDataChanged",t)}}),E=e({get:()=>a.state.scanchanged.scanmode,set:t=>{a.commit("scanchanged/ScanModeChanged",t)}}),x=e({get:()=>a.state.scanchanged.bar_scanned}),M=e({get:()=>a.state.scanchanged.apiurl,set:t=>{a.commit("scanchanged/ApiUrlChanged",t)}}),Z=e({get:()=>a.state.scanchanged.apiurlnext,set:t=>{a.commit("scanchanged/ApiUrlNextChanged",t)}}),j=e({get:()=>a.state.scanchanged.apiurlprevious,set:t=>{a.commit("scanchanged/ApiUrlPreviousChanged",t)}});return f(x,(t,D)=>{}),f(C,(t,D)=>{}),f(p,(t,D)=>{t===1&&(q.value==="0"?_.notify({type:"negative",message:h("notice.mobile_userlogin.notice9")}):getTableData(""))}),F(()=>{}),{t:h,fab1:b,fab2:S,fab3:Q,fab4:$,screenscroll:C,authin:q,login_name:y,openid:w,operator:k,lang:N,requestauth:p,baseurl:A,apiurl:M,apiurlnext:Z,apiurlprevious:j,scandata:I,datadetail:B,tablelist:T,asndata:U,dndata:L,bindata:R,scanmode:E,bar_scanned:x}}}),W=m("img",{src:"statics/equipment/apple.png",style:{"margin-right":"20px"}},null,-1),aa=m("img",{src:"statics/equipment/android.png",style:{"margin-right":"20px"}},null,-1),ta=m("img",{src:"statics/equipment/zebra.png",style:{"margin-right":"20px"}},null,-1),ea=m("img",{src:"statics/equipment/seuic.jpg",style:{"margin-right":"20px"}},null,-1);function na(a,_,p,h,b,S){return l(),d(z,{bordered:"",padding:""},{default:n(()=>[s(i,null,{default:n(()=>[s(c,null,{default:n(()=>[s(v,{overline:""},{default:n(()=>[o(V(a.$t("notice.equipment.notice1")),1)]),_:1}),s(v,{caption:""},{default:n(()=>[o(V(a.$t("notice.equipment.notice2")),1)]),_:1})]),_:1})]),_:1}),s(g,{spaced:""}),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("IOS")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[W]),_:1})]),_:1})),[[u]]),s(g),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("Android")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[aa]),_:1})]),_:1})),[[u]]),s(g),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("Zebra")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[ta]),_:1})]),_:1})),[[u]]),s(g),r((l(),d(i,{clickable:""},{default:n(()=>[s(c,null,{default:n(()=>[o("Seuic")]),_:1}),s(c,{thumbnail:""},{default:n(()=>[ea]),_:1})]),_:1})),[[u]])]),_:1})}var ga=H(K,[["render",na]]);export{ga as default};
