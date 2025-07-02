import{j as e}from"./index-D5UbER3f.js";import t from"./verifier-options-CpvTEhIE.js";import o from"./transaction-options-DcX8sy4C.js";import c from"./wallet-options-Il0ZuM8R.js";import a from"./rpc-options-D0SEoQy0.js";import d from"./etherscan-options-CLooEQsH.js";import l from"./core-build-options-Dgi0sYgk.js";import h from"./display-options-CoE2BSKN.js";import x from"./common-options-GfkPOrEd.js";import{u as i}from"./index-CZxYc6i7.js";import"./tx-value-option-CLXgq6c9.js";import"./wallet-options-raw-DUA3oCjg.js";import"./wallet-options-keystore-DuC5PFVS.js";import"./wallet-options-hardware-CzqFrXbI.js";import"./wallet-options-remote-D7IykmrK.js";import"./rpc-url-option-Bdlv6sNx.js";import"./compiler-options-BCpvSNbq.js";import"./project-options-BKric660.js";const S=void 0;function s(n){const r={a:"a",blockquote:"blockquote",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(r.h2,{id:"forge-create",children:["forge create",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-create",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.h3,{id:"name",children:["NAME",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"forge-create - Deploy a smart contract."}),`
`,e.jsxs(r.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"forge create"})," ",e.jsx(r.em,{children:"contract"})," [",e.jsx(r.em,{children:"options"}),"]"]}),`
`,e.jsxs(r.h3,{id:"description",children:["DESCRIPTION",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(r.p,{children:"Deploy a smart contract."}),`
`,e.jsxs(r.p,{children:["The path to the contract must be specified first, in the format ",e.jsx(r.code,{children:"<path>:<contract>"}),", e.g. ",e.jsx(r.code,{children:"src/Contract.sol:Contract"}),"."]}),`
`,e.jsxs(r.p,{children:["You can specify constructor arguments with ",e.jsx(r.code,{children:"--constructor-args"}),`. Alternatively, you can specify a file
containing space-separated constructor arguments with `,e.jsx(r.code,{children:"--constructor-args-path"}),"."]}),`
`,e.jsxs(r.p,{children:["Dynamic linking is not supported: you should predeploy your libraries and manually specify their addresses (see ",e.jsx(r.code,{children:"--libraries"}),")."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["ℹ️ ",e.jsx(r.strong,{children:"Note"})]}),`
`,e.jsxs(r.p,{children:["The ",e.jsx(r.code,{children:"--constructor-args"})," flag must be positioned last in the command, since it takes multiple values."]}),`
`]}),`
`,e.jsxs(r.h3,{id:"options",children:["OPTIONS",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.h4,{id:"build-options",children:["Build Options",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build-options",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--constructor-args"})," ",e.jsx(r.em,{children:"args..."}),e.jsx(r.br,{}),`
`,"    The constructor arguments."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--constructor-args-path"})," ",e.jsx(r.em,{children:"file"}),e.jsx(r.br,{}),`
`,"    The path to a file containing the constructor arguments."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--verify"}),e.jsx(r.br,{}),`
`,"    Verify contract after creation. Runs ",e.jsx(r.code,{children:"forge verify-contract"})," with the appropriate parameters."]}),`
`,e.jsx(t,{}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"--unlocked"}),e.jsx(r.br,{}),`
`,"    Send via ",e.jsx(r.code,{children:"eth_sendTransaction"})," using the ",e.jsx(r.code,{children:"--from"})," argument or ",e.jsx(r.code,{children:"$ETH_FROM"})," as sender."]}),`
`,e.jsx(o,{}),`
`,e.jsx(c,{}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(l,{}),`
`,e.jsx(h,{}),`
`,e.jsx(x,{}),`
`,e.jsxs(r.h3,{id:"examples",children:["EXAMPLES",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Deploy a contract with no constructor arguments:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(r.code,{children:e.jsxs(r.span,{className:"line",children:[e.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create"}),e.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" src/Contract.sol:ContractWithNoConstructor"})]})})})}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx(r.p,{children:"Deploy a contract with two constructor arguments:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(r.code,{children:e.jsxs(r.span,{className:"line",children:[e.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create"}),e.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" src/Contract.sol:MyToken"}),e.jsx(r.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --constructor-args"}),e.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "My Token"'}),e.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "MT"'})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(r.h3,{id:"see-also",children:["SEE ALSO",e.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"/forge/reference/overview",children:"forge"}),", ",e.jsx(r.a,{href:"/forge/reference/forge-build",children:"forge build"}),", ",e.jsx(r.a,{href:"/forge/reference/forge-verify-contract",children:"forge verify-contract"})]})]})}function $(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{$ as default,S as frontmatter};
