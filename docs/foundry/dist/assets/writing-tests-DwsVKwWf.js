import{j as e}from"./index-D5UbER3f.js";import{u as i}from"./index-CZxYc6i7.js";const a={description:"Comprehensive testing strategies including unit tests, fork tests, test organization, and harness patterns for smart contracts."};function t(n){const s={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"tests",children:["Tests",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tests",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"general-test-guidance",children:["General Test Guidance",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general-test-guidance",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"naming-test-files",children:["Naming test files",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#naming-test-files",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["For testing ",e.jsx(s.code,{children:"MyContract.sol"}),", the test file should be ",e.jsx(s.code,{children:"MyContract.t.sol"}),". For testing ",e.jsx(s.code,{children:"MyScript.s.sol"}),", the test file should be ",e.jsx(s.code,{children:"MyScript.t.sol"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["If the contract is big and you want to split it over multiple files, group them logically like ",e.jsx(s.code,{children:"MyContract.owner.t.sol"}),", ",e.jsx(s.code,{children:"MyContract.deposits.t.sol"}),", etc."]}),`
`]}),`
`,e.jsxs(s.h4,{id:"no-assertions-in-setup",children:["No assertions in ",e.jsx(s.code,{children:"setUp"}),e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#no-assertions-in-setup",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Never make assertions in the ",e.jsx(s.code,{children:"setUp"})," function, instead use a dedicated test like ",e.jsx(s.code,{children:"test_SetUpState()"})," if you need to ensure your ",e.jsx(s.code,{children:"setUp"})," function does what you expected. More info on why in ",e.jsx(s.a,{href:"https://github.com/foundry-rs/foundry/issues/1291",children:"foundry-rs/foundry#1291"})]}),`
`,e.jsxs(s.h4,{id:"organizing-and-naming-tests",children:["Organizing and Naming tests",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#organizing-and-naming-tests",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"For unit tests, there are two major ways to organize the tests:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Treat contracts as describe blocks:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contract Add"})," holds all unit tests for the ",e.jsx(s.code,{children:"add"})," method of ",e.jsx(s.code,{children:"MyContract"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contract Supply"})," holds all tests for the ",e.jsx(s.code,{children:"supply"})," method."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contract Constructor"})," hold all tests for the constructor."]}),`
`,e.jsx(s.li,{children:"A benefit of this approach is that smaller contracts should compile faster than large ones, so this approach of many small contracts should save time as test suites get large."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Have a Test contract per contract-under-test, with as many utilities and fixtures as you want:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"contract MyContractTest"})," holds all unit tests for ",e.jsx(s.code,{children:"MyContract"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function test_add_AddsTwoNumbers()"})," lives within ",e.jsx(s.code,{children:"MyContractTest"})," to test the ",e.jsx(s.code,{children:"add"})," method."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"function test_supply_UsersCanSupplyTokens()"})," also lives within ",e.jsx(s.code,{children:"MyContractTest"})," to test the ",e.jsx(s.code,{children:"supply"})," method."]}),`
`,e.jsx(s.li,{children:"A benefit of this approach is that test output is grouped by contract-under-test, which makes it easier to quickly see where failures are."}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Some general guidance for all kinds tests:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Test contracts/functions should be written in the same order as the original functions in the contract-under-test."}),`
`,e.jsx(s.li,{children:"All unit tests that test the same function should live serially in the test file."}),`
`,e.jsxs(s.li,{children:["Test contracts can inherit from any helper contracts you want. For example ",e.jsx(s.code,{children:"contract MyContractTest"})," tests ",e.jsx(s.code,{children:"MyContract"}),", but may inherit from forge-std's ",e.jsx(s.code,{children:"Test"}),", as well as e.g. your own ",e.jsx(s.code,{children:"TestUtilities"})," helper contract."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Integration tests should live in the same ",e.jsx(s.code,{children:"test"})," directory, with a clear naming convention. These may be in dedicated files, or they may live next to related unit tests in existing test files."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Be consistent with test naming, as it's helpful for filtering tests (e.g. for gas reports you might want to filter out revert tests). When combining naming conventions, keep them alphabetical. Below is a sample of valid names. A comprehensive list of valid and invalid examples can be found ",e.jsx(s.a,{href:"https://github.com/ScopeLift/scopelint/blob/1857e3940bfe92ac5a136827374f4b27ff083971/src/check/validators/test_names.rs#L106-L143",children:"here"}),"."]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_Description"})," for standard tests."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"testFuzz_Description"})," for fuzz tests."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"test_Revert[If|When]_Condition"})," for tests expecting a revert."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"testFork_Description"})," for tests that fork from a network."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"testForkFuzz_Revert[If|When]_Condition"})," for a fuzz test that forks and expects a revert."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Name your constants and immutables using ",e.jsx(s.code,{children:"ALL_CAPS_WITH_UNDERSCORES"}),", to make it easier to distinguish them from variables and functions."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["When using assertions like ",e.jsx(s.code,{children:"assertEq"}),", consider leveraging the last string param to make it easier to identify failures. These can be kept brief, or even just be numbers—they basically serve as a replacement for showing line numbers of the revert, e.g. ",e.jsx(s.code,{children:'assertEq(x, y, "1")'})," or ",e.jsx(s.code,{children:'assertEq(x, y, "sum1")'}),". ",e.jsxs(s.em,{children:["(Note: ",e.jsx(s.a,{href:"https://github.com/foundry-rs/foundry/issues/2328",children:"foundry-rs/foundry#2328"})," tracks integrating this natively)."]})]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["When testing events, prefer setting all ",e.jsx(s.code,{children:"expectEmit"})," arguments to ",e.jsx(s.code,{children:"true"}),", i.e. ",e.jsx(s.code,{children:"vm.expectEmit(true, true, true, true)"})," or ",e.jsx(s.code,{children:"vm.expectEmit()"}),". Benefits:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"This ensures you test everything in your event."}),`
`,e.jsx(s.li,{children:"If you add a topic (i.e. a new indexed parameter), it's now tested by default."}),`
`,e.jsxs(s.li,{children:["Even if you only have 1 topic, the extra ",e.jsx(s.code,{children:"true"})," arguments don't hurt."]}),`
`]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["Remember to write invariant tests! For the assertion string, use a verbose english description of the invariant: ",e.jsx(s.code,{children:'assertEq(x + y, z, "Invariant violated: the sum of x and y must always equal z")'}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"fork-tests",children:["Fork Tests",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fork-tests",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"use-fork-tests-liberally",children:["Use fork tests liberally",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#use-fork-tests-liberally",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Don't feel like you need to give forks tests special treatment, and use them liberally:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Mocks are ",e.jsx(s.em,{children:"required"})," in closed-source web2 development—you have to mock API responses because the code for that API isn't open source so you cannot just run it locally. But for blockchains that's not true: any code you're interacting with that's already deployed can be locally executed and even modified for free. So why introduce the risk of a wrong mock if you don't need to?"]}),`
`,e.jsxs(s.li,{children:["A common reason to avoid fork tests and prefer mocks is that fork tests are slow. But this is not always true. By pinning to a block number, forge caches RPC responses so only the first run is slower, and subsequent runs are significantly faster. See ",e.jsx(s.a,{href:"https://github.com/mds1/convex-shutdown-simulation/",children:"this benchmark"}),", where it took forge 7 minutes for the first run with a remote RPC, but only half a second once data was cached. ",e.jsx(s.a,{href:"https://alchemy.com",children:"Alchemy"}),", ",e.jsx(s.a,{href:"https://infura.io",children:"Infura"})," and ",e.jsx(s.a,{href:"https://tenderly.co",children:"Tenderly"})," offer free archive data, so pinning to a block shouldn't be problematic."]}),`
`,e.jsxs(s.li,{children:["Note that the ",e.jsx(s.a,{href:"https://github.com/foundry-rs/foundry-toolchain",children:"foundry-toolchain"})," GitHub Action will cache RPC responses in CI by default, and it will also update the cache when you update your fork tests."]}),`
`]}),`
`,e.jsxs(s.h4,{id:"minimize-rpc-requests",children:["Minimize RPC requests",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#minimize-rpc-requests",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Be careful with fuzz tests on a fork to avoid burning through RPC requests with non-deterministic fuzzing. If the input to your fork fuzz test is some parameter which is used in an RPC call to fetch data (e.g. querying the token balance of an address), each run of a fuzz test uses at least 1 RPC request, so you'll quickly hit rate limits or usage limits. Solutions to consider:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Replace multiple RPC calls with a single ",e.jsx(s.a,{href:"https://github.com/mds1/multicall",children:"multicall"}),"."]}),`
`,e.jsxs(s.li,{children:["Specify a fuzz/invariant ",e.jsx(s.a,{href:"/config/reference/testing#seed",children:"seed"}),": this makes sure each ",e.jsx(s.code,{children:"forge test"})," invocation uses the same fuzz inputs. RPC results are cached locally, so you'll only query the node the first time."]}),`
`,e.jsxs(s.li,{children:["In CI, consider setting the fuzz seed using a ",e.jsx(s.a,{href:"https://github.com/sablier-labs/v2-core/blob/d1157b49ed4bceeff0c4e437c9f723e88c134d3a/.github/workflows/ci.yml#L252-L254",children:"computed environment variable"})," so it changes every day or every week. This gives flexibility on the tradeoff between increasing randomness to find more bugs vs. using a seed to reduce RPC requests."]}),`
`,e.jsx(s.li,{children:"Structure your tests so the data you are fuzzing over is computed locally by your contract, and not data that is used in an RPC call (may or may not be feasible based on what you're doing)."}),`
`,e.jsx(s.li,{children:"Lastly, you can of course always run a local node or bump your RPC plan."}),`
`]}),`
`,e.jsxs(s.h4,{id:"configure-fork-urls-in-foundrytoml-and-use-cheatcodes",children:["Configure fork urls in ",e.jsx(s.code,{children:"foundry.toml"})," and use cheatcodes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configure-fork-urls-in-foundrytoml-and-use-cheatcodes",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:["When writing fork tests, do not use the ",e.jsx(s.code,{children:"--fork-url"})," flag. Instead, prefer the following approach for its improved flexibility:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Define ",e.jsx(s.code,{children:"[rpc_endpoints]"})," in the ",e.jsx(s.code,{children:"foundry.toml"})," config file and use the ",e.jsx(s.a,{href:"/forge/tests/fork-testing#forking-cheatcodes",children:"forking cheatcodes"}),"."]}),`
`,e.jsxs(s.li,{children:["Access the RPC URL endpoint in your test with forge-std's ",e.jsx(s.code,{children:"stdChains.ChainName.rpcUrl"}),". See the list of supported chains and expected config file aliases ",e.jsx(s.a,{href:"https://github.com/foundry-rs/forge-std/blob/ff4bf7db008d096ea5a657f2c20516182252a3ed/src/StdCheats.sol#L255-L271",children:"here"}),"."]}),`
`,e.jsx(s.li,{children:"Always pin to a block so tests are deterministic and RPC responses are cached."}),`
`,e.jsxs(s.li,{children:["More info on this fork test approach can be found ",e.jsx(s.a,{href:"https://twitter.com/msolomon44/status/1564742781129502722",children:"here"})," (this predates ",e.jsx(s.code,{children:"StdChains"})," so that aspect is a bit out of date)."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"test-harnesses",children:["Test Harnesses",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#test-harnesses",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"internal-functions",children:["Internal Functions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#internal-functions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["To test ",e.jsx(s.code,{children:"internal"})," functions, write a harness contract that inherits from the contract under test (CuT). Harness contracts that inherit from the CuT expose the ",e.jsx(s.code,{children:"internal"})," functions as ",e.jsx(s.code,{children:"external"})," ones."]}),`
`,e.jsxs(s.p,{children:["Each ",e.jsx(s.code,{children:"internal"})," function that is tested should be exposed via an external one with a name that follows the pattern ",e.jsx(s.code,{children:"exposed_<function_name>"}),". For example:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// file: src/MyContract.sol"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"contract"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" MyContract"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" myInternalMethod"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"internal"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    return"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 42"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// file: test/MyContract.t.sol"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"MyContract"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "src/MyContract.sol"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"contract"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" MyContractHarness"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" is"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" MyContract"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // Deploy this contract then call this method to test `myInternalMethod`."})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  function"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" exposed_myInternalMethod"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"external"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    return"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" myInternalMethod"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(s.h4,{id:"private-functions",children:["Private Functions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#private-functions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Unfortunately there is currently no good way to unit test ",e.jsx(s.code,{children:"private"})," methods since they cannot be accessed by any other contracts. Options include:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Converting ",e.jsx(s.code,{children:"private"})," functions to ",e.jsx(s.code,{children:"internal"}),"."]}),`
`,e.jsx(s.li,{children:"Copy/pasting the logic into your test contract and writing a script that runs in CI check to ensure both functions are identical."}),`
`]}),`
`,e.jsxs(s.h4,{id:"workaround-functions",children:["Workaround Functions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#workaround-functions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Harnesses can also be used to expose functionality or information otherwise unavailable in the original smart contract. The most straightforward example is when we want to test the length of a public array. The functions should follow the pattern: ",e.jsx(s.code,{children:"workaround_<function_name>"}),", such as ",e.jsx(s.code,{children:"workaround_queueLength()"}),"."]}),`
`,e.jsxs(s.p,{children:['Another use case for this is tracking data that you would not track in production to help test invariants. For example, you might store a list of all token holders to simplify validation of the invariant "sum of all balances must equal total supply". These are often known as "ghost variables". You can learn more about this in ',e.jsx(s.a,{href:"https://twitter.com/rikardhjort",children:"Rikard Hjort"}),"'s ",e.jsx(s.a,{href:"https://youtu.be/ETlNhV9jYJw",children:"Formal Methods for the Working DeFi Dev"})," talk."]})]})}function l(n={}){const{wrapper:s}={...i(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{l as default,a as frontmatter};
