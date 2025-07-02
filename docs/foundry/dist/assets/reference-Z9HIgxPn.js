import{j as s}from"./index-D5UbER3f.js";import{u as l}from"./index-CZxYc6i7.js";const c=void 0;function i(n){const e={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...l(),...n.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"chisel",children:["chisel",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chisel",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"name",children:["NAME",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"chisel"})," - Test and receive verbose feedback on Solidity inputs within a REPL environment."]}),`
`,s.jsxs(e.h3,{id:"synopsis",children:["SYNOPSIS",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"chisel"})," [",s.jsx(e.em,{children:"options"}),"]"]}),`
`,s.jsxs(e.h4,{id:"subcommands-bin",children:["Subcommands (bin)",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#subcommands-bin",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"chisel list"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Displays all cached sessions stored in ",s.jsx(e.code,{children:"~/.foundry/cache/chisel"}),"."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"chisel load <id>"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["If a cached session with ",s.jsx(e.code,{children:"id = <id>"})," exists, launches the REPL and loads the corresponding session."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"chisel view <id>"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["If a cached session with ",s.jsx(e.code,{children:"id = <id>"})," exists, displays the source code of the session's REPL contract."]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.code,{children:"chisel clear-cache"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:["Deletes all cache files within the ",s.jsx(e.code,{children:"~/.foundry/cache/chisel"})," directory. These sessions are unrecoverable, so use this command with care."]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.h4,{id:"flags",children:["Flags",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#flags",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["See ",s.jsx(e.code,{children:"man chisel"})," or ",s.jsx(e.code,{children:"chisel --help"})," for all available environment configuration flags."]}),`
`,s.jsxs(e.h3,{id:"description",children:["DESCRIPTION",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:`Chisel is a Solidity REPL (short for "read-eval-print loop") that allows developers to write
and test Solidity code snippets. It provides an interactive environment for writing and executing
Solidity code, as well as a set of built-in commands for working with and debugging your code. This
makes it a useful tool for quickly testing and experimenting with Solidity code without having to
spin up a sandbox foundry test suite.`}),`
`,s.jsxs(e.h3,{id:"usage",children:["Usage",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:["To open chisel, simply execute the ",s.jsx(e.code,{children:"chisel"})," binary."]}),`
`,s.jsx(e.p,{children:"From there, input valid Solidity code. There are two kinds of inputs to the chisel prompt apart from commands:"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Expressions"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`Expressions are statements that return a value or otherwise can be evaluated on their own. For example,
`,s.jsx(e.code,{children:"1 << 8"})," is an expression that will evaluate to a ",s.jsx(e.code,{children:"uint256"})," with the value ",s.jsx(e.code,{children:"256"}),`. Expressions will be
evaluated up front, and will not persist in the session state past their evaluation.`]}),`
`,s.jsxs(e.li,{children:["Examples:",`
`,s.jsxs(e.ul,{children:[`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"address(0).balance"})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:'abi.encode(256, bytes32(0), "Chisel!")'})}),`
`,s.jsx(e.li,{children:s.jsx(e.code,{children:"myViewFunc(128)"})}),`
`,s.jsx(e.li,{children:"..."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Statements"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[`Statements are snippets of code that are meant to persist in the session's state. Statements include
variable definitions, calls to non-state-mutating functions that return a value, and contract, function,
event, error, mapping, or struct definitions. If you would like an expression to be evaluated as a statement,
a semi-colon (`,s.jsx(e.code,{children:";"}),") can be appended to the end."]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Examples:"}),`
`,s.jsxs(e.ul,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"uint256 a = 0xa57b"})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"myStateMutatingFunc(128)"})," || ",s.jsx(e.code,{children:"myViewFunc(128);"}),". Notice the ",s.jsx(e.code,{children:";"})]}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" hash64"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  bytes32"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _a,"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  bytes32"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _b"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"internal"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" pure"}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"bytes32"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" _hash) {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    assembly"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Store the 64 bytes we want to hash in scratch space"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        mstore"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x00"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", _a)"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        mstore"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x20"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", _b)"})]}),`
`,s.jsx(e.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Hash the memory in scratch space"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // and assign the result to `_hash`"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        _hash "}),s.jsx(e.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":="}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" keccak256"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x00"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"0x40"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"event ItHappened(bytes32 indexed hash)"})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"struct Complex256 { uint256 re; uint256 im; }"})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"..."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,s.jsxs(e.h4,{id:"available-commands",children:["Available Commands",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#available-commands",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"Welcome to Chisel! Type `!help` to show available commands."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"⚒️ Chisel help"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"============="})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"General"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!help | !h - Display all commands"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!quit | !q - Quit Chisel"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!exec <command> [args] | !e <command> [args] - Execute a shell command and print the output"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"Session"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!clear | !c - Clear current session source"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!source | !so - Display the source code of the current session"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!save [id] | !s [id] - Save the current session to cache"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!load <id> | !l <id> - Load a previous session ID from cache"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!list | !ls - List all cached sessions"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!clearcache | !cc - Clear the chisel cache of all stored sessions"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!export | !ex - Export the current session source to a script file"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!fetch <addr> <name> | !fe <addr> <name> - Fetch the interface of a verified contract on Etherscan"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!edit - Open the current session in an editor"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"Environment"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!fork <url> | !f <url> - Fork an RPC for the current session. Supply 0 arguments to return to a local network"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!traces | !t - Enable / disable traces for the current session"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!calldata [data] | !cd [data] - Set calldata (`msg.data`) for the current session (appended after function selector). Clears it if no argument provided."})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"Debug"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!memdump | !md - Dump the raw memory of the current state"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!stackdump | !sd - Dump the raw stack of the current state"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{children:"	!rawstack <var> | !rs <var> - Display the raw value of a variable's stack allocation. For variables that are > 32 bytes in length, this will display their memory pointer."})})]})})}),`
`,s.jsx(e.strong,{children:"General"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!help"})," | ",s.jsx(e.code,{children:"!h"})]}),`
`,s.jsx(e.p,{children:"Display all commands."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!quit"})," | ",s.jsx(e.code,{children:"!q"})]}),`
`,s.jsx(e.p,{children:"Quit Chisel."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!exec <command> [args]"})," | ",s.jsx(e.code,{children:"!e <command> [args]"})]}),`
`,s.jsx(e.p,{children:"Execute a shell command and print the output."}),`
`,s.jsx(e.p,{children:"Example:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"➜"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" !e"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ls"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"CHANGELOG.md"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"LICENSE"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"README.md"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"TESTS.md"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"artifacts"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"cache"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"contracts"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"crytic-export"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"deploy"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"deploy-config"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"deployments"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"dist"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"echidna.yaml"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge-artifacts"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"foundry.toml"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"hardhat.config.ts"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"layout-lock.json"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"node_modules"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"package.json"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"scripts"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"slither.config.json"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"slither.db.json"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"src"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tasks"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"test-case-generator"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tsconfig.build.json"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tsconfig.build.tsbuildinfo"})}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"tsconfig.json"})})]})})}),`
`,s.jsx(e.strong,{children:"Session"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!clear"})," | ",s.jsx(e.code,{children:"!c"})]}),`
`,s.jsx(e.p,{children:"Clear current session source."}),`
`,s.jsx(e.p,{children:"Under the hood, each Chisel session has an underlying contract that is altered as you input statements. This command clears this contract and resets your session to the default state."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!source"})," | ",s.jsx(e.code,{children:"!so"})]}),`
`,s.jsx(e.p,{children:"Display the source code of the current session."}),`
`,s.jsx(e.p,{children:"As mentioned above, each Chisel session has an underlying contract. This command will display the source code of this contract."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!save [id]"})," | ",s.jsx(e.code,{children:"!s [id]"})]}),`
`,s.jsx(e.p,{children:"Save the current session to cache."}),`
`,s.jsxs(e.p,{children:["Chisel allows for caching sessions, which can be very useful if you are testing more complex logic in Chisel or if you want to return to a session at a later time. All cached Chisel sessions are stored in ",s.jsx(e.code,{children:"~/.foundry/cache/chisel"}),"."]}),`
`,s.jsxs(e.p,{children:["If an ",s.jsx(e.code,{children:"id"})," argument is not supplied, Chisel will automatically assign a numerical ID to the session you are saving."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!load <id>"})," | ",s.jsx(e.code,{children:"!l <id>"})]}),`
`,s.jsx(e.p,{children:"Load a previous session ID from cache."}),`
`,s.jsxs(e.p,{children:["This command will load a previously cached session from the cache. Along with the session's source, all environment settings will also be loaded. The ",s.jsx(e.code,{children:"id"})," argument must correspond with an existing cached session in the ",s.jsx(e.code,{children:"~/.foundry/cache/chisel"})," directory."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!list"})," | ",s.jsx(e.code,{children:"!ls"})]}),`
`,s.jsx(e.p,{children:"List all cached sessions."}),`
`,s.jsxs(e.p,{children:["This command will display all cached chisel sessions within the ",s.jsx(e.code,{children:"~/.foundry/cache/chisel"})," directory."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!clearcache"})," | ",s.jsx(e.code,{children:"!cc"})]}),`
`,s.jsx(e.p,{children:"Clear the chisel cache of all stored sessions."}),`
`,s.jsxs(e.p,{children:["Deletes all cache files within the ",s.jsx(e.code,{children:"~/.foundry/cache/chisel"})," directory. These sessions are unrecoverable, so use this command with care."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!export"})," | ",s.jsx(e.code,{children:"!ex"})]}),`
`,s.jsx(e.p,{children:"Export the current session source to a script file."}),`
`,s.jsxs(e.p,{children:["If ",s.jsx(e.code,{children:"chisel"})," was executed from the root directory of a foundry project, it is possible to export your current session to a foundry script in the ",s.jsx(e.code,{children:"scripts"})," dir of your project."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!fetch <addr> <name>"})," | ",s.jsx(e.code,{children:"!fe <addr> <name>"})]}),`
`,s.jsx(e.p,{children:"Fetch the interface of a verified contract on Etherscan."}),`
`,s.jsxs(e.p,{children:["This command will attempt to parse the interface of a verified contract @ ",s.jsx(e.code,{children:"<addr>"})," from the Etherscan API. If successful, the interface will be inserted into the session source with the name ",s.jsx(e.code,{children:"<name>"}),"."]}),`
`,s.jsx(e.p,{children:"At the moment, only interfaces of verified contracts on Ethereum mainnet can be fetched. In the future, Chisel will support fetching interfaces from multiple Etherscan-supported chains."}),`
`,s.jsx(e.p,{children:s.jsx(e.code,{children:"!edit"})}),`
`,s.jsxs(e.p,{children:["Open the current session's ",s.jsx(e.code,{children:"run()"})," function in an editor."]}),`
`,s.jsxs(e.p,{children:["chisel will use the editor defined in the ",s.jsx(e.code,{children:"$EDITOR"})," environment variable."]}),`
`,s.jsx(e.strong,{children:"Environment"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!fork <url>"})," | ",s.jsx(e.code,{children:"!f <url>"})]}),`
`,s.jsx(e.p,{children:"Fork an RPC for the current session. Supply 0 arguments to return to a local network."}),`
`,s.jsx(e.p,{children:"Attempts to fork the state of the provided RPC. If no URL is provided, returns to using a blank, local devnet state."}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!traces"})," | ",s.jsx(e.code,{children:"!t"})]}),`
`,s.jsx(e.p,{children:"Enable / disable traces for the current session."}),`
`,s.jsx(e.p,{children:"When tracing is enabled, foundry-style call tracing and logs will be printed after each statement is inserted."}),`
`,s.jsx(e.strong,{children:"Debug"}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!memdump"})," | ",s.jsx(e.code,{children:"!md"})]}),`
`,s.jsx(e.p,{children:"Dump the raw memory of the current state."}),`
`,s.jsxs(e.p,{children:["Attempts to dump the raw memory of the machine state after the last instruction of the REPL contract's ",s.jsx(e.code,{children:"run"})," function has finished executing."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!stackdump"})," | ",s.jsx(e.code,{children:"!sd"})]}),`
`,s.jsx(e.p,{children:"Dump the raw stack of the current state."}),`
`,s.jsxs(e.p,{children:["Attempts to dump the raw stack of the machine state after the last instruction of the REPL contract's ",s.jsx(e.code,{children:"run"})," function has finished executing."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"!rawstack <var>"})," | ",s.jsx(e.code,{children:"!rs <var>"})]}),`
`,s.jsx(e.p,{children:"Display the raw value of a variable's stack allocation. For variables that are > 32 bytes in length, this will display their memory pointer."}),`
`,s.jsx(e.p,{children:"This command is useful when you want to view the full raw stack allocation for a variable that is less than 32 bytes in length."}),`
`,s.jsx(e.p,{children:"Example:"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"➜"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" address"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" addr"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"➜"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" assembly"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" {"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"    addr"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" :="}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" not"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"0"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:")"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"➜"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" addr"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Type:"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" address"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"└"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" Data:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xffffffffffffffffffffffffffffffffffffffff"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"➜"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" !rs"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" addr"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Type:"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" bytes32"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"└"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" Data:"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"})]}),`
`,s.jsx(e.span,{className:"line",children:s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"➜"})})]})})})]})}function d(n={}){const{wrapper:e}={...l(),...n.components};return e?s.jsx(e,{...n,children:s.jsx(i,{...n})}):i(n)}export{d as default,c as frontmatter};
