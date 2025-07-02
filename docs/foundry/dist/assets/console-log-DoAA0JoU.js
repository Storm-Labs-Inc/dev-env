import{j as e}from"./index-D5UbER3f.js";import{u as r}from"./index-CZxYc6i7.js";const c=void 0;function i(n){const s={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"console-logging",children:["Console Logging",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#console-logging",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Similar to Hardhat's console functions."}),`
`,e.jsx(s.li,{children:"You can use it in calls and transactions. It also works with view and pure functions."}),`
`,e.jsx(s.li,{children:"It always works, regardless of the call or transaction failing or being successful."}),`
`,e.jsxs(s.li,{children:["To use it you need import it:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:'import {console} from "forge-std/console.sol";'})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["You can call console.log with up to 4 parameters in any order of following types:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"uint"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"string"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"bool"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"address"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["There's also the single parameter API for the types above, and additionally bytes, bytes1... up to bytes32:",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logInt(int i)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logUint(uint i)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logString(string memory s)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logBool(bool b)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logAddress(address a)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logBytes(bytes memory b)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logBytes1(bytes1 b)"})}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logBytes2(bytes2 b)"})}),`
`,e.jsx(s.li,{children:"..."}),`
`,e.jsx(s.li,{children:e.jsx(s.code,{children:"console.logBytes32(bytes32 b)"})}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:["console.log implements the same formatting options that can be found in Hardhat's console.log.",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Example: ",e.jsx(s.code,{children:'console.log("Changing owner from %s to %s", currentOwner, newOwner)'})]}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:"console.log is implemented in standard Solidity and it is compatible Anvil and Hardhat Networks."}),`
`,e.jsx(s.li,{children:"console.log calls can run in other networks, like mainnet, kovan, ropsten, etc. They do nothing in those networks, but do spend a minimal amount of gas."}),`
`]}),`
`,e.jsxs(s.h3,{id:"consolelogformatargs",children:[e.jsx(s.code,{children:"console.log(format[,...args])"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#consolelogformatargs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.code,{children:"console.log()"})," method prints a formatted string using the first argument as a printf-like format string which can contain zero or more format specifiers. Each specifier is replaced with the converted value from the corresponding argument. Supported specifiers are:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"%s"}),": String will be used to convert all values to a human-readable string. ",e.jsx(s.code,{children:"uint256"}),", ",e.jsx(s.code,{children:"int256"})," and ",e.jsx(s.code,{children:"bytes"})," values are converted to their ",e.jsx(s.code,{children:"0x"})," hex encoded values."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"%d"}),": Number will be used to convert all values to a human-readable string. This is identical to ",e.jsx(s.code,{children:"%s"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"%i"}),": Works the same way as ",e.jsx(s.code,{children:"%d"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"%e"}),": The exponential representation of a number. For ",e.jsx(s.code,{children:"uint256"})," and ",e.jsx(s.code,{children:"int256"})," types."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"%x"}),": The hexadecimal representation of a number. For ",e.jsx(s.code,{children:"uint256"})," and ",e.jsx(s.code,{children:"int256"})," types."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"%o"}),": Object. A string representation of an object with generic JavaScript-styled object formatting. For solidity types, this basically surround the string representation of the value in single-quotes."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"%%"}),": single percent sign ('%'). This does not consume an argument."]}),`
`,e.jsxs(s.li,{children:["Returns: ",e.jsx(s.code,{children:"<string>"})," The formatted string"]}),`
`]}),`
`,e.jsx(s.p,{children:"If a specifier does not have a corresponding argument, it is not replaced:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"%s:%s"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"foo"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// Returns: "foo:%s"'})})]})})}),`
`,e.jsx(s.p,{children:"Values that are not part of the format string are formatted using as a human-readable string representation."}),`
`,e.jsx(s.p,{children:"If there are more arguments passed to the console.log() method than the number of specifiers, the extra arguments are concatenated to the returned string, separated by spaces:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"%s:%s"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"foo"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"bar"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"baz"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// Returns: "foo:bar baz"'})})]})})}),`
`,e.jsx(s.p,{children:"If only one argument is passed to console.log(), it is returned as it is without any formatting:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"%% %s"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// Returns: "%% %s"'})})]})})}),`
`,e.jsxs(s.p,{children:["The String format specifier (",e.jsx(s.code,{children:"%s"}),") should be used in most cases unless specific functionality is needed from other format specifiers."]})]})}function d(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{d as default,c as frontmatter};
