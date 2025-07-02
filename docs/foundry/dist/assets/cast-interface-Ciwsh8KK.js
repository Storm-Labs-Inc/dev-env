import{j as e}from"./index-D5UbER3f.js";import a from"./etherscan-options-CLooEQsH.js";import d from"./common-options-OsAHhg-o.js";import{u as r}from"./index-CZxYc6i7.js";const o=void 0;function i(s){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"cast-interface",children:["cast interface",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-interface",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"cast-interface - Generate a Solidity interface from a given ABI."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"cast interface"})," [",e.jsx(n.em,{children:"options"}),"] ",e.jsx(n.em,{children:"address_or_path"})]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Generates a Solidity interface from a given ABI."}),`
`,e.jsxs(n.p,{children:["The argument (",e.jsx(n.em,{children:"address_or_path"}),") can either be the path to a file containing an ABI, or an address."]}),`
`,e.jsx(n.p,{children:"If an address is provided, then the interface is generated from the ABI of the account, which is fetched from Etherscan."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx(n.strong,{children:"Note"})]}),`
`,e.jsx(n.p,{children:"This command does not currently support ABI encoder v2."}),`
`]}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"interface-options",children:["Interface Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interface-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-n"})," ",e.jsx(n.em,{children:"name"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--name"})," ",e.jsx(n.em,{children:"name"}),e.jsx(n.br,{}),`
`,"    The name to use for the generated interface. The default name is ",e.jsx(n.code,{children:"Interface"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-o"})," ",e.jsx(n.em,{children:"path"}),e.jsx(n.br,{}),`
`,"    The path to the output file. If not specified, the interface will be output to stdout."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-p"})," ",e.jsx(n.em,{children:"version"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--pragma"})," ",e.jsx(n.em,{children:"version"}),e.jsx(n.br,{}),`
`,"    The Solidity pragma version to use in the interface. Default: ",e.jsx(n.code,{children:"^0.8.10"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-j"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--json"}),e.jsx(n.br,{}),`
`,"    Output the contract's JSON ABI."]}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.h3,{id:"examples",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Generate an interface from a file:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" interface"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ./path/to/abi.json"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Generate an interface using Etherscan:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" interface"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -o"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" IWETH.sol"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Generate and name an interface from a file:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" interface"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -n"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" LilENS"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ./path/to/abi.json"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Fetch the JSON ABI of a contract on Etherscan:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" interface"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -o"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" IWETH.sol"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -j"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"see-also",children:["SEE ALSO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(n.a,{href:"/cast/reference/cast-proof",children:"cast proof"})]})]})}function x(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{x as default,o as frontmatter};
