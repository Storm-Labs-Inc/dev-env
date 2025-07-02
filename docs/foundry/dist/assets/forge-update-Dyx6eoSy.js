import{j as e}from"./index-D5UbER3f.js";import d from"./common-options-GfkPOrEd.js";import{u as r}from"./index-CZxYc6i7.js";const o=void 0;function i(s){const n={a:"a",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"forge-update",children:["forge update",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-update",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"forge-update - Update one or more dependencies."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forge update"})," [",e.jsx(n.em,{children:"options"}),"] [",e.jsx(n.em,{children:"dep"}),"]"]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Update one or more dependencies."}),`
`,e.jsxs(n.p,{children:["The argument ",e.jsx(n.em,{children:"dep"}),` is a path to the dependency you want to update.
Forge will update to the latest version on the ref you specified for the dependency when you ran `,e.jsx(n.a,{href:"/forge/reference/forge-install",children:e.jsx(n.code,{children:"forge install"})}),"."]}),`
`,e.jsx(n.p,{children:"If no argument is provided, then all dependencies are updated."}),`
`,e.jsxs(n.h3,{id:"lockfile",children:["Lockfile",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lockfile",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Post ",e.jsx(n.a,{href:"https://github.com/foundry-rs/foundry/pull/9522",children:"foundry#9522"}),", every ",e.jsx(n.code,{children:"install"}),", ",e.jsx(n.code,{children:"update"})," or ",e.jsx(n.code,{children:"remove"})," syncs the lockfile (",e.jsx(n.code,{children:"foundry.lock"}),") which has been introduced to ensure that git submodules stay pinned to the tag/revision that the user specified while installing the dependency."]}),`
`,e.jsxs(n.p,{children:["Without the lockfile submodules pinned to a tag/revision get silently updated to the master/main branch of the dependency. See ",e.jsx(n.a,{href:"https://github.com/foundry-rs/foundry/issues/7225",children:"foundry#7225"})]}),`
`,e.jsx(n.p,{children:"If you wish to update your dependencies tag/rev you can do so using:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Update the tag of the dependency"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@new-tag"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@tag=some-tag"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Update the revision of the dependency"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@01234abc"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@rev=01234abc"})]})]})})}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.h3,{id:"examples",children:["EXAMPLES",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Update a dependency:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" lib/solmate"})]})})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Update all dependencies:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Note: Dependencies pinned to tags/revs in `foundry.lock` will not be updated."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# They must be overwritten explicitly."})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"})]})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:"Update the tag/rev of a dependency:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Update the tag of the dependency"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@new-tag"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@tag=some-tag"})]}),`
`,e.jsx(n.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"# Update the revision of the dependency"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@01234abc"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" update"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" owner/dependency-name@rev=01234abc"})]})]})})}),`
`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"see-also",children:["SEE ALSO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"/forge/reference/overview",children:"forge"}),", ",e.jsx(n.a,{href:"/forge/reference/forge-install",children:"forge install"}),", ",e.jsx(n.a,{href:"/forge/reference/forge-remove",children:"forge remove"})]})]})}function t(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{t as default,o as frontmatter};
