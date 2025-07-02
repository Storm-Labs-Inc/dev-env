import{j as s}from"./index-D5UbER3f.js";import t from"./etherscan-options-CLooEQsH.js";import a from"./verifier-options-CpvTEhIE.js";import c from"./retry-options-C3vuy_IN.js";import o from"./core-build-options-Dgi0sYgk.js";import d from"./watch-options-BnHHaP1Q.js";import l from"./multi-wallet-options-BqzPGYEC.js";import h from"./evm-options-CIv_ltnd.js";import x from"./executor-options-CW-TDtAD.js";import p from"./common-options-GfkPOrEd.js";import{u as n}from"./index-CZxYc6i7.js";import"./compiler-options-BCpvSNbq.js";import"./project-options-BKric660.js";import"./multi-wallet-options-raw-Dgk7jeJz.js";import"./multi-wallet-options-keystore-Bt51C-Z_.js";import"./multi-wallet-options-hardware-CHv4J4zC.js";import"./multi-wallet-options-remote-BmXbdRkz.js";const E=void 0;function r(i){const e={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",...n(),...i.components};return s.jsxs(s.Fragment,{children:[s.jsxs(e.h2,{id:"forge-script",children:["forge script",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-script",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.h3,{id:"name",children:["NAME",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"forge-script - Run a smart contract as a script, building transactions that can be sent onchain."}),`
`,s.jsxs(e.h3,{id:"synopsis",children:["SYNOPSIS",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"forge script"})," [",s.jsx(e.em,{children:"options"}),"] ",s.jsx(e.em,{children:"path"})," [",s.jsx(e.em,{children:"args..."}),"]"]}),`
`,s.jsxs(e.h3,{id:"description",children:["DESCRIPTION",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(e.p,{children:"Run a smart contract as a script, building transactions that can be sent onchain."}),`
`,s.jsx(e.p,{children:"Scripts can be used to apply state transitions on live contracts, or deploy and initialize a complex set of smart contracts using Solidity."}),`
`,s.jsxs(e.h3,{id:"options",children:["OPTIONS",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--broadcast"}),s.jsx(e.br,{}),`
`,"    Broadcasts the transactions."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--debug"}),s.jsx(e.br,{}),`
`,"    Open the script in the ",s.jsx(e.a,{href:"../../forge/debugger.md",children:"debugger"}),". Takes precedence over broadcast."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"-g"}),s.jsx(e.br,{}),`
`,s.jsx(e.code,{children:"--gas-estimate-multiplier"})," ",s.jsx(e.em,{children:"multiplier"}),s.jsx(e.br,{}),`
`,`    Relative percentage by which to multiply all gas estimates. (i.e. set to 200 to double them)
    Default: 130`]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--json"}),s.jsx(e.br,{}),`
`,"    Output results in JSON format.",s.jsx(e.br,{}),`
`,"    Note: The output is under development and prone to change."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--legacy"}),s.jsx(e.br,{}),`
`,"    Use legacy transactions instead of EIP1559 ones. This is auto-enabled for common networks without EIP1559."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--resume"}),s.jsx(e.br,{}),`
`,"    Resumes submitting transactions that failed or timed-out previously."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"-s"}),s.jsx(e.br,{}),`
`,s.jsx(e.code,{children:"--sig"})," ",s.jsx(e.em,{children:"signature"}),s.jsx(e.br,{}),`
`,"    The signature of the function you want to call in the contract, or raw calldata.",s.jsx(e.br,{}),`
`,"    Default: ",s.jsx(e.code,{children:"run()"})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--skip-simulation"}),s.jsx(e.br,{}),`
`,"    Skips on-chain simulation."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--skip"}),s.jsx(e.br,{}),`
`,"    Skip compilation of non-essential contract directories like test or script (usage ",s.jsx(e.code,{children:"--skip test"}),")."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--non-interactive"}),s.jsx(e.br,{}),`
`,"    Remove interactive prompts which appear if the contract is near the ",s.jsx(e.a,{href:"https://eips.ethereum.org/EIPS/eip-170",children:"EIP-170"})," size limit."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--slow"}),s.jsx(e.br,{}),`
`,"    Makes sure a transaction is sent, only after its previous one has been confirmed and succeeded."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--target-contract"})," ",s.jsx(e.em,{children:"contract_name"}),s.jsx(e.br,{}),`
`,"    The name of the contract you want to run."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--priority-gas-price"}),s.jsx(e.br,{}),`
`,"    Sets the priority gas price for EIP1559 transactions. Useful for when gas prices are volatile and you want to get your transaction included."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--with-gas-price"})," ",s.jsx(e.em,{children:"price"}),s.jsx(e.br,{}),`
`,"    Sets the gas price for ",s.jsx(e.strong,{children:"broadcasted"})," legacy transactions, or the max fee for broadcasted EIP1559 transactions.",s.jsx(e.br,{}),`
`,"    Note: To set the gas price in the execution environment of the script use ",s.jsx(e.code,{children:"--gas-price"})," instead (see below)."]}),`
`,s.jsx(t,{}),`
`,s.jsxs(e.h4,{id:"verification-options",children:["Verification Options",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verification-options",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--verify"}),s.jsx(e.br,{}),`
`,"    If it finds a matching broadcast log, it tries to verify every contract found in the receipts."]}),`
`,s.jsx(a,{}),`
`,s.jsx(c,{}),`
`,s.jsx(o,{}),`
`,s.jsxs(e.h4,{id:"build-options",children:["Build Options",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#build-options",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--names"}),s.jsx(e.br,{}),`
`,"    Print compiled contract names."]}),`
`,s.jsxs(e.p,{children:[s.jsx(e.code,{children:"--sizes"}),s.jsx(e.br,{}),`
`,"    Print compiled non-test contract sizes, exiting with code 1 if any of them are above the size limit."]}),`
`,s.jsx(d,{}),`
`,s.jsx(l,{}),`
`,s.jsx(h,{}),`
`,s.jsx(x,{}),`
`,s.jsx(p,{}),`
`,s.jsxs(e.h3,{id:"examples",children:["EXAMPLES",s.jsx(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:s.jsx(e.div,{"data-autolink-icon":!0})})]}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["Run ",s.jsx(e.code,{children:"BroadcastTest"})," as a script, broadcasting generated transactions on-chain"]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" ./test/Broadcast.t.sol"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --tc"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" BroadcastTest"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --sig"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "deploy()"'}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    -vvv"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --fork-url"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $SEPOLIA_RPC_URL"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["Deploy a contract on Polygon ",s.jsxs(e.a,{href:"/guides/scripting-with-solidity",children:["see the ",s.jsx(e.code,{children:"Scripting with Solidity"})," guide for an example script"]}),". ",s.jsx(e.em,{children:"The verifier url is different for every network."})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script/NFT.s.sol:MyScript"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --chain-id"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 137"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $RPC_URL "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --etherscan-api-key"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $POLYGONSCAN_API_KEY "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--verifier-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://api.polygonscan.com/api"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --broadcast"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --verify"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -vvvv"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsxs(e.p,{children:["Resume a failed script. Using the above as an example, remove ",s.jsx(e.code,{children:"--broadcast"})," add ",s.jsx(e.code,{children:"--resume"})]}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(e.code,{children:[s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script/NFT.s.sol:MyScript"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --chain-id"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 137"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $RPC_URL "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:"\\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --etherscan-api-key"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $POLYGONSCAN_API_KEY "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--verifier-url"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" https://api.polygonscan.com/api"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    --verify"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -vvvv"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --resume"})]})]})})}),`
`]}),`
`,s.jsxs(e.li,{children:[`
`,s.jsx(e.p,{children:"Verify contracts that were just deployed with a script"}),`
`,s.jsx(s.Fragment,{children:s.jsx(e.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsx(e.code,{children:s.jsxs(e.span,{className:"line",children:[s.jsx(e.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script"}),s.jsx(e.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" script/NFT.s.sol"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --rpc-url"}),s.jsx(e.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $RPC_URL "}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"--verify"}),s.jsx(e.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --resume"})]})})})}),`
`]}),`
`]})]})}function w(i={}){const{wrapper:e}={...n(),...i.components};return e?s.jsx(e,{...i,children:s.jsx(r,{...i})}):r(i)}export{w as default,E as frontmatter};
