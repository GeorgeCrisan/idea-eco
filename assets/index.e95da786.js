import{s as k,u as $,c as G,a as R,g as T,b as S,d as y,F,C as M,T as h,D as N}from"./App.28c9f822.js";import{m as P}from"./index.53346c92.js";import{_ as c,y as j,x,a as D,q as z,j as n,z as L}from"./index.29ab2aad.js";const _=["className","component","disableGutters","fixed","maxWidth","classes"],U=j(),w=k("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,s[`maxWidth${x(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),B=t=>$({props:t,name:"MuiContainer",defaultTheme:U}),q=(t,s)=>{const o=i=>T(s,i),{classes:u,fixed:p,disableGutters:m,maxWidth:e}=t,a={root:["root",e&&`maxWidth${x(String(e))}`,p&&"fixed",m&&"disableGutters"]};return G(a,o,u)};function O(t={}){const{createStyledComponent:s=w,useThemeProps:o=B,componentName:u="MuiContainer"}=t,p=s(({theme:e,ownerState:a})=>c({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:a})=>a.fixed&&Object.keys(e.breakpoints.values).reduce((i,r)=>{const l=r,d=e.breakpoints.values[l];return d!==0&&(i[e.breakpoints.up(l)]={maxWidth:`${d}${e.breakpoints.unit}`}),i},{}),({theme:e,ownerState:a})=>c({},a.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[e.breakpoints.up(a.maxWidth)]:{maxWidth:`${e.breakpoints.values[a.maxWidth]}${e.breakpoints.unit}`}}));return D.exports.forwardRef(function(a,i){const r=o(a),{className:l,component:d="div",disableGutters:b=!1,fixed:g=!1,maxWidth:C="lg"}=r,v=z(r,_),f=c({},r,{component:d,disableGutters:b,fixed:g,maxWidth:C}),W=q(f,u);return n(p,c({as:d,ownerState:f,className:R(W.root,l),ref:i},v))})}const A=O({createStyledComponent:S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:o}=t;return[s.root,s[`maxWidth${x(String(o.maxWidth))}`],o.fixed&&s.fixed,o.disableGutters&&s.disableGutters]}}),useThemeProps:t=>y({props:t,name:"MuiContainer"})});var E=A;function K(){return n(E,{sx:{height:"100%"},children:n(F,{flexDirection:"column",children:L(M,{flexDirection:"column",children:[n(h,{sx:{mt:2},variant:"h4",color:"error",children:"404 Not Found"}),n(N,{variant:"middle"}),n(h,{variant:"h4",sx:{color:t=>t.palette.info.main},children:P[404]})]})})})}export{K as default};