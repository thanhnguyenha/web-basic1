(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,13946,11781,e=>{"use strict";var t=e.i(43476),n=e.i(71645),r=e.i(67412);e.s(["default",0,function({projectDir:e,children:d}){let{project:s,error:c}=function(e){let[t,d]=(0,n.useState)(null),[s,c]=(0,n.useState)(null);return(0,n.useEffect)(()=>{let t=!1;return(0,r.fetchDemoProject)(e).then(e=>{t||d(e)}).catch(e=>{t||c(e instanceof Error?e.message:"Không tải được dự án mẫu")}),()=>{t=!0}},[e]),{project:t,error:s}}(e);return c?(0,t.jsx)("div",{className:"flex h-dvh items-center justify-center bg-zinc-100 px-4 text-center text-sm text-red-700",children:c}):s?(0,t.jsx)(t.Fragment,{children:d(s)}):(0,t.jsx)("div",{className:"flex h-dvh items-center justify-center bg-zinc-100 text-sm text-zinc-500",children:"Đang tải dự án mẫu…"})}],13946),e.s(["default",0,({children:e})=>(0,t.jsx)("code",{className:"rounded bg-zinc-300 px-1.5 py-0.5 font-mono text-xs",children:(0,t.jsx)("b",{children:e})})],11781)},19884,e=>{"use strict";var t=e.i(43476),n=e.i(71645),r=e.i(88014);function d({children:e}){let s=(0,n.useRef)(null),c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let n=s.current;if(!n)return;let d=n.shadowRoot??n.attachShadow({mode:"open"});if(!c.current){let e=document.createElement("style");e.textContent=`
        :host {
          color-scheme: light;
        }
        [data-preview-root] {
          color: #111;
          font-family: initial;
          font-size: medium;
          line-height: normal;
        }
      `;let t=document.createElement("div");t.setAttribute("data-preview-root",""),d.append(e,t),c.current=(0,r.createRoot)(t)}c.current.render((0,t.jsx)(t.Fragment,{children:e}))},[e]),(0,n.useEffect)(()=>()=>{let e=c.current;c.current=null,queueMicrotask(()=>e?.unmount())},[]),(0,t.jsx)("div",{ref:s,style:{flex:1,minWidth:0,backgroundColor:"#f0f0f0",padding:12}})}e.s(["default",0,({children:e,preview:n,codeAreaRatio:r=50})=>(0,t.jsxs)("div",{className:"rounded-md flex flex-row gap-2 overflow-hidden border border-zinc-300",style:{backgroundColor:"#bcbbbb"},children:[(0,t.jsx)("div",{className:"p-2",style:{maxWidth:`${r}%`,overflow:"auto"},children:e}),n?(0,t.jsx)(d,{children:(0,t.jsx)("div",{style:{overflow:"auto"},children:n})}):null]})])},94835,e=>{"use strict";e.s(["getRawCss",0,function(e){if(!e)return"";let t="";for(let n of Array.from(e.querySelectorAll('link[rel="stylesheet"]'))){let e=(n.getAttribute("href")??"").match(/^data:text\/css;charset=utf-8,(.+)$/i);if(e?.[1])try{t+=`${decodeURIComponent(e[1])}
`}catch{}}return t}])},85398,e=>{"use strict";var t=e.i(43476),n=e.i(85503),r=e.i(13946),d=e.i(19884),s=e.i(11781),c=e.i(94835);let l="css15";e.s(["default",0,function(){let e=e=>{let t=e.contentDocument,n=(0,c.getRawCss)(e.contentDocument);if(!t?.body)return[{passed:!1,required:"preview",message:"Không đọc được khung xem trước."}];let r=/\bborder-collapse\s*:\s*collapse\b/i.test(n),d=/\b(td|th)\b[^{]*\{[^}]*\bborder\b/i.test(n)||/#bang-hoat-dong[^{]*\{[^}]*\bborder\s*:/i.test(n),s=/:nth-child\s*\(\s*(even|odd)\s*\)/i.test(n),l=/tr\s*:\s*hover\s*\{/i.test(n);return[{passed:r,required:"border-collapse",message:r?"Đã dùng border-collapse: collapse":"Cần border-collapse: collapse"},{passed:d,required:"table-border",message:d?"Đã đặt border cho ô bảng":"Cần border trên th/td (hoặc bảng)"},{passed:s,required:"zebra",message:s?"Đã tô màu dòng chẵn/lẻ bằng :nth-child":"Cần :nth-child(even) hoặc :nth-child(odd)"},{passed:l,required:"row-hover",message:l?"Đã có tr:hover":"Cần quy tắc tr:hover { ... }"}]};return(0,t.jsx)(r.default,{projectDir:l,children:r=>(0,t.jsx)(n.default,{projectDir:l,initialProject:r,guide:(0,t.jsxs)("div",{className:"space-y-3 border-b border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700",children:[(0,t.jsx)("h1",{className:"text-zinc-900",children:"Bài 15: Định dạng bảng — border, border-collapse, hover, dòng chẵn/lẻ"}),(0,t.jsxs)("p",{children:["Bảng HTML được tô điểm bằng viền gọn (",(0,t.jsx)(s.default,{children:"border-collapse"}),"), hiệu ứng hover, và màu xen kẽ dòng."]}),(0,t.jsxs)(d.default,{preview:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
              #bang-hoat-dong {
                border-collapse: collapse;
                width: 100%;
                font-size: 13px;
              }
              #bang-hoat-dong th,
              #bang-hoat-dong td {
                border: 1px solid #0d8f7c;
                padding: 8px;
              }
              #bang-hoat-dong tbody tr:nth-child(even) {
                background: #ecfdf5;
              }
              #bang-hoat-dong tbody tr:hover {
                background: #99f6e4;
              }
            `}),(0,t.jsxs)("table",{id:"bang-hoat-dong",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"STT"}),(0,t.jsx)("th",{children:"Hoạt động"}),(0,t.jsx)("th",{children:"Địa điểm"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"1"}),(0,t.jsx)("td",{children:"Xây nhà tình nguyện"}),(0,t.jsx)("td",{children:"An Giang"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"2"}),(0,t.jsx)("td",{children:"Trồng cây xanh"}),(0,t.jsx)("td",{children:"Đồng Tháp"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"3"}),(0,t.jsx)("td",{children:"Dạy hè miễn phí"}),(0,t.jsx)("td",{children:"Kiên Giang"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"4"}),(0,t.jsx)("td",{children:"Khám sức khỏe cộng đồng"}),(0,t.jsx)("td",{children:"Cà Mau"})]})]})]})]}),children:["#bang-hoat-dong ","{",(0,t.jsx)("br",{}),"  border-collapse: collapse;",(0,t.jsx)("br",{}),"  width: 100%;",(0,t.jsx)("br",{}),"}",(0,t.jsx)("br",{}),"#bang-hoat-dong th,",(0,t.jsx)("br",{}),"#bang-hoat-dong td ","{",(0,t.jsx)("br",{}),"  border: 1px solid #0d8f7c;",(0,t.jsx)("br",{}),"  padding: 8px;",(0,t.jsx)("br",{}),"}",(0,t.jsx)("br",{}),"#bang-hoat-dong tbody tr:nth-child(even) ","{",(0,t.jsx)("br",{}),"  background: #ecfdf5;",(0,t.jsx)("br",{}),"}",(0,t.jsx)("br",{}),"#bang-hoat-dong tbody tr:hover ","{",(0,t.jsx)("br",{}),"  background: #99f6e4;",(0,t.jsx)("br",{}),"}",(0,t.jsx)("pre",{children:`
<table id="bang-hoat-dong">
  <thead>
    <tr>
      <th>STT</th>
      <th>Hoạt động</th>
      <th>Địa điểm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>X\xe2y nh\xe0 t\xecnh nguyện</td>
      <td>An Giang</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Trồng c\xe2y xanh</td>
      <td>Đồng Th\xe1p</td>
    </tr>
    …
  </tbody>
</table>`})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("b",{children:["1. ",(0,t.jsx)(s.default,{children:"border-collapse: collapse"})]}),": làm cho viền của các ô bảng gộp lại thành một. Có thể nhận các giá trị:",(0,t.jsxs)("ul",{className:"list-disc space-y-1 pl-5",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(s.default,{children:"separate"})," - viền của các ô bảng không gộp lại (mặc định)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)(s.default,{children:"collapse"})," - viền của các ô bảng gộp lại thành một"]})]})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("b",{children:["2. ",(0,t.jsx)(s.default,{children:"#bang-hoat-dong tbody tr:hover"})]}),": là selector chỉ định cho các thẻ ",(0,t.jsx)(s.default,{children:"tr"})," nằm trong thẻ ",(0,t.jsx)(s.default,{children:"tbody"})," của bảng có id là ",(0,t.jsx)(s.default,{children:"#bang-hoat-dong"})," tại thời điểm di chuột đến."]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("b",{children:["3. ",(0,t.jsx)(s.default,{children:"#bang-hoat-dong tbody tr:nth-child(even)"})]}),": là selector chỉ định cho các thẻ ",(0,t.jsx)(s.default,{children:"tr"})," nằm trong thẻ ",(0,t.jsx)(s.default,{children:"tbody"})," của bảng có id là",(0,t.jsx)(s.default,{children:"#bang-hoat-dong"})," và là dòng chẵn. ",(0,t.jsx)("br",{}),"Nếu muốn chỉ định dòng lẻ, thay ",(0,t.jsx)(s.default,{children:"even"})," bằng ",(0,t.jsx)(s.default,{children:"odd"}),"."]}),(0,t.jsx)("h2",{children:"Nhiệm vụ:"}),(0,t.jsxs)("div",{children:["1. Đặt ",(0,t.jsx)(s.default,{children:"border-collapse: collapse"})," cho bảng",(0,t.jsx)("br",{}),"2. Đặt ",(0,t.jsx)(s.default,{children:"border"})," cho ",(0,t.jsx)(s.default,{children:"th"})," và/hoặc"," ",(0,t.jsx)(s.default,{children:"td"}),(0,t.jsx)("br",{}),"3. Tô màu dòng chẵn hoặc lẻ bằng ",(0,t.jsx)(s.default,{children:":nth-child(even)"})," ","hoặc ",(0,t.jsx)(s.default,{children:":nth-child(odd)"}),(0,t.jsx)("br",{}),"4. Thêm ",(0,t.jsx)(s.default,{children:"tr:hover"})," để đổi nền khi di chuột"]})]}),checkResult:e,module:"css",currentIndex:15,maxIndex:24})})}])}]);