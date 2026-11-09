(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,87523,e=>{"use strict";var t=e.i(43476),n=e.i(71645),r=e.i(83218),i=e.i(5e3),o=e.i(36512),a=e.i(98013),l=e.i(80829),s=e.i(6853),u=e.i(71134),d=e.i(97053);let c=d.default.main.withConfig({displayName:"pageStyle__PageShell",componentId:"sc-da15a97b-0"})`
  position: relative;
  isolation: isolate;
  min-height: 100vh;
  overflow: hidden;
  padding: 24px clamp(20px, 5vw, 72px) 56px;
  background:
    radial-gradient(ellipse at 12% 18%, rgba(191, 219, 254, 0.55), transparent 34%),
    radial-gradient(ellipse at 91% 78%, rgba(221, 214, 254, 0.5), transparent 32%),
    #f6f8fc;

  &::before {
    position: absolute;
    z-index: -1;
    top: -180px;
    right: -120px;
    width: 420px;
    height: 420px;
    border: 1px solid rgba(99, 102, 241,  0.1);
    border-radius: 50%;
    content: "";
  }
`,p=d.default.header.withConfig({displayName:"pageStyle__TopBar",componentId:"sc-da15a97b-1"})`
  display: flex;
  justify-content: flex-end;
  width: min(1120px, 100%);
  margin: 0 auto;
  min-height: 44px;
`,f=d.default.section.withConfig({displayName:"pageStyle__Content",componentId:"sc-da15a97b-2"})`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  gap: clamp(32px, 6vw, 76px);
  align-items: center;
  width: min(1000px, 100%);
  margin: clamp(44px, 9vh, 92px) auto 0;
  padding: clamp(28px, 5vw, 64px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 28px 80px rgba(30, 64, 175, 0.1);
  backdrop-filter: blur(12px);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 40px;
    padding: 28px 22px;
    border-radius: 22px;
  }
`,g=d.default.div.withConfig({displayName:"pageStyle__Intro",componentId:"sc-da15a97b-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,h=d.default.span.withConfig({displayName:"pageStyle__Eyebrow",componentId:"sc-da15a97b-4"})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  color: #4f46e5;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  &::before {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #6366f1;
    content: "";
  }
`,m=d.default.h1.withConfig({displayName:"pageStyle__Title",componentId:"sc-da15a97b-5"})`
  margin: 0;
  color: #172554;
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.15;
`,x=d.default.p.withConfig({displayName:"pageStyle__Description",componentId:"sc-da15a97b-6"})`
  max-width: 510px;
  margin: 18px 0 0;
  color: #64748b;
  font-size: 16px;
  line-height: 1.75;
`,b=d.default.button.withConfig({displayName:"pageStyle__StartButton",componentId:"sc-da15a97b-7"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 54px;
  margin-top: 30px;
  padding: 0 24px;
  border: 0;
  border-radius: 14px;
  background: linear-gradient(135deg, #4f46e5, #2563eb);
  box-shadow: 0 12px 24px rgba(79, 70, 229, 0.24);
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(79, 70, 229, 0.3);
  }

  &:disabled {
    transform: none;
    background: #cbd5e1;
    box-shadow: none;
    color: #64748b;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid #a5b4fc;
    outline-offset: 3px;
  }

  &:active {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,y=d.default.p.withConfig({displayName:"pageStyle__LoginRequired",componentId:"sc-da15a97b-8"})`
  margin: 12px 0 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.5;
`,w=d.default.span.withConfig({displayName:"pageStyle__ButtonArrow",componentId:"sc-da15a97b-9"})`
  font-size: 20px;
  line-height: 1;
`,_=d.default.aside.withConfig({displayName:"pageStyle__Details",componentId:"sc-da15a97b-10"})`
  padding: 24px;
  border: 1px solid #e8edfb;
  border-radius: 20px;
  background: linear-gradient(155deg, #f8faff, #f1f5ff);
`,S=d.default.h2.withConfig({displayName:"pageStyle__DetailsTitle",componentId:"sc-da15a97b-11"})`
  margin: 0 0 18px;
  color: #1e293b;
  font-size: 15px;
  font-weight: 750;
`,v=d.default.div.withConfig({displayName:"pageStyle__Stats",componentId:"sc-da15a97b-12"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`,C=d.default.div.withConfig({displayName:"pageStyle__Stat",componentId:"sc-da15a97b-13"})`
  padding: 16px;
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.86);
`,j=d.default.strong.withConfig({displayName:"pageStyle__StatValue",componentId:"sc-da15a97b-14"})`
  display: block;
  color: #312e81;
  font-size: 24px;
  letter-spacing: -0.04em;
`,T=d.default.span.withConfig({displayName:"pageStyle__StatLabel",componentId:"sc-da15a97b-15"})`
  display: block;
  margin-top: 4px;
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
`;d.default.ul.withConfig({displayName:"pageStyle__TopicList",componentId:"sc-da15a97b-16"})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
`,d.default.li.withConfig({displayName:"pageStyle__Topic",componentId:"sc-da15a97b-17"})`
  padding: 7px 10px;
  border: 1px solid #dbeafe;
  border-radius: 999px;
  background: #fff;
  color: #475569;
  font-size: 12px;
  font-weight: 650;
`;let N=d.default.p.withConfig({displayName:"pageStyle__Hint",componentId:"sc-da15a97b-18"})`
  margin: 18px 0 0;
  color: #64748b;
  font-size: 12px;
  line-height: 1.6;
`;e.s(["default",0,function(){let[e,d]=(0,n.useState)([]),[P,E]=(0,n.useState)(!1),k=(0,u.useUserStore)(e=>e.user);return((0,n.useEffect)(()=>{let e=window.setTimeout(()=>{d([...(0,a.getRandomQuestions)(r.default,8),...(0,a.getRandomQuestions)(i.default,16),...(0,a.getRandomQuestions)(o.default,8)])},0);return()=>window.clearTimeout(e)},[]),P)?(0,t.jsx)(l.default,{examQuestions:e,timeLimit:1800,enableRetake:!1,enableReviewMode:!1,requireLogin:!1,title:"Trắc nghiệm Tin học đại cương",onFinish:(e,t)=>{console.log("Score:",e,"Total Questions:",t),E(!1)}}):(0,t.jsxs)(c,{children:[(0,t.jsx)(p,{children:(0,t.jsx)(s.default,{user:k,fixed:!1})}),(0,t.jsxs)(f,{"aria-labelledby":"exam-title",children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(h,{children:"Bài kiểm tra định kỳ"}),(0,t.jsx)(m,{id:"exam-title",children:"Tin học đại cương"}),(0,t.jsx)(x,{children:"Sẵn sàng thử sức với kiến thức HTML, CSS và JavaScript? Hãy đọc kỹ từng câu hỏi và chọn đáp án phù hợp nhất."}),(0,t.jsxs)(b,{type:"button",disabled:!k,onClick:()=>E(!0),children:["Bắt đầu kiểm tra",(0,t.jsx)(w,{"aria-hidden":"true",children:"→"})]}),!k&&(0,t.jsx)(y,{role:"status",children:"Vui lòng đăng nhập để bắt đầu bài kiểm tra."})]}),(0,t.jsxs)(_,{"aria-label":"Thông tin bài kiểm tra",children:[(0,t.jsx)(S,{children:"Thông tin bài kiểm tra"}),(0,t.jsxs)(v,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(j,{children:30}),(0,t.jsx)(T,{children:"phút làm bài"})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(j,{children:32}),(0,t.jsx)(T,{children:"câu hỏi"})]})]}),(0,t.jsx)(N,{children:"Thời gian sẽ được tính từ lúc bạn bắt đầu. Hãy chuẩn bị sẵn sàng trước khi vào bài."})]})]})]})}],87523)},22016,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return y}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809),a=e.r(43476),l=o._(e.r(71645)),s=e.r(95057),u=e.r(8372),d=e.r(18581),c=e.r(18967),p=e.r(5550),f=e.r(88540),g=e.r(91949),h=e.r(73668),m=e.r(9396);function x(t){var n;let r,i,o,[x,y]=(0,l.useOptimistic)(g.IDLE_LINK_STATUS),w=(0,l.useRef)(null),{href:_,as:S,children:v,prefetch:C=null,passHref:j,replace:T,shallow:N,scroll:P,onClick:E,onMouseEnter:k,onTouchStart:I,legacyBehavior:O=!1,onNavigate:R,transitionTypes:L,ref:A,unstable_dynamicOnHover:U,...z}=t;r=v,O&&("string"==typeof r||"number"==typeof r)&&(r=(0,a.jsx)("a",{children:r}));let $=l.default.useContext(u.AppRouterContext),B=!1!==C,M=!1===C?"none":!0===C?"full":"auto",D="none"!==M?"auto"===M?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,F="string"==typeof(n=S||_)?n:(0,s.formatUrl)(n);if(O){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=l.default.Children.only(r)}let K=O?i&&"object"==typeof i&&i.ref:A,Q,q=l.default.useCallback(e=>(null!==$&&(w.current=(0,g.mountLinkInstance)(e,F,$,D,B,y,Q)),()=>{w.current&&((0,g.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,g.unmountPrefetchableInstance)(e)}),[B,F,$,D,y,Q]),H={ref:(0,d.useMergedRef)(q,K),onClick(t){O||"function"!=typeof E||E(t),O&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!$||t.defaultPrevented||function(t,n,r,i,o,a,s,u="none"){if("u">typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);l.default.startTransition(()=>{p(n,i?"replace":"push",!1===o?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,r.current,s,u)})}}(t,F,w,T,P,R,L,M)},onMouseEnter(e){O||"function"!=typeof k||k(e),O&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),$&&B&&(0,g.onNavigationIntent)(e.currentTarget,!0===U)},onTouchStart:function(e){O||"function"!=typeof I||I(e),O&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),$&&B&&(0,g.onNavigationIntent)(e.currentTarget,!0===U)}};return(0,c.isAbsoluteUrl)(F)?H.href=F:O&&!j&&("a"!==i.type||"href"in i.props)||(H.href=(0,p.addBasePath)(F)),o=O?l.default.cloneElement(i,H):(0,a.jsx)("a",{...z,...H,children:r}),(0,a.jsx)(b.Provider,{value:x,children:o})}let b=(0,l.createContext)(g.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},73668,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),i=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},98183,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={assign:function(){return s},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return l}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});function o(e){let t={};for(let[n,r]of e.entries()){let e=t[n];void 0===e?t[n]=r:Array.isArray(e)?e.push(r):t[n]=[e,r]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let t=new URLSearchParams;for(let[n,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(n,a(e));else t.set(n,a(r));return t}function s(e,...t){for(let n of t){for(let t of n.keys())e.delete(t);for(let[t,r]of n.entries())e.append(t,r)}return e}},95057,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,r=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:n&&(u=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(o.urlQueryToSearchParams(s)));let d=e.search||s&&`?${s}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||a.test(r))&&!1!==u?(u="//"+(u||""),i&&"/"!==i[0]&&(i="/"+i)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${u}${i}${d}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},18967,(e,t,n)=>{"use strict";e.i(47167),Object.defineProperty(n,"__esModule",{value:!0});var r={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return w},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return m},WEB_VITALS:function(){return o},execOnce:function(){return a},getDisplayName:function(){return c},getLocationOrigin:function(){return u},getURL:function(){return d},isAbsoluteUrl:function(){return s},isResSent:function(){return p},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return S}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,n=!1;return(...r)=>(n||(n=!0,t=e(...r)),t)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&l.test(e)};function u(){let{protocol:e,hostname:t,port:n}=window.location;return`${e}//${t}${n?":"+n:""}`}function d(){let{href:e}=window.location,t=u();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function g(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await g(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&p(n))return r;if(!r)throw Object.defineProperty(Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let h="u">typeof performance,m=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class w extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function S(e){return JSON.stringify({message:e.message,stack:e.stack})}}]);