import{j as e}from"./index-D5UbER3f.js";import{u as r}from"./index-CZxYc6i7.js";const d=void 0;function s(n){const t={a:"a",br:"br",code:"code",div:"div",em:"em",h4:"h4",p:"p",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h4,{id:"test-options",children:["Test Options",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-options",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"-m"})," ",e.jsx(t.em,{children:"regex"}),e.jsx(t.br,{}),`
`,e.jsx(t.code,{children:"--match"})," ",e.jsx(t.em,{children:"regex"}),e.jsx(t.br,{}),`
`,"    Only run test functions matching the specified regex pattern.",e.jsx(t.br,{}),`
`,"    ",e.jsxs(t.strong,{children:["Deprecated: See ",e.jsx(t.code,{children:"--match-test"}),"."]})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--match-test"})," ",e.jsx(t.em,{children:"regex"}),e.jsx(t.br,{}),`
`,"    Only run test functions matching the specified regex pattern."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--no-match-test"})," ",e.jsx(t.em,{children:"regex"}),e.jsx(t.br,{}),`
`,"    Only run test functions that do not match the specified regex pattern."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--match-contract"})," ",e.jsx(t.em,{children:"regex"}),e.jsx(t.br,{}),`
`,"    Only run tests in contracts matching the specified regex pattern."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--no-match-contract"})," ",e.jsx(t.em,{children:"regex"}),e.jsx(t.br,{}),`
`,"    Only run tests in contracts that do not match the specified regex pattern."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--match-path"})," ",e.jsx(t.em,{children:"glob"}),e.jsx(t.br,{}),`
`,"    Only run tests in source files matching the specified glob pattern."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--no-match-path"})," ",e.jsx(t.em,{children:"glob"}),e.jsx(t.br,{}),`
`,"    Only run tests in source files that do not match the specified glob pattern."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--debug"})," ",e.jsx(t.em,{children:"regex"}),e.jsx(t.br,{}),`
`,"    Run a test in the debugger."]}),`
`,e.jsxs(t.p,{children:["    The argument passed to this flag is the name of the test function you want to run, and it works the same as ",e.jsx(t.code,{children:"--match-test"}),"."]}),`
`,e.jsxs(t.p,{children:["    If more than one test matches your specified criteria, you must add additional filters until only one test is found (see ",e.jsx(t.code,{children:"--match-contract"})," and ",e.jsx(t.code,{children:"--match-path"}),")."]}),`
`,e.jsx(t.p,{children:"    The matching test will be opened in the debugger regardless of the outcome of the test."}),`
`,e.jsx(t.p,{children:"    If the matching test is a fuzz test, then it will open the debugger on the first failure case. If the fuzz test does not fail, it will open the debugger on the last fuzz case."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--gas-report"}),e.jsx(t.br,{}),`
`,"    Print a gas report."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--allow-failure"}),e.jsx(t.br,{}),`
`,"    Exit with code 0 even if a test fails."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--fail-fast"}),e.jsx(t.br,{}),`
`,"    Stop running tests after the first failure."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"--etherscan-api-key"})," ",e.jsx(t.em,{children:"key"}),e.jsx(t.br,{}),`
`,"    Etherscan API key. If set, traces are decoded using Etherscan if ",e.jsx(t.code,{children:"--fork-url"})," is also set.",e.jsx(t.br,{}),`
`,"    Environment: ",e.jsx(t.code,{children:"ETHERSCAN_API_KEY"})]})]})}function h(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default,d as frontmatter};
