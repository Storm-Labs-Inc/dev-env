import{j as e}from"./index-D5UbER3f.js";import{u as t}from"./index-CZxYc6i7.js";const s=void 0;function r(i){const n={a:"a",code:"code",div:"div",h2:"h2",h5:"h5",li:"li",p:"p",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"documentation-generator",children:["Documentation Generator",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#documentation-generator",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Configuration related to the behavior of the Forge documentation generator. These keys are set in ",e.jsx(n.code,{children:"[doc]"})," section."]}),`
`,e.jsxs(n.h5,{id:"out",children:[e.jsx(n.code,{children:"out"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#out",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"docs"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_DOC_OUT"})]}),`
`]}),`
`,e.jsx(n.p,{children:"An output path for generated documentation."}),`
`,e.jsxs(n.h5,{id:"title",children:[e.jsx(n.code,{children:"title"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#title",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_DOC_TITLE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Title for the generated documentation."}),`
`,e.jsxs(n.h5,{id:"book",children:[e.jsx(n.code,{children:"book"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#book",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"./book.toml"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_DOC_BOOK"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Path to user provided ",e.jsx(n.code,{children:"book.toml"}),". It will be merged with default settings during doc generation."]}),`
`,e.jsxs(n.h5,{id:"repository",children:[e.jsx(n.code,{children:"repository"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#repository",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_DOC_REPOSITORY"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`The git repository URL. Used to provide links to git source files.
If missing, `,e.jsx(n.code,{children:"forge"})," will attempt to look up the current origin url and use its value."]}),`
`,e.jsxs(n.h5,{id:"ignore",children:[e.jsx(n.code,{children:"ignore"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ignore",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: array of strings (patterns)"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"[]"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_DOC_IGNORE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"List of files to ignore when generating documentation. This is a comma separated list of glob patterns."})]})}function l(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{l as default,s as frontmatter};
