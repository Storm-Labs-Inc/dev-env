import{j as e}from"./index-D5UbER3f.js";import a from"./sig-description-BQxkyap_.js";import d from"./wallet-options-Il0ZuM8R.js";import c from"./rpc-options-D0SEoQy0.js";import l from"./etherscan-options-CLooEQsH.js";import t from"./common-options-OsAHhg-o.js";import{u as r}from"./index-CZxYc6i7.js";import"./wallet-options-raw-DUA3oCjg.js";import"./wallet-options-keystore-DuC5PFVS.js";import"./wallet-options-hardware-CzqFrXbI.js";import"./wallet-options-remote-D7IykmrK.js";import"./rpc-url-option-Bdlv6sNx.js";const y=void 0;function i(n){const s={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-call",children:["cast call",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-call",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-call - Perform a call on an account without publishing a transaction."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast call"})," [",e.jsx(s.em,{children:"options"}),"] ",e.jsx(s.em,{children:"to"})," ",e.jsx(s.em,{children:"sig"})," [",e.jsx(s.em,{children:"args..."}),"]"]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Perform a call on an account without publishing a transaction."}),`
`,e.jsxs(s.p,{children:["The destination (",e.jsx(s.em,{children:"to"}),") can be an ENS name or an address."]}),`
`,e.jsx(a,{}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--trace"}),e.jsx(s.br,{}),`
`,"    Prints traces for the transaction."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--debug"}),e.jsx(s.br,{}),`
`,"    Opens an interactive debugger with the transaction. Needs ",e.jsx(s.code,{children:"--trace"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--labels <address:label>"}),e.jsx(s.br,{}),`
`,"    Labels to apply to the traces, with the format ",e.jsx(s.code,{children:"address:label"}),". Needs ",e.jsx(s.code,{children:"--trace"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--evm-version"}),e.jsx(s.br,{}),`
`,"    The EVM version to use. Needs ",e.jsx(s.code,{children:"--trace"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--data"})," data",e.jsx(s.br,{}),`
`,`    Allows setting the data field directly without providing
sig [args…].`,e.jsx(s.br,{}),`
`,"    Data needs to be in hexadecimal format."]}),`
`,e.jsxs(s.h4,{id:"query-options",children:["Query Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#query-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"-B"})," ",e.jsx(s.em,{children:"block"}),e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"--block"})," ",e.jsx(s.em,{children:"block"}),e.jsx(s.br,{}),`
`,"    The block height you want to query at."]}),`
`,e.jsxs(s.p,{children:["    Can be a block number, or any of the tags: ",e.jsx(s.code,{children:"earliest"}),", ",e.jsx(s.code,{children:"finalized"}),", ",e.jsx(s.code,{children:"safe"}),", ",e.jsx(s.code,{children:"latest"})," or ",e.jsx(s.code,{children:"pending"}),"."]}),`
`,e.jsx(d,{}),`
`,e.jsx(c,{}),`
`,e.jsx(l,{}),`
`,e.jsx(t,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Call ",e.jsx(s.code,{children:"balanceOf(address)"})," on the WETH contract:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "balanceOf(address)(uint256)"'}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0x..."})]})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Call ",e.jsx(s.code,{children:"tokenURI(uint256)(string)"})," on the Tubby Cats NFT contract:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" CONTRACT"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"export"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" TOKEN_ID"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"19938"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $CONTRACT "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"tokenURI(uint256)(string)"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $TOKEN_ID"})]})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Call ",e.jsx(s.code,{children:"getAmountsOut(uint,address[])"})," on the Uniswap v2 router contract:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" call"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "getAmountsOut(uint,address[])"'}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "[0x6b...0f,0xc0...c2]"'})]})]})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-send",children:"cast send"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-publish",children:"cast publish"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-receipt",children:"cast receipt"})]})]})}function g(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{g as default,y as frontmatter};
