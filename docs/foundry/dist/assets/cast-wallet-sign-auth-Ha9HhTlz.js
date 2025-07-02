import{j as e}from"./index-D5UbER3f.js";import r from"./wallet-options-raw-DUA3oCjg.js";import t from"./wallet-options-keystore-DuC5PFVS.js";import d from"./wallet-options-hardware-CzqFrXbI.js";import h from"./common-options-OsAHhg-o.js";import{u as a}from"./index-CZxYc6i7.js";const k=void 0;function i(n){const s={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-wallet-sign-auth",children:["cast wallet sign-auth",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-wallet-sign-auth",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-wallet-sign-auth - Sign an EIP-7702 authorization."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast wallet sign-auth"})," ",e.jsx(s.em,{children:"address"})]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Sign an ",e.jsx(s.a,{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-7702.md",children:"EIP-7702"})," authorization for an address."]}),`
`,e.jsxs(s.p,{children:["Note that ",e.jsx(s.code,{children:"sign-auth"})," uses the current nonce as it is not aware of whether you are going to broadcast the authorization from the same or a different sender."]}),`
`,e.jsxs(s.p,{children:["If you are sending the transaction from the same address you will need to either pass the next nonce using the ",e.jsx(s.code,{children:"--nonce"})," flag or alternatively use ",e.jsx(s.code,{children:"cast send <to> --auth <address>"})," to sign and send directly."]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r,{}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsx(h,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Sign an EIP-7702 authorization using a keystore:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" sign-auth"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --keystore"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" keystore.json"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --interactive"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Sign an EIP-7702 authorization using a raw private key:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" sign-auth"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --private-key"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $PRIV_KEY"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-wallet",children:"cast wallet"})]})]})}function p(n={}){const{wrapper:s}={...a(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{p as default,k as frontmatter};
