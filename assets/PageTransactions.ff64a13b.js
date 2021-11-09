import{q as o,r as c,o as l,b as u,l as d,t,u as i,d as r}from"./vendor.fbce4e70.js";import{U as p}from"./index.fcc6e51f.js";const x={setup(f){const{params:{address:e}}=o(),{getAllTransactions:n}=p(),s=c([]);return n(e).then(a=>{s.value=a}),(a,m)=>(l(),u("div",null,[d(" address: "+t(i(e))+" ",1),r("div",null,[r("pre",null,"        "+t(s.value)+`
      `,1)])]))}};export{x as default};
