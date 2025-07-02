import{j as e}from"./index-D5UbER3f.js";import i from"./rpc-url-option-Bdlv6sNx.js";import d from"./display-options-CoE2BSKN.js";import a from"./common-options-OsAHhg-o.js";import{u as o}from"./index-CZxYc6i7.js";const j=void 0;function r(s){const n={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"cast-proof",children:["cast proof",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-proof",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"cast-proof - Generate a storage proof for a given storage slot."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"cast proof"})," [",e.jsx(n.em,{children:"options"}),"] ",e.jsx(n.em,{children:"address"})," [",e.jsx(n.em,{children:"slots..."}),"]"]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Generate a storage proof for a given storage slot."}),`
`,e.jsxs(n.p,{children:["The address (",e.jsx(n.em,{children:"address"}),") can be an ENS name or an address."]}),`
`,e.jsx(n.p,{children:"The displayed output is a JSON object with the following keys:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"accountProof"}),": Proof for the account itself"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"address"}),": The address of the account"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"balance"}),": The balance of the account"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"codeHash"}),": A hash of the account's code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nonce"}),": The nonce of the account"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storageHash"}),": A hash of the account's storage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storageProof"}),": An array of storage proofs, one for each requested slot"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storageProof.key"}),": The slot"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storageProof.proof"}),": The proof for the slot"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storageProof.value"}),": The value of the slot"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"query-options",children:["Query Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#query-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-B"})," ",e.jsx(n.em,{children:"block"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--block"})," ",e.jsx(n.em,{children:"block"}),e.jsx(n.br,{}),`
`,"    The block height you want to query at."]}),`
`,e.jsxs(n.p,{children:["    Can be a block number, or any of the tags: ",e.jsx(n.code,{children:"earliest"}),", ",e.jsx(n.code,{children:"finalized"}),", ",e.jsx(n.code,{children:"safe"}),", ",e.jsx(n.code,{children:"latest"})," or ",e.jsx(n.code,{children:"pending"}),"."]}),`
`,e.jsxs(n.h4,{id:"rpc-options",children:["RPC Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i,{}),`
`,e.jsx(d,{}),`
`,e.jsx(a,{}),`
`,e.jsxs(n.h3,{id:"examples",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Get the proof for storage slot 0 on the WETH contract:",`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" proof"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"see-also",children:["SEE ALSO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(n.a,{href:"/cast/reference/cast-storage",children:"cast storage"})]})]})}function f(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{f as default,j as frontmatter};
