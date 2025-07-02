import{j as e}from"./index-D5UbER3f.js";import{u as r}from"./index-CZxYc6i7.js";const l=void 0;function s(n){const i={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"linter-configuration",children:["Linter Configuration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#linter-configuration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Configuration related to the behavior of the linter. These keys are set in the ",e.jsx(i.code,{children:"[lint]"})," section."]}),`
`,e.jsxs(i.h5,{id:"severity",children:[e.jsx(i.code,{children:"severity"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#severity",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings"}),`
`,e.jsxs(i.li,{children:["Default: all severities enabled (",e.jsx(i.code,{children:"high"}),", ",e.jsx(i.code,{children:"med"}),", ",e.jsx(i.code,{children:"low"}),", ",e.jsx(i.code,{children:"info"}),", ",e.jsx(i.code,{children:"gas"}),")"]}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_LINT_SEVERITY"})]}),`
`]}),`
`,e.jsx(i.p,{children:"Specifies which lints to run based on severity. If omitted, all severities are checked."}),`
`,e.jsxs(i.h5,{id:"exclude_lints",children:[e.jsx(i.code,{children:"exclude_lints"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#exclude_lints",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings"}),`
`,e.jsxs(i.li,{children:["Default: ",e.jsx(i.code,{children:"[]"})]}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_LINT_EXCLUDE_LINTS"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["List of lint IDs to exclude from checking (e.g., ",e.jsx(i.code,{children:'"mixed-case-function"'}),")."]}),`
`,e.jsxs(i.h5,{id:"ignore",children:[e.jsx(i.code,{children:"ignore"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ignore",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings (patterns)"}),`
`,e.jsxs(i.li,{children:["Default: ",e.jsx(i.code,{children:"[]"})]}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_LINT_IGNORE"})]}),`
`]}),`
`,e.jsx(i.p,{children:"List of files or patterns to ignore when running the linter. This is a comma-separated list of glob patterns."}),`
`,e.jsxs(i.h2,{id:"inline-configuration",children:["Inline Configuration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#inline-configuration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:`The linter also offers the ability to disable lints for specific sections of code using inline comment directives.
This is useful when you need to suppress false positives or have valid reasons for code that would otherwise trigger a lint warning.`}),`
`,e.jsx(i.p,{children:"To disable lints using inline config, your comment must follow this format:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"/// forge-lint: <"}),e.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"directive"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">(<"}),e.jsx(i.span,{style:{color:"#22863A","--shiki-dark":"#8DDB8C"},children:"lint-ids"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:">)"})]})})})}),`
`,e.jsx(i.p,{children:"Where:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<directive>"})," is one of the directives from the table below"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<lint-ids>"})," is a comma-separated list of lint identifiers, or ",e.jsx(i.code,{children:"all"})," to disable all lints"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"supported-inline-directives",children:["Supported Inline Directives",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported-inline-directives",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.table,{children:[e.jsx(i.thead,{children:e.jsxs(i.tr,{children:[e.jsx(i.th,{children:"Directive"}),e.jsx(i.th,{children:"Description"}),e.jsx(i.th,{children:"Scope"})]})}),e.jsxs(i.tbody,{children:[e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"disable-next-item"})}),e.jsx(i.td,{children:"Disables lints for the next code item (contract, function, variable, struct, etc.)"}),e.jsx(i.td,{children:"Next item regardless of line count"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"disable-line"})}),e.jsx(i.td,{children:"Disables lints for the current line"}),e.jsx(i.td,{children:"Current line only"})]}),e.jsxs(i.tr,{children:[e.jsx(i.td,{children:e.jsx(i.code,{children:"disable-next-line"})}),e.jsx(i.td,{children:"Disables lints for the next line"}),e.jsx(i.td,{children:"Next line only"})]}),e.jsxs(i.tr,{children:[e.jsxs(i.td,{children:[e.jsx(i.code,{children:"disable-start"})," / ",e.jsx(i.code,{children:"disable-end"})]}),e.jsx(i.td,{children:"Disables lints for all code between the start and end comments"}),e.jsx(i.td,{children:"Block of code between directives"})]})]})]}),`
`,e.jsxs(i.h3,{id:"best-practices",children:["Best Practices",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#best-practices",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Be Specific"}),": Always specify which lint(s) you're disabling rather than using ",e.jsx(i.code,{children:"all"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Add Comments"}),": Explain why you're disabling the lint to help future maintainers."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Minimize Scope"}),": Use the most targeted directive possible (e.g., ",e.jsx(i.code,{children:"disable-line"})," instead of ",e.jsx(i.code,{children:"disable-start/end"}),")."]}),`
`]})]})}function c(n={}){const{wrapper:i}={...r(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{c as default,l as frontmatter};
