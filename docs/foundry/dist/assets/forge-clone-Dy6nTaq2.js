import{j as e}from"./index-D5UbER3f.js";import o from"./common-options-GfkPOrEd.js";import{u as r}from"./index-CZxYc6i7.js";const t=void 0;function s(i){const n={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"forge-clone",children:["forge clone",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-clone",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"forge-clone - Clone an on-chain verified contract as a Forge project."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forge clone"})," [",e.jsx(n.em,{children:"options"}),"] ",e.jsx(n.em,{children:"address"})," [",e.jsx(n.em,{children:"root"}),"]"]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Creates a new Forge project by cloning the source code of an on-chain verified contract in the directory ",e.jsx(n.em,{children:"root"})," (by default the current working directory)."]}),`
`,e.jsxs(n.p,{children:["By default, ",e.jsx(n.code,{children:"forge clone"})," clones contracts from Ethereum mainnet (via Etherscan), but it is also possible to clone from other EVM-compatible blockchains that foundry supports, e.g., BNB Smart Chain (BSC), by specifying chain ID: ",e.jsx(n.code,{children:"--chain <ChainID>"}),"."]}),`
`,e.jsxs(n.p,{children:["An Etherscan API key is required and can be passed via ",e.jsx(n.code,{children:"--etherscan-api-key <API_KEY>"}),"."]}),`
`,e.jsxs(n.p,{children:["Just as ",e.jsx(n.code,{children:"forge init"}),", ",e.jsx(n.code,{children:"forge clone"})," will by default initialize a new git repository and install some submodules."]}),`
`,e.jsxs(n.p,{children:["If you do not want this behavior, pass ",e.jsx(n.code,{children:"--no-git"}),"."]}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"clone-options",children:["Clone Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#clone-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-c"})," ",e.jsx(n.em,{children:"chain_id"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--chain"})," ",e.jsx(n.em,{children:"chain_id"}),e.jsx(n.br,{}),`
`,"    Specify the name or EIP-155 ID of the chain to clone contract from."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-e"})," ",e.jsx(n.em,{children:"api_key"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--etherscan-api-key"})," ",e.jsx(n.em,{children:"api_key"}),e.jsx(n.br,{}),`
`,"    Specify the API key of Etherscan (or equivalent)."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-remappings-txt"}),e.jsx(n.br,{}),`
`,"    Put remappings inside the ",e.jsx(n.code,{children:"foundry.toml"})," configuration file, instead of generating a separate ",e.jsx(n.code,{children:"remappings.txt"})," file."]}),`
`,e.jsxs(n.h4,{id:"vcs-options",children:["VCS Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vcs-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--commit"}),e.jsx(n.br,{}),`
`,"    Create an initial commit."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-git"}),e.jsx(n.br,{}),`
`,"    Do not create a git repository."]}),`
`,e.jsxs(n.h4,{id:"display-options",children:["Display Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#display-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-q"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--quiet"}),e.jsx(n.br,{}),`
`,"    Do not print any messages."]}),`
`,e.jsx(o,{}),`
`,e.jsxs(n.h3,{id:"examples",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Clone UniswapV3Pool contract from Ethereum mainnet:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x8f8EF111B67C04Eb1641f5ff19EE54Cda062f163"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" UniswapV3Pool"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --etherscan-api-key"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" YourApiKeyToken"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Clone a contract, but do not create a git repository:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --no-git"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x8f8EF111B67C04Eb1641f5ff19EE54Cda062f163"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" UniswapV3Pool"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --etherscan-api-key"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" YourApiKeyToken"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Clone a contract from BNB Smart Chain (BSC):"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" clone"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --chain"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" bsc"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" 0x7862D9B4bE2156B15d54F41ee4EDE2d5b0b455e4"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" UniswapV3Pool"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --etherscan-api-key"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" YourApiKeyToken"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"metadata",children:["Metadata",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#metadata",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The cloned Forge project comes with an additional ",e.jsx(n.code,{children:".clone.meta"}),` metadata file in the root directory.
`,e.jsx(n.code,{children:"clone.meta"}),` is a compact JSON data file that contains the information of the on-chain contract instance.
The metadata includes:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"path"}),": The path to the source file that contains the declaration of contract deployed on chain."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"targetContract"}),": The name of the on-chain contract in the source file."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"address"}),": The address of the contract deployed on chain."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"chainId"}),": EIP-155 ID of the chain where the contract is deployed."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"creationTransaction"}),": The hash of the transaction that deployed the contract."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"deployer"}),": The account address who is the sender of the ",e.jsx(n.code,{children:"creationTransaction"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"constructorArguments"}),": The constructor arguments that is used when deploying the contract."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"storageLayout"}),": The storage layout of the on-chain contract (if the corresponding contract compiler version supports exporting storage layout)."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"see-also",children:["SEE ALSO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/forge/reference/overview",children:"forge"})})]})}function h(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{h as default,t as frontmatter};
