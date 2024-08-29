"use strict";(self.webpackChunkvelero_docs=self.webpackChunkvelero_docs||[]).push([[2672],{3302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>r});var o=t(4848),i=t(8453);const s={sidebar_label:"Troubleshooting",sidebar_position:40},c="Troubleshooting",a={id:"troubleshooting",title:"Troubleshooting",description:"Unable to login",source:"@site/docs/40-troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_label:"Troubleshooting",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Watchdog",permalink:"/docs/guide/changelog/watchdog"},next:{title:"Community",permalink:"/docs/category/community"}},l={},r=[{value:"Unable to login",id:"unable-to-login",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.h2,{id:"unable-to-login",children:"Unable to login"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"As mentioned during the installation, the application consists of a UI that needs to communicate with the API service. Therefore, the API must have endpoints accessible from the client's browser."}),"\n",(0,o.jsx)(n.p,{children:"If there are issues with logging in, please ensure that the API is reachable from the browser at the following address: https://<your-endpoint>/api/docs"}),"\n",(0,o.jsx)(n.p,{children:"If the API page is accessible, check if you can authenticate using Swagger."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["From the access page click Diagnostic link ",(0,o.jsx)(n.img,{alt:"diagnostic-link",src:t(4766).A+"",width:"286",height:"26"})," (bottom left-hand corner)."]}),"\n",(0,o.jsx)(n.p,{children:"A pop up message appaers with a diagnostic check list and its state."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"diagnostic",src:t(6106).A+"",width:"698",height:"592"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In some cases, the securityTokenKey is not automatically generated. As a result, when trying to log in, authentication fails, and the user is redirected to the login page.\nTo resolve this issue, manually set the optional parameter ",(0,o.jsx)(n.strong,{children:"SECURITY_TOKEN_KEY"})," in the VUI-API configuration."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"./getting-started/configuration/velero-api#configuration",children:"See note 3"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/seriohub/velero-helm/blob/688dba38e3573707c75898a0ba32a9c07e923117/values-override.yaml#L14",children:"See values-override.yaml"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4766:(e,n,t)=>{t.d(n,{A:()=>o});const o="data:image/png;base64,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"},6106:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/33_diagnostic-8df7a621d1d5ac41e7ccb18d9609c45a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);