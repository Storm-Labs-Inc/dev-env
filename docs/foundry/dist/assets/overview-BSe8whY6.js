import{j as e}from"./index-D5UbER3f.js";import{u as s}from"./index-CZxYc6i7.js";const l=void 0;function r(n){const i={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.h2,{id:"config-overview",children:["Config Overview",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#config-overview",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(i.p,{children:"Foundry's configuration system allows you to configure its tools."}),`
`,e.jsxs(i.h3,{id:"profiles",children:["Profiles",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#profiles",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Configuration can be arbitrarily namespaced into profiles. The default profile is named ",e.jsx(i.code,{children:"default"}),", and all other profiles inherit values from this profile. Profiles are defined in the ",e.jsx(i.code,{children:"profile"})," map."]}),`
`,e.jsxs(i.p,{children:["To add a profile named ",e.jsx(i.code,{children:"local"}),", you would add:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"["}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"profile"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"."}),e.jsx(i.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"local"}),e.jsx(i.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]})})})}),`
`,e.jsxs(i.p,{children:["You can select the profile to use by setting the ",e.jsx(i.code,{children:"FOUNDRY_PROFILE"})," environment variable."]}),`
`,e.jsxs(i.h3,{id:"global-configuration",children:["Global configuration",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#global-configuration",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["You can create a ",e.jsx(i.code,{children:"foundry.toml"})," file in ",e.jsx(i.code,{children:"~/.foundry"})," folder to configure Foundry globally."]}),`
`,e.jsxs(i.h3,{id:"environment-variables",children:["Environment variables",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#environment-variables",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Configuration can be overridden with ",e.jsx(i.code,{children:"FOUNDRY_"})," and ",e.jsx(i.code,{children:"DAPP_"})," prefixed environment variables."]}),`
`,e.jsx(i.p,{children:"Exceptions are:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"FOUNDRY_FFI"}),", ",e.jsx(i.code,{children:"DAPP_FFI"}),", ",e.jsx(i.code,{children:"DAPP_TEST_FFI"})]}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"FOUNDRY_PROFILE"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"FOUNDRY_REMAPPINGS"}),", ",e.jsx(i.code,{children:"DAPP_REMAPPINGS"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"FOUNDRY_LIBRARIES"}),", ",e.jsx(i.code,{children:"DAPP_LIBRARIES"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"FOUNDRY_FS_PERMISSIONS"}),", ",e.jsx(i.code,{children:"DAPP_FS_PERMISSIONS"}),", ",e.jsx(i.code,{children:"DAPP_TEST_FS_PERMISSIONS"})]}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"DAPP_TEST_CACHE"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"DAPP_TEST_FUZZ_RUNS"})}),`
`,e.jsx(i.li,{children:e.jsx(i.code,{children:"DAPP_TEST_FUZZ_DEPTH"})}),`
`]}),`
`,e.jsxs(i.h3,{id:"configuration-format",children:["Configuration format",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-format",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["Configuration files are written in the ",e.jsx(i.a,{href:"https://toml.io",children:"TOML format"}),", with simple key-value pairs inside of sections."]}),`
`,e.jsxs(i.p,{children:["This page describes each configuration key in detail. To see the default values, either refer to the specific key in this document, or see the ",e.jsx(i.a,{href:"/config/reference/default-config",children:"default config"}),"."]}),`
`,e.jsxs(i.h3,{id:"configuration-keys",children:["Configuration keys",e.jsx(i.a,{"aria-hidden":"true",tabIndex:"-1",href:"#configuration-keys",children:e.jsx(i.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(i.p,{children:["This section documents all configuration keys. All configuration keys must live under a profile, such as ",e.jsx(i.code,{children:"default"}),"."]})]})}function c(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(r,{...n})}):r(n)}export{c as default,l as frontmatter};
