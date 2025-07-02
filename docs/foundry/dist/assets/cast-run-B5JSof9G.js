import{j as e}from"./index-D5UbER3f.js";import a from"./rpc-url-option-Bdlv6sNx.js";import d from"./common-options-OsAHhg-o.js";import{u as r}from"./index-CZxYc6i7.js";const o=void 0;function i(n){const s={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-run",children:["cast run",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-run",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-run - Runs a published transaction in a local environment and prints the trace."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast run"})," [",e.jsx(s.em,{children:"options"}),"] ",e.jsx(s.code,{children:"--rpc-url"})," ",e.jsx(s.em,{children:"url"})," ",e.jsx(s.em,{children:"tx_hash"})]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Runs a published transaction in a local environment and prints the trace."}),`
`,e.jsxs(s.p,{children:[`By default, all transactions in the block prior to the transaction you want to replay are also replayed.
If you want a quicker result, you can use `,e.jsx(s.code,{children:"--quick"}),", however, results may differ from the live execution."]}),`
`,e.jsxs(s.p,{children:["You can also open the transaction in a debugger by passing ",e.jsx(s.code,{children:"--debug"}),"."]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"run-options",children:["Run Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#run-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--label"})," ",e.jsx(s.em,{children:"label"}),e.jsx(s.br,{}),`
`,"    Labels an address in the trace.",e.jsx(s.br,{}),`
`,"    The format is ",e.jsx(s.code,{children:"<address>:<label>"}),". Can be passed multiple times."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"-q"}),e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"--quick"}),e.jsx(s.br,{}),`
`,"    Executes the transaction only with the state from the previous block.",e.jsx(s.br,{}),`
`,"    May result in different results than the live execution!"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"-v"}),e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"--verbose"}),e.jsx(s.br,{}),`
`,"    Addresses are fully displayed instead of being truncated."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"-d"}),e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"--debug"}),e.jsx(s.br,{}),`
`,"    Open the script in the ",e.jsx(s.a,{href:"/forge/debugger.mdx",children:"debugger"}),"."]}),`
`,e.jsxs(s.h4,{id:"rpc-options",children:["RPC Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Replay a transaction (a simple transfer):"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xd15e0237413d7b824b784e1bbc3926e52f4726e5e5af30418803b8b327b4f8ca"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Replay a transaction, applied on top of the state of the previous block:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --quick"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  0xd15e0237413d7b824b784e1bbc3926e52f4726e5e5af30418803b8b327b4f8ca"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Replay a transaction with address labels:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --label"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xc564ee9f21ed8a2d8e7e76c085740d5e4c5fafbe:sender"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --label"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0x40950267d12e979ad42974be5ac9a7e452f9505e:recipient"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --label"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2:weth"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  0xd15e0237413d7b824b784e1bbc3926e52f4726e5e5af30418803b8b327b4f8ca"})})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Replay a transaction in the debugger:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --debug"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  0xd15e0237413d7b824b784e1bbc3926e52f4726e5e5af30418803b8b327b4f8ca"})})]})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"})})]})}function x(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{x as default,o as frontmatter};
