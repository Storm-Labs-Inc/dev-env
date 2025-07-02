import{j as e}from"./index-D5UbER3f.js";import d from"./wallet-options-Il0ZuM8R.js";import a from"./rpc-options-D0SEoQy0.js";import t from"./etherscan-options-CLooEQsH.js";import{u as r}from"./index-CZxYc6i7.js";import"./wallet-options-raw-DUA3oCjg.js";import"./wallet-options-keystore-DuC5PFVS.js";import"./wallet-options-hardware-CzqFrXbI.js";import"./wallet-options-remote-D7IykmrK.js";import"./rpc-url-option-Bdlv6sNx.js";const f=void 0;function n(i){const s={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-logs",children:["cast logs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-logs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast logs - Get logs by signature or topic."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast logs"})," [",e.jsx(s.em,{children:"options"}),"] ",e.jsx(s.em,{children:"sig_or_topic"})," [",e.jsx(s.em,{children:"topics_or_args..."}),"]"]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Get logs by signature or topic."}),`
`,e.jsxs(s.p,{children:["The (",e.jsx(s.em,{children:"sig_or_topic"}),") may either be the event signature or its hashed topic (located at topics[0])."]}),`
`,e.jsx(s.p,{children:"If using a signature, remaining arguments must be in their ordinary form. If using a topic, the arguments must be as they themselves appear as topics."}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"query-options",children:["Query Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#query-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--from-block"})," ",e.jsx(s.em,{children:"from_block"}),`
    The block height to start query at.`]}),`
`,e.jsxs(s.p,{children:["    Can also be the tags: ",e.jsx(s.code,{children:"earliest"}),", ",e.jsx(s.code,{children:"finalized"}),", ",e.jsx(s.code,{children:"safe"}),", ",e.jsx(s.code,{children:"latest"}),", or ",e.jsx(s.code,{children:"pending"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--to-block"})," ",e.jsx(s.em,{children:"to_block"}),`
    The block height to stop query at.`]}),`
`,e.jsxs(s.p,{children:["    Can also be the tags: ",e.jsx(s.code,{children:"earliest"}),", ",e.jsx(s.code,{children:"finalized"}),", ",e.jsx(s.code,{children:"safe"}),", ",e.jsx(s.code,{children:"latest"}),", or ",e.jsx(s.code,{children:"pending"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--address"})," ",e.jsx(s.em,{children:"address"}),`
    The contract address to filter on`]}),`
`,e.jsx(d,{}),`
`,e.jsx(a,{}),`
`,e.jsx(t,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Get logs using a signature:",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" logs"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --from-block"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 15537393"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --to-block"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" latest"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'Transfer (address indexed from, address indexed to, uint256 value)'"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --address"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x2e8ABfE042886E4938201101A63730D04F160A82"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:["Get logs using a topic:",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" logs"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --from-block"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 15537393"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --to-block"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" latest"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --address"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x0000000000000000000000002e8abfe042886e4938201101a63730d04f160a82"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"})})]})}function C(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{C as default,f as frontmatter};
