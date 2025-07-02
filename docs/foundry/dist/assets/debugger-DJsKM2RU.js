import{j as e}from"./index-D5UbER3f.js";import{u as i}from"./index-CZxYc6i7.js";const c={description:"Interactive debugger for stepping through smart contract execution with detailed EVM state inspection and navigation controls."};function r(n){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"debugger",children:["Debugger",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#debugger",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Forge ships with an interactive debugger."}),`
`,e.jsxs(s.p,{children:["The debugger is accessible on ",e.jsx(s.a,{href:"/forge/reference/forge-test",children:e.jsx(s.code,{children:"forge test"})}),", on ",e.jsx(s.a,{href:"/forge/reference/forge-script",children:e.jsx(s.code,{children:"forge script"})})," and on ",e.jsx(s.a,{href:"/cast/reference/cast-run",children:e.jsx(s.code,{children:"cast run"})}),". You can only select a single function or a single transaction to debug at the time."]}),`
`,e.jsxs(s.p,{children:["Using ",e.jsx(s.code,{children:"forge test"})," (or ",e.jsx(s.code,{children:"forge script"}),"):"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --debug"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --match-test"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "<REGEX>"'})]})})})}),`
`,e.jsxs(s.p,{children:["Where ",e.jsx(s.code,{children:"<REGEX>"})," is the function signature of the file you want to debug. For example:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --debug"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --match-test"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "test_Increment"'})]})})})}),`
`,e.jsx(s.p,{children:"If the matching test is a fuzz test, the debugger will open the first failing fuzz scenario, or the last successful one, whichever comes first. For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --debug"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --match-test"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "testFuzz_SetNumber"'})]})})})}),`
`,e.jsxs(s.p,{children:["Using ",e.jsx(s.code,{children:"cast run"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cast"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --debug"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  0xd15e0237413d7b824b784e1bbc3926e52f4726e5e5af30418803b8b327b4f8ca"})})]})})}),`
`,e.jsxs(s.h3,{id:"debugger-layout",children:["Debugger layout",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#debugger-layout",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.img,{src:"/debugger.png",alt:"An image of the debugger UI"})}),`
`,e.jsx(s.p,{children:"When the debugger is run, you are presented with a terminal divided into four quadrants:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Quadrant 1"}),": The opcodes in the debugging session, with the current opcode highlighted. Additionally, the address of the current account, the program counter and the accumulated gas usage is also displayed"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Quadrant 2"}),": The current stack, as well as the size of the stack"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Quadrant 3"}),": The source view"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Quadrant 4"}),": The current memory of the EVM"]}),`
`]}),`
`,e.jsx(s.p,{children:"As you step through your code, you will notice that the words in the stack and memory sometimes change color."}),`
`,e.jsx(s.p,{children:"For the memory:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Red words"})," are about to be written to by the current opcode"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Green words"})," were written to by the previous opcode"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Cyan words"})," are being read by the current opcode"]}),`
`]}),`
`,e.jsxs(s.p,{children:["For the stack, ",e.jsx(s.strong,{children:"cyan words"})," are either being read or popped by the current opcode."]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["⚠️ ",e.jsx(s.strong,{children:"Note"})]}),`
`,e.jsx(s.p,{children:`In most test frameworks, the first test assertion to fail is the one reported.
In foundry, the last test assertion to fail (that comes from DSTest or cheatcodes) is the one to be reported.`}),`
`]}),`
`,e.jsxs(s.h3,{id:"navigating",children:["Navigating",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#navigating",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"general",children:["General",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["q",": Quit the debugger"]}),`
`,e.jsxs(s.li,{children:["h",": Show help"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"navigating-calls",children:["Navigating calls",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#navigating-calls",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["0-9"," + ","k",": Step a number of times backwards (alternatively scroll up with your mouse)"]}),`
`,e.jsxs(s.li,{children:["0-9"," + ","j",": Step a number of times forwards (alternatively scroll down with your mouse)"]}),`
`,e.jsxs(s.li,{children:["g",": Move to the beginning of the transaction"]}),`
`,e.jsxs(s.li,{children:["G",": Move to the end of the transaction"]}),`
`,e.jsxs(s.li,{children:["c",": Move to the previous call-type instruction (i.e. ",e.jsx(s.a,{href:"https://www.evm.codes/#f1",children:e.jsx(s.code,{children:"CALL"})}),", ",e.jsx(s.a,{href:"https://www.evm.codes/#fa",children:e.jsx(s.code,{children:"STATICCALL"})}),", ",e.jsx(s.a,{href:"https://www.evm.codes/#f4",children:e.jsx(s.code,{children:"DELEGATECALL"})}),", and ",e.jsx(s.a,{href:"https://www.evm.codes/#f2",children:e.jsx(s.code,{children:"CALLCODE"})}),")."]}),`
`,e.jsxs(s.li,{children:["C",": Move to the next call-type instruction"]}),`
`,e.jsxs(s.li,{children:["a",": Move to the previous ",e.jsx(s.a,{href:"https://www.evm.codes/#f1",children:e.jsx(s.code,{children:"JUMP"})})," or ",e.jsx(s.a,{href:"https://www.evm.codes/#57",children:e.jsx(s.code,{children:"JUMPI"})})," instruction"]}),`
`,e.jsxs(s.li,{children:["s",": Move to the next ",e.jsx(s.a,{href:"https://www.evm.codes/#5b",children:e.jsx(s.code,{children:"JUMPDEST"})})," instruction"]}),`
`,e.jsxs(s.li,{children:["'"," + ","a-z",": Move to ",e.jsx(s.code,{children:"<char>"})," breakpoint set by a ",e.jsx(s.a,{href:"/reference/cheatcodes/breakpoint",children:e.jsx(s.code,{children:"vm.breakpoint"})})," cheatcode"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"navigating-memory",children:["Navigating memory",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#navigating-memory",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Ctrl"," + ","j",": Scroll the memory view down"]}),`
`,e.jsxs(s.li,{children:["Ctrl"," + ","k",": Scroll the memory view up"]}),`
`,e.jsxs(s.li,{children:["m",": Show memory as UTF8"]}),`
`]}),`
`,e.jsxs(s.h3,{id:"navigating-the-stack",children:["Navigating the stack",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#navigating-the-stack",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["J",": Scroll the stack view down"]}),`
`,e.jsxs(s.li,{children:["K",": Scroll the stack view up"]}),`
`,e.jsxs(s.li,{children:["t",": Show labels on the stack to see what items the current op will consume"]}),`
`]})]})}function a(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(r,{...n})}):r(n)}export{a as default,c as frontmatter};
