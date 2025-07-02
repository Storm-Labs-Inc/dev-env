import{j as e}from"./index-D5UbER3f.js";import d from"./common-options-GfkPOrEd.js";import{u as s}from"./index-CZxYc6i7.js";const a=void 0;function r(i){const n={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"forge-doc",children:["forge doc",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-doc",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"forge-doc - Generate documentation for Solidity source files."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forge doc"})," [",e.jsx(n.em,{children:"options"}),"]"]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Generates and builds an mdbook from Solidity source files."}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--root"})," ",e.jsx(n.em,{children:"path"}),e.jsx(n.br,{}),`
`,"    The project's root path. By default, this is the root directory of the current git repository, or the current working directory."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--out"})," ",e.jsx(n.em,{children:"path"}),`
    The output path for the generated mdbook. By default, it is the `,e.jsx(n.code,{children:"docs/"})," in project root."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--build"}),`
    Build the `,e.jsx(n.code,{children:"mdbook"})," from generated files."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--serve"}),`
    Serve the documentation locally.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--hostname"})," ",e.jsx(n.em,{children:"hostname"}),`
    Hostname for serving documentation. Requires `,e.jsx(n.code,{children:"--serve"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--port"})," ",e.jsx(n.em,{children:"port"}),`
    Port for serving documentation. Requires `,e.jsx(n.code,{children:"--serve"}),"."]}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.h3,{id:"examples",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Generate documentation.",`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" doc"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:["Generate and build documentation with specified output directory.",`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" doc"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --build"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --out"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ./documentation"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:["Generate and serve documentation locally on port 4000.",`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" doc"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --serve"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --port"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 4000"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"see-also",children:["SEE ALSO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/config/reference/doc-generator",children:"Doc config"})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/forge/reference/overview",children:"forge"})})]})}function l(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{l as default,a as frontmatter};
