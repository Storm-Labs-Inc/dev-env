import{j as e}from"./index-D5UbER3f.js";import d from"./common-options-OsAHhg-o.js";import{u as r}from"./index-CZxYc6i7.js";const h=void 0;function n(i){const s={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-create2",children:["cast create2",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-create2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-create2 - Generate a deterministic contract address using CREATE2"}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast create2"})," [",e.jsx(s.em,{children:"options"}),"]"]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Generate a deterministic contract address using CREATE2"}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--starts-with"})," ",e.jsx(s.em,{children:"hex"}),`
    Prefix for the contract address.`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--ends-with"})," ",e.jsx(s.em,{children:"hex"}),`
    Suffix for the contract address`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--matching"})," ",e.jsx(s.em,{children:"hex"}),`
    Sequence that the address has to match`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--case-sensitive"}),`
    Case sensitive matching`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--deployer"})," ",e.jsx(s.em,{children:"address"}),`
    Address of the contract deployer [default: `,e.jsx(s.code,{children:"0x4e59b44847b379578588920ca78fbf26c0b4956c"}),"]"]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--init-code"})," ",e.jsx(s.em,{children:"hex"}),`
    Init code of the contract to be deployed`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--init-code-hash"})," ",e.jsx(s.em,{children:"hash"}),`
    Init code hash of the contract to be deployed`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--jobs"})," ",e.jsx(s.em,{children:"jobs"}),`
    Number of threads to use. Defaults to and caps at the number of logical cores`]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--caller"})," ",e.jsx(s.em,{children:"address"}),`
    Address of the caller. Used for the first 20 bytes of the salt`]}),`
`,e.jsx(d,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["Generate a contract address that starts with ",e.jsx(s.code,{children:"dead"}),":",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create2"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --starts-with"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dead"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:["Generate a contract address that ends with ",e.jsx(s.code,{children:"beef"}),":",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create2"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --ends-with"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" beef"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:["A more complex example:",`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" create2"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --starts-with"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dead"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --case-sensitive"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --deployer"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x0000000000FFe8B47B3e2130213B802212439497"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --init-code-hash"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x0c591f26891d6443cf08c5be3584c1e6ae10a4c2f07c5c53218741e9755fb9cd"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-compute-address",children:"cast compute-address"})]})]})}function l(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{l as default,h as frontmatter};
