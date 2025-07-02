import{j as e}from"./index-D5UbER3f.js";import{u as r}from"./index-CZxYc6i7.js";const c=void 0;function i(s){const n={a:"a",blockquote:"blockquote",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"formatter",children:["Formatter",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#formatter",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["Configuration related to the behavior of the Forge formatter. Each of these keys live under the ",e.jsx(n.code,{children:"[fmt]"})," section."]}),`
`,e.jsxs(n.h3,{id:"single_line_statement_blocks",children:[e.jsx(n.code,{children:"single_line_statement_blocks"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#single_line_statement_blocks",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This allows configuring the style of statement blocks independently of the line length."}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"single_line_statement_blocks"})," configuration option in Foundry controls whether statement blocks (code blocks enclosed in ",e.jsx(n.code,{children:"{ }"}),") will be formatted to a single line or multiple lines."]}),`
`,e.jsx(n.p,{children:"It has three possible values:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"single"'})," - Statement blocks will be formatted to a single line if possible."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"multi"'})," - Statement blocks will always be formatted to multiple lines."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"preserve"'})," - Keep the existing single/multi line formatting of statement blocks."]}),`
`]}),`
`,e.jsxs(n.p,{children:["For example, with ",e.jsx(n.code,{children:'"single"'}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") { "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"return"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"; }"})]})})})}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:'"multi"'}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"true"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" true"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["And with ",e.jsx(n.code,{children:'"preserve"'}),", it will keep the original formatting of the code."]}),`
`,e.jsxs(n.h3,{id:"multiline_func_header",children:[e.jsx(n.code,{children:"multiline_func_header"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multiline_func_header",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This allows configuring the formatting of long function headers."}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"attributes_first"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_MULTILINE_FUNC_HEADER"})," or ",e.jsx(n.code,{children:"DAPP_FMT_MULTILINE_FUNC_HEADER"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"multiline_func_header"})," configuration option in Foundry controls how function headers (the line containing the function name, parameters, return values etc.) are formatted when they exceed the max line length."]}),`
`,e.jsx(n.p,{children:"Style of multiline function header in case it doesn't fit in one line. Valid possible values:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"attributes_first"'})," - (default)  Write function attributes multiline first"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"params_first"'})," - Break the function header into multiple lines, with each parameter on its own line. The function name stays on the first line."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"all"'})," - If function parameters or attributes are multiline, multiline everything"]}),`
`]}),`
`,e.jsx(n.p,{children:"Style of multiline function header in case it doesn't fit in one line. Valid values are:"}),`
`,e.jsxs(n.p,{children:["For example, with ",e.jsx(n.code,{children:'"params_first"'}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" myFunction"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" param1"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" param2"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" param3"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" returns"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint256"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // ..."})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["And with ",e.jsx(n.code,{children:'"all"'}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"function"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" myFunction"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" param1"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" param2"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"    uint256"}),e.jsx(n.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:" param3"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    public"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" "})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    returns"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"uint256"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // ...  "})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.h3,{id:"sort_imports",children:[e.jsx(n.code,{children:"sort_imports"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sort_imports",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"helps organize imports and makes it easier to find specific imports quickly."}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"sort_imports"})," configuration option in Foundry controls whether import statements are sorted alphabetically within their import groups."]}),`
`,e.jsx(n.p,{children:"From the code snippets provided:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["In ",e.jsx(n.code,{children:"fmt.rs"}),", ",e.jsx(n.code,{children:"sort_imports"})," is a configuration option that can be set to ",e.jsx(n.code,{children:"true"})," or ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsxs(n.li,{children:["In ",e.jsx(n.code,{children:"formatter.rs"}),", the ",e.jsx(n.code,{children:"sort_imports()"})," method is called to sort import statements alphabetically if ",e.jsx(n.code,{children:"sort_imports"})," is enabled."]}),`
`,e.jsx(n.li,{children:"It finds import groups separated by blank lines in the source code."}),`
`,e.jsx(n.li,{children:"Then sorts the import statements within each group alphabetically."}),`
`]}),`
`,e.jsxs(n.p,{children:["So in summary, enabling ",e.jsx(n.code,{children:"sort_imports"})," will reorder solidity import statements alphabetically within their section groups, while preserving the relative ordering of the groups."]}),`
`,e.jsxs(n.h3,{id:"contract_new_lines",children:[e.jsx(n.code,{children:"contract_new_lines"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#contract_new_lines",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Controls the addition of blank lines before and after contract definitions."}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"contract_new_lines"})," configuration option in Foundry controls whether empty lines are added before and after contract definitions."]}),`
`,e.jsxs(n.p,{children:["When enabled (",e.jsx(n.code,{children:"contract_new_lines = true"}),"):"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"An empty line will be added before the start of a contract definition."}),`
`,e.jsx(n.li,{children:"An empty line will also be added after the end of a contract definition."}),`
`]}),`
`,e.jsxs(n.p,{children:["For example, with ",e.jsx(n.code,{children:"contract_new_lines"})," enabled:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Empty line before contract contract MyContract { // ... } // Empty line after contract"})})})})}),`
`,e.jsx(n.p,{children:"This helps visually separate contract definitions and improve readability."}),`
`,e.jsxs(n.p,{children:["When disabled (",e.jsx(n.code,{children:"contract_new_lines = false"}),"), empty lines will not be added around contracts."]}),`
`,e.jsxs(n.p,{children:["So in summary, the ",e.jsx(n.code,{children:"contract_new_lines"})," option controls the addition of blank lines before and after contract definitions."]}),`
`,e.jsxs(n.h3,{id:"override_spacing",children:[e.jsx(n.code,{children:"override_spacing"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#override_spacing",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"override_spacing"})," configuration option in Foundry controls whether a space is printed between the ",e.jsx(n.code,{children:"override"})," keyword and the parent contracts when overriding a function or modifier."]}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"override_spacing"})," is enabled:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A space will be added after the ",e.jsx(n.code,{children:"override"})," keyword."]}),`
`]}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"contract"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Child"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" is"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Parent"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  function"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" foo"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"override"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Parent"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { }"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsxs(n.p,{children:["When disabled, there will be no space between ",e.jsx(n.code,{children:"override"})," and the parent contracts:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"contract"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Child"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" is"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Parent"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  function"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" foo"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"() "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"override"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"Parent"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"public"}),e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { } "})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})})}),`
`,e.jsx(n.p,{children:"Enables configuring the styling of override declarations."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"override_spacing = true"})," - Print a space after ",e.jsx(n.code,{children:"override"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"override_spacing = false"})," - No space after ",e.jsx(n.code,{children:"override"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"line_length",children:[e.jsx(n.code,{children:"line_length"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#line_length",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: number"}),`
`,e.jsx(n.li,{children:"Default: 120"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_LINE_LENGTH"})," or ",e.jsx(n.code,{children:"DAPP_FMT_LINE_LENGTH"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Maximum line length where formatter will try to wrap the line."}),`
`,e.jsxs(n.h3,{id:"tab_width",children:[e.jsx(n.code,{children:"tab_width"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tab_width",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: number"}),`
`,e.jsx(n.li,{children:"Default: 4"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_TAB_WIDTH"})," or ",e.jsx(n.code,{children:"DAPP_FMT_TAB_WIDTH"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Number of spaces per indentation level."}),`
`,e.jsxs(n.h3,{id:"bracket_spacing",children:[e.jsx(n.code,{children:"bracket_spacing"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#bracket_spacing",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: bool"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_BRACKET_SPACING"})," or ",e.jsx(n.code,{children:"DAPP_FMT_BRACKET_SPACING"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Whether or not to print spaces between brackets."}),`
`,e.jsxs(n.h3,{id:"int_types",children:[e.jsx(n.code,{children:"int_types"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#int_types",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"long"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_INT_TYPES"})," or ",e.jsx(n.code,{children:"DAPP_FMT_INT_TYPES"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Style of uint/int256 types. Valid values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"long"})," (default): Use the explicit ",e.jsx(n.code,{children:"uint256"})," or ",e.jsx(n.code,{children:"int256"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"short"}),": Use the implicit ",e.jsx(n.code,{children:"uint"})," or ",e.jsx(n.code,{children:"int"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"preserve"}),": Use the type defined in the source code"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"quote_style",children:[e.jsx(n.code,{children:"quote_style"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quote_style",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"double"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_QUOTE_STYLE"})," or ",e.jsx(n.code,{children:"DAPP_FMT_QUOTE_STYLE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Defines the quotation mark style. Valid values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"double"})," (default): Use double quotes where possible (",e.jsx(n.code,{children:'"'}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"single"}),": Use single quotes where possible (",e.jsx(n.code,{children:"'"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"preserve"}),": Use quotation mark defined in the source code"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"number_underscore",children:[e.jsx(n.code,{children:"number_underscore"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#number_underscore",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"preserve"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_NUMBER_UNDERSCORE"})," or ",e.jsx(n.code,{children:"DAPP_FMT_NUMBER_UNDERSCORE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Style of underscores in number literals. Valid values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"preserve"})," (default): Use the underscores defined in the source code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"thousands"}),": Add an underscore every thousand, if greater than 9999. i.e. ",e.jsx(n.code,{children:"1000"})," is formatted as ",e.jsx(n.code,{children:"1000"})," and ",e.jsx(n.code,{children:"10000"})," as ",e.jsx(n.code,{children:"10_000"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"remove"}),": Remove all underscores"]}),`
`]}),`
`,e.jsxs(n.h3,{id:"hex_underscore",children:[e.jsx(n.code,{children:"hex_underscore"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#hex_underscore",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: string"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"remove"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_HEX_UNDERSCORE"})," or ",e.jsx(n.code,{children:"DAPP_FMT_HEX_UNDERSCORE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Style of underscores in bytes literals. Valid values are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"preserve"}),": Use the underscores defined in the source code"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"remove"})," (default): Remove all underscores"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"bytes"}),": Add underscore as separator between byte boundaries. i.e. ",e.jsx(n.code,{children:'hex"deadbeef"'})," is formatted as ",e.jsx(n.code,{children:'hex"de_ad_be_ef"'})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"wrap_comments",children:[e.jsx(n.code,{children:"wrap_comments"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#wrap_comments",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: bool"}),`
`,e.jsx(n.li,{children:"Default: false"}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_WRAP_COMMENTS"})," or ",e.jsx(n.code,{children:"DAPP_FMT_WRAP_COMMENTS"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Whether or not to wrap comments on ",e.jsx(n.code,{children:"line_length"})," reached."]}),`
`,e.jsxs(n.h3,{id:"ignore",children:[e.jsx(n.code,{children:"ignore"}),e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ignore",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Type: array of strings (patterns)"}),`
`,e.jsxs(n.li,{children:["Default: ",e.jsx(n.code,{children:"[]"})]}),`
`,e.jsxs(n.li,{children:["Environment: ",e.jsx(n.code,{children:"FOUNDRY_FMT_IGNORE"})," or ",e.jsx(n.code,{children:"DAPP_FMT_IGNORE"})]}),`
`]}),`
`,e.jsx(n.p,{children:"List of files to ignore when formatting. This is a comma separated list of glob patterns."})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default,c as frontmatter};
