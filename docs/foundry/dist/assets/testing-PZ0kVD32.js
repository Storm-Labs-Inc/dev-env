import{j as e}from"./index-D5UbER3f.js";import{u as r}from"./index-CZxYc6i7.js";const c=void 0;function s(i){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",h2:"h2",h3:"h3",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"testing",children:["Testing",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#testing",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Configuration related to the behavior of ",e.jsx(n.code,{children:"forge test"}),"."]}),`
`,e.jsx(n.strong,{children:"Sections"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#general",children:"General"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#fuzz",children:"Fuzz"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#invariant",children:"Invariant"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"general",children:["General",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h5,{id:"verbosity",children:[e.jsx(n.code,{children:"verbosity"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verbosity",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 0"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_VERBOSITY"})," or ",e.jsx(n.code,{children:"DAPP_VERBOSITY"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The verbosity level to use during tests."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Level 2 (",e.jsx(n.code,{children:"-vv"}),")"]}),": Logs emitted during tests are also displayed."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Level 3 (",e.jsx(n.code,{children:"-vvv"}),")"]}),": Stack traces for failing tests are also displayed."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Level 4 (",e.jsx(n.code,{children:"-vvvv"}),")"]}),": Stack traces for all tests are displayed, and setup traces for failing tests are displayed."]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Level 5 (",e.jsx(n.code,{children:"-vvvvv"}),")"]}),": Stack traces and setup traces are always displayed."]}),`
`]}),`
`,e.jsxs(n.h5,{id:"ffi",children:[e.jsx(n.code,{children:"ffi"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ffi",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FFI"})," or ",e.jsx(n.code,{children:"DAPP_FFI"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Whether or not to enable the ",e.jsx(n.code,{children:"ffi"})," cheatcode."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Warning:"})," Enabling this cheatcode has security implications for your project, as it allows tests to execute arbitrary programs on your computer."]}),`
`,e.jsxs(n.h5,{id:"sender",children:[e.jsx(n.code,{children:"sender"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sender",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string (address)"}),`
`,e.jsx(n.li,{children:"Default: 0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_SENDER"})," or ",e.jsx(n.code,{children:"DAPP_SENDER"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The value of ",e.jsx(n.code,{children:"msg.sender"})," in tests."]}),`
`,e.jsxs(n.h5,{id:"tx_origin",children:[e.jsx(n.code,{children:"tx_origin"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tx_origin",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string (address)"}),`
`,e.jsx(n.li,{children:"Default: 0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_TX_ORIGIN"})," or ",e.jsx(n.code,{children:"DAPP_TX_ORIGIN"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The value of ",e.jsx(n.code,{children:"tx.origin"})," in tests."]}),`
`,e.jsxs(n.h5,{id:"initial_balance",children:[e.jsx(n.code,{children:"initial_balance"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initial_balance",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string (hexadecimal)"}),`
`,e.jsx(n.li,{children:"Default: 0xffffffffffffffffffffffff"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INITIAL_BALANCE"})," or ",e.jsx(n.code,{children:"DAPP_INITIAL_BALANCE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The initial balance of the test contracts in wei, written in hexadecimal."}),`
`,e.jsxs(n.h5,{id:"block_number",children:[e.jsx(n.code,{children:"block_number"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block_number",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 1"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_BLOCK_NUMBER"})," or ",e.jsx(n.code,{children:"DAPP_BLOCK_NUMBER"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The value of ",e.jsx(n.code,{children:"block.number"})," in tests."]}),`
`,e.jsxs(n.h5,{id:"chain_id",children:[e.jsx(n.code,{children:"chain_id"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chain_id",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 31337"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_CHAIN_ID"})," or ",e.jsx(n.code,{children:"DAPP_CHAIN_ID"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The value of the ",e.jsx(n.code,{children:"chainid"})," opcode in tests."]}),`
`,e.jsxs(n.h5,{id:"gas_limit",children:[e.jsx(n.code,{children:"gas_limit"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas_limit",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer or string"}),`
`,e.jsx(n.li,{children:"Default: 9223372036854775807"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_GAS_LIMIT"})," or ",e.jsx(n.code,{children:"DAPP_GAS_LIMIT"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The gas limit for each test case."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx(n.strong,{children:"Note"})]}),`
`,e.jsxs(n.p,{children:["Due to a limitation in a dependency of Forge, you ",e.jsx(n.strong,{children:"cannot raise the gas limit"})," beyond the default without changing the value to a string."]}),`
`,e.jsx(n.p,{children:"In order to use higher gas limits use a string:"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"gas_limit = "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"18446744073709551615"'}),e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" # u64::MAX"})]})})})}),`
`,e.jsxs(n.h5,{id:"gas_price",children:[e.jsx(n.code,{children:"gas_price"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas_price",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 0"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_GAS_PRICE"})," or ",e.jsx(n.code,{children:"DAPP_GAS_PRICE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The price of gas (in wei) in tests."}),`
`,e.jsxs(n.h5,{id:"block_base_fee_per_gas",children:[e.jsx(n.code,{children:"block_base_fee_per_gas"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block_base_fee_per_gas",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 0"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_BLOCK_BASE_FEE_PER_GAS"})," or ",e.jsx(n.code,{children:"DAPP_BLOCK_BASE_FEE_PER_GAS"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The base fee per gas (in wei) in tests."}),`
`,e.jsxs(n.h5,{id:"block_coinbase",children:[e.jsx(n.code,{children:"block_coinbase"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block_coinbase",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string (address)"}),`
`,e.jsx(n.li,{children:"Default: 0x0000000000000000000000000000000000000000"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_BLOCK_COINBASE"})," or ",e.jsx(n.code,{children:"DAPP_BLOCK_COINBASE"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The value of ",e.jsx(n.code,{children:"block.coinbase"})," in tests."]}),`
`,e.jsxs(n.h5,{id:"block_timestamp",children:[e.jsx(n.code,{children:"block_timestamp"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block_timestamp",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 1"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_BLOCK_TIMESTAMP"})," or ",e.jsx(n.code,{children:"DAPP_BLOCK_TIMESTAMP"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The value of ",e.jsx(n.code,{children:"block.timestamp"})," in tests."]}),`
`,e.jsxs(n.h5,{id:"block_difficulty",children:[e.jsx(n.code,{children:"block_difficulty"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block_difficulty",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 0"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_BLOCK_DIFFICULTY"})," or ",e.jsx(n.code,{children:"DAPP_BLOCK_DIFFICULTY"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The value of ",e.jsx(n.code,{children:"block.difficulty"})," in tests."]}),`
`,e.jsxs(n.h5,{id:"gas_reports",children:[e.jsx(n.code,{children:"gas_reports"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas_reports",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: array of strings (contract names)"}),`
`,e.jsx(n.li,{children:'Default: ["*"]'}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_GAS_REPORTS"})," or ",e.jsx(n.code,{children:"DAPP_GAS_REPORTS"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The contracts to print gas reports for."}),`
`,e.jsxs(n.h5,{id:"no_storage_caching",children:[e.jsx(n.code,{children:"no_storage_caching"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#no_storage_caching",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_NO_STORAGE_CACHING"})," or ",e.jsx(n.code,{children:"DAPP_NO_STORAGE_CACHING"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["If set to ",e.jsx(n.code,{children:"true"}),", then block data from RPC endpoints in tests will not be cached. Otherwise, the data is cached to ",e.jsx(n.code,{children:"$HOME/.foundry/cache/<chain id>/<block number>"}),"."]}),`
`,e.jsxs(n.h5,{id:"rpc_storage_caching",children:[e.jsx(n.code,{children:"[rpc_storage_caching]"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc_storage_caching",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"[rpc_storage_caching]"})," block determines what RPC endpoints are cached."]}),`
`,e.jsxs(n.h6,{id:"rpc_storage_cachingchains",children:[e.jsx(n.code,{children:"rpc_storage_caching.chains"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc_storage_cachingchains",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string or array of strings (chain names)"}),`
`,e.jsx(n.li,{children:"Default: all"}),`
`,e.jsx(n.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(n.p,{children:"Determines what chains are cached. By default, all chains are cached."}),`
`,e.jsx(n.p,{children:"Valid values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'"all"'}),`
`,e.jsxs(n.li,{children:["A list of chain names, e.g. ",e.jsx(n.code,{children:'["optimism", "mainnet"]'})]}),`
`]}),`
`,e.jsxs(n.h6,{id:"rpc_storage_cachingendpoints",children:[e.jsx(n.code,{children:"rpc_storage_caching.endpoints"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc_storage_cachingendpoints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string or array of regex patterns (to match URLs)"}),`
`,e.jsx(n.li,{children:"Default: remote"}),`
`,e.jsx(n.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(n.p,{children:"Determines what RPC endpoints are cached. By default, only remote endpoints are cached."}),`
`,e.jsx(n.p,{children:"Valid values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"all"}),`
`,e.jsx(n.li,{children:"remote (default)"}),`
`,e.jsxs(n.li,{children:["A list of regex patterns, e.g. ",e.jsx(n.code,{children:'["localhost"]'})]}),`
`]}),`
`,e.jsxs(n.h5,{id:"eth_rpc_url",children:[e.jsx(n.code,{children:"eth_rpc_url"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#eth_rpc_url",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_ETH_RPC_URL"})," or ",e.jsx(n.code,{children:"DAPP_ETH_RPC_URL"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The url of the rpc server that should be used for any rpc calls."}),`
`,e.jsxs(n.h5,{id:"etherscan_api_key",children:[e.jsx(n.code,{children:"etherscan_api_key"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#etherscan_api_key",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_ETHERSCAN_API_KEY"})," or ",e.jsx(n.code,{children:"DAPP_ETHERSCAN_API_KEY"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The etherscan API key for RPC calls."}),`
`,e.jsxs(n.h5,{id:"match-test",children:[e.jsx(n.code,{children:"match-test"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#match-test",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: regex"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_MATCH_TEST"})," or ",e.jsx(n.code,{children:"DAPP_MATCH_TEST"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Only run test methods matching regex.
Equivalent to `,e.jsx(n.code,{children:"forge test --match-test <TEST_PATTERN>"})]}),`
`,e.jsxs(n.h5,{id:"no-match-test",children:[e.jsx(n.code,{children:"no-match-test"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#no-match-test",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: regex"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_NO_MATCH_TEST"})," or ",e.jsx(n.code,{children:"DAPP_NO_MATCH_TEST"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Only run test methods not matching regex.
Equivalent to `,e.jsx(n.code,{children:"forge test --no-match-test <TEST_PATTERN_INVERSE>"})]}),`
`,e.jsxs(n.h5,{id:"match-contract",children:[e.jsx(n.code,{children:"match-contract"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#match-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: regex"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_MATCH_CONTRACT"})," or ",e.jsx(n.code,{children:"DAPP_MATCH_CONTRACT"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Only run test methods in contracts matching regex.
Equivalent to `,e.jsx(n.code,{children:"forge test --match-contract <CONTRACT_PATTERN>"})]}),`
`,e.jsxs(n.h5,{id:"no-match-contract",children:[e.jsx(n.code,{children:"no-match-contract"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#no-match-contract",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: regex"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_NO_MATCH_CONTRACT"})," or ",e.jsx(n.code,{children:"DAPP_NO_MATCH_CONTRACT"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Only run test methods in contracts not matching regex.
Equivalent to `,e.jsx(n.code,{children:"forge test --no-match-contract <CONTRACT_PATTERN_INVERSE>"})]}),`
`,e.jsxs(n.h5,{id:"match-path",children:[e.jsx(n.code,{children:"match-path"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#match-path",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: regex"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_MATCH_PATH"})," or ",e.jsx(n.code,{children:"DAPP_MATCH_PATH"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Only runs test methods on files matching the path.
Equivalent to `,e.jsx(n.code,{children:"forge test --match-path <PATH_PATTERN>"})]}),`
`,e.jsxs(n.h5,{id:"no-match-path",children:[e.jsx(n.code,{children:"no-match-path"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#no-match-path",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: regex"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_NO_MATCH_PATH"})," or ",e.jsx(n.code,{children:"DAPP_NO_MATCH_PATH"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Only runs test methods on files not matching the path.
Equivalent to `,e.jsx(n.code,{children:"forge test --no-match-path <PATH_PATTERN_INVERSE>"})]}),`
`,e.jsxs(n.h5,{id:"threads",children:[e.jsx(n.code,{children:"threads"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#threads",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_THREADS"})]}),`
`]}),`
`,e.jsx(n.p,{children:`Number of threads to use.
Not set or zero specifies the number of logical cores.`}),`
`,e.jsxs(n.h5,{id:"show_progress",children:[e.jsx(n.code,{children:"show_progress"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#show_progress",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_SHOW_PROGRESS"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Whether to show test execution progress."}),`
`,e.jsxs(n.h5,{id:"block_gas_limit",children:[e.jsx(n.code,{children:"block_gas_limit"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#block_gas_limit",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_BLOCK_GAS_LIMIT"})," or ",e.jsx(n.code,{children:"DAPP_BLOCK_GAS_LIMIT"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The block.gaslimit value during EVM execution."}),`
`,e.jsxs(n.h5,{id:"memory_limit",children:[e.jsx(n.code,{children:"memory_limit"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#memory_limit",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 33554432"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_MEMORY_LIMIT"})," or ",e.jsx(n.code,{children:"DAPP_MEMORY_LIMIT"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The memory limit of the EVM in bytes."}),`
`,e.jsxs(n.h5,{id:"names",children:[e.jsx(n.code,{children:"names"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#names",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_NAMES"})," or ",e.jsx(n.code,{children:"DAPP_NAMES"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Print compiled contract names."}),`
`,e.jsxs(n.h5,{id:"sizes",children:[e.jsx(n.code,{children:"sizes"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sizes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_SIZES"})," or ",e.jsx(n.code,{children:"DAPP_SIZES"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Print compiled contract sizes."}),`
`,e.jsxs(n.h5,{id:"rpc_endpoints",children:[e.jsx(n.code,{children:"rpc_endpoints"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rpc_endpoints",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: table of RPC endpoints"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsx(n.li,{children:"Environment: none"}),`
`]}),`
`,e.jsx(n.p,{children:"This section lives outside of profiles and defines a table of RPC endpoints, where the key specifies the RPC endpoints's name and the value is the RPC endpoint itself."}),`
`,e.jsxs(n.p,{children:["The value can either be a valid RPC endpoint or a reference to an environment variable (wrapped with in ",e.jsx(n.code,{children:"${}"}),")."]}),`
`,e.jsxs(n.p,{children:["These RPC endpoints can be used in tests and Solidity scripts (see ",e.jsx(n.a,{href:"/reference/cheatcodes/rpc",children:e.jsx(n.code,{children:"vm.rpc"})}),")."]}),`
`,e.jsxs(n.p,{children:["The following example defines an endpoint named ",e.jsx(n.code,{children:"optimism"})," and an endpoint named ",e.jsx(n.code,{children:"mainnet"})," that references an environment variable ",e.jsx(n.code,{children:"RPC_MAINNET"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"rpc_endpoints"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"optimism = "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"https://optimism.alchemyapi.io/v2/..."'})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"mainnet = "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"${RPC_MAINNET}"'})]})]})})}),`
`,e.jsxs(n.h5,{id:"prompt_timeout",children:[e.jsx(n.code,{children:"prompt_timeout"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#prompt_timeout",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 120"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_PROMPT_TIMEOUT"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The number of seconds to wait before ",e.jsx(n.code,{children:"vm.prompt"})," reverts with a timeout."]}),`
`,e.jsxs(n.h3,{id:"fuzz",children:["Fuzz",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fuzz",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Configuration values for ",e.jsx(n.code,{children:"[fuzz]"})," section."]}),`
`,e.jsxs(n.h5,{id:"runs",children:[e.jsx(n.code,{children:"runs"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#runs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 256"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_RUNS"})," or ",e.jsx(n.code,{children:"DAPP_FUZZ_RUNS"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The amount of fuzz runs to perform for each fuzz test case. Higher values gives more confidence in results at the cost of testing speed."}),`
`,e.jsxs(n.h5,{id:"max_test_rejects",children:[e.jsx(n.code,{children:"max_test_rejects"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#max_test_rejects",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 65536"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_MAX_TEST_REJECTS"})]}),`
`]}),`
`,e.jsx(n.p,{children:`The maximum number of combined inputs that may be rejected before the test as a whole aborts.
"Global" filters apply to the whole test case. If the test case is rejected, the whole thing is regenerated.`}),`
`,e.jsxs(n.h5,{id:"seed",children:[e.jsx(n.code,{children:"seed"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#seed",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string (hexadecimal)"}),`
`,e.jsx(n.li,{children:"Default: none"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_SEED"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Optional seed for the fuzzing RNG algorithm."}),`
`,e.jsxs(n.h5,{id:"dictionary_weight",children:[e.jsx(n.code,{children:"dictionary_weight"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dictionary_weight",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer (between 0 and 100)"}),`
`,e.jsx(n.li,{children:"Default: 40"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_DICTIONARY_WEIGHT"})]}),`
`]}),`
`,e.jsxs(n.p,{children:['The weight of the dictionary. A higher dictionary weight will bias the fuzz inputs towards "interesting" values, e.g. boundary values like ',e.jsx(n.code,{children:"type(uint256).max"})," or contract addresses from your environment."]}),`
`,e.jsxs(n.h5,{id:"include_storage",children:[e.jsx(n.code,{children:"include_storage"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#include_storage",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: true"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_INCLUDE_STORAGE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The flag indicating whether to include values from storage."}),`
`,e.jsxs(n.h5,{id:"include_push_bytes",children:[e.jsx(n.code,{children:"include_push_bytes"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#include_push_bytes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: true"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_INCLUDE_PUSH_BYTES"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The flag indicating whether to include push bytes values."}),`
`,e.jsxs(n.h5,{id:"gas_report_samples",children:[e.jsx(n.code,{children:"gas_report_samples"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas_report_samples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 256"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_GAS_REPORT_SAMPLES"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Number of runs to use for generating gas report."}),`
`,e.jsxs(n.h5,{id:"failure_persist_dir",children:[e.jsx(n.code,{children:"failure_persist_dir"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#failure_persist_dir",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string (path)"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"./cache/fuzz"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_FAILURE_PERSIST_DIR"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Path where fuzz failures are recorded and replayed."}),`
`,e.jsxs(n.h5,{id:"failure_persist_file",children:[e.jsx(n.code,{children:"failure_persist_file"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#failure_persist_file",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"failures"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_FAILURE_PERSIST_FILE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Name of the file to record fuzz failures."}),`
`,e.jsxs(n.h5,{id:"show_logs",children:[e.jsx(n.code,{children:"show_logs"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#show_logs",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_SHOW_LOGS"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The flag indicates whether to display console logs in fuzz tests or not. Note that in order to enable displaying console logs, you'll need to set ",e.jsx(n.code,{children:"show_logs = true"})," and then use ",e.jsx(n.code,{children:"forge test -vv"})," or set ",e.jsx(n.code,{children:"verbosity >= 2"}),"."]}),`
`,e.jsxs(n.h3,{id:"invariant",children:["Invariant",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#invariant",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Configuration values for ",e.jsx(n.code,{children:"[invariant]"})," section."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["ℹ️ ",e.jsx(n.strong,{children:"Note"})]}),`
`,e.jsxs(n.p,{children:["Configuration for ",e.jsx(n.code,{children:"[invariant]"}),` section has the fallback logic
for common config entries (`,e.jsx(n.code,{children:"runs"}),", ",e.jsx(n.code,{children:"seed"}),", ",e.jsx(n.code,{children:"dictionary_weight"})," etc)."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"If the entries are not set in either section, then the defaults will be used."}),`
`,e.jsxs(n.li,{children:["If the entries are set in the ",e.jsx(n.code,{children:"[fuzz]"})," section, but are not set in the ",e.jsx(n.code,{children:"[invariant]"}),`
section, these values will automatically be set to the values specified in
the `,e.jsx(n.code,{children:"[fuzz]"})," section."]}),`
`,e.jsxs(n.li,{children:["For any profile other than ",e.jsx(n.code,{children:"default"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If at least one entry is set in the ",e.jsx(n.code,{children:"[invariant]"}),` (same as
`,e.jsx(n.code,{children:"[profile.default.invariant]"}),`) section, then the values from
`,e.jsx(n.code,{children:"[invariant]"})," section will be used, including defaults."]}),`
`,e.jsxs(n.li,{children:["If no entry is set in the ",e.jsx(n.code,{children:"[invariant]"}),` section, but there are
entries in the `,e.jsx(n.code,{children:"[fuzz]"})," (same as ",e.jsx(n.code,{children:"[profile.default.fuzz]"}),`) section,
then the values from the `,e.jsx(n.code,{children:"[fuzz]"})," section will be used."]}),`
`,e.jsx(n.li,{children:`If it's none of the cases described above, then the defaults
will be used.`}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.h5,{id:"runs-1",children:[e.jsx(n.code,{children:"runs"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#runs-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 256"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_RUNS"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The number of runs that must execute for each invariant test group. See also ",e.jsx(n.a,{href:"#runs",children:"fuzz.runs"})]}),`
`,e.jsxs(n.h5,{id:"depth",children:[e.jsx(n.code,{children:"depth"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#depth",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 500"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_DEPTH"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The number of calls executed to attempt to break invariants in one run."}),`
`,e.jsxs(n.h5,{id:"fail_on_revert",children:[e.jsx(n.code,{children:"fail_on_revert"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fail_on_revert",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_FAIL_ON_REVERT"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Fails the invariant fuzzing if a revert occurs."}),`
`,e.jsxs(n.h5,{id:"call_override",children:[e.jsx(n.code,{children:"call_override"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#call_override",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_CALL_OVERRIDE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Overrides unsafe external calls when running invariant tests, useful for e.g. performing reentrancy checks."}),`
`,e.jsxs(n.h5,{id:"dictionary_weight-1",children:[e.jsx(n.code,{children:"dictionary_weight"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#dictionary_weight-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer (between 0 and 100)"}),`
`,e.jsx(n.li,{children:"Default: 80"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_DICTIONARY_WEIGHT"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The weight of the dictionary. See also ",e.jsx(n.a,{href:"#dictionary_weight",children:"fuzz.dictionary_weight"})]}),`
`,e.jsxs(n.h5,{id:"include_storage-1",children:[e.jsx(n.code,{children:"include_storage"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#include_storage-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: true"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_INCLUDE_STORAGE"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The flag indicating whether to include values from storage. See also ",e.jsx(n.a,{href:"#include_storage",children:"fuzz.include_storage"})]}),`
`,e.jsxs(n.h5,{id:"include_push_bytes-1",children:[e.jsx(n.code,{children:"include_push_bytes"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#include_push_bytes-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: true"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FUZZ_INCLUDE_PUSH_BYTES"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The flag indicating whether to include push bytes values. See also ",e.jsx(n.a,{href:"#include_push_bytes",children:"fuzz.include_push_bytes"})]}),`
`,e.jsxs(n.h5,{id:"shrink_run_limit",children:[e.jsx(n.code,{children:"shrink_run_limit"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#shrink_run_limit",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 5000"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_SHRINK_RUN_LIMIT"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The maximum number of attempts to shrink a failed the sequence. Shrink process is disabled if set to 0."}),`
`,e.jsxs(n.h5,{id:"max_assume_rejects",children:[e.jsx(n.code,{children:"max_assume_rejects"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#max_assume_rejects",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 65536"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_MAX_ASSUME_REJECTS"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The maximum number of rejects via ",e.jsx(n.code,{children:"vm.assume"})," which can be encountered during a single invariant run."]}),`
`,e.jsxs(n.h5,{id:"gas_report_samples-1",children:[e.jsx(n.code,{children:"gas_report_samples"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gas_report_samples-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: integer"}),`
`,e.jsx(n.li,{children:"Default: 256"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_GAS_REPORT_SAMPLES"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Number of runs to use for generating gas report."}),`
`,e.jsxs(n.h5,{id:"failure_persist_dir-1",children:[e.jsx(n.code,{children:"failure_persist_dir"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#failure_persist_dir-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string (path)"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"./cache/invariant"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_FAILURE_PERSIST_DIR"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Path where invariant failures are recorded and replayed."}),`
`,e.jsxs(n.h5,{id:"show_metrics",children:[e.jsx(n.code,{children:"show_metrics"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#show_metrics",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: boolean"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_INVARIANT_SHOW_METRICS"})]}),`
`]}),`
`,e.jsx(n.p,{children:"The flag indicating whether to collect and display fuzzed selectors metrics in test report."})]})}function t(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{t as default,c as frontmatter};
