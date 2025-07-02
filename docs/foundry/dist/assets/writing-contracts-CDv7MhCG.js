import{j as e}from"./index-D5UbER3f.js";import{u as t}from"./index-CZxYc6i7.js";const a={description:"Best practices for writing clean, secure, and maintainable smart contracts with proper imports and formatting."};function r(n){const i={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"general-contract-guidance",children:["General Contract Guidance",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general-contract-guidance",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h3,{id:"named-imports",children:["Named Imports",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#named-imports",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Always use named import syntax, don't import full files. This restricts what is being imported to just the named items, not everything in the file. Importing full files can result in solc complaining about duplicate definitions and slither erroring, especially as repos grow and have more dependencies with overlapping names."}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Good: ",e.jsx(i.code,{children:'import {MyContract} from "src/MyContract.sol"'})," to only import ",e.jsx(i.code,{children:"MyContract"}),"."]}),`
`,e.jsxs(i.li,{children:["Bad: ",e.jsx(i.code,{children:'import "src/MyContract.sol"'})," imports everything in ",e.jsx(i.code,{children:"MyContract.sol"}),". (Importing ",e.jsx(i.code,{children:"forge-std/Test"})," or ",e.jsx(i.code,{children:"Script"})," can be an exception here, so you get the console library, etc)."]}),`
`]}),`
`,e.jsxs(i.h3,{id:"absolute-vs-relative-imports",children:["Absolute vs Relative Imports",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#absolute-vs-relative-imports",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Note the tradeoffs between absolute and relative paths for imports (where absolute paths are relative to the repo root, e.g. ",e.jsx(i.code,{children:'"src/interfaces/IERC20.sol"'}),"), and choose the best approach for your project:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Absolute paths make it easier to see where files are from and reduce churn when moving files around."}),`
`,e.jsx(i.li,{children:"Relative paths make it more likely your editor can provide features like linting and autocomplete, since editors/extensions may not understand your remappings."}),`
`]}),`
`,e.jsxs(i.h3,{id:"copying-libraries-from-dependencies",children:["Copying Libraries from Dependencies",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#copying-libraries-from-dependencies",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["If copying a library from a dependency (instead of importing it), use the ",e.jsx(i.code,{children:"ignore = []"})," option in the config file to avoid formatting that file. This makes diffing it against the original simpler for reviewers and auditors."]}),`
`,e.jsxs(i.h3,{id:"formatting",children:["Formatting",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#formatting",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Similarly, feel free to use the ",e.jsx(i.code,{children:"// forgefmt: disable-*"})," comment directives to ignore lines/sections of code that look better with manual formatting. Supported values for ",e.jsx(i.code,{children:"*"})," are:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"disable-line"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"disable-next-line"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"disable-next-item"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"disable-start"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"disable-end"})}),`
`]}),`
`,e.jsxs(i.h3,{id:"write-secure-code",children:["Write Secure Code",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#write-secure-code",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Additional best practices from ",e.jsx(i.a,{href:"https://twitter.com/samczsun",children:"samsczun"}),"'s ",e.jsx(i.a,{href:"https://www.youtube.com/watch?v=Wm3t8Fuiy1E",children:"How Do You Even Write Secure Code Anyways"})," talk:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Use descriptive variable names."}),`
`,e.jsx(i.li,{children:"Limit the number of active variables."}),`
`,e.jsx(i.li,{children:"No redundant logic."}),`
`,e.jsx(i.li,{children:"Early exit as much as possible to reduce mental load when seeing the code."}),`
`,e.jsx(i.li,{children:"Related code should be placed near each other."}),`
`,e.jsx(i.li,{children:"Delete unused code."}),`
`]})]})}function d(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{d as default,a as frontmatter};
