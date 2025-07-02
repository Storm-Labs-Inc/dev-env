import{j as e}from"./index-D5UbER3f.js";import a from"./common-options-OsAHhg-o.js";import{u as r}from"./index-CZxYc6i7.js";const o=void 0;function i(n){const s={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-wallet-new",children:["cast wallet new",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-wallet-new",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-wallet-new - Create a new random keypair."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast wallet new"})," [",e.jsx(s.em,{children:"options"}),"] [",e.jsx(s.em,{children:"path"}),"]"]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Create a new random keypair."}),`
`,e.jsxs(s.p,{children:["If ",e.jsx(s.em,{children:"path"}),` is specified, then the new keypair will be written to a JSON keystore encrypted with a password.
(`,e.jsx(s.em,{children:"path"})," should be an existing directory.)"]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"keystore-options",children:["Keystore Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#keystore-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"-p"}),e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"--password"}),e.jsx(s.br,{}),`
`,"    Triggers a hidden password prompt for the JSON keystore.",e.jsx(s.br,{}),`
`,"    ",e.jsx(s.strong,{children:"Deprecated: prompting for a hidden password is now the default."})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--unsafe-password"})," ",e.jsx(s.em,{children:"password"}),e.jsx(s.br,{}),`
`,"    Password for the JSON keystore in cleartext."]}),`
`,e.jsxs(s.p,{children:["    This is ",e.jsx(s.strong,{children:"unsafe"})," to use and we recommend using ",e.jsx(s.code,{children:"--password"})," instead.",e.jsx(s.br,{}),`
`,"    Environment: ",e.jsx(s.code,{children:"CAST_PASSWORD"})]}),`
`,e.jsx(a,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Create a new keypair without saving it to a keystore:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" new"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Create a new keypair and save it in the ",e.jsx(s.code,{children:"keystore"})," directory:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" new"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" keystore"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-wallet",children:"cast wallet"})]})]})}function h(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{h as default,o as frontmatter};
