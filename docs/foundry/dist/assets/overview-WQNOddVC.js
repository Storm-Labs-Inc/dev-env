import{j as s}from"./index-D5UbER3f.js";import{u as o}from"./index-CZxYc6i7.js";const i={description:"Track and optimize gas consumption with reports, function snapshots, and section snapshots for performance analysis."};function e(t){const n={a:"a",br:"br",code:"code",div:"div",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return s.jsxs(s.Fragment,{children:[s.jsxs(n.h2,{id:"gas-tracking",children:["Gas Tracking",s.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-tracking",children:s.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n.p,{children:"Forge can help you estimate how much gas your contract will consume."}),`
`,s.jsx(n.p,{children:"Currently, Forge ships with three different tools for this job:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.a,{href:"/forge/gas-tracking/gas-reports",children:s.jsx(n.strong,{children:"Gas reports"})}),`: Gas reports give you an overview of how much Forge thinks the
individual functions in your contracts will consume in gas.`]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.a,{href:"/forge/gas-tracking/gas-function-snapshots",children:s.jsx(n.strong,{children:"Gas function snapshots"})}),`: Gas function snapshots give you an overview of how much
each test function consumes in gas.`]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.a,{href:"/forge/gas-tracking/gas-section-snapshots",children:s.jsx(n.strong,{children:"Gas section snapshots"})}),`: Gas section snapshots give you the ability to capture gas usage over arbitrary sections inside of test functions.
This also tracks internal gas usage. You can access this by using the `,s.jsx(n.code,{children:"snapshotGas*"})," cheatcodes inside your tests."]}),`
`]}),`
`,s.jsx(n.p,{children:"Gas reports, gas function snapshots and gas section snapshots differ in some ways:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["Gas reports use tracing to figure out gas costs for individual contract calls.",s.jsx(n.br,{}),`
`,"This gives more granular insight, at the cost of speed."]}),`
`,s.jsx(n.li,{children:`Gas function snapshots have more built-in tools, such as diffs and exporting the results to a file.
Snapshots are not as granular as gas reports, but they are faster to generate.`}),`
`,s.jsxs(n.li,{children:["Gas section snapshots provides the most granular way to capture gas usage. Every captured gas snapshot is written to a file in a ",s.jsx(n.code,{children:"snapshots"}),` directory.
By default these snapshots are grouped by the contract name of the test.`]}),`
`]})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?s.jsx(n,{...t,children:s.jsx(e,{...t})}):e(t)}export{c as default,i as frontmatter};
