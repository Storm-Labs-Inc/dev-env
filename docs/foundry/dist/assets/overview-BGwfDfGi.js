import{j as e}from"./index-D5UbER3f.js";import{u as t}from"./index-CZxYc6i7.js";const i=void 0;function n(r){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"cheatcodes-reference",children:["Cheatcodes Reference",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cheatcodes-reference",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Cheatcodes give you powerful assertions, the ability to alter the state of the EVM, mock data, and more."}),`
`,e.jsxs(s.p,{children:["Cheatcodes are made available through use of the cheatcode address (",e.jsx(s.code,{children:"0x7109709ECfa91a80626fF3989D68f67F5b1DD12D"}),")."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["ℹ️ ",e.jsx(s.strong,{children:"Note"})]}),`
`,e.jsx(s.p,{children:`If you encounter errors for this address when using fuzzed addresses in your tests, you may wish to
exclude it from your fuzz tests by using the following line:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"vm."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"assume"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(address_ "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"!="}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x7109709ECfa91a80626fF3989D68f67F5b1DD12D"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})})})}),`
`]}),`
`,e.jsxs(s.p,{children:["You can also access cheatcodes easily via ",e.jsx(s.code,{children:"vm"})," available in Forge Standard Library's ",e.jsx(s.a,{href:"/reference/forge-std/overview",children:e.jsx(s.code,{children:"Test"})})," contract."]}),`
`,e.jsxs(s.h3,{id:"forge-standard-library-cheatcodes",children:["Forge Standard Library Cheatcodes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-standard-library-cheatcodes",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Forge Std implements wrappers around cheatcodes, which combine multiple standard cheatcodes to improve development experience. These are not technically cheatcodes, but rather compositions of Forge's cheatcodes."}),`
`,e.jsxs(s.p,{children:["You can view the list of Forge Standard Library's cheatcode wrappers ",e.jsx(s.a,{href:"/reference/forge-std/std-cheats",children:"in the references section"}),". You can reference the ",e.jsx(s.a,{href:"https://github.com/foundry-rs/forge-std/blob/master/src/Test.sol",children:"Forge Std source code"})," to learn more about how the wrappers work under the hood."]}),`
`,e.jsxs(s.h3,{id:"cheatcode-types",children:["Cheatcode Types",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cheatcode-types",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Below are some subsections for the different Forge cheatcodes."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/environment",children:"Environment"}),": Cheatcodes that alter the state of the EVM."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/assertions",children:"Assertions"}),": Cheatcodes that are powerful assertions"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/fuzzer",children:"Fuzzer"}),": Cheatcodes that configure the fuzzer"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/external",children:"External"}),": Cheatcodes that interact with external state (files, commands, ...)"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/signing",children:"Signing"}),": Cheatcodes for signing"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/utilities",children:"Utilities"}),": Smaller utility cheatcodes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/forking",children:"Forking"}),": Forking mode cheatcodes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/state-snapshots",children:"State snapshots"}),": State snapshot cheatcodes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/rpc",children:"RPC"}),": RPC related cheatcodes"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"/reference/cheatcodes/fs",children:"File"}),": Cheatcodes for working with files"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"add-a-new-cheatcode",children:["Add a new cheatcode",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#add-a-new-cheatcode",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["If you need a new feature, consider ",e.jsx(s.a,{href:"https://github.com/foundry-rs/foundry",children:"contributing to the Foundry's codebase"})," to add the cheatcode."]}),`
`,e.jsxs(s.h3,{id:"cheatcodes-interface",children:["Cheatcodes Interface",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#cheatcodes-interface",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"This is a Solidity interface for all of the cheatcodes present in Forge."}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// [!include ~/snippets/output/vm/Vm.sol:3]"})})})})})]})}function d(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{d as default,i as frontmatter};
