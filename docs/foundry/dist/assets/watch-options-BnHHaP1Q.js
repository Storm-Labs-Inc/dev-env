import{j as e}from"./index-D5UbER3f.js";import{u as d}from"./index-CZxYc6i7.js";const o=void 0;function t(s){const n={a:"a",br:"br",code:"code",div:"div",em:"em",h4:"h4",p:"p",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h4,{id:"watch-options",children:["Watch Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#watch-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-w"})," [",e.jsx(n.em,{children:"path..."}),"]",e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--watch"})," [",e.jsx(n.em,{children:"path..."}),"]",e.jsx(n.br,{}),`
`,"    Watch specific file(s) or folder(s)."]}),`
`,e.jsx(n.p,{children:"    By default, the project's source directory is watched."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-d"})," ",e.jsx(n.em,{children:"delay"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--delay"})," ",e.jsx(n.em,{children:"delay"}),e.jsx(n.br,{}),`
`,"    File update debounce delay."]}),`
`,e.jsxs(n.p,{children:["    During the delay, incoming change events are accumulated and only once the delay has passed, is an action taken.",e.jsx(n.br,{}),`
`,"    Note that this does not mean a command will be started: if ",e.jsx(n.code,{children:"--no-restart"})," is given and a command is already running, the outcome of the action will be to do nothing."]}),`
`,e.jsxs(n.p,{children:["    Defaults to 50ms. Parses as decimal seconds by default, but using an integer with the ",e.jsx(n.code,{children:"ms"})," suffix may be more convenient."]}),`
`,e.jsxs(n.p,{children:["    When using ",e.jsx(n.code,{children:"--poll"})," mode, you'll want a larger duration, or risk overloading disk I/O."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--no-restart"}),e.jsx(n.br,{}),`
`,"    Do not restart the command while it's running."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--run-all"}),e.jsx(n.br,{}),`
`,"    Explicitly re-run the command on all files when a change is made."]})]})}function a(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default,o as frontmatter};
