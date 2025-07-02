import{j as e}from"./index-D5UbER3f.js";import r from"./test-options-C0nj2loq.js";import a from"./evm-options-CIv_ltnd.js";import d from"./executor-options-CW-TDtAD.js";import h from"./core-build-options-Dgi0sYgk.js";import o from"./display-options-CoE2BSKN.js";import c from"./common-options-GfkPOrEd.js";import{u as t}from"./index-CZxYc6i7.js";import"./compiler-options-BCpvSNbq.js";import"./project-options-BKric660.js";const C=void 0;function i(n){const s={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.h2,{id:"forge-snapshot",children:["forge snapshot",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-snapshot",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"name",children:["NAME",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"forge-snapshot - Create a snapshot of each test's gas usage."}),`
`,e.jsxs(s.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"forge snapshot"})," [",e.jsx(s.em,{children:"options"}),"]"]}),`
`,e.jsxs(s.h3,{id:"description",children:["DESCRIPTION",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Create a snapshot of each test's gas usage."}),`
`,e.jsxs(s.p,{children:["The results are written to a file named ",e.jsx(s.code,{children:".gas-snapshot"}),`. You can change the name of the file
by passing `,e.jsx(s.code,{children:"--snap <PATH>"}),"."]}),`
`,e.jsx(s.p,{children:"Fuzz tests are included by default in the snapshot. They use a static seed to achieve deterministic results."}),`
`,e.jsxs(s.p,{children:["Snapshots can be compared with ",e.jsx(s.code,{children:"--diff"})," and ",e.jsx(s.code,{children:"--check"}),`. The first flag will output a diff, and the second
will output a diff `,e.jsx(s.em,{children:"and"})," exit with code 1 if the snapshots do not match."]}),`
`,e.jsxs(s.h3,{id:"options",children:["OPTIONS",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"snapshot-options",children:["Snapshot Options",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#snapshot-options",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--asc"}),e.jsx(s.br,{}),`
`,"Sort results by gas used (ascending)."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--desc"}),e.jsx(s.br,{}),`
`,"    Sort results by gas used (descending)."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--min"})," ",e.jsx(s.em,{children:"min_gas"}),e.jsx(s.br,{}),`
`,"    Only include tests that used more gas that the given amount."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--max"})," ",e.jsx(s.em,{children:"max_gas"}),e.jsx(s.br,{}),`
`,"    Only include tests that used less gas that the given amount."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--tolerance"})," ",e.jsx(s.em,{children:"threshold"}),e.jsx(s.br,{}),`
`,"    Tolerates gas deviations up to the specified percentage (0-100)."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--diff"})," ",e.jsx(s.em,{children:"path"}),e.jsx(s.br,{}),`
`,"    Output a diff against a pre-existing snapshot."]}),`
`,e.jsxs(s.p,{children:["    By default the comparison is done with ",e.jsx(s.code,{children:".gas-snapshot"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--check"})," ",e.jsx(s.em,{children:"path"}),e.jsx(s.br,{}),`
`,"    Compare against a pre-existing snapshot, exiting with code 1 if they do not match."]}),`
`,e.jsx(s.p,{children:"    Outputs a diff if the snapshots do not match."}),`
`,e.jsxs(s.p,{children:["    By default the comparison is done with ",e.jsx(s.code,{children:".gas-snapshot"}),"."]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"--snap"})," ",e.jsx(s.em,{children:"path"}),e.jsx(s.br,{}),`
`,"    Output file for the snapshot. Default: ",e.jsx(s.code,{children:".gas-snapshot"}),"."]}),`
`,e.jsx(r,{}),`
`,e.jsx(a,{}),`
`,e.jsx(d,{}),`
`,e.jsx(h,{}),`
`,e.jsx(o,{}),`
`,e.jsx(c,{}),`
`,e.jsxs(s.h3,{id:"examples",children:["EXAMPLES",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Create a snapshot:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" snapshot"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Generate a diff:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" snapshot"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --diff"})]})})})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Check that the snapshots match:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"forge"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" snapshot"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" --check"})]})})})}),`
`]}),`
`]}),`
`,e.jsxs(s.h3,{id:"see-also",children:["SEE ALSO",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"/forge/reference/overview",children:"forge"}),", ",e.jsx(s.a,{href:"/forge/reference/forge-test",children:"forge test"})]})]})}function y(n={}){const{wrapper:s}={...t(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{y as default,C as frontmatter};
