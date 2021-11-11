var M=Object.defineProperty,Y=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var C=(t,e,s)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,y=(t,e)=>{for(var s in e||(e={}))F.call(e,s)&&C(t,s,e[s]);if($)for(var s of $(e))G.call(e,s)&&C(t,s,e[s]);return t},S=(t,e)=>Y(t,j(e));import{r as g,a as J,c as v,o as i,b as u,u as c,d as l,t as x,e as R,f as E,g as p,w as I,F as B,h as Q,i as X,j as Z,v as z,k as tt,l as et,m as st,n as nt,p as ot}from"./vendor.fcaf4b80.js";const rt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};rt();const at=t=>{const e=Number(t);return!e||isNaN(e)?(console.error("Invalid hex string: "+t),0):e},P=t=>{if(!t)return 0;const e=t.toString();return parseFloat(e.slice(0,-18)+"."+e.slice(-18))},{VITE_API_ETH_KEY:ct}={VITE_API_ETH_KEY:"57VV1UR4WCUQUNHG3RHZ8BI8WDY8YKPRHJ",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},it="https://api-rinkeby.etherscan.io/api",O=t=>{const e=S(y({},t),{key:ct});return it+"?"+new URLSearchParams(e)},L="1",lt=async t=>{const s=await fetch(O({module:"account",action:"tokenbalance",contractaddress:"0xa0dff2d4462ec3b60a7ab6dfd5071a98751151d9",tag:"latest",address:t})).catch(console.error);if((s==null?void 0:s.status)===200){const n=await s.json();if((n==null?void 0:n.status)===L)return P(n.result)}return 0},Zt={TRANSFER:"0x",LIST_NFT:"0x45432dbb",SETTLE_LIST:"0x8815f110"},zt=async(t,e)=>{const n=await fetch(O(y(y({},{module:"account",action:"txlist",startblock:0,endblock:99999999,sort:"asc",address:t}),e))).catch(console.error);if((n==null?void 0:n.status)===200){const o=await n.json();if((o==null?void 0:o.status)===L)return o.result}return[]};let d;const k=()=>d?!0:"ethereum"in window?(d=window.ethereum,!0):!1,m=t=>{(t==null?void 0:t.code)===4001?console.log("Please connect to MetaMask."):console.error(t)},ut=async()=>k()?await d.request({method:"eth_coinbase"}).catch(m):null,dt=async t=>{const e={method:"eth_getBalance",params:[t,"latest"]},s=await d.request(e).catch(m);return P(at(s))},ht=async()=>{if(k()){const[t]=await d.request({method:"eth_requestAccounts"}).catch(m)||[];return t}return null},A={MAIN:"0x1",ROPSTEN_TEST:"0x3",RINKEBY_TEST:"0x4"},_t=async()=>await d.request({method:"eth_chainId"}).catch(m),ft=async t=>await d.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]}).catch(m),pt=t=>k()?(d.on("chainChanged",e=>{t&&t(e)}),!0):!1;k();const b=g(!1),h=J({address:"",eth:0,onx:0,networkId:""}),U=g(""),K=(t="")=>{U.value=t},mt=v(()=>h.networkId!==A.RINKEBY_TEST),wt=()=>ft(A.RINKEBY_TEST),V=t=>{t&&(h.networkId=t)},W=async()=>{const t=await _t();V(t)};pt(V);const q=async t=>{const[e=0,s=0]=await Promise.all([dt(t),lt(t)]);h.eth=e,h.onx=s},yt=async()=>{const t=await ut();t&&(h.address=t,q(t),await W(),b.value=!0)},gt=async()=>{K();const t=await ht();if(t)return h.address=t,q(t),await W(),b.value=!0,!0;K("Can't connect to your wallet")};function D(){return b.value||yt(),{isConnected:b,errorMessage:U,wallet:h,connect:gt,isWrongNetwork:mt,switchToRightNetwork:wt}}const vt={key:0},xt=l("div",{class:"text-sm"}," Your wallet is currently connected to a different network. Please change it to the Rinkenby Test to continue ",-1),kt={key:1},bt={key:1},Tt={class:"text-xl"},Et={class:"text-right text-sm text-gray-500"},Nt={key:2,class:"text-xs text-gray-400"},$t={setup(t){const{isConnected:e,wallet:s,connect:n,errorMessage:o,isWrongNetwork:r,switchToRightNetwork:a}=D(),w=v(()=>e.value?`${s.onx} ONX / ${s.eth} ETH`:""),_=v(()=>e.value?`${s.address.slice(0,5)}...${s.address.slice(-4)}`:"");return(N,f)=>(i(),u("div",null,[c(e)&&c(r)?(i(),u("div",vt,[xt,l("button",{class:"p-2 mb-1 border rounded",onClick:f[0]||(f[0]=(...T)=>c(a)&&c(a)(...T))}," change wallet network ")])):(i(),u("div",kt,[c(e)?(i(),u("div",bt,[l("div",Tt,x(c(w)),1),l("div",Et,x(c(_)),1)])):(i(),u("button",{key:0,class:"p-2 pl-0",onClick:f[1]||(f[1]=(...T)=>c(n)&&c(n)(...T))}," Connect wallet ")),c(o)?(i(),u("div",Nt," *"+x(c(o)),1)):R("",!0)]))]))}},Ct=async()=>{const t=await fetch("https://blockchain.info/ticker").catch(console.error);return(t==null?void 0:t.status)===200?await t.json():null},St={setup(t){const e=g(""),s=()=>{Ct().then(n=>{(n==null?void 0:n.USD)&&(e.value=n.USD.last+" "+n.USD.symbol)})};return s(),setInterval(s,15e3),(n,o)=>(i(),u("div",null," BTC: "+x(e.value),1))}},Rt={class:"shadow"},It={class:"container mx-auto flex items-center"},Bt=l("div",{class:"p-4"}," Home page ",-1),Pt={class:"p-4 pl-10"},Ot={class:"ml-auto px-4"},Lt={setup(t){return(e,s)=>{const n=E("router-link");return i(),u("div",Rt,[l("div",It,[p(n,{to:"/"},{default:I(()=>[Bt]),_:1}),l("div",Pt,[p(St)]),l("div",Ot,[p($t)])])])}}},At={setup(t){return(e,s)=>{const n=E("router-view");return i(),u(B,null,[p(Lt),p(n)],64)}}};const Ut="modulepreload",H={},Kt="/",Vt=function(e,s){return!s||s.length===0?e():Promise.all(s.map(n=>{if(n=`${Kt}${n}`,n in H)return;H[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Ut,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((w,_)=>{a.addEventListener("load",w),a.addEventListener("error",_)})})).then(()=>e())},Wt={class:"mb-4"},qt=et(" Show My Transactions "),Dt={class:"sm:flex p-4 pl-0"},Ht=["onKeyup"],Mt=["disabled"],Yt={setup(t){const e=Q(),{isConnected:s,wallet:n}=D(),o=g(""),r=v(()=>o.value.length<42),a=()=>{r.value||e.push({name:"transactions",params:{address:o.value}})};return(w,_)=>{const N=E("router-link");return i(),u(B,null,[l("div",Wt,[c(s)?(i(),X(N,{key:0,to:{name:"transactions",params:{address:c(n).address}},class:"border mr-4 max-w-full p-1"},{default:I(()=>[qt]),_:1},8,["to"])):R("",!0)]),l("div",Dt,[Z(l("input",{"onUpdate:modelValue":_[0]||(_[0]=f=>o.value=f),type:"text",name:"address",class:"border mr-4 max-w-full p-1",minlength:"42",length:"42",style:{width:"390px"},placeholder:"0x1331b9d038adaa4439f3a4c819ab0b6bf187d677",onKeyup:tt(a,["enter"])},null,40,Ht),[[z,o.value]]),l("button",{type:"button",disabled:c(r),class:"border px-4 bg-gray-100 rounded",onClick:a}," Show transactions ",8,Mt)])],64)}}},jt={class:"container mx-auto p-4"},Ft={setup(t){return(e,s)=>(i(),u("div",jt,[p(Yt)]))}},Gt=[{path:"/",name:"home",component:Ft},{path:"/address/:address",name:"transactions",component:()=>Vt(()=>import("./PageTransactions.512a0f69.js"),["assets/PageTransactions.512a0f69.js","assets/vendor.fcaf4b80.js"])}],Jt=st({history:nt(),routes:Gt});ot(At).use(Jt).mount("#app");export{zt as g,Zt as t};
