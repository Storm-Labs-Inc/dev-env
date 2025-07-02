import{j as e}from"./index-D5UbER3f.js";import{u as i}from"./index-CZxYc6i7.js";const h={description:"Security best practices for smart contract development including taint analysis and comprehensive testing strategies."};function s(n){const t={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.h2,{id:"security-practices",children:["Security Practices",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security-practices",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["Thanks to ",e.jsx(t.a,{href:"https://twitter.com/samczsun",children:"@samsczun"}),"'s ",e.jsx(t.a,{href:"https://www.youtube.com/watch?v=Wm3t8Fuiy1E",children:"How Do You Even Write Secure Code Anyways"})," talk for the tips in this section and the following section."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Don't optimize for coverage, optimize for well thought-out tests."}),`
`,e.jsxs(t.li,{children:["Write positive and negative unit tests.",`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["Write ",e.jsx(t.em,{children:"positive"})," unit tests for things that the code should handle. Validate ",e.jsx(t.em,{children:"all"})," state that changes from these tests."]}),`
`,e.jsxs(t.li,{children:["Write ",e.jsx(t.em,{children:"negative"})," unit tests for things that the code should ",e.jsx(t.em,{children:"not"})," handle. It's helpful to follow up (as an adjacent test) with the positive test and make the change that it needs to pass."]}),`
`,e.jsx(t.li,{children:"Each code path should have its own unit test."}),`
`]}),`
`]}),`
`,e.jsx(t.li,{children:"Write integration tests to test entire features."}),`
`,e.jsx(t.li,{children:"Write fork tests to verify the correct behavior with existing deployed contract."}),`
`]}),`
`,e.jsxs(t.h3,{id:"taint-analysis",children:["Taint Analysis",e.jsx(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#taint-analysis",children:e.jsx(t.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(t.p,{children:["When testing, you should prioritize functions that an attacker can affect, that means functions that accept some kind of user input. These are called ",e.jsx(t.em,{children:"sources"}),"."]}),`
`,e.jsxs(t.p,{children:["Consider that input data as ",e.jsx(t.em,{children:"tainted"})," until it has been checked by the code, at which point it's considered ",e.jsx(t.em,{children:"clean"}),"."]}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.em,{children:"sink"})," is a part of the code where some important operation is happening. For example, in MakerDAO that would be ",e.jsx(t.code,{children:"vat.sol"}),"."]}),`
`,e.jsxs(t.p,{children:["You should ",e.jsx(t.em,{children:"ensure"})," that no ",e.jsx(t.em,{children:"tainted"})," data ever reaches a ",e.jsx(t.em,{children:"sink"}),". That means that all data that find themselves in the sink, should, at some point, have been checked by you. So, you need to define what the data ",e.jsx(t.em,{children:"should"})," be and then make sure your checks ",e.jsx(t.em,{children:"ensure"})," that the data will be how you expect it to be."]}),`
`,e.jsx(t.p,{children:"Write more secure code and better tests using these as references to learn from:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/transmissions11/solcurity",children:"transmissions11/solcurity"})}),`
`,e.jsx(t.li,{children:e.jsx(t.a,{href:"https://github.com/nascentxyz/simple-security-toolkit",children:"nascentxyz/simple-security-toolkit"})}),`
`]})]})}function o(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{o as default,h as frontmatter};
