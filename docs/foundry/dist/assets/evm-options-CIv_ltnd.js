import{j as e}from"./index-D5UbER3f.js";import{u as c}from"./index-CZxYc6i7.js";const o=void 0;function r(s){const n={a:"a",br:"br",code:"code",div:"div",em:"em",h4:"h4",p:"p",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h4,{id:"evm-options",children:["EVM Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evm-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-f"})," ",e.jsx(n.em,{children:"url"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--rpc-url"})," ",e.jsx(n.em,{children:"url"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--fork-url"})," ",e.jsx(n.em,{children:"url"}),e.jsx(n.br,{}),`
`,"    Fetch state over a remote endpoint instead of starting from an empty state."]}),`
`,e.jsxs(n.p,{children:["    In most cases, ",e.jsx(n.code,{children:"--rpc-url"})," is preferred for specifying network connections, including custom chains."]}),`
`,e.jsxs(n.p,{children:[`    If you want to fetch state from a specific block number, see
`,e.jsx(n.code,{children:"--fork-block-number"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--fork-block-number"})," ",e.jsx(n.em,{children:"block"}),e.jsx(n.br,{}),`
`,"    Fetch state from a specific block number over a remote endpoint. See ",e.jsx(n.code,{children:"--fork-url"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--fork-retry-backoff <BACKOFF>"}),e.jsx(n.br,{}),`
`,"     Initial retry backoff on encountering errors."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-storage-caching"}),e.jsx(n.br,{}),`
`,"    Explicitly disables the use of RPC caching."]}),`
`,e.jsxs(n.p,{children:["    All storage slots are read entirely from the endpoint. See ",e.jsx(n.code,{children:"--fork-url"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-v"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--verbosity"}),e.jsx(n.br,{}),`
`,"    Verbosity of the EVM."]}),`
`,e.jsxs(n.p,{children:["    Pass multiple times to increase the verbosity (e.g. ",e.jsx(n.code,{children:"-v"}),", ",e.jsx(n.code,{children:"-vv"}),", ",e.jsx(n.code,{children:"-vvv"}),")."]}),`
`,e.jsxs(n.p,{children:["    Verbosity levels:",e.jsx(n.br,{}),`
`,"    - 2: Print logs for all tests",e.jsx(n.br,{}),`
`,"    - 3: Print execution traces for failing tests",e.jsx(n.br,{}),`
`,"    - 4: Print execution traces for all tests, and setup traces for failing tests",e.jsx(n.br,{}),`
`,"    - 5: Print execution and setup traces for all tests"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--sender"})," ",e.jsx(n.em,{children:"address"}),e.jsx(n.br,{}),`
`,"    The address which will be executing tests"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--initial-balance"})," ",e.jsx(n.em,{children:"balance"}),e.jsx(n.br,{}),`
`,"    The initial balance of deployed contracts"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--ffi"}),e.jsx(n.br,{}),`
`,"    Enables the ",e.jsx(n.a,{href:"../../cheatcodes/ffi.md",children:"FFI cheatcode"})]})]})}function d(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{d as default,o as frontmatter};
