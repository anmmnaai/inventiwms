import{i as y,c as r,g as m,q as $,k as b,h as g,j as k}from"./index.c1f9df61.js";const S={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function P(){const{props:e,proxy:{$q:i}}=m(),o=y($,()=>{console.error("QPageSticky needs to be child of QLayout")}),v=r(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),l=r(()=>o.header.offset),f=r(()=>o.right.offset),u=r(()=>o.footer.offset),p=r(()=>o.left.offset),d=r(()=>{let t=0,a=0;const n=v.value,c=i.lang.rtl===!0?-1:1;n.top===!0&&l.value!==0?a=`${l.value}px`:n.bottom===!0&&u.value!==0&&(a=`${-u.value}px`),n.left===!0&&p.value!==0?t=`${c*p.value}px`:n.right===!0&&f.value!==0&&(t=`${-c*f.value}px`);const s={transform:`translate(${t}, ${a})`};return e.offset&&(s.margin=`${e.offset[1]}px ${e.offset[0]}px`),n.vertical===!0?(p.value!==0&&(s[i.lang.rtl===!0?"right":"left"]=`${p.value}px`),f.value!==0&&(s[i.lang.rtl===!0?"left":"right"]=`${f.value}px`)):n.horizontal===!0&&(l.value!==0&&(s.top=`${l.value}px`),u.value!==0&&(s.bottom=`${u.value}px`)),s}),x=r(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function h(t){const a=b(t.default);return g("div",{class:x.value,style:d.value},e.expand===!0?a:[g("div",a)])}return{$layout:o,getStickyContent:h}}var q=k({name:"QPageSticky",props:S,setup(e,{slots:i}){const{getStickyContent:o}=P();return()=>o(i)}});export{q as Q};
