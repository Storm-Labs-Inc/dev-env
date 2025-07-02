import{j as e}from"./index-D5UbER3f.js";import a from"./rpc-url-option-Bdlv6sNx.js";import t from"./common-options-OsAHhg-o.js";import{u as r}from"./index-CZxYc6i7.js";const h=void 0;function i(n){const s={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-storage",children:["cast storage",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-storage",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-storage - Get the raw value of a contract's storage slot or its full storage layout."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast storage"})," [",e.jsx(s.em,{children:"options"}),"] ",e.jsx(s.em,{children:"address"})," ",e.jsx(s.em,{children:"slot"})]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Get the raw value of a contract's storage slot. (Slot locations greater than 18446744073709551615 (u64::MAX) should be given as hex. Use ",e.jsx(s.code,{children:"cast index"})," to compute mapping slots.)"]}),`
`,e.jsx(s.p,{children:"Omit the slot number to get the full storage layout (requires contract to be verified on Etherscan with a Solidity version > 0.6.5 or you must be in a Forge project with a local contract matching the deployed bytecode)."}),`
`,e.jsxs(s.p,{children:["The address (",e.jsx(s.em,{children:"address"}),") can be an ENS name or an address."]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"query-options",children:["Query Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#query-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"-B"})," ",e.jsx(s.em,{children:"block"}),`
`,e.jsx(s.code,{children:"--block"})," ",e.jsx(s.em,{children:"block"}),`
    The block height you want to query at.`]}),`
`,e.jsxs(s.p,{children:["    Can be a block number, or any of the tags: ",e.jsx(s.code,{children:"earliest"}),", ",e.jsx(s.code,{children:"finalized"}),", ",e.jsx(s.code,{children:"safe"}),", ",e.jsx(s.code,{children:"latest"})," or ",e.jsx(s.code,{children:"pending"}),"."]}),`
`,e.jsxs(s.h4,{id:"rpc-options",children:["RPC Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a,{}),`
`,e.jsx(t,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Get the value of slot 0 on the WETH contract."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" storage"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Get the full storage layout of the Milady contract."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" storage"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x5Af0D9827E0c53E4799BB226655A1de152A425a5"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-proof",children:"cast proof"})]})]})}function x(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{x as default,h as frontmatter};
