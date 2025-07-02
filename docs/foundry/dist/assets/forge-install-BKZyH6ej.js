import{j as e}from"./index-D5UbER3f.js";import d from"./common-options-GfkPOrEd.js";import{u as r}from"./index-CZxYc6i7.js";const t=void 0;function i(s){const n={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"forge-install",children:["forge install",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-install",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"forge-install - Install one or more dependencies."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forge install"})," [",e.jsx(n.em,{children:"options"}),"] [",e.jsx(n.em,{children:"deps..."}),"]"]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Install one or more dependencies."}),`
`,e.jsxs(n.p,{children:["Dependencies are installed as git submodules. If you do not want this behavior, pass ",e.jsx(n.code,{children:"--no-git"}),"."]}),`
`,e.jsx(n.p,{children:"If no arguments are provided, then existing dependencies are installed."}),`
`,e.jsxs(n.p,{children:["Dependencies can be a raw URL (",e.jsx(n.code,{children:"https://foo.com/dep"}),"), an SSH URL (",e.jsx(n.code,{children:"git@github.com:owner/repo"}),"), or the path to a GitHub repository (",e.jsx(n.code,{children:"owner/repo"}),`).
Additionally, a ref can be added to the dependency path to install a specific version of a dependency.`]}),`
`,e.jsx(n.p,{children:"A ref can be:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A branch: ",e.jsx(n.code,{children:"owner/repo@master"})]}),`
`,e.jsxs(n.li,{children:["A tag: ",e.jsx(n.code,{children:"owner/repo@v1.2.3"})]}),`
`,e.jsxs(n.li,{children:["A commit: ",e.jsx(n.code,{children:"owner/repo@8e8128"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ref defaults to ",e.jsx(n.code,{children:"master"}),"."]}),`
`,e.jsxs(n.p,{children:[`You can also choose the name of the folder the dependency will be in. By default, the folder name is the name of
the repository. If you want to change the name of the folder, prepend `,e.jsx(n.code,{children:"<folder>="})," to the dependency."]}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"project-options",children:["Project Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#project-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--root"})," ",e.jsx(n.em,{children:"path"}),e.jsx(n.br,{}),`
`,"    The project's root path. By default, this is the root directory of the current git repository, or the current working directory."]}),`
`,e.jsxs(n.h4,{id:"vcs-options",children:["VCS Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vcs-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--commit"}),e.jsx(n.br,{}),`
`,"    Create a commit after installing the dependencies."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-git"}),e.jsx(n.br,{}),`
`,"    Install without adding the dependency as a submodule."]}),`
`,e.jsxs(n.h4,{id:"display-options",children:["Display Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#display-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-q"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--quiet"}),e.jsx(n.br,{}),`
`,"    Do not print any messages."]}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.h3,{id:"examples",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Install a dependency:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" transmissions11/solmate"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Install a specific version of a dependency:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" transmissions11/solmate@v7"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Install multiple dependencies:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" transmissions11/solmate@v7"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" OpenZeppelin/openzeppelin-contracts"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Install a dependency without creating a submodule:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --no-git"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" transmissions11/solmate"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Install a dependency in a specific folder:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" install"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" soulmate=transmissions11/solmate"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"see-also",children:["SEE ALSO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/forge/reference/overview",children:"forge"}),", ",e.jsx(n.a,{href:"/forge/reference/forge-update",children:"forge update"}),", ",e.jsx(n.a,{href:"/forge/reference/forge-remove",children:"forge remove"})]})]})}function c(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default,t as frontmatter};
