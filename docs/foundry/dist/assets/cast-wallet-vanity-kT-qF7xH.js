import{j as e}from"./index-D5UbER3f.js";import r from"./common-options-OsAHhg-o.js";import{u as a}from"./index-CZxYc6i7.js";const h=void 0;function n(i){const s={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-wallet-vanity",children:["cast wallet vanity",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-wallet-vanity",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-wallet-vanity - Generate a vanity address."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast wallet vanity"})," [",e.jsx(s.em,{children:"options"}),"]"]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Generate a vanity address."}),`
`,e.jsxs(s.p,{children:["If ",e.jsx(s.code,{children:"--nonce"})," is specified, then the command will try to generate a vanity contract address. The ",e.jsx(s.code,{children:"--save-path"})," option allows specifying a custom file path to save the generated wallet details."]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"keystore-options",children:["Keystore Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#keystore-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--starts-with"})," ",e.jsx(s.em,{children:"hex"}),e.jsx(s.br,{}),`
`,"    Prefix for the vanity address."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--ends-with"})," ",e.jsx(s.em,{children:"hex"}),e.jsx(s.br,{}),`
`,"    Suffix for the vanity address."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--nonce"})," ",e.jsx(s.em,{children:"nonce"}),e.jsx(s.br,{}),`
`,"    Generate a vanity contract address created by the generated keypair with the specified nonce."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--save-path"})," ",e.jsx(s.em,{children:"path"}),e.jsx(s.br,{}),`
`,"    Path to save the generated vanity wallet. If provided, the wallet details will be saved in a JSON file at this location."]}),`
`,e.jsx(r,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Create a new keypair that starts with ",e.jsx(s.code,{children:"dead"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" vanity"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --starts-with"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dead"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Create a new keypair ends with ",e.jsx(s.code,{children:"beef"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" vanity"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --ends-with"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" beef"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Create a new keypair that starts with ",e.jsx(s.code,{children:"dead"})," and save the details to a specific path:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" vanity"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --starts-with"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" dead"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --save-path"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" /path/to/save"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-wallet",children:"cast wallet"})]})]})}function c(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{c as default,h as frontmatter};
