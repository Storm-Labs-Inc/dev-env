import{j as e}from"./index-D5UbER3f.js";import{u as r}from"./index-CZxYc6i7.js";const d=void 0;function i(s){const n={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"anvil",children:["anvil",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#anvil",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"anvil - Create a local testnet node for deploying and testing smart contracts. It can also be used to fork other EVM compatible networks."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil"})," [",e.jsx(n.em,{children:"options"}),"]"]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Create a local testnet node for deploying and testing smart contracts. It can also be used to fork other EVM compatible networks."}),`
`,e.jsx(n.p,{children:"This section covers an extensive list of information about Mining Modes, Supported Transport Layers, Supported RPC Methods, Anvil flags and their usages. You can run multiple flags at the same time."}),`
`,e.jsxs(n.h4,{id:"mining-modes",children:["Mining Modes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#mining-modes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Mining modes refer to how frequent blocks are mined using Anvil. By default, it automatically generates a new block as soon as a transaction is submitted."}),`
`,e.jsxs(n.p,{children:["You can change this setting to interval mining if you will, which means that a new block will be generated in a given period of time selected by the user. If you want to go for this type of mining, you can do it by adding the ",e.jsx(n.code,{children:"--block-time <block-time-in-seconds>"})," flag, like in the following example."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Produces a new block every 10 seconds"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"anvil"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --block-time"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 10"})]})]})})}),`
`,e.jsx(n.p,{children:"There's also a third mining mode called never. In this case, it disables auto and interval mining, and mine on demand instead. You can do this by typing:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Enables never mining mode"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"anvil"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --no-mining"})]})]})})}),`
`,e.jsxs(n.p,{children:["To speed up the finalization of blocks, you can use the ",e.jsx(n.code,{children:"--slots-in-an-epoch"})," flag with a value of ",e.jsx(n.code,{children:"1"})," for example. This will lead to the block at height ",e.jsx(n.code,{children:"N-2"})," being finalized, where ",e.jsx(n.code,{children:"N"})," is the latest block."]}),`
`,e.jsxs(n.h4,{id:"supported-transport-layers",children:["Supported Transport Layers",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported-transport-layers",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"HTTP and Websocket connections are supported. The server listens on port 8545 by default, but it can be changed by running the following command:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"anvil"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --port"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" <"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"POR"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"T"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:">"})]})})})}),`
`,e.jsxs(n.h4,{id:"default-create2-deployer",children:["Default CREATE2 Deployer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#default-create2-deployer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Anvil, when used without forking, includes the ",e.jsx(n.a,{href:"https://github.com/Arachnid/deterministic-deployment-proxy",children:"default CREATE2 deployer proxy"})," at the address ",e.jsx(n.code,{children:"0x4e59b44847b379578588920ca78fbf26c0b4956c"}),"."]}),`
`,e.jsx(n.p,{children:"This allows you to test CREATE2 deployments locally without forking."}),`
`,e.jsxs(n.h4,{id:"supported-rpc-methods",children:["Supported RPC Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported-rpc-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h5,{id:"standard-methods",children:["Standard Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#standard-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The standard methods are based on ",e.jsx(n.a,{href:"https://ethereum.org/en/developers/docs/apis/json-rpc/",children:"this"})," reference."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"web3_clientVersion"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"web3_sha3"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_chainId"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_networkId"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_gasPrice"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_accounts"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_blockNumber"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getBalance"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getStorageAt"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getBlockByHash"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getBlockByNumber"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getTransactionCount"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getBlockTransactionCountByHash"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getBlockTransactionCountByNumber"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getUncleCountByBlockHash"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getUncleCountByBlockNumber"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getCode"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_sign"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_signTypedData_v4"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_sendTransaction"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_sendRawTransaction"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_call"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_createAccessList"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_estimateGas"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getTransactionByHash"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getTransactionByBlockHashAndIndex"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getTransactionByBlockNumberAndIndex"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getTransactionReceipt"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getUncleByBlockHashAndIndex"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getUncleByBlockNumberAndIndex"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getLogs"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_newFilter"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getFilterChanges"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_newBlockFilter"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_newPendingTransactionFilter"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getFilterLogs"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_uninstallFilter"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getWork"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_subscribe"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_unsubscribe"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_syncing"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_submitWork"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_submitHashrate"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_feeHistory"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"eth_getProof"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"debug_traceTransaction"}),`
Use `,e.jsx(n.code,{children:"anvil --steps-tracing"})," to get ",e.jsx(n.code,{children:"structLogs"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"debug_traceCall"}),`
Note that non-standard traces are not yet supported. This means you can't pass any arguments to the `,e.jsx(n.code,{children:"trace"})," parameter."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"trace_transaction"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"trace_block"})}),`
`]}),`
`]}),`
`,e.jsxs(n.h5,{id:"custom-methods",children:["Custom Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#custom-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"anvil_*"})," namespace is an alias for ",e.jsx(n.code,{children:"hardhat"}),". For more info, refer to the ",e.jsx(n.a,{href:"https://hardhat.org/hardhat-network/reference#hardhat-network-methods",children:"Hardhat documentation"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_impersonateAccount"}),`
Send transactions impersonating an externally owned account or contract.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_stopImpersonatingAccount"}),`
Stops impersonating an account or contract if previously set with `,e.jsx(n.code,{children:"anvil_impersonateAccount"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_autoImpersonateAccount"}),`
Accepts `,e.jsx(n.code,{children:"true"})," to enable auto impersonation of accounts, and ",e.jsx(n.code,{children:"false"})," to disable it. When enabled, any transaction's sender will be automatically impersonated. Same as ",e.jsx(n.code,{children:"anvil_impersonateAccount"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_getAutomine"}),`
Returns true if automatic mining is enabled, and false if it is not.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_mine"}),`
Mines a series of blocks.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_dropTransaction"}),`
Removes transactions from the pool.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_reset"}),`
Reset the fork to a fresh forked state, and optionally update the fork config.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setRpcUrl"}),`
Sets the backend RPC URL.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setBalance"}),`
Modifies the balance of an account.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setCode"}),`
Sets the code of a contract.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setNonce"}),`
Sets the nonce of an address.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setStorageAt"}),`
Writes a single slot of the account's storage.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setCoinbase"}),`
Sets the coinbase address.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setLoggingEnabled"}),`
Enable or disable logging.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setMinGasPrice"}),`
Set the minimum gas price for the node.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setNextBlockBaseFeePerGas"}),`
Sets the base fee of the next block.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setChainId"}),`
Sets the chain ID of the current EVM instance.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_dumpState"}),`
Returns a hex string representing the complete state of the chain. Can be re-imported into a fresh/restarted instance of Anvil to reattain the same state.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_loadState"}),`
When given a hex string previously returned by `,e.jsx(n.code,{children:"anvil_dumpState"}),", merges the contents into the current chain state. Will overwrite any colliding accounts/storage slots."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_nodeInfo"}),`
Retrieves the configuration params for the currently running Anvil node.`]}),`
`,e.jsxs(n.h5,{id:"special-methods",children:["Special Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#special-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The special methods come from Ganache. You can take a look at the documentation ",e.jsx(n.a,{href:"https://github.com/trufflesuite/ganache-cli-archive/blob/master/README.md",children:"here"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_setAutomine"}),`
Enables or disables, based on the single boolean argument, the automatic mining of new blocks with each new transaction submitted to the network.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_setIntervalMining"}),`
Sets the mining behavior to interval with the given interval (seconds).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_snapshot"}),`
Snapshot the state of the blockchain at the current block.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_revert"}),`
Revert the state of the blockchain to a previous snapshot. Takes a single parameter, which is the snapshot id to revert to.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_increaseTime"}),`
Jump forward in time by the given amount of time, in seconds.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_setNextBlockTimestamp"}),`
Similar to `,e.jsx(n.code,{children:"evm_increaseTime"})," but takes the exact timestamp that you want in the next block."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_setBlockTimestampInterval"}),`
Similar to `,e.jsx(n.code,{children:"evm_increaseTime"})," but sets a block timestamp ",e.jsx(n.code,{children:"interval"}),". The timestamp of the next block will be computed as ",e.jsx(n.code,{children:"lastBlock_timestamp + interval"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_setBlockGasLimit"}),`
Sets the block gas limit for the following blocks.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_removeBlockTimestampInterval"}),`
Removes an `,e.jsx(n.code,{children:"anvil_setBlockTimestampInterval"})," if it exists."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"evm_mine"}),`
Mine a single block.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil_enableTraces"}),`
Turn on call traces for transactions that are returned to the user when they execute a transaction (instead of just txhash/receipt).`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"eth_sendUnsignedTransaction"}),`
Execute a transaction regardless of signature status.`]}),`
`,e.jsxs(n.p,{children:["For the next three methods, make sure to read ",e.jsx(n.a,{href:"https://geth.ethereum.org/docs/rpc/ns-txpool",children:"Geth's documentation"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"txpool_status"}),`
Returns the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"txpool_inspect"}),`
Returns a summary of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"txpool_content"}),`
Returns the details of all transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.`]}),`
`,e.jsxs(n.h5,{id:"otterscan-methods",children:["Otterscan Methods",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#otterscan-methods",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ots_*"})," namespace implements the ",e.jsx(n.a,{href:"https://docs.otterscan.io/api-docs/ots-api",children:"Otterscan specification"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_getApiLevel"}),`
Used by Otterscan to check if it's connecting to a compatible node and display a friendly message if it is not.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_getInternalOperations"}),`
Returns the internal ETH transfers inside a transaction.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_hasCode"}),`
Check if a certain address contains a deployed code.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_getTransactionError"}),`
Extract the transaction raw error output.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_traceTransaction"}),`
Extract all variations of calls, contract creation and self-destructs and returns a call tree.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_getBlockDetails"}),`
Tailor-made and expanded version of eth_getBlock* for block details page in Otterscan.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_getBlockTransactions"}),`
Get paginated transactions for a certain block, And removes some verbose fields such logs.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_searchTransactionsBefore"}),`
Gets paginated inbound/outbound transaction calls for a certain address, and before a given target block.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_searchTransactionsAfter"}),`
Gets paginated inbound/outbound transaction calls for a certain address, and after a given target block.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_getTransactionBySenderAndNonce"}),`
Gets the transaction hash for a certain sender address, given its nonce.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ots_getContractCreator"}),`
Gets the transaction hash and the address which created a contract.`]}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"general-options",children:["General Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-a, --accounts <ACCOUNTS>"}),`
     Set the number of accounts. [default: 10]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--auto-impersonate"}),`
     Enable autoImpersonate on startup.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-b, --block-time <block-time>"}),`
     Block time in seconds for interval mining.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--balance <BALANCE>"}),`
     Set the balance of the accounts. [default: 10000]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--derivation-path <DERIVATION_PATH>"}),`
     Set the derivation path of the child key to be derived. [default: m/44'/60'/0'/0/]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-h, --help"}),`
     Print help information.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--hardfork <HARDFORK>"}),`
     Choose the EVM hardfork to use e.g. `,e.jsx(n.code,{children:"prague"}),", ",e.jsx(n.code,{children:"cancun"}),", ",e.jsx(n.code,{children:"shanghai"}),", ",e.jsx(n.code,{children:"paris"}),", ",e.jsx(n.code,{children:"london"}),", etc... [default: latest]"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--init <PATH>"}),`
     Initialize the genesis block with the given `,e.jsx(n.code,{children:"genesis.json"})," file."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-m, --mnemonic <MNEMONIC>"}),`
     BIP39 mnemonic phrase used for generating accounts.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-mining"}),`
     Disable auto and interval mining, and mine on demand instead.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--order <ORDER>"}),`
     How transactions are sorted in the mempool. [default: fees]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-p, --port <PORT>"}),`
     Port number to listen on. [default: 8545]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--steps-tracing"}),`
     Enable steps tracing used for debug calls returning geth-style traces. [aliases: tracing]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--ipc [<PATH>]"}),`
     Starts an IPC endpoint at the given `,e.jsx(n.code,{children:"PATH"})," argument or the default path: unix: ",e.jsx(n.code,{children:"tmp/anvil.ipc"}),", windows: ",e.jsx(n.code,{children:"\\\\.\\pipe\\anvil.ipc"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--silent"}),`
     Don't print anything on startup.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--timestamp <TIMESTAMP>"}),`
     Set the timestamp of the genesis block.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-V, --version"}),`
     Print version information.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--disable-default-create2-deployer"}),`
     Disables deploying the default CREATE2 factory when running Anvil without forking.`]}),`
`,e.jsxs(n.h4,{id:"evm-options",children:["EVM Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evm-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-f, --fork-url <URL>"}),`
     Fetch state over a remote endpoint instead of starting from an empty state.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--fork-block-number <BLOCK>"}),`
     Fetch state from a specific block number over a remote endpoint (Must pass `,e.jsx(n.code,{children:"--fork-url"})," in the same command-line)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--fork-chain-id <CHAIN>"}),`
     Specify chain id to skip fetching it from remote endpoint. This enables offline-start mode.
You still must pass both `,e.jsx(n.code,{children:"--fork-url"})," and ",e.jsx(n.code,{children:"--fork-block-number"}),`, and already have your required state cached on disk, anything missing locally
would be fetched from the remote.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--fork-retry-backoff <BACKOFF>"}),`
     Initial retry backoff on encountering errors.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--fork-transaction-hash <TRANSACTION>"}),`
     Fetch state from a specific transaction hash over a remote endpoint (Must pass `,e.jsx(n.code,{children:"--fork-url"})," in the same command-line)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--retries <retries>"}),`
     Number of retry requests for spurious networks (timed out requests). [default: 5]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--timeout <timeout>"}),`
     Timeout in ms for requests sent to remote JSON-RPC server in forking mode. [default: 45000]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--compute-units-per-second <CUPS>"}),`
     Sets the number of assumed available compute units per second for this provider. [default: 330]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-rate-limit"}),`
     Disables rate limiting for this node's provider. Will always override `,e.jsx(n.code,{children:"--compute-units-per-second"})," if present. [default: false]"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-storage-caching"}),`
     Disables RPC caching; all storage slots are read from the endpoint. This flag overrides the project's configuration file (Must pass --fork-url in the same command-line).`]}),`
`,e.jsxs(n.h4,{id:"executor-environment-config",children:["Executor Environment Config",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#executor-environment-config",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--base-fee <FEE>"}),`
`,e.jsx(n.code,{children:"--block-base-fee-per-gas <FEE>"}),`
     The base fee in a block.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--chain-id <CHAIN_ID>"}),`
     The chain ID. [default: 31337]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--code-size-limit <CODE_SIZE>"}),`
     EIP-170: Contract code size limit in bytes. Useful to increase for tests. [default: 0x6000 (~25kb)]`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--gas-limit <GAS_LIMIT>"}),`
     The block gas limit.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--gas-price <GAS_PRICE>"}),`
     The gas price.`]}),`
`,e.jsxs(n.h4,{id:"server-options",children:["Server Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#server-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--allow-origin <allow-origin>"}),`
     Set the CORS `,e.jsx(n.code,{children:"allow_origin"}),". [default: *]"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-cors"}),`
     Disable CORS.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--host <HOST>"}),`
     The IP address the server will listen on.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--config-out <OUT_FILE>"}),`
     Writes output of `,e.jsx(n.code,{children:"anvil"})," as json to user-specified file."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--prune-history"}),`
     Don't keep full chain history.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-request-size-limit"}),`
     Disable the request size limit. Default is 2MB`]}),`
`,e.jsxs(n.h3,{id:"examples",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Set the number of accounts to 15 and their balance to 300 ETH"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"anvil"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --accounts"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 15"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --balance"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 300"})]})})})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:"Choose the address which will execute the tests"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"anvil"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --sender"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0xC8479C45EE87E0B437c09d3b8FE8ED14ccDa825E"})]})})})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:"Change how transactions are sorted in the mempool to FIFO"}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"anvil"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --order"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" fifo"})]})})})}),`
`,e.jsxs(n.h3,{id:"shell-completions",children:["Shell Completions",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#shell-completions",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"anvil completions"})," ",e.jsx(n.em,{children:"shell"})]}),`
`,e.jsx(n.p,{children:"Generates a shell completions script for the given shell."}),`
`,e.jsx(n.p,{children:"Supported shells are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"bash"}),`
`,e.jsx(n.li,{children:"elvish"}),`
`,e.jsx(n.li,{children:"fish"}),`
`,e.jsx(n.li,{children:"powershell"}),`
`,e.jsx(n.li,{children:"zsh"}),`
`]}),`
`,e.jsxs(n.h4,{id:"examples-1",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples-1",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Generate shell completions script for zsh:",`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"anvil"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" completions"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" zsh"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" >"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" $HOME"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"/.oh-my-zsh/completions/_anvil"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"usage-within-docker",children:["Usage within Docker",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#usage-within-docker",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["In order to run anvil as a service in Github Actions with the ",e.jsx(n.a,{href:"/guides/foundry-in-docker",children:"Docker container"}),", where passing arguments to the entrypoint command is not possible, use the ",e.jsx(n.code,{children:"ANVIL_IP_ADDR"})," environment variable to set the host's IP. ",e.jsx(n.code,{children:"ANVIL_IP_ADDR=0.0.0.0"})," is equivalent to providing the ",e.jsx(n.code,{children:"--host <ip>"})," option."]}),`
`,e.jsxs(n.h4,{id:"using-genesisjson",children:["Using ",e.jsx(n.code,{children:"genesis.json"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#using-genesisjson",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"genesis.json"})," file in Anvil serves a similar purpose as in Geth, defining the network's initial state, consensus rules, and preallocated accounts to ensure all nodes start consistently and maintain network integrity. All values, including balance, gas limit and such, are to be defined as hexadecimals."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chainId"}),": Identifier for the blockchain, unique to each network."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"nonce"}),": A counter used in hashing algorithms to ensure data integrity."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"timestamp"}),": The creation time of the genesis block in Unix time."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"extraData"}),": Additional data that can be included by the creator of the genesis block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gasLimit"}),": The maximum amount of gas that can be used in the block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"difficulty"}),": A measure of how difficult it is to mine a new block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"mixHash"}),": A unique identifier proving a sufficient amount of computation for the block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coinbase"}),": The Ethereum address of the miner who mined this block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stateRoot"}),": The root of the state trie, reflecting the final state after all transactions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"alloc"}),": Allows pre-allocating Ether to a set of addresses with predefined balances."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"number"}),": The block number, with the genesis block being 0."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"gasUsed"}),": The total gas used in the block."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parentHash"}),": The hash of the parent block, all zeros for the genesis block since there is no parent."]}),`
`]}),`
`,e.jsxs(n.p,{children:["A sample for simulating mainnet via genesis can be found ",e.jsx(n.a,{href:"https://github.com/paradigmxyz/reth/blob/8f3e4a15738d8174d41f4aede5570ecead141a77/crates/primitives/res/genesis/mainnet.json",children:"here"}),"."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "chainId"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x2323"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "nonce"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x42"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "timestamp"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x0"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "extraData"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "gasLimit"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x1388"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "difficulty"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x400000000"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "mixHash"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x0000000000000000000000000000000000000000000000000000000000000000"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "coinbase"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x0000000000000000000000000000000000000000"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "stateRoot"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "alloc"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'    "000d836201318ec6899a67540690382780743280"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'      "balance"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0xad78ebc5ac6200000"'})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "number"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x0"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "gasUsed"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x0"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#8DDB8C"},children:'  "parentHash"'}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"0x0000000000000000000000000000000000000000000000000000000000000000"'})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})})]})}function t(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{t as default,d as frontmatter};
