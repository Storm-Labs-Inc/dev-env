import{j as e}from"./index-D5UbER3f.js";import t from"./common-options-GfkPOrEd.js";import d from"./core-build-options-Dgi0sYgk.js";import{u as s}from"./index-CZxYc6i7.js";import"./compiler-options-BCpvSNbq.js";import"./project-options-BKric660.js";const j=void 0;function r(i){const n={a:"a",br:"br",code:"code",div:"div",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"forge-bind",children:["forge bind",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#forge-bind",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"name",children:["NAME",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#name",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"forge-bind - Generate Rust bindings for smart contracts."}),`
`,e.jsxs(n.h3,{id:"synopsis",children:["SYNOPSIS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#synopsis",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"forge bind"})," [",e.jsx(n.em,{children:"options"}),"]"]}),`
`,e.jsxs(n.h3,{id:"description",children:["DESCRIPTION",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#description",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Generates Rust bindings for smart contracts using ",e.jsx(n.a,{href:"https://github.com/alloy-rs/alloy",children:"alloy"}),"."]}),`
`,e.jsxs(n.p,{children:["The bindings are generated from the project's artifacts, which by default is ",e.jsx(n.code,{children:"./out/"}),`.
If you want to generate bindings for artifacts in a different directory, pass `,e.jsx(n.code,{children:"--bindings-path <PATH>"}),"."]}),`
`,e.jsx(n.p,{children:"There are three output options:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Generate bindings in a crate (default)"}),`
`,e.jsxs(n.li,{children:["Generate bindings in a module by passing ",e.jsx(n.code,{children:"--module"})]}),`
`,e.jsxs(n.li,{children:["Generate bindings in a single file by passing ",e.jsx(n.code,{children:"--single-file"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`By default, the command will check that existing bindings are correct and exit accordingly.
You can overwrite the existing bindings by passing `,e.jsx(n.code,{children:"--overwrite"}),"."]}),`
`,e.jsxs(n.h3,{id:"options",children:["OPTIONS",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h4,{id:"project-options",children:["Project Options",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#project-options",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"-b"})," ",e.jsx(n.em,{children:"path"}),e.jsx(n.br,{}),`
`,e.jsx(n.code,{children:"--bindings-path"})," ",e.jsx(n.em,{children:"path"}),e.jsx(n.br,{}),`
`,"    The project's root path. By default, this is the root directory of the current git repository, or the current working directory."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--crate-name"})," ",e.jsx(n.em,{children:"name"}),e.jsx(n.br,{}),`
`,"    The name of the Rust crate to generate, if you are generating a crate (default).",e.jsx(n.br,{}),`
`,"    This should be a valid crates.io crate name."]}),`
`,e.jsx(n.p,{children:"    Default: foundry-contracts"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--crate-version"})," ",e.jsx(n.em,{children:"semver"}),e.jsx(n.br,{}),`
`,"    The version of the Rust crate to generate, if you are generating a crate (default).",e.jsx(n.br,{}),`
`,"    This should be a standard semver version string."]}),`
`,e.jsx(n.p,{children:"    Default: 0.0.1"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--module"}),e.jsx(n.br,{}),`
`,"    Generate the bindings as a module instead of a crate."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--single-file"}),e.jsx(n.br,{}),`
`,"    Generate bindings as a single file."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--overwrite"}),e.jsx(n.br,{}),`
`,"    Overwrite existing generated bindings. By default, the command will check that the bindings are correct, and then exit.",e.jsx(n.br,{}),`
`,"    If ",e.jsx(n.code,{children:"--overwrite"})," is passed, it will instead delete and overwrite the bindings."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--root"})," ",e.jsx(n.em,{children:"path"}),e.jsx(n.br,{}),`
`,"    The project's root path. By default, this is the root directory of the current git repository, or the current working directory."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--skip-cargo-toml"}),e.jsx(n.br,{}),`
`,"    Skip Cargo.toml consistency checks.",e.jsx(n.br,{}),`
`,"    This allows you to manage the ",e.jsx(n.a,{href:"https://github.com/alloy-rs/alloy",children:"alloy"})," version without giving up on consistency checks.",e.jsx(n.br,{}),`
`,"    An example would be if you use additional features of alloy and get a version mismatch."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--skip-build"}),e.jsx(n.br,{}),`
`,"    Skips running forge build before generating binding.",e.jsx(n.br,{}),`
`,"    This allows you to skip the default ",e.jsx(n.code,{children:"forge build"})," step that's executed first and instead generate bindings using the already existing artifacts."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--skip-extra-derives"}),e.jsx(n.br,{}),`
`,"    Don't add any additional derives to generated bindings."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--alloy-version"})," ",e.jsx(n.em,{children:"version"}),e.jsx(n.br,{}),`
`,"    Specify the ",e.jsx(n.code,{children:"alloy"})," version on Crates."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--alloy-rev"})," ",e.jsx(n.em,{children:"rev"}),e.jsx(n.br,{}),`
`,"    Specify the ",e.jsx(n.code,{children:"alloy"})," revision on GitHub."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--select-all"}),e.jsx(n.br,{}),`
`,"    By default all contracts ending with ",e.jsx(n.code,{children:"Test"})," or ",e.jsx(n.code,{children:"Script"})," are excluded. This will explicitly generate bindings for all contracts. Conflicts with ",e.jsx(n.code,{children:"--select"})," and ",e.jsx(n.code,{children:"--skip"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--select"})," ",e.jsx(n.em,{children:"regex+"}),e.jsx(n.br,{}),`
`,"    Create bindings only for contracts whose names match the specified filter(s). Conflicts with ",e.jsx(n.code,{children:"--skip"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"--skip"})," ",e.jsx(n.em,{children:"regex+"}),e.jsx(n.br,{}),`
`,"    Create bindings only for contracts whose names do not match the specified filter(s). Conflicts with ",e.jsx(n.code,{children:"--select"}),"."]}),`
`,e.jsx(t,{}),`
`,e.jsx(d,{}),`
`,e.jsxs(n.h3,{id:"see-also",children:["SEE ALSO",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-also",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"/forge/reference/overview",children:"forge"})})]})}function u(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}export{u as default,j as frontmatter};
