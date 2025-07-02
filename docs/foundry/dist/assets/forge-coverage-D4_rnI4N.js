import{j as e}from"./index-D5UbER3f.js";import o from"./common-options-GfkPOrEd.js";import{u as s}from"./index-CZxYc6i7.js";const a=void 0;function n(r){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"forge-coverage",children:["forge coverage",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-coverage",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"name",children:["NAME",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"forge-coverage - Displays which parts of your code are covered by tests."}),`
`,e.jsxs(i.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"forge coverage"})," [",e.jsx(i.em,{children:"options"}),"]"]}),`
`,e.jsxs(i.h3,{id:"description",children:["DESCRIPTION",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Displays which parts of your code are covered by tests."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Warning"})," ⚠️"]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"derive function end line"})," feature introduced in ",e.jsx(i.code,{children:"lcov"})," 2.0 version (and enabled by default) is not supported, therefore ",e.jsx(i.code,{children:"lcov"})," and ",e.jsx(i.code,{children:"genhtml"})," should be run with ",e.jsx(i.code,{children:"--rc derive_function_end_line=0"})," option in order to generate coverage report."]}),`
`]}),`
`,e.jsxs(i.h3,{id:"options",children:["Options",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"report-options",children:["Report Options",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#report-options",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"--report"})," allows you to specify the report type to use for coverage. This flag can be used multiple times."]}),`
`,e.jsxs(i.p,{children:["It has three different options and is set to ",e.jsx(i.code,{children:"summary"})," by default."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"summary"}),e.jsx(i.br,{}),`
`,"    Outputs a chart showing what percentage of your code is covered by tests."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"lcov"}),e.jsx(i.br,{}),`
`,"    Creates a lcov.info file containing your coverage data in the root of your project's directory."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"debug"}),e.jsx(i.br,{}),`
`,"    Outputs lines describing the location of uncovered code."]}),`
`,e.jsx(o,{}),`
`,e.jsxs(i.h4,{id:"optimization-option",children:["Optimization Option",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimization-option",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"--ir-minimum"})," allows you to run the coverage with ",e.jsx(i.code,{children:"via-ir"})," enabled for the ",e.jsx(i.a,{href:"https://github.com/ethereum/solidity/issues/12533#issuecomment-1013073350",children:'"minimum amount of optimization"'})," necessary."]}),`
`,e.jsxs(i.h4,{id:"contract-exclusion",children:["Contract Exclusion",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract-exclusion",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:'--no-match-coverage "(script|Foo|Bar)"'})," allows you to exclude paths and contracts from the coverage report."]}),`
`,e.jsxs(i.h3,{id:"examples",children:["EXAMPLES",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"View summarized coverage:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" coverage"})]})})})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Create lcov file with coverage data:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" coverage"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --report"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" lcov"})]})})})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:"Output uncovered code locations:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" coverage"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --report"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" debug"})]})})})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Coverage report without including ",e.jsx(i.code,{children:"script"})," directory:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" coverage"}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --no-match-coverage"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"see-also",children:["SEE ALSO",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.a,{href:"/forge/reference/overview",children:"forge"}),", ",e.jsx(i.a,{href:"/forge/reference/forge-test",children:"forge test"})]})]})}function l(r={}){const{wrapper:i}={...s(),...r.components};return i?e.jsx(i,{...r,children:e.jsx(n,{...r})}):n(r)}export{l as default,a as frontmatter};
