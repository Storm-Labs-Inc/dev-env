import{j as e}from"./index-D5UbER3f.js";import t from"./wallet-options-raw-DUA3oCjg.js";import a from"./common-options-OsAHhg-o.js";import{u as r}from"./index-CZxYc6i7.js";const h=void 0;function n(i){const s={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cast-wallet-import",children:["cast wallet import",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cast-wallet-import",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"cast-wallet-import - Import a private key into an encrypted keystore"}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"cast wallet import"})," [",e.jsx(s.em,{children:"options"}),"] ",e.jsx(s.em,{children:"account_name"})]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Import a private key into an encrypted keystore."}),`
`,e.jsxs(s.p,{children:["If no ",e.jsx(s.em,{children:"keystore-dir"})," is specified, it will be saved in the default ",e.jsx(s.code,{children:"~/.foundry/keystores"}),", so it can be accessed through the ",e.jsx(s.code,{children:"--account"})," option in methods like ",e.jsx(s.code,{children:"forge script"}),", ",e.jsx(s.code,{children:"cast send"})," or any other that requires a private key."]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"directory-options",children:["Directory Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#directory-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"-k"}),e.jsx(s.br,{}),`
`,e.jsx(s.code,{children:"--keystore-dir"})]}),`
`,e.jsxs(s.p,{children:["    The path to store the encrypted keystore.",e.jsx(s.br,{}),`
`,"    Defaults to ",e.jsx(s.code,{children:"~/.foundry/keystores"}),"."]}),`
`,e.jsx(t,{}),`
`,e.jsx(a,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Create a keystore from a private key:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" import"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" BOB"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --interactive"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Create a keystore from a mnemonic:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" import"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ALICE"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --mnemonic"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "test test test test test test test test test test test test"'})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Create a keystore from a mnemonic with a specific mnemonic index:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" import"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ALICE"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --mnemonic"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "test test test test test test test test test test test test"'}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --mnemonic-index"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/cast/reference/overview",children:"cast"}),", ",e.jsx(s.a,{href:"/cast/reference/cast-wallet",children:"cast wallet"})]})]})}function x(i={}){const{wrapper:s}={...r(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(n,{...i})}):n(i)}export{x as default,h as frontmatter};
