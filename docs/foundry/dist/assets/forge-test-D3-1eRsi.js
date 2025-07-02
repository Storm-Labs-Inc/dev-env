import{j as e}from"./index-D5UbER3f.js";import t from"./test-options-C0nj2loq.js";import a from"./evm-options-CIv_ltnd.js";import d from"./executor-options-CW-TDtAD.js";import o from"./core-build-options-Dgi0sYgk.js";import h from"./watch-options-BnHHaP1Q.js";import l from"./display-options-CoE2BSKN.js";import c from"./common-options-GfkPOrEd.js";import{u as r}from"./index-CZxYc6i7.js";import"./compiler-options-BCpvSNbq.js";import"./project-options-BKric660.js";const y=void 0;function i(n){const s={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"forge-test",children:["forge test",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-test",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"forge-test - Run the project's tests."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"forge test"})," [",e.jsx(s.em,{children:"options"}),"]"]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Run the project's tests."}),`
`,e.jsxs(s.h4,{id:"forking",children:["Forking",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forking",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["It is possible to run the tests in a forked environment by passing ",e.jsx(s.code,{children:"--fork-url <URL>"}),"."]}),`
`,e.jsxs(s.p,{children:[`When the tests are running in a forked environment, you can access all the state of the forked chain as you would
if you had deployed the contracts. `,e.jsx(s.a,{href:"/reference/cheatcodes",children:"Cheatcodes"})," are still available."]}),`
`,e.jsxs(s.p,{children:["You can also specify a block number to fork from by passing ",e.jsx(s.code,{children:"--fork-block-number <BLOCK>"}),`. When forking from a
specific block, the chain data is cached to `,e.jsx(s.code,{children:"~/.foundry/cache"}),`. If you do not want to cache the chain data,
pass `,e.jsx(s.code,{children:"--no-storage-caching"}),"."]}),`
`,e.jsxs(s.p,{children:[`Traces that cannot be decoded by local contracts when running in a forked environment (e.g. calls to
contracts that live on mainnet, like tokens) can optionally be decoded using Etherscan. To use Etherscan
for trace decoding, set `,e.jsx(s.code,{children:"ETHERSCAN_API_KEY"})," or pass ",e.jsx(s.code,{children:"--etherscan-api-key <KEY>"}),"."]}),`
`,e.jsxs(s.h4,{id:"debugging",children:["Debugging",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#debugging",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["It is possible to run a test in an interactive debugger. To start the debugger, pass ",e.jsx(s.code,{children:"--debug <TEST>"}),"."]}),`
`,e.jsx(s.p,{children:`If multiple tests match the specified pattern, you must use other test filters in order to reduce
the matching number of tests to exactly 1.`}),`
`,e.jsx(s.p,{children:"If the test is a unit test, it is immediately opened in the debugger."}),`
`,e.jsx(s.p,{children:`If the test is a fuzz test, the fuzz test is run and the debugger is opened on the first failing scenario.
If there are no failing scenarios for the fuzz test, the debugger is opened on the last scenario.`}),`
`,e.jsxs(s.p,{children:["More information on the debugger can be found in the ",e.jsx(s.a,{href:"/forge/debugger",children:"debugger chapter"}),"."]}),`
`,e.jsxs(s.h4,{id:"gas-reports",children:["Gas reports",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas-reports",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["You can generate a gas report by passing ",e.jsx(s.code,{children:"--gas-report"}),"."]}),`
`,e.jsxs(s.p,{children:["More information on gas reports can be found in the ",e.jsx(s.a,{href:"/forge/gas-tracking/gas-reports",children:"gas reports chapter"}),"."]}),`
`,e.jsxs(s.h4,{id:"list",children:["List",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#list",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[`It is possible to list the tests without running them.
You can pass `,e.jsx(s.code,{children:"--json"})," to make it easier for outside extensions to parse structured content."]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(t,{}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(o,{}),`
`,e.jsx(h,{}),`
`,e.jsx(l,{}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--list"}),e.jsx(s.br,{}),`
`,"    List tests instead of running them."]}),`
`,e.jsx(c,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Run the tests:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Open a test in the debugger:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --debug"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" testSomething"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Generate a gas report:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --gas-report"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Only run tests in ",e.jsx(s.code,{children:"test/Contract.t.sol"})," in the ",e.jsx(s.code,{children:"BigTest"})," contract that start with ",e.jsx(s.code,{children:"testRevert"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --match-path"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test/Contract.t.sol"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --match-contract"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" BigTest"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#F47067"},children:" \\"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  --match-test"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "testRevert*"'})]})]})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"List tests in desired format"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --list"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --list"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --json"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" test"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --list"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --json"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --match-test"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "testRevert*"'}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" tail"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -n"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 1"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" json_pp"})]})]})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/forge/reference/overview",children:"forge"}),", ",e.jsx(s.a,{href:"/forge/reference/forge-build",children:"forge build"}),", ",e.jsx(s.a,{href:"/forge/reference/forge-snapshot",children:"forge snapshot"}),","]})]})}function D(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{D as default,y as frontmatter};
