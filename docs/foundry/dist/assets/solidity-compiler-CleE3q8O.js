import{j as e}from"./index-D5UbER3f.js";import{u as s}from"./index-CZxYc6i7.js";const c=void 0;function r(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"solidity-compiler",children:["Solidity compiler",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solidity-compiler",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Configuration related to the behavior of the Solidity compiler."}),`
`,e.jsx(i.strong,{children:"Sections"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#general",children:"General"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#optimizer",children:"Optimizer"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#model-checker",children:"Model Checker"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#compilation-restrictions",children:"Compilation Restrictions"})}),`
`]}),`
`,e.jsxs(i.h3,{id:"general",children:["General",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#general",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Configuration related to the behavior of the Solidity compiler."}),`
`,e.jsxs(i.h5,{id:"remappings",children:[e.jsx(i.code,{children:"remappings"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#remappings",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings (remappings)"}),`
`,e.jsx(i.li,{children:"Default: none"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_REMAPPINGS"})," or ",e.jsx(i.code,{children:"DAPP_REMAPPINGS"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["An array of remappings in the following format: ",e.jsx(i.code,{children:"<name>=<target>"}),"."]}),`
`,e.jsxs(i.p,{children:["A remapping ",e.jsx(i.em,{children:"remaps"})," Solidity imports to different directories. For example, the following remapping"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"@openzeppelin/=node_modules/@openzeppelin/openzeppelin-contracts/"})})})})}),`
`,e.jsx(i.p,{children:"with an import like"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Context"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "@openzeppelin/contracts/utils/Context.sol"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]})})})}),`
`,e.jsx(i.p,{children:"becomes"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Context"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(i.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:' "node_modules/@openzeppelin/openzeppelin-contracts/contracts/utils/Context.sol"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]})})})}),`
`,e.jsxs(i.h5,{id:"auto_detect_remappings",children:[e.jsx(i.code,{children:"auto_detect_remappings"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#auto_detect_remappings",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: true"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_AUTO_DETECT_REMAPPINGS"})," or ",e.jsx(i.code,{children:"DAPP_AUTO_DETECT_REMAPPINGS"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["If enabled, Foundry will automatically try auto-detect remappings by scanning the ",e.jsx(i.code,{children:"libs"})," folder(s)."]}),`
`,e.jsxs(i.p,{children:["If set to ",e.jsx(i.code,{children:"false"}),", only the remappings in ",e.jsx(i.code,{children:"foundry.toml"})," and ",e.jsx(i.code,{children:"remappings.txt"})," are used."]}),`
`,e.jsxs(i.h5,{id:"allow_paths",children:[e.jsx(i.code,{children:"allow_paths"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#allow_paths",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings (paths)"}),`
`,e.jsx(i.li,{children:"Default: none"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_ALLOW_PATHS"})," or ",e.jsx(i.code,{children:"DAPP_ALLOW_PATHS"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["Tells solc to allow reading source files from additional directories. This is mainly relevant for complex workspaces managed by ",e.jsx(i.code,{children:"pnpm"})," or similar."]}),`
`,e.jsxs(i.p,{children:["See also ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/path-resolution.html#allowed-paths",children:"solc allowed-paths"})]}),`
`,e.jsxs(i.h5,{id:"include_paths",children:[e.jsx(i.code,{children:"include_paths"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#include_paths",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings (paths)"}),`
`,e.jsx(i.li,{children:"Default: none"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_INCLUDE_PATHS"})," or ",e.jsx(i.code,{children:"DAPP_INCLUDE_PATHS"})]}),`
`]}),`
`,e.jsx(i.p,{children:"Make an additional source directory available to the default import callback. Use this option if you want to import contracts whose location is not fixed in relation to your main source tree, e.g. third-party libraries installed using a package manager. Can be used multiple times. Can only be used if base path has a non-empty value."}),`
`,e.jsxs(i.p,{children:["See also ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/path-resolution.html",children:"solc path resolution"})]}),`
`,e.jsxs(i.h5,{id:"libraries",children:[e.jsx(i.code,{children:"libraries"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#libraries",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings (libraries)"}),`
`,e.jsx(i.li,{children:"Default: none"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_LIBRARIES"})," or ",e.jsx(i.code,{children:"DAPP_LIBRARIES"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["An array of libraries to link against in the following format: ",e.jsx(i.code,{children:"<file>:<lib>:<address>"}),", for example: ",e.jsx(i.code,{children:"src/MyLibrary.sol:MyLibrary:0xfD88CeE74f7D78697775aBDAE53f9Da1559728E4"}),"."]}),`
`,e.jsxs(i.h5,{id:"solc_version",children:[e.jsx(i.code,{children:"solc_version"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#solc_version",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string (semver)"}),`
`,e.jsx(i.li,{children:"Default: none"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_SOLC_VERSION"})," or ",e.jsx(i.code,{children:"DAPP_SOLC_VERSION"})]}),`
`]}),`
`,e.jsx(i.p,{children:"If specified, overrides the auto-detection system (more below) and uses a single Solidity compiler version for the project."}),`
`,e.jsxs(i.p,{children:["Only strict versions are supported (i.e. ",e.jsx(i.code,{children:"0.8.11"})," is valid, but ",e.jsx(i.code,{children:"^0.8.0"})," is not)."]}),`
`,e.jsxs(i.h5,{id:"auto_detect_solc",children:[e.jsx(i.code,{children:"auto_detect_solc"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#auto_detect_solc",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: true"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_AUTO_DETECT_SOLC"})," or ",e.jsx(i.code,{children:"DAPP_AUTO_DETECT_SOLC"})]}),`
`]}),`
`,e.jsx(i.p,{children:"If enabled, Foundry will automatically try to resolve appropriate Solidity compiler versions to compile your project."}),`
`,e.jsxs(i.p,{children:["This key is ignored if ",e.jsx(i.code,{children:"solc_version"})," is set."]}),`
`,e.jsxs(i.h5,{id:"offline",children:[e.jsx(i.code,{children:"offline"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#offline",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_OFFLINE"})," or ",e.jsx(i.code,{children:"DAPP_OFFLINE"})]}),`
`]}),`
`,e.jsx(i.p,{children:"If enabled, Foundry will not attempt to download any missing solc versions."}),`
`,e.jsxs(i.p,{children:["If both ",e.jsx(i.code,{children:"offline"})," and ",e.jsx(i.code,{children:"auto-detect-solc"})," are set to ",e.jsx(i.code,{children:"true"}),", the required version(s) of solc will be auto detected but any missing versions will ",e.jsx(i.em,{children:"not"})," be installed."]}),`
`,e.jsxs(i.h5,{id:"ignored_warnings_from",children:[e.jsx(i.code,{children:"ignored_warnings_from"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ignored_warnings_from",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings (file paths)"}),`
`,e.jsx(i.li,{children:"Default: none"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_IGNORED_WARNINGS_FROM"})," OR ",e.jsx(i.code,{children:"DAPP_IGNORED_WARNINGS_FROM"})]}),`
`]}),`
`,e.jsx(i.p,{children:`An array of file paths from which warnings should be ignored during the compulation process. This is useful when you have a specific
directories of files that produce known warnings and you wish to suppress these warnings without affecting others.`}),`
`,e.jsx(i.p,{children:"Each entry in the array should be a path to a directory or a specific file. For Example:"}),`
`,e.jsx(i.p,{children:e.jsx(i.code,{children:'ignored_warnings_from = ["path/to/warnings/file1.sol", "path/to/warnings/file2.sol"]'})}),`
`,e.jsx(i.p,{children:"This configuration will cause the compiler to ignore any warnings that originate from the specified paths."}),`
`,e.jsxs(i.h5,{id:"ignored_error_codes",children:[e.jsx(i.code,{children:"ignored_error_codes"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ignored_error_codes",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of integers/strings"}),`
`,e.jsx(i.li,{children:"Default: none for source, SPDX license identifiers and contract size for tests"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_IGNORED_ERROR_CODES"})," or ",e.jsx(i.code,{children:"DAPP_IGNORED_ERROR_CODES"})]}),`
`]}),`
`,e.jsx(i.p,{children:"An array of Solidity compiler error codes to ignore during build, such as warnings."}),`
`,e.jsx(i.p,{children:"Valid values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"license"}),": 1878"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"code-size"}),": 5574"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"func-mutability"}),": 2018"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"unused-var"}),": 2072"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"unused-param"}),": 5667"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"unused-return"}),": 9302"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"virtual-interfaces"}),": 5815"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"missing-receive-ether"}),": 3628"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"shadowing"}),": 2519"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"same-varname"}),": 8760"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"unnamed-return"}),": 6321"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"unreachable"}),": 5740"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"pragma-solidity"}),": 3420"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"constructor-visibility"}),": 2462"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"init-code-size"}),": 3860"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"transient-storage"}),": 2394"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"too-many-warnings"}),": 4591"]}),`
`]}),`
`,e.jsxs(i.h5,{id:"deny_warnings",children:[e.jsx(i.code,{children:"deny_warnings"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deny_warnings",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_DENY_WARNINGS"})," or ",e.jsx(i.code,{children:"DAPP_DENY_WARNINGS"})]}),`
`]}),`
`,e.jsx(i.p,{children:"If enabled, Foundry will treat Solidity compiler warnings as errors, stopping artifacts from being written to disk."}),`
`,e.jsxs(i.h5,{id:"evm_version",children:[e.jsx(i.code,{children:"evm_version"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#evm_version",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`,e.jsx(i.li,{children:"Default: prague"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_EVM_VERSION"})," or ",e.jsx(i.code,{children:"DAPP_EVM_VERSION"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["The EVM version to use during tests. The value ",e.jsx(i.strong,{children:"must"})," be an EVM hardfork name, such as ",e.jsx(i.code,{children:"london"}),", ",e.jsx(i.code,{children:"paris"}),", ",e.jsx(i.code,{children:"shanghai"}),", ",e.jsx(i.code,{children:"cancun"}),", ",e.jsx(i.code,{children:"prague"}),", etc."]}),`
`,e.jsxs(i.p,{children:["If you are relying on a specific EVM version for compatibility reasons you are recommended to pin to it in ",e.jsx(i.code,{children:"foundry.toml"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"evm_version = "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"paris"'})]})})})}),`
`,e.jsxs(i.h5,{id:"revert_strings",children:[e.jsx(i.code,{children:"revert_strings"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#revert_strings",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`,e.jsx(i.li,{children:"Default: default"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_REVERT_STRINGS"})," or ",e.jsx(i.code,{children:"DAPP_REVERT_STRINGS"})]}),`
`]}),`
`,e.jsx(i.p,{children:"Possible values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"default"})," does not inject compiler-generated revert strings and keeps user-supplied ones."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"strip"})," removes all revert strings (if possible, i.e. if literals are used) keeping side-effects."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"debug"})," injects strings for compiler-generated internal reverts, implemented for ABI encoders V1 and V2 for now."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"verboseDebug"})," even appends further information to user-supplied revert strings (not yet implemented)."]}),`
`]}),`
`,e.jsxs(i.h5,{id:"extra_output_files",children:[e.jsx(i.code,{children:"extra_output_files"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extra_output_files",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings"}),`
`,e.jsx(i.li,{children:"Default: none"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Extra output from the Solidity compiler that should be written to files in the artifacts directory."}),`
`,e.jsx(i.p,{children:"Valid values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"metadata"}),": Written as a ",e.jsx(i.code,{children:"metadata.json"})," file in the artifacts directory"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ir"}),": Written as a ",e.jsx(i.code,{children:".ir"})," file in the artifacts directory"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"irOptimized"}),": Written as a ",e.jsx(i.code,{children:".iropt"})," file in the artifacts directory"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"ewasm"}),": Written as a ",e.jsx(i.code,{children:".ewasm"})," file in the artifacts directory"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"evm.assembly"}),": Written as a ",e.jsx(i.code,{children:".asm"})," file in the artifacts directory"]}),`
`]}),`
`,e.jsxs(i.h5,{id:"extra_output",children:[e.jsx(i.code,{children:"extra_output"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#extra_output",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings"}),`
`,e.jsx(i.li,{children:"Default: see below"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Extra output to include in the contract's artifact."}),`
`,e.jsx(i.p,{children:"The following values are always set, since they're required by Forge:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"extra_output = ["})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "abi"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "evm.bytecode"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "evm.deployedBytecode"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'  "evm.methodIdentifiers"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})})]})})}),`
`,e.jsxs(i.p,{children:["For a list of valid values, see the ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/using-the-compiler.html#input-description",children:"Solidity docs"})," (search for: ",e.jsx(i.em,{children:"The available output types are as follows"}),")."]}),`
`,e.jsxs(i.h5,{id:"bytecode_hash",children:[e.jsx(i.code,{children:"bytecode_hash"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bytecode_hash",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`,e.jsx(i.li,{children:"Default: ipfs"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_BYTECODE_HASH"})," or ",e.jsx(i.code,{children:"DAPP_BYTECODE_HASH"})]}),`
`]}),`
`,e.jsx(i.p,{children:"Determines the hash method for the metadata hash that is appended to the bytecode."}),`
`,e.jsx(i.p,{children:"Valid values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"ipfs (default)"}),`
`,e.jsx(i.li,{children:"bzzr1"}),`
`,e.jsx(i.li,{children:"none"}),`
`]}),`
`,e.jsxs(i.h5,{id:"sparse_mode",children:[e.jsx(i.code,{children:"sparse_mode"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sparse_mode",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_SPARSE_MODE"})," or ",e.jsx(i.code,{children:"DAPP_SPARSE_MODE"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["Enables ",e.jsx(i.a,{href:"/forge/reference/forge-build#sparse-mode-experimental",children:"sparse mode"})," for builds."]}),`
`,e.jsxs(i.h3,{id:"optimizer",children:["Optimizer",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimizer",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Configuration related to the Solidity optimizer."}),`
`,e.jsxs(i.h5,{id:"optimizer-1",children:[e.jsx(i.code,{children:"optimizer"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimizer-1",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_OPTIMIZER"})," or ",e.jsx(i.code,{children:"DAPP_OPTIMIZER"})]}),`
`]}),`
`,e.jsx(i.p,{children:"Whether or not to enable the Solidity optimizer."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["ℹ️ ",e.jsx(i.strong,{children:"Note"}),`
Solidity optimizer is automatically enabled if `,e.jsx(i.code,{children:"optimizer_runs"})," is set to a value greater than 0."]}),`
`]}),`
`,e.jsxs(i.h5,{id:"optimizer_runs",children:[e.jsx(i.code,{children:"optimizer_runs"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimizer_runs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: integer"}),`
`,e.jsx(i.li,{children:"Default: 200"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_OPTIMIZER_RUNS"})," or ",e.jsx(i.code,{children:"DAPP_OPTIMIZER_RUNS"})]}),`
`]}),`
`,e.jsxs(i.p,{children:["The number of runs specifies roughly how often each opcode of the deployed code will be executed across the life-time of the contract. This means it is a trade-off parameter between code size (deploy cost) and code execution cost (cost after deployment). A ",e.jsx(i.code,{children:"optimizer_runs"})," parameter of ",e.jsx(i.code,{children:"1"})," will produce short but expensive code. In contrast, a larger ",e.jsx(i.code,{children:"optimizer_runs"})," parameter will produce longer but more gas efficient code. The maximum value of the parameter is ",e.jsx(i.code,{children:"2**32-1"}),"."]}),`
`,e.jsx(i.p,{children:"A common misconception is that this parameter specifies the number of iterations of the optimizer. This is not true: The optimizer will always run as many times as it can still improve the code."}),`
`,e.jsxs(i.h5,{id:"via_ir",children:[e.jsx(i.code,{children:"via_ir"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#via_ir",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`,e.jsxs(i.li,{children:["Environment: ",e.jsx(i.code,{children:"FOUNDRY_VIA_IR"})," or ",e.jsx(i.code,{children:"DAPP_VIA_IR"})]}),`
`]}),`
`,e.jsx(i.p,{children:"If set to true, changes compilation pipeline to go through the new IR optimizer."}),`
`,e.jsxs(i.h5,{id:"use_literal_content",children:[e.jsx(i.code,{children:"use_literal_content"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#use_literal_content",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`]}),`
`,e.jsx(i.p,{children:"If set to true, changes compilation to only use literal content and not URLs."}),`
`,e.jsxs(i.h5,{id:"optimizer_details",children:[e.jsx(i.code,{children:"[optimizer_details]"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimizer_details",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The optimizer details section is used to tweak how the Solidity optimizer behaves. There are several configurable values in this section (each of them are booleans):"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"peephole"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"inliner"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"jumpdestRemover"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"orderLiterals"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"deduplicate"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"cse"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"constantOptimizer"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"yul"})}),`
`]}),`
`,e.jsxs(i.p,{children:["Refer to the Solidity ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description",children:"compiler input description"})," for the default values."]}),`
`,e.jsxs(i.h5,{id:"optimizer_detailsyul_details",children:[e.jsx(i.code,{children:"[optimizer_details.yul_details]"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimizer_detailsyul_details",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The Yul details subsection of the optimizer details section is used to tweak how the new IR optimizer behaves. There are two configuration values:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"stack_allocation"}),": Tries to improve the allocation of stack slots by freeing them up earlier."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"optimizer_steps"}),": Selects the optimizer steps to be applied."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Refer to the Solidity ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-input-and-output-json-description",children:"compiler input description"})," for the default values."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["ℹ️ ",e.jsx(i.strong,{children:"Note"}),`
If you encounter compiler errors when using `,e.jsx(i.code,{children:"via_ir"}),", explicitly enable the legacy ",e.jsx(i.code,{children:"optimizer"})," and leave ",e.jsx(i.code,{children:"optimizer_steps"})," as an empty string"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"model-checker",children:["Model checker",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model-checker",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["The Solidity model checker is a built-in opt-in module that is available in Solidity compilers for OSX and Linux. Learn more about the model checker in the ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/smtchecker.html#tutorial",children:"Solidity compiler documentation"})]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["ℹ️ ",e.jsx(i.strong,{children:"Note"}),`
The model checker requires `,e.jsx(i.code,{children:"z3"})," version 4.8.8 or 4.8.14 on Linux."]}),`
`]}),`
`,e.jsxs(i.p,{children:["The model checker settings are configured in the ",e.jsx(i.code,{children:"[model_checker]"})," section of the configuration."]}),`
`,e.jsxs(i.p,{children:["The model checker will run when ",e.jsx(i.code,{children:"forge build"})," is invoked, and any findings will show up as warnings."]}),`
`,e.jsx(i.p,{children:"These are the recommended settings when using the model checker:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"profile"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"default"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"model_checker"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"contracts = {'/path/to/project/src/Contract.sol' = ["}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Contract'"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]}"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"engine = "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'chc'"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"timeout = "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10000"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"targets = ["}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'assert'"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]})]})})}),`
`,e.jsx(i.p,{children:"Setting which contract should be verified is extremely important, otherwise all available contracts will be verified which may take a long time."}),`
`,e.jsxs(i.p,{children:["The recommended engine is ",e.jsx(i.code,{children:"chc"}),", but ",e.jsx(i.code,{children:"bmc"})," and ",e.jsx(i.code,{children:"all"})," (which runs both) are also accepted."]}),`
`,e.jsx(i.p,{children:"It is also important to set a proper timeout (given in milliseconds), since the default time given to the underlying solver may not be enough."}),`
`,e.jsx(i.p,{children:"If no verification targets are given, only assertions will be checked."}),`
`,e.jsxs(i.h5,{id:"model_checker",children:[e.jsx(i.code,{children:"[model_checker]"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checker",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"The following keys are available in the model checker section."}),`
`,e.jsxs(i.h6,{id:"model_checkercontracts",children:[e.jsx(i.code,{children:"model_checker.contracts"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkercontracts",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: table"}),`
`,e.jsx(i.li,{children:"Default: all"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Specifies what contracts the model checker will analyze."}),`
`,e.jsx(i.p,{children:"The key of the table is the path to a source file, and the value is an array of contract names to check."}),`
`,e.jsx(i.p,{children:"For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"profile"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"default"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"model_checker"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:'contracts = { "src/MyContracts.sol" = ['}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ContractA"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ContractB"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"] }"})]})]})})}),`
`,e.jsxs(i.h6,{id:"model_checkerdiv_mod_with_slacks",children:[e.jsx(i.code,{children:"model_checker.div_mod_with_slacks"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkerdiv_mod_with_slacks",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Sets how division and modulo operations should be encoded."}),`
`,e.jsxs(i.p,{children:["Refer to the ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/smtchecker.html#division-and-modulo-with-slack-variables",children:"Solidity documentation"})," for more information."]}),`
`,e.jsxs(i.h6,{id:"model_checkerengine",children:[e.jsx(i.code,{children:"model_checker.engine"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkerengine",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string (see below)"}),`
`,e.jsx(i.li,{children:"Default: all"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Specifies the model checker engine to run. Valid values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"chc"}),": The constrained horn clauses engine"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bmc"}),": The bounded model checker engine"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"all"}),": Runs both engines"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Refer to the ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/smtchecker.html#model-checking-engines",children:"Solidity documentation"})," for more information on the engines."]}),`
`,e.jsxs(i.h6,{id:"model_checkerinvariants",children:[e.jsx(i.code,{children:"model_checker.invariants"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkerinvariants",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings"}),`
`,e.jsx(i.li,{children:"Default: N/A"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Sets the model checker invariants. Valid values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"contract"}),": Contract Invariants"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"reentrancy"}),": Reentrancy Properties"]}),`
`]}),`
`,e.jsxs(i.p,{children:["Refer to the ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/smtchecker.html#reported-inferred-inductive-invariants",children:"Solidity documentation"})," for more information on the invariants."]}),`
`,e.jsxs(i.h6,{id:"model_checkershow_unproved",children:[e.jsx(i.code,{children:"model_checker.show_unproved"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkershow_unproved",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Whether or not to output all unproved targets."}),`
`,e.jsxs(i.p,{children:["Refer to the ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/smtchecker.html#unproved-targets",children:"Solidity documentation"})," for more information."]}),`
`,e.jsxs(i.h6,{id:"model_checkersolvers",children:[e.jsx(i.code,{children:"model_checker.solvers"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkersolvers",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings"}),`
`,e.jsx(i.li,{children:"Default: N/A"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Sets the model checker solvers. Valid values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"cvc4"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"eld"}),": introduced in v0.8.18"]}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"smtlib2"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"z3"})}),`
`]}),`
`,e.jsxs(i.p,{children:["Refer to the ",e.jsx(i.a,{href:"https://docs.soliditylang.org/en/latest/smtchecker.html#smt-and-horn-solvers",children:"Solidity documentation"})," for more information."]}),`
`,e.jsxs(i.h6,{id:"model_checkertimeout",children:[e.jsx(i.code,{children:"model_checker.timeout"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkertimeout",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: number (milliseconds)"}),`
`,e.jsx(i.li,{children:"Default: N/A"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Sets the timeout for the underlying model checker engines (in milliseconds)."}),`
`,e.jsxs(i.h6,{id:"model_checkertargets",children:[e.jsx(i.code,{children:"model_checker.targets"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#model_checkertargets",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of strings"}),`
`,e.jsx(i.li,{children:"Default: assert"}),`
`,e.jsx(i.li,{children:"Environment: N/A"}),`
`]}),`
`,e.jsx(i.p,{children:"Sets the model checker targets. Valid values are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"assert"}),": Assertions"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"underflow"}),": Arithmetic underflow"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"overflow"}),": Arithmetic overflow"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"divByZero"}),": Division by zero"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"constantCondition"}),": Trivial conditions and unreachable code"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"popEmptyArray"}),": Popping an empty array"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"outOfBounds"}),": Out of bounds array/fixed bytes index access"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"default"}),": All of the above (note: not the default for Forge)"]}),`
`]}),`
`,e.jsxs(i.h3,{id:"compilation-restrictions",children:["Compilation Restrictions",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation-restrictions",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Compilation restrictions allows configuration of how individual files or directories within projects are compiled."}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["For a complex configuration of compiler profiles and compiler restrictions please refer to Uniswap ",e.jsx(i.a,{href:"https://github.com/Uniswap/contracts/blob/4d80a9cfed9b920b83a394b168a95319606a0b73/foundry.toml#L27-L72",children:"contracts monorepo"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["For example, with configuration below, ",e.jsx(i.code,{children:"Counter.sol"})," contract under ",e.jsx(i.code,{children:"src"})," is compiled with ",e.jsx(i.code,{children:"via-ir"})," option enabled while all other contracts (including tests) are compiled with the default profile."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# add via_ir profile"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"additional_compiler_profiles = [ { name = "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"via-ir"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", via_ir = "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" } ]"})]}),`
`,e.jsx(i.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# enforce compiling tests without via_ir and only some heavy contract with via_ir"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# note: it will only work if tests are using vm.deployCode to deploy contract"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"compilation_restrictions = ["})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    { paths = "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"test/**"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", via_ir = "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"false"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    { paths = "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"src/Counter.sol"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", via_ir = "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})})]})})}),`
`,e.jsxs(i.p,{children:["We can configure how individual files or directories are compiled by specifying the ",e.jsx(i.code,{children:"compilation_restrictions"})," configuration (which applies to sources importing the restricted file as well).",e.jsx(i.br,{}),`
`,"Once we have a set of restrictions we need to construct settings objects to satisfy them. This is done by adding ",e.jsx(i.code,{children:"additional_compiler_profiles"}),", which is a mapping from profile name to settings overrides."]}),`
`,e.jsxs(i.p,{children:["In the example above, we added a single profile named ",e.jsx(i.code,{children:"via-ir"})," which uses default compilation settings but enables ",e.jsx(i.code,{children:"via_ir"})," option, making it possible to compile the ",e.jsx(i.code,{children:"Counter.sol"})," contract with ",e.jsx(i.code,{children:"via_ir"}),", while all other contracts (including tests) with the default profile.",e.jsx(i.br,{}),`
`,"When choosing compiler profile, first profile (starting with default one) satisfying restrictions of the source file and all of its imports will be used."]}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["If the same source file is compiled with several profiles, then an artifact is generated for each profile - if ",e.jsx(i.code,{children:"Counter"})," is compiled with default and ",e.jsx(i.code,{children:"v1"})," profile, ",e.jsx(i.code,{children:"Counter.json"})," and ",e.jsx(i.code,{children:"Counter.v1.json"})," artifacts are created."]}),`
`]}),`
`,e.jsxs(i.h4,{id:"additional-compiler-settings",children:["Additional compiler settings:",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional-compiler-settings",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:e.jsx(i.code,{children:"[additional_compiler_profiles]"})}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of additional compiler profiles"}),`
`]}),`
`,e.jsx(i.p,{children:"Configures a mapping from profile name to settings overrides."}),`
`,e.jsxs(i.p,{children:["For example, an additional ",e.jsx(i.code,{children:"via-ir"})," compiler profile that changes compilation pipeline to go through the new IR optimizer can be defined as:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"additional_compiler_profiles = [ { name = "}),e.jsx(i.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"via-ir"'}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", via_ir = "}),e.jsx(i.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" } ]"})]})})})}),`
`,e.jsx(i.p,{children:"There are several configurable values for a compiler profile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"name"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"via_ir"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"evm_version"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"optimizer"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"optimizer_runs"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"bytecode_hash"})}),`
`]}),`
`,e.jsxs(i.h5,{id:"additional_compiler_profilename",children:[e.jsx(i.code,{children:"additional_compiler_profile.name"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional_compiler_profilename",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`]}),`
`,e.jsx(i.p,{children:"Additional compiler profile name."}),`
`,e.jsxs(i.h5,{id:"additional_compiler_profilevia_ir",children:[e.jsx(i.code,{children:"additional_compiler_profile.via_ir"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional_compiler_profilevia_ir",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`]}),`
`,e.jsxs(i.p,{children:["Additional compiler profile ",e.jsx(i.a,{href:"#via_ir",children:"via_ir"})," setting."]}),`
`,e.jsxs(i.h5,{id:"additional_compiler_profileevm_version",children:[e.jsx(i.code,{children:"additional_compiler_profile.evm_version"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional_compiler_profileevm_version",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`,e.jsx(i.li,{children:"Default: prague"}),`
`]}),`
`,e.jsxs(i.p,{children:["Additional compiler profile ",e.jsx(i.a,{href:"#evm_version",children:"evm_version"})," setting."]}),`
`,e.jsxs(i.h5,{id:"additional_compiler_profileoptimizer",children:[e.jsx(i.code,{children:"additional_compiler_profile.optimizer"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional_compiler_profileoptimizer",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`,e.jsx(i.li,{children:"Default: false"}),`
`]}),`
`,e.jsxs(i.p,{children:["Additional compiler profile ",e.jsx(i.a,{href:"#optimizer",children:"optimizer"})," setting."]}),`
`,e.jsxs(i.h5,{id:"additional_compiler_profileoptimizer_runs",children:[e.jsx(i.code,{children:"additional_compiler_profile.optimizer_runs"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional_compiler_profileoptimizer_runs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: integer"}),`
`,e.jsx(i.li,{children:"Default: 200"}),`
`]}),`
`,e.jsxs(i.p,{children:["Additional compiler profile ",e.jsx(i.a,{href:"#optimizer_runs",children:"optimizer_runs"})," setting."]}),`
`,e.jsxs(i.h5,{id:"additional_compiler_profilebytecode_hash",children:[e.jsx(i.code,{children:"additional_compiler_profile.bytecode_hash"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#additional_compiler_profilebytecode_hash",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`,e.jsx(i.li,{children:"Default: ipfs"}),`
`]}),`
`,e.jsxs(i.p,{children:["Additional compiler profile ",e.jsx(i.a,{href:"#bytecode_hash",children:"bytecode_hash"})," setting."]}),`
`,e.jsxs(i.h4,{id:"compilation-restrictions-settings",children:["Compilation restrictions settings:",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation-restrictions-settings",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.h4,{id:"compilation_restrictions",children:[e.jsx(i.code,{children:"[compilation_restrictions]"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictions",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: array of compilation restrictions settings"}),`
`]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionpaths",children:[e.jsx(i.code,{children:"compilation_restriction.paths"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionpaths",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: regex"}),`
`]}),`
`,e.jsx(i.p,{children:"Only applies compilation restrictions on files matching given paths."}),`
`,e.jsx(i.p,{children:"For example:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"src/contracts/Counter.sol"})," - apply restrictions for specific contract"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"src/contracts/{Counter,CounterFactory}.sol"})," - apply restrictions for multiple contracts, by name"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"src/v1/**"})," or ",e.jsx(i.code,{children:"src/v3/**/libraries/**"})," - apply restrictions for all contracts in matching source path"]}),`
`]}),`
`,e.jsx(i.p,{children:"There are several configurable values for an compilation restriction:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"version"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"via_ir"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"bytecode_hash"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"optimizer_runs"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"min_optimizer_runs"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"max_optimizer_runs"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"evm_version"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"min_evm_version"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"max_evm_version"})}),`
`]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionversion",children:[e.jsx(i.code,{children:"compilation_restriction.version"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionversion",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string (semver)"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for specific ",e.jsx(i.a,{href:"#solc_version",children:"solc_version"}),"."]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionvia_ir",children:[e.jsx(i.code,{children:"compilation_restriction.via_ir"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionvia_ir",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: boolean"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for specific ",e.jsx(i.a,{href:"#via_ir",children:"via_ir"})," setting."]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionbytecode_hash",children:[e.jsx(i.code,{children:"compilation_restriction.bytecode_hash"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionbytecode_hash",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`]}),`
`,e.jsx(i.p,{children:"Restrict compilation matching provided bytecode hash method."}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionoptimizer_runs",children:[e.jsx(i.code,{children:"compilation_restriction.optimizer_runs"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionoptimizer_runs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: integer"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for specific ",e.jsx(i.a,{href:"#optimizer_runs",children:"optimizer_runs"})," setting. Conflicts with ",e.jsx(i.code,{children:"min_optimizer_runs"})," and ",e.jsx(i.code,{children:"max_optimizer_runs"})," settings."]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionmin_optimizer_runs",children:[e.jsx(i.code,{children:"compilation_restriction.min_optimizer_runs"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionmin_optimizer_runs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: integer"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for min of ",e.jsx(i.a,{href:"#optimizer_runs",children:"optimizer_runs"})," setting. Conflicts with ",e.jsx(i.code,{children:"optimizer_runs"})," setting, requires ",e.jsx(i.code,{children:"max_optimizer_runs"})," setting."]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionmax_optimizer_runs",children:[e.jsx(i.code,{children:"compilation_restriction.max_optimizer_runs"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionmax_optimizer_runs",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: integer"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for max of ",e.jsx(i.a,{href:"#optimizer_runs",children:"optimizer_runs"})," setting. Conflicts with ",e.jsx(i.code,{children:"optimizer_runs"})," setting, requires ",e.jsx(i.code,{children:"min_optimizer_runs"})," setting."]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionevm_version",children:[e.jsx(i.code,{children:"compilation_restriction.evm_version"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionevm_version",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for specific ",e.jsx(i.a,{href:"#evm_version",children:"evm_version"})," setting. Conflicts with ",e.jsx(i.code,{children:"min_evm_version"})," and ",e.jsx(i.code,{children:"max_evm_version"})," settings."]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionmin_evm_version",children:[e.jsx(i.code,{children:"compilation_restriction.min_evm_version"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionmin_evm_version",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for a min version of ",e.jsx(i.a,{href:"#evm_version",children:"evm_version"})," setting. Conflicts with ",e.jsx(i.code,{children:"evm_version"})," setting, requires ",e.jsx(i.code,{children:"max_evm_version"})," setting."]}),`
`,e.jsxs(i.h5,{id:"compilation_restrictionmax_evm_version",children:[e.jsx(i.code,{children:"compilation_restriction.max_evm_version"}),e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#compilation_restrictionmax_evm_version",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Type: string"}),`
`]}),`
`,e.jsxs(i.p,{children:["Restrict compilation for a max version of ",e.jsx(i.a,{href:"#evm_version",children:"evm_version"})," setting. Conflicts with ",e.jsx(i.code,{children:"evm_version"})," setting, requires ",e.jsx(i.code,{children:"min_evm_version"})," setting."]})]})}function o(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{o as default,c as frontmatter};
