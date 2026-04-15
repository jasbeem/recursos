import{i as he}from"./theme-B8HXl75L.js";import{m as be,l as ve,s as ye,r as k,n as Se,c as ae,a as _e,b as Ae,u as nt}from"./session-store-BTrXVfP6.js";function $e(e){if(Array.isArray(e))return e.map(r=>String(r||"").trim()).filter(Boolean);const t=String(e||"").trim();return t?[t]:[]}function we(e){if(!e)throw new Error("Falta formId de Google Form.");const t=String(e).trim();return t.startsWith("http")?t.includes("/viewform")?t:t.includes("/formResponse")?t.replace("/formResponse","/viewform"):t.includes("/edit")?t.replace("/edit","/viewform"):t:t.startsWith("1FAIpQL")?`https://docs.google.com/forms/d/e/${t}/viewform`:`https://docs.google.com/forms/d/${t}/viewform`}function Ee(e,t){var a;const r=we(e.formId),n=new URL(r);n.searchParams.set("usp","pp_url");for(const[o,i]of Object.entries(t)){const s=$e((a=e.entryMap)==null?void 0:a[o]);for(const u of s)n.searchParams.set(u,String(i??""))}return n.toString()}function Ce(e,t){var Mt;const r=be(t.fecha||new Date),n=e.formulario_google||((Mt=e.formularios_mensuales)==null?void 0:Mt[r]);if(!n)throw new Error(`No existe configuración de formulario. Define "formulario_google" o "formularios_mensuales.${r}".`);const a=!!t.puestosFijosCurso,i=(Array.isArray(t.registrations)?t.registrations:[]).map(w=>({alumno:String((w==null?void 0:w.studentName)||"").trim(),recurso:String((w==null?void 0:w.resource)||"").trim(),incidencia:!!(w!=null&&w.hasIncident),observacion:String((w==null?void 0:w.observation)||"").trim()})),s=JSON.stringify({puestos_fijos_curso:a,registros:i}),u=String(t.fecha||""),l=String(t.hora||""),m=u&&l?`${u} ${l}`:u||l||new Date().toISOString(),f=String(t.curso||"").trim(),p=String(t.unidad||"").trim(),v=`${String(t.asignatura||"").trim()}${f?` - ${f}${p?` ${p}`:""}`:""}`.trim(),$={fecha_hora:m,recurso:t.recurso||"",ubicacion:t.ubicacion||"",docente:t.docente||"",asignatura_curso:v,puestos_fijos_curso:a?"SI":"NO",data_json:s,json_data:s},tt=Ee(n,$);return{monthKey:r,formConfig:n,payload:$,prefilledUrl:tt}}const c=e=>document.getElementById(e),Ht=c("login-feedback"),ot=c("admin-config-loader"),B=c("boot-config-url"),ct=c("boot-config-file"),z=c("boot-load-config-file"),ut=c("boot-download-json"),lt=c("boot-show-json-editor"),dt=c("boot-config-json-panel"),C=c("boot-config-text"),ft=c("boot-load-config-text"),et=c("boot-config-feedback"),P=c("admin-app"),Ne=c("session-form"),y=c("session-feedback"),Rt=c("student-url"),Le=c("validation-header"),V=c("assignment-table"),q=c("go-bulk-submit"),gt=c("add-registration"),F=c("refresh-remote"),Pt=c("registration-count"),pt=c("print-session-report"),x=c("refresh-feedback"),J=c("bulk-feedback"),ke=c("audit-form"),_=c("audit-results"),mt=c("audit-file"),ht=c("audit-apply-filters"),bt=c("audit-clear-filters"),vt=c("audit-print-report"),G=c("audit-summary"),ie=c("admin-subtitle"),Re=c("validation-summary"),Bt=c("admin-tabs"),Oe=Array.from(document.querySelectorAll("[data-tab-target]")),xe=Array.from(document.querySelectorAll("[data-tab-panel]")),W=c("url-inicio"),M=c("access-code-btn"),Ot=c("bulk-success-modal"),zt=c("bulk-success-summary"),yt=c("close-bulk-success-modal"),Jt=c("students-label"),Gt=c("asignatura-otra-wrap"),A=c("asignatura-otra"),X=c("puestos-fijos-curso"),se=c("add-registration-modal"),St=c("add-registration-form"),Vt=c("add-registration-session-info"),Y=c("add-registration-student"),Q=c("add-registration-resource"),N=c("add-registration-incident"),L=c("add-registration-observation"),_t=c("close-add-registration-modal"),xt=c("audit-equipos-modal"),Wt=c("audit-equipos-content"),At=c("close-audit-equipos-modal");let d,ce,h,$t,E="",wt,Et,T=[],O=[],S={fecha_inicio:"",fecha_fin:"",hora:"",recurso:"",ubicacion:"",docente:"",asignatura:"",curso:"",equipos:""};const Xt="https://accounts.google.com/AccountChooser?continue=https://drive.google.com/drive/folders/1oZYSFdKnpJgSjnlaloQmsLd6V4J7aMcW",Ct=["1ºESO","2ºESO","3ºESO","4ºESO","1ºBach","2ºBach"],Nt=["A","B","C","D","E","F"],jt="erp_access_code_",qe="erp_session_",Yt=15e3,Tt="https://educacionadistancia.juntadeandalucia.es/centros/cadiz/my/courses.php",Fe={TYD:"Tecnología y Digitalización",DIG:"Digitalización",CDPC:"Computación y Robótica",TICO:"Tecnologías de la Información y la Comunicación","TYD II - BACH-C":"Tecnología y Digitalización II (Bach-C)","TYD II - Bach-C":"Tecnología y Digitalización II (Bach-C)",PRYC:"Proyectos de Robótica y Computación","SIN ASIGNATURA":"Otra..."};function g(e,t,r=!1){e&&(e.textContent=t,e.className=`feedback ${r?"error":"ok"}`)}function je(e){var t,r;return String((e==null?void 0:e.session_api_url)||(e==null?void 0:e.sessionApiUrl)||((t=e==null?void 0:e.config_general)==null?void 0:t.session_api_url)||((r=e==null?void 0:e.config_general)==null?void 0:r.sessionApiUrl)||"").trim()}function Te(e,t={}){return new Promise((r,n)=>{const a=`jsonp_${Date.now()}_${Math.random().toString(36).slice(2)}`,o=()=>{delete window[a],i.remove()},i=document.createElement("script");window[a]=u=>{o(),r(u)};const s=new URL(e);Object.entries(t).forEach(([u,l])=>{l&&s.searchParams.set(u,l)}),s.searchParams.set("callback",a),i.src=s.toString(),i.onerror=()=>{o(),n(new Error("No se pudo cargar JSONP. Revisa la URL, que el Web App sea publico, que apunte a /exec y que el navegador no este bloqueando scripts externos."))},document.head.append(i),window.setTimeout(()=>{window[a]&&(o(),n(new Error(`Timeout JSONP (${Yt} ms).`)))},Yt)})}function Ie(e,t){const r=[];e instanceof Error&&r.push(`fetch: ${e.message}`),t instanceof Error&&r.push(`jsonp: ${t.message}`);const a=e instanceof Error&&t instanceof Error?" Revisa el navegador/red donde se abre la app: extensiones, bloqueo corporativo o Content-Security-Policy del hosting (debe permitir connect-src/script-src hacia script.google.com y script.googleusercontent.com).":"";return new Error(r.length?`No se pudo leer App Script (${r.join(" | ")}).${a}`:"No se pudo leer App Script.")}function at(e){e&&(typeof e.showModal=="function"?e.showModal():e.setAttribute("open","open"))}function qt(e){e&&(typeof e.close=="function"?e.close():e.removeAttribute("open"))}function R(e,t){e.innerHTML="",t.forEach(r=>{const n=document.createElement("option");n.value=r,n.textContent=r,e.append(n)})}function De(e,t,r="Selecciona"){if(!e)return;e.innerHTML="";const n=document.createElement("option");n.value="",n.textContent=r,e.append(n);for(const a of t){const o=document.createElement("option");o.value=String(a),o.textContent=String(a),e.append(o)}}function Z(e){const t=String(e||"").trim();return t?Fe[t.toUpperCase()]||t:""}function Ue(e){return String(e||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().trim()}function D(e){return String(e||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function j(e){const t=Date.parse(String(e||"").trim());return Number.isFinite(t)?t:null}function Me(e){if(!Number.isFinite(e)||e<0)return"-";const t=Math.round(e/1e3),r=Math.floor(t/3600),n=Math.floor(t%3600/60),a=t%60;return r>0?`${r}h ${String(n).padStart(2,"0")}m ${String(a).padStart(2,"0")}s`:`${n}m ${String(a).padStart(2,"0")}s`}function He(e,t){const r=j(e==null?void 0:e.registrationOpenedAt),n=j(t==null?void 0:t.registeredAt);return r===null||n===null||n<r?"-":Me(n-r)}function Qt(e,t){const r=j(e==null?void 0:e.registeredAt),n=j(t==null?void 0:t.registeredAt);return r!==null&&n!==null&&r!==n?r-n:r!==null&&n===null?-1:r===null&&n!==null?1:String((e==null?void 0:e.studentName)||"").localeCompare(String((t==null?void 0:t.studentName)||""),"es",{sensitivity:"base"})}function Pe(e,t,r){const n=j(e==null?void 0:e.registrationOpenedAt);if(n===null)return Qt(t,r);const a=j(t==null?void 0:t.registeredAt),o=j(r==null?void 0:r.registeredAt),i=a!==null&&a>=n,s=o!==null&&o>=n;return i!==s?i?-1:1:Qt(t,r)}function Be(e=new Date){const t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${n}`}function ze(e){const t=String(e||"").trim(),r=t.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(!r)return t||"-";const[,n,a,o]=r;return`${o}/${a}/${n}`}function Kt(e){const[t,r]=String(e||"").split(":").map(n=>Number(n));return!Number.isFinite(t)||!Number.isFinite(r)?null:t*60+r}function Je(e){if(!e)return"8:00-9:00";const t=new Date,r=t.getHours()*60+t.getMinutes(),n=Array.from(e.options).map(a=>String(a.value||"").trim()).filter(Boolean);for(const a of n){const[o,i]=a.split("-").map(l=>String(l||"").trim()),s=Kt(o),u=Kt(i);if(!(s===null||u===null)&&r>=s&&r<u)return a}return n[0]||"8:00-9:00"}function Ge(e){const t=Ue(e);let r="";/(^|\s)1[ºO]?\s*(DE\s+)?ESO\b/.test(t)&&(r="1ºESO"),/(^|\s)2[ºO]?\s*(DE\s+)?ESO\b/.test(t)&&(r="2ºESO"),/(^|\s)3[ºO]?\s*(DE\s+)?ESO\b/.test(t)&&(r="3ºESO"),/(^|\s)4[ºO]?\s*(DE\s+)?ESO\b/.test(t)&&(r="4ºESO"),/(^|\s)1[ºO]?\s*(DE\s+)?BACH/.test(t)&&(r="1ºBach"),/(^|\s)2[ºO]?\s*(DE\s+)?BACH/.test(t)&&(r="2ºBach");let n="";const a=String(e||"").trim().match(/^\s*(1[ºo]?|2[ºo]?)\s*(de\s*)?bach(?:illerato)?\s+(.+)$/i);a!=null&&a[3]&&(n=a[3].trim());const o=t.match(/\b[1-4][ºO]?\s*([A-F])\s*ESO\b/)||t.match(/\b[1-2][ºO]?\s*([A-F])\s*BACH/)||t.match(/\b(ESO|BACH)\s*[- ]\s*([A-F])\b/)||t.match(/\bGRUPO\s*([A-F])\b/)||t.match(/\bUNIDAD\s*([A-F])\b/)||t.match(/\b([A-F])\s*(ESO|BACH)\b/)||t.match(/\b([A-F])$/);return o&&(n=(o[2]||o[1]||"").trim()),{course:r,unit:n}}function st(e){const t=Ge(e==null?void 0:e.curso),r=String((e==null?void 0:e.unidad)||"").trim();return r&&(t.unit=r.length===1?r.toUpperCase():r),t}function Ve(){var a;const e=((a=d.recursos)==null?void 0:a.asignaturas)||[],t=(d.catalogo_clases||[]).map(o=>o.asignatura),r=[...e,...t].map(Z).filter(Boolean),n=[...new Set(r)];return n.sort((o,i)=>o.localeCompare(i,"es")),n.includes("Otra...")||n.push("Otra..."),n}function It(){return Array.isArray(d==null?void 0:d.catalogo_clases)?d.catalogo_clases:[]}function ue(e){var a;const t=new Set;for(const o of It()){const i=st(o);i.course===e&&i.unit&&t.add(i.unit)}if(!t.size)for(const o of((a=d==null?void 0:d.recursos)==null?void 0:a.unidades)||Nt)t.add(o);const r=Nt.filter(o=>t.has(o)),n=[...t].filter(o=>!Nt.includes(o)).sort((o,i)=>o.localeCompare(i,"es"));return[...r,...n]}function We(){var t;const e=new Set;for(const r of It()){const n=st(r);n.course&&e.add(n.course)}if(!e.size)for(const r of((t=d==null?void 0:d.recursos)==null?void 0:t.cursos)||Ct)e.add(r);return[...Ct.filter(r=>e.has(r)),...[...e].filter(r=>!Ct.includes(r)).sort((r,n)=>r.localeCompare(n,"es"))]}function Xe(e,t){var a;const r=new Set;for(const o of It()){const i=st(o);i.course!==e||i.unit!==t||r.add(Z(o.asignatura))}if(!r.size)for(const o of((a=d==null?void 0:d.recursos)==null?void 0:a.asignaturas)||[])r.add(Z(o));const n=[...r].filter(Boolean).sort((o,i)=>o.localeCompare(i,"es"));return n.includes("Otra...")||n.push("Otra..."),n}function Lt(){const e=c("curso"),t=c("unidad"),r=c("asignatura");if(!e||!t||!r)return;const n=e.value,a=t.value,o=r.value,i=ue(n);R(t,i),i.includes(a)&&(t.value=a);const s=Xe(n,t.value);R(r,s),s.includes(o)&&(r.value=o)}function H(){var l,m,f;const e=c("students-list");if(!e||!d)return;const t=((l=c("curso"))==null?void 0:l.value)||"",r=((m=c("unidad"))==null?void 0:m.value)||"",n=((f=c("asignatura"))==null?void 0:f.value)||"",a=((A==null?void 0:A.value)||"").trim(),o=n==="Otra..."?"":Z(n);Jt&&(Jt.textContent=`Alumnos ${t||"-"}-${r||"-"} ${n||"-"}`);const i=Array.isArray(d.catalogo_clases)?d.catalogo_clases:[],s=new Set;for(const p of i){const b=st(p);if(b.course!==t||b.unit!==r)continue;const v=Z(p.asignatura);if(!(o&&v!==o))for(const $ of p.alumnos||[])$&&s.add($)}const u=[...s].sort((p,b)=>p.localeCompare(b,"es"));e.value=u.join(`
`),n==="Otra..."&&a&&g(y,`Asignatura personalizada: ${a}. Alumnos filtrados por curso/unidad.`,!1)}function le(){for(let e=0;e<20;e+=1){const t=String(Math.floor(1e4+Math.random()*9e4));if(!localStorage.getItem(`${jt}${t}`))return t}return String(Math.floor(1e4+Math.random()*9e4))}function Zt(e){e!=null&&e.accessCode&&localStorage.setItem(`${jt}${e.accessCode}`,JSON.stringify(e))}async function Ye(e){if(!E||!(e!=null&&e.accessCode))return;const t={action:"upsert",code:e.accessCode,sessionId:e.sessionId||"",session:e};let r;try{r=await fetch(E,{method:"POST",body:JSON.stringify(t),cache:"no-store"})}catch{await fetch(E,{method:"POST",body:JSON.stringify(t),cache:"no-store",mode:"no-cors"});return}if(!r.ok)throw new Error(`No se pudo guardar sesion remota (${r.status}).`);try{const n=await r.json();if(n&&n.ok===!1)throw new Error(n.error||"Error guardando sesion remota.")}catch(n){if(n instanceof Error)throw n}}async function Dt(e,t=""){if(!E||!e&&!t)return null;let r,n=null,a=null;try{const o=new URL(E);e?o.searchParams.set("code",e):t&&o.searchParams.set("sessionId",t);const i=await fetch(o.toString(),{cache:"no-store"});if(!i.ok)throw new Error(`No se pudo leer sesion remota (${i.status}).`);r=await i.json()}catch(o){n=o instanceof Error?o:new Error("Error leyendo App Script.");try{r=await Te(E,e?{code:e}:{sessionId:t})}catch(i){a=i instanceof Error?i:new Error("No se pudo cargar JSONP.")}}if(r&&r.ok===!1)return null;if(r!=null&&r.session&&typeof r.session=="object")return r.session;if(r!=null&&r.data&&typeof r.data=="object")return r.data;if(r&&typeof r=="object"&&!Array.isArray(r))return r;if(n||a)throw Ie(n,a);return null}function Qe(e,t){const r=Array.isArray(e==null?void 0:e.registrations)?e.registrations:[],n=Array.isArray(t==null?void 0:t.registrations)?t.registrations:[];if(!n.length)return r;const a=new Map;for(const o of n){const i=String((o==null?void 0:o.studentName)||"").trim();i&&a.set(i,o)}for(const o of r){const i=String((o==null?void 0:o.studentName)||"").trim();if(i){if(a.has(i)){const s=a.get(i)||{};a.set(i,{...o,...s,registeredAt:(s==null?void 0:s.registeredAt)||(o==null?void 0:o.registeredAt)||"",observation:(s==null?void 0:s.observation)||(o==null?void 0:o.observation)||""});continue}a.set(i,o)}}return Array.from(a.values())}function Ke(e,t){const r=(e==null?void 0:e.confirmed)||{};return{...(t==null?void 0:t.confirmed)||{},...r}}function Ut(e,t){if(!e||!t||typeof t!="object")return null;const r=k(e),n=Array.isArray(t==null?void 0:t.registrations)?t.registrations:[],a=(t==null?void 0:t.confirmed)||{};return r?nt(e,o=>o&&(o.docente=t.docente||o.docente||"",o.recurso=t.recurso||o.recurso||"",o.ubicacion=t.ubicacion||o.ubicacion||"",o.curso=t.curso||o.curso||"",o.unidad=t.unidad||o.unidad||"",o.asignatura=t.asignatura||o.asignatura||"",o.fecha=t.fecha||o.fecha||"",o.hora=t.hora||o.hora||"",o.url_inicio=t.url_inicio||o.url_inicio||"",o.registrationOpenedAt=t.registrationOpenedAt||o.registrationOpenedAt||"",o.puestosFijosCurso=!!(t.puestosFijosCurso??o.puestosFijosCurso),o.totalPCs=Number(t.totalPCs||o.totalPCs||30),o.accessCode=t.accessCode||o.accessCode||"",o.students=Array.isArray(t.students)&&t.students.length?t.students:Array.isArray(o.students)?o.students:[],o.assignments=t.assignments||o.assignments||{},o.registrations=Qe(o,t),o.confirmed=Ke(o,t),o)):ae({...t,sessionId:e||t.sessionId||"",registrationOpenedAt:t.registrationOpenedAt||"",registrations:n,confirmed:a,assignments:(t==null?void 0:t.assignments)||{}})}async function Ze(){if(!h){g(x,"No hay sesion activa.",!0);return}const e=k(h);if(!(e!=null&&e.accessCode)){g(x,"Sesion sin codigo de acceso.",!0);return}if(!E){g(x,"No hay session_api_url configurada.",!0);return}try{F&&(F.disabled=!0),g(x,"Actualizando desde App Script...");const t=await Dt(e.accessCode,h);if(!t){g(x,"No se encontraron datos remotos.",!0);return}const r=Ut(h,t);r&&I(r);const n=Array.isArray(r==null?void 0:r.registrations)?r.registrations.length:0;g(x,`Actualizado. Registros visibles: ${n}.`)}catch(t){g(x,t.message,!0)}finally{F&&(F.disabled=!1)}}async function kt(){if(!h||!E)return;const e=k(h);if(e!=null&&e.accessCode)try{const t=await Dt(e.accessCode,h);if(!t)return;const r=Ut(h,t);r&&I(r)}catch{}}function tr(e){if(!E||!(e!=null&&e.accessCode))return;Et&&window.clearInterval(Et);const t=e.accessCode,r=e.sessionId||"";Et=window.setInterval(async()=>{try{const n=await Dt(t,r);if(!n)return;const a=Ut(r,n);a&&r===h&&I(a)}catch{}},4e3)}function te(e){E&&e!=null&&e.accessCode&&(wt&&window.clearTimeout(wt),wt=window.setTimeout(()=>{Ye(e).catch(t=>{g(y,`Aviso: ${t.message}`,!0)})},700))}function er(e){return e.accessCode?e:{...e,accessCode:le()}}function rr(){const e=[];for(let t=0;t<localStorage.length;t+=1){const r=localStorage.key(t);r&&(r.startsWith(qe)||r.startsWith(jt))&&e.push(r)}for(const t of e)localStorage.removeItem(t)}function nr(){const e=c("asignatura");if(!e||!Gt||!A)return;const t=()=>{const r=e.value==="Otra...";Gt.classList.toggle("hidden",!r),A.required=r,r||(A.value=""),H()};e.onchange=t,A.oninput=H,t()}function Ft(e){Oe.forEach(t=>{t.classList.toggle("active",t.dataset.tabTarget===e)}),xe.forEach(t=>{t.classList.toggle("active",t.dataset.tabPanel===e)})}function or(){Bt&&Bt.addEventListener("click",e=>{const t=e.target;if(!(t instanceof HTMLButtonElement))return;const r=t.dataset.tabTarget;r&&Ft(r)})}function ar(){var s,u,l,m;if(!d)return;const e=c("docente"),t=c("recurso"),r=c("ubicacion");R(e,((s=d.recursos)==null?void 0:s.docentes)||["Docente sin configurar"]),R(r,((u=d.recursos)==null?void 0:u.ubicaciones)||["Ubicacion sin configurar"]);const n=[].concat(Array.isArray((l=d==null?void 0:d.recursos)==null?void 0:l.inventario)?d.recursos.inventario:[]).concat(Array.isArray(d==null?void 0:d.inventario)?d.inventario:[]),a=f=>{const p=String(f||"").trim();if(!p)return[];const b=n.filter(v=>String((v==null?void 0:v.ubicacion)||"").trim()===p).map(v=>String((v==null?void 0:v.recurso)||"").trim()).filter(Boolean);return[...new Set(b)].sort((v,$)=>v.localeCompare($,"es"))},o=()=>{var tt;const f=String((r==null?void 0:r.value)||"").trim(),p=String((t==null?void 0:t.value)||"").trim(),b=a(f),v=((tt=d.recursos)==null?void 0:tt.nombres)||["Recurso sin configurar"],$=b.length?b:v;R(t,$),$.includes(p)&&(t.value=p)};o(),r.onchange=o,R(c("curso"),We()),R(c("unidad"),ue(c("curso").value)),R(c("asignatura"),Ve()),Lt(),nr(),c("curso").onchange=()=>{Lt(),H()},c("unidad").onchange=()=>{Lt(),H()},c("asignatura").onchange=H,H(),c("fecha").value=Be(new Date);const i=c("hora");i.value=Je(i),X&&(X.checked=!!((m=d.sesion_default)!=null&&m.puestos_fijos_curso)),W&&(W.value=String(d.url_inicio||Tt))}function ir(e){var o;const r=[].concat(Array.isArray((o=d==null?void 0:d.recursos)==null?void 0:o.inventario)?d.recursos.inventario:[]).concat(Array.isArray(d==null?void 0:d.inventario)?d.inventario:[]).find(i=>{const s=String((i==null?void 0:i.recurso)||"").trim(),u=String((i==null?void 0:i.ubicacion)||"").trim();return s===String((e==null?void 0:e.recurso)||"").trim()&&u===String((e==null?void 0:e.ubicacion)||"").trim()}),n=[].concat(Array.isArray(r==null?void 0:r.equipos)?r.equipos:[]).concat(Array.isArray(r==null?void 0:r.recursos)?r.recursos:[]).map(i=>String(i||"").trim()).filter(Boolean);if(n.length)return n;const a=Math.max(1,Number((e==null?void 0:e.totalPCs)||30));return Array.from({length:a},(i,s)=>`Equipo ${String(s+1).padStart(2,"0")}`)}function sr(e){const t=new URL("student.html",window.location.href);return t.searchParams.set("cod",e.accessCode),t.toString()}function I(e){if(!e)return;const t=Array.isArray(e.registrations)?e.registrations:[],r=t.map((u,l)=>({rowData:u,idx:l})).sort((u,l)=>Pe(e,u.rowData,l.rowData)),n=e.confirmed||{},a=t.length,o=Object.keys(n).length,i=Array.isArray(e.students)?e.students.length:0,s=Math.max(i-a,0);if(Pt&&(Pt.textContent=`Registros: ${a}`),Re.textContent=`Registros recibidos: ${a}/${i}. Confirmados: ${o}. Pendientes: ${s}.`,Le.innerHTML=`
    <div class="grid gap-2 md:grid-cols-3">
      <p><strong>Docente:</strong> ${e.docente||"-"}</p>
      <p><strong>Fecha:</strong> ${e.fecha||"-"}</p>
      <p><strong>Hora:</strong> ${e.hora||"-"}</p>
      <p><strong>Curso:</strong> ${e.curso||"-"}</p>
      <p><strong>Unidad:</strong> ${e.unidad||"-"}</p>
      <p><strong>Asignatura:</strong> ${e.asignatura||"-"}</p>
      <p><strong>Puestos fijos (curso):</strong> ${e.puestosFijosCurso?"Si":"No"}</p>
      <p><strong>Ubicacion:</strong> ${e.ubicacion||"-"}</p>
      <p><strong>Recurso:</strong> ${e.recurso||"-"}</p>
    </div>
  `,V.innerHTML="",!t.length){const u=document.createElement("tr");u.innerHTML='<td colspan="6">Sin registros de alumnado por ahora.</td>',V.append(u);return}r.forEach(({rowData:u,idx:l},m)=>{const f=He(e,u),p=document.createElement("tr");p.innerHTML=`
      <td><input data-type="studentName" data-row="${l}" value="${u.studentName||""}" /></td>
      <td><input data-type="resource" data-row="${l}" value="${u.resource||e.recurso||""}" /></td>
      <td title="Orden de llegada ${m+1}">${f}</td>
      <td>
        <select data-type="hasIncident" data-row="${l}">
          <option value="no" ${u.hasIncident?"":"selected"}>No</option>
          <option value="si" ${u.hasIncident?"selected":""}>Si</option>
        </select>
      </td>
      <td><input data-type="observation" data-row="${l}" value="${u.observation||""}" /></td>
      <td><button type="button" class="btn danger" data-action="delete-registration" data-row="${l}">Eliminar</button></td>
    `,V.append(p)})}function cr(){if(!h){g(y,"No hay sesion activa para imprimir.",!0);return}const e=k(h);if(!e){g(y,"No se encontro la sesion activa.",!0);return}const t=(Array.isArray(e.registrations)?e.registrations:[]).map(u=>({studentName:String((u==null?void 0:u.studentName)||"").trim(),resource:String((u==null?void 0:u.resource)||"").trim(),hasIncident:!!(u!=null&&u.hasIncident),observation:String((u==null?void 0:u.observation)||"").trim()})).filter(u=>u.studentName||u.resource||u.observation).sort((u,l)=>u.resource.localeCompare(l.resource,"es",{numeric:!0,sensitivity:"base"})||u.studentName.localeCompare(l.studentName,"es",{sensitivity:"base"}));if(!t.length){g(y,"No hay registros en la sesion para imprimir.",!0);return}const r=[e.curso,e.unidad].filter(Boolean).join(" "),a=[["Docente",e.docente||"-"],["Fecha",ze(e.fecha)],["Hora",e.hora||"-"],["Curso",r||"-"],["Asignatura",e.asignatura||"-"],["Ubicacion",e.ubicacion||"-"],["Recurso",e.recurso||"-"],["Registros",String(t.length)]].map(([u,l])=>`<p><strong>${D(u)}:</strong> ${D(l)}</p>`).join(""),o=t.map(u=>{const l=u.hasIncident?"Incidencia registrada":"Sin incidencia",m=u.hasIncident&&u.observation?u.observation:"";return`
        <article class="resource-card">
          <p class="resource-card__title">${D(u.resource||"Recurso sin indicar")}</p>
          <div class="resource-card__box">
            <p class="resource-card__student">${D(u.studentName||"Alumno sin indicar")}</p>
            <p class="resource-card__note">${D(l)}</p>
            ${m?`<p class="resource-card__observation">${D(m)}</p>`:""}
          </div>
        </article>
      `}).join(""),i=`
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Hoja de registro de recursos</title>
        <style>
          @page { size: A4 portrait; margin: 10mm; }
          * { box-sizing: border-box; }
          html, body { margin: 0; padding: 0; }
          body {
            font-family: Arial, sans-serif;
            color: #0f172a;
            font-size: 11px;
          }
          .sheet-header {
            margin-bottom: 5mm;
          }
          .sheet-header h1 {
            margin: 0 0 2mm;
            font-size: 17px;
          }
          .sheet-header__meta {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 1.5mm 3mm;
          }
          .sheet-header__meta p {
            margin: 0;
            line-height: 1.25;
          }
          .resource-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 3mm;
            align-content: start;
          }
          .resource-card {
            height: 40mm;
            break-inside: avoid;
            display: flex;
            flex-direction: column;
          }
          .resource-card__title {
            margin: 0 0 1.5mm;
            min-height: 8mm;
            font-size: 10px;
            font-weight: 700;
            line-height: 1.15;
            text-align: center;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .resource-card__box {
            flex: 1;
            border: 1.5px solid #0f172a;
            border-radius: 2mm;
            padding: 2.5mm 2mm;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: 30mm;
          }
          .resource-card__student {
            margin: 0;
            font-size: 11px;
            font-weight: 700;
            line-height: 1.25;
            overflow-wrap: anywhere;
          }
          .resource-card__note {
            margin: 2mm 0 0;
            font-size: 8px;
            font-weight: 700;
            line-height: 1.2;
            color: #475569;
            text-transform: uppercase;
          }
          .resource-card__observation {
            margin: 1mm 0 0;
            font-size: 7.5px;
            line-height: 1.2;
            color: #64748b;
            max-height: 8mm;
            overflow: hidden;
            overflow-wrap: anywhere;
          }
        </style>
      </head>
      <body>
        <section class="sheet-header">
          <h1>Registro de recursos de la sesion</h1>
          <div class="sheet-header__meta">${a}</div>
        </section>
        <section class="resource-grid">${o}</section>
      </body>
    </html>
  `,s=window.open("","_blank");if(!s){g(y,"El navegador ha bloqueado la ventana de impresion.",!0);return}s.document.write(i),s.document.close(),s.focus(),s.print()}function ur(){const e=t=>{const r=t.target;if(!(r instanceof HTMLTextAreaElement)&&!(r instanceof HTMLInputElement)&&!(r instanceof HTMLSelectElement))return;const n=r.dataset.row,a=r.dataset.type;if(!n||!a||!h)return;const o=Number(n);Number.isInteger(o)&&nt(h,i=>{i.registrations=Array.isArray(i.registrations)?i.registrations:[];const s=i.registrations[o];return s&&(a==="studentName"&&(s.studentName=r.value.trim()),a==="resource"&&(s.resource=r.value.trim()),a==="hasIncident"&&(s.hasIncident=r.value==="si"),a==="observation"&&(s.observation=r.value.trim()),i.registrations[o]=s),i})};V.addEventListener("click",t=>{const r=t.target;if(!(r instanceof Element))return;const n=r.closest('[data-action="delete-registration"]');if(!(n instanceof HTMLButtonElement))return;t.preventDefault();const a=n.dataset.row;if(!a||!h)return;const o=Number(a);if(!Number.isInteger(o))return;const i=nt(h,s=>(s.registrations=Array.isArray(s.registrations)?s.registrations:[],s.registrations.splice(o,1),s));i&&I(i)}),V.addEventListener("change",e)}function lr(){if(!h){g(y,"No hay sesion activa para anadir registros.",!0);return}const e=k(h);if(!e){g(y,"No se encontro la sesion activa.",!0);return}if(Vt&&(Vt.textContent=`Sesion ${e.sessionId||"-"} | ${e.curso||"-"} ${e.unidad||""} | ${e.asignatura||"-"}`),Y&&(Y.value=""),Q){const t=ir(e);De(Q,t,"Selecciona equipo/recurso")}N&&(N.value="no"),L&&(L.value="",L.disabled=!0),at(se)}function ee(){qt(se)}function dr(e){const n=String(e).trim().replace(/["']+$/,"").replace(/https:\/\/script\.google\.com\/a\/macros\/[^/]+\/s\//i,"https://script.google.com/macros/s/"),a=n.match(/drive\.google\.com\/file\/d\/([^/]+)/i);return a?`https://drive.google.com/uc?export=download&id=${a[1]}`:n}function fr(e){const t=er(e);h=t.sessionId;const r=sr(t);Rt.value=r,M&&(M.textContent=t.accessCode),Zt(t),te(t),tr(t),$t&&$t(),$t=Ae(h,n=>{n&&(n.accessCode||(n.accessCode=t.accessCode),Zt(n),te(n),I(n))}),I(t)}function gr(e,t){const r=(e==null?void 0:e.payload)||{},a=(Array.isArray(t==null?void 0:t.registrations)?t.registrations:[]).filter(i=>String((i==null?void 0:i.studentName)||"").trim()).length;return["Estado: formulario prellenado abierto","Canal: apertura manual del Google Form",`Sesion: ${(t==null?void 0:t.sessionId)||"-"}`,`Docente: ${r.docente||(t==null?void 0:t.docente)||"-"}`,`Recurso: ${r.recurso||(t==null?void 0:t.recurso)||"-"}`,`Ubicacion: ${r.ubicacion||(t==null?void 0:t.ubicacion)||"-"}`,`Asignatura/Curso: ${r.asignatura_curso||"-"}`,`Puestos fijos curso: ${r.puestos_fijos_curso||(t!=null&&t.puestosFijosCurso?"Si":"No")}`,`Fecha y hora: ${r.fecha_hora||"-"}`,`Registros de alumnado cargados: ${a}`,`URL de formulario: ${(e==null?void 0:e.prefilledUrl)||"-"}`,"JSON cargado:",String(r.data_json||"{}")].join(`
`)}async function pr(){if(!h){g(J,"No hay sesion activa.",!0);return}const e=k(h);if(!e){g(J,"No se encontro sesion para envio.",!0);return}try{q&&(q.disabled=!0),g(J,"Abriendo formulario prellenado...");const t=Ce(d,e);if(!window.open(t.prefilledUrl,"_blank","noopener,noreferrer"))throw new Error("El navegador bloqueó la pestaña emergente del formulario.");g(J,"Formulario prellenado abierto. Revisa y pulsa Enviar en Google Forms."),zt&&(zt.textContent=gr(t,e)),Ot&&at(Ot)}catch(t){g(J,t.message,!0)}finally{q&&(q.disabled=!1)}}function re(e,t="archivo local"){d=_e(e,ce||null),E=je(d),d.url_inicio||(d.url_inicio=Tt),ie.textContent=`${d.instituto||"Instituto"} | Registro del uso de recursos`,ar()}function mr(){var e;ot&&ot.classList.remove("hidden"),(e=c("admin-login"))==null||e.classList.add("hidden"),P==null||P.classList.add("hidden")}function hr(){var e;ot&&ot.classList.add("hidden"),(e=c("admin-login"))==null||e.classList.add("hidden"),P==null||P.classList.remove("hidden")}function br(e){const t=[],n=String(e||"").replace(/\r\n/g,`
`).split(`
`).filter(s=>s.trim().length);if(!n.length)return t;const a=n[0].includes(";")?";":",",o=s=>{const u=[];let l="",m=!1;for(let f=0;f<s.length;f+=1){const p=s[f];if(p==='"'){const b=s[f+1];if(m&&b==='"'){l+='"',f+=1;continue}m=!m;continue}if(p===a&&!m){u.push(l.trim()),l="";continue}l+=p}return u.push(l.trim()),u},i=o(n[0]).map(s=>s.trim());for(let s=1;s<n.length;s+=1){const u=o(n[s]),l={};i.forEach((m,f)=>{l[m]=u[f]??""}),t.push(l)}return t}function U(e,t){const r=Object.entries(e);for(const[n,a]of r){const o=n.toLowerCase().trim();if(t.includes(o))return String(a||"").trim()}return""}function vr(e){const t=String(e||"").trim(),r=t.match(/^(\d{4}-\d{2}-\d{2})(?:\s+(.+))?$/);if(r){const a=r[1],[o,i,s]=a.split("-");return{fecha_iso:a,fecha_display:`${s}/${i}/${o}`,hora:String(r[2]||"").trim()}}const n=t.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(.+))?$/);if(n){const a=n[1].padStart(2,"0"),o=n[2].padStart(2,"0"),i=n[3];return{fecha_iso:`${i}-${o}-${a}`,fecha_display:`${a}/${o}/${i}`,hora:String(n[4]||"").trim()}}return{fecha_iso:"",fecha_display:t,hora:""}}function yr(e){const t=String(e||"").trim(),[r,n]=t.split(" - ");return{asignatura:String(r||"").trim(),curso:String(n||"").trim()}}function Sr(e){const t=String(e||"").trim();if(!t)return{};try{return JSON.parse(t)}catch{return{}}}function _r(e){var r,n;const t=[];if(Array.isArray(e==null?void 0:e.registros)){for(const a of e.registros)t.push({equipo:String((a==null?void 0:a.recurso)||"").trim()||"-",alumno:String((a==null?void 0:a.alumno)||"").trim()||"-",incidencia:a!=null&&a.incidencia?"Si":"No",observacion:String((a==null?void 0:a.observacion)||"").trim()});return t}for(const[a,o]of Object.entries(e||{})){if(a==="incidencias"||a==="puestos_fijos_curso")continue;const i=Array.isArray(o)?o:[];for(const s of i)t.push({equipo:a,alumno:String(s||"").trim()||"-",incidencia:(r=e==null?void 0:e.incidencias)!=null&&r[a]?"Si":"No",observacion:String(((n=e==null?void 0:e.incidencias)==null?void 0:n[a])||"").trim()})}return t}function Ar(e){return e.map((t,r)=>{const n=U(t,["fecha_hora","fechahora"]),{fecha_iso:a,fecha_display:o,hora:i}=vr(n),s=U(t,["recurso"]),u=U(t,["ubicacion"]),l=U(t,["docente"]),m=U(t,["asignatura_curso"]),f=yr(m),p=U(t,["data_json","json_data"]),b=_r(Sr(p)),v=[...new Set(b.map($=>String($.equipo||"").trim()).filter(Boolean))].join(" | ");return{__id:r,fecha_iso:a,fecha_display:o,hora:i,recurso:s,ubicacion:u,docente:l,asignatura:f.asignatura,curso:f.curso,equipos_count:b.length,equipos_rows:b,equipos_search:v}})}function ne(e){var i;const n=(((i=String(e||"").trim().split("-")[0])==null?void 0:i.trim())||"").match(/^(\d{1,2}):(\d{2})$/);if(!n)return Number.MAX_SAFE_INTEGER;const a=Number(n[1]),o=Number(n[2]);return!Number.isFinite(a)||!Number.isFinite(o)?Number.MAX_SAFE_INTEGER:a*60+o}function de(e){return[...e].sort((t,r)=>{const n=String((t==null?void 0:t.fecha_iso)||""),a=String((r==null?void 0:r.fecha_iso)||"");if(n!==a)return a.localeCompare(n);const o=ne(t==null?void 0:t.hora),i=ne(r==null?void 0:r.hora);return o!==i?o-i:0})}function fe(e){return String(e||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[_|/\\-]+/g," ").replace(/\s+/g," ").trim()}function $r(e){const t=fe(e);if(!t)return[];const r=t.replace(/\s+/g,""),n=t.replace(/\b0+(\d+)/g,"$1");return[...new Set([t,r,n].filter(Boolean))]}function ge(e,t){const r=fe(t);if(!r)return!0;const n=$r(e),a=r.split(" ").filter(Boolean);return n.length?a.every(o=>{const i=o.replace(/^0+(\d+)/,"$1");return n.some(s=>s.includes(o)||s.includes(i))}):!1}function it(){if(G){if(!T.length){G.textContent="Carga un CSV para consultar el historial.",G.className="feedback";return}G.textContent=`Mostrando ${O.length} de ${T.length} registros.`,G.className="feedback ok"}}function oe(e,t=""){const r=Array.isArray(e==null?void 0:e.equipos_rows)?e.equipos_rows:[],n=String(t||"").trim();return n?r.filter(a=>ge((a==null?void 0:a.equipo)||"",n)):r}function wr(){Array.from(_.querySelectorAll("[data-audit-filter]")).forEach(r=>{r.value=""});const e=_.querySelector("[data-audit-date-start]"),t=_.querySelector("[data-audit-date-end]");e instanceof HTMLInputElement&&(e.value=""),t instanceof HTMLInputElement&&(t.value="")}function pe(){S={fecha_inicio:"",fecha_fin:"",hora:"",recurso:"",ubicacion:"",docente:"",asignatura:"",curso:"",equipos:""}}function K(){const e=String(S.fecha_inicio||"").trim(),t=String(S.fecha_fin||"").trim(),r=String(S.equipos||"").trim();O=de(T.map(n=>{if(e&&(!n.fecha_iso||n.fecha_iso<e)||t&&(!n.fecha_iso||n.fecha_iso>t))return null;for(const[o,i]of Object.entries(S)){if(o==="fecha_inicio"||o==="fecha_fin")continue;const s=String(i||"").trim();if(s){if(o==="equipos"){if(!oe(n,s).length)return null;continue}if(!ge(n[o]||"",s))return null}}const a=oe(n,r);return{...n,equipos_rows_visible:a,equipos_count_visible:a.length}}).filter(Boolean)),it(),me()}function Er(e){const t=O.find(o=>o.__id===e)||T.find(o=>o.__id===e);if(!t)return;const r=[t.fecha_iso||t.fecha_display||"-",t.hora||"-",t.recurso||"-",t.ubicacion||"-",t.docente||"-",t.asignatura||"-",t.curso||"-"].join("	"),n=Array.isArray(t.equipos_rows_visible)?t.equipos_rows_visible:t.equipos_rows||[];if(!n.length){Wt.innerHTML=`
      <p class="mb-2"><strong>Datos comunes</strong></p>
      <pre class="mb-3 overflow-auto rounded-lg border border-slate-300 bg-slate-50 p-2 text-xs dark:border-slate-700 dark:bg-slate-950">${r}</pre>
      <p>No hay detalle de equipos en este registro.</p>
    `,at(xt);return}const a=n.map(o=>`<tr><td>${o.equipo}</td><td>${o.alumno}</td><td>${o.incidencia}</td><td>${o.observacion||"-"}</td></tr>`).join("");Wt.innerHTML=`
    <p class="mb-2"><strong>Datos comunes</strong></p>
    <pre class="mb-3 overflow-auto rounded-lg border border-slate-300 bg-slate-50 p-2 text-xs dark:border-slate-700 dark:bg-slate-950">${r}</pre>
    <table>
      <thead><tr><th>Equipo</th><th>Alumno</th><th>Incidencia</th><th>Observacion</th></tr></thead>
      <tbody>${a}</tbody>
    </table>
  `,at(xt)}function me(){const e=_==null?void 0:_.querySelector("#audit-results-body");if(e){if(!O.length){e.innerHTML='<tr><td colspan="8">No hay resultados para ese filtro.</td></tr>';return}e.innerHTML=O.map(t=>`<tr>
          <td>${t.fecha_display||"-"}</td>
          <td>${t.hora||"-"}</td>
          <td>${t.recurso||"-"}</td>
          <td>${t.ubicacion||"-"}</td>
          <td>${t.docente||"-"}</td>
          <td>${t.asignatura||"-"}</td>
          <td>${t.curso||"-"}</td>
          <td><button type="button" class="btn" data-audit-equipos="${t.__id}">👁️ ${t.equipos_count_visible??t.equipos_count}</button></td>
        </tr>`).join("")}}function rt(){Array.from(_.querySelectorAll("[data-audit-filter]")).forEach(r=>{const n=r.getAttribute("data-audit-filter");n&&(S[n]=String(r.value||""))});const e=_.querySelector("[data-audit-date-start]"),t=_.querySelector("[data-audit-date-end]");e instanceof HTMLInputElement&&(S.fecha_inicio=String(e.value||"")),t instanceof HTMLInputElement&&(S.fecha_fin=String(t.value||""))}function Cr(){if(!T.length){_.innerHTML="<p>No hay resultados para ese filtro.</p>",it();return}const t=[{key:"fecha",label:"Fecha"},{key:"hora",label:"Hora"},{key:"recurso",label:"Recurso"},{key:"ubicacion",label:"Ubicación"},{key:"docente",label:"Docente"},{key:"asignatura",label:"Asignatura"},{key:"curso",label:"Curso"}].map(a=>`<th>${a.label}</th>`).join("")+"<th>Equipos</th>";_.innerHTML=`
    <div class="audit-filters">
      <div class="audit-filters__grid">
        <label class="audit-filter-field">
          <span>Fecha desde</span>
          <input type="date" data-audit-date-start value="${String(S.fecha_inicio||"")}" />
        </label>
        <label class="audit-filter-field">
          <span>Fecha hasta</span>
          <input type="date" data-audit-date-end value="${String(S.fecha_fin||"")}" />
        </label>
        <label class="audit-filter-field">
          <span>Hora</span>
          <input data-audit-filter="hora" placeholder="Ej. 8:00 o 1 hora" value="${String(S.hora||"")}" />
        </label>
        <label class="audit-filter-field">
          <span>Recurso</span>
          <input data-audit-filter="recurso" placeholder="Ej. Aula, carro, portátil..." value="${String(S.recurso||"")}" />
        </label>
        <label class="audit-filter-field">
          <span>Ubicación</span>
          <input data-audit-filter="ubicacion" placeholder="Ej. Convento, Sangre..." value="${String(S.ubicacion||"")}" />
        </label>
        <label class="audit-filter-field">
          <span>Docente</span>
          <input data-audit-filter="docente" placeholder="Nombre o apellido" value="${String(S.docente||"")}" />
        </label>
        <label class="audit-filter-field">
          <span>Asignatura</span>
          <input data-audit-filter="asignatura" placeholder="Asignatura" value="${String(S.asignatura||"")}" />
        </label>
        <label class="audit-filter-field">
          <span>Curso</span>
          <input data-audit-filter="curso" placeholder="Ej. 3 ESO, Bach..." value="${String(S.curso||"")}" />
        </label>
        <label class="audit-filter-field audit-filter-field--wide">
          <span>Equipos</span>
          <input data-audit-filter="equipos" placeholder="Ej. 10, portátil 10, tablet 4..." value="${String(S.equipos||"")}" />
        </label>
      </div>
      <p class="audit-filters__hint">Las búsquedas son flexibles. Ejemplo: 10 encuentra Portatil 10, Equipo 10 o Tablet 10.</p>
    </div>
    <table>
      <thead>
        <tr>${t}</tr>
      </thead>
      <tbody id="audit-results-body"></tbody>
    </table>
  `,it(),me(),Array.from(_.querySelectorAll("[data-audit-filter]")).forEach(a=>{a.addEventListener("keydown",o=>{o.key==="Enter"&&(o.preventDefault(),rt(),K())})});const r=_.querySelector("[data-audit-date-start]"),n=_.querySelector("[data-audit-date-end]");r==null||r.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),rt(),K())}),n==null||n.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),rt(),K())}),_.onclick=a=>{const o=a.target;if(!(o instanceof Element))return;const i=o.closest("[data-audit-equipos]");if(!(i instanceof HTMLButtonElement))return;const s=Number(i.getAttribute("data-audit-equipos"));Number.isInteger(s)&&Er(s)}}function Nr(){if(!O.length)return;const e=new Map;for(const a of O){const o=a.fecha_display||"-";e.has(o)||e.set(o,[]),e.get(o).push(a)}const r=`
    <html>
      <head>
        <title>Informe de auditoria</title>
        <style>
          @page { size: A4; margin: 14mm; }
          body { font-family: Arial, sans-serif; font-size: 12px; }
          h2 { margin: 0 0 10px; }
          h3 { margin: 18px 0 8px; font-size: 14px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; }
          .fecha-bloque { break-inside: avoid; margin-top: 8px; }
          .registro { break-inside: avoid; margin-top: 8px; }
          .common { margin: 0 0 6px; color: #334155; }
          .alumnos-cols {
            margin: 0;
            padding-left: 20px;
            column-count: 2;
            column-gap: 24px;
          }
          .alumnos-cols li { break-inside: avoid; margin: 0 0 3px; }
        </style>
      </head>
      <body>
        <h2>Informe de auditoria</h2>
        ${[...e.entries()].map(([a,o])=>{const i=o.map(s=>{const u=`${s.fecha_iso||s.fecha_display||"-"} | ${s.hora||"-"} | ${s.recurso||"-"} | ${s.ubicacion||"-"} | ${s.docente||"-"} | ${s.asignatura||"-"} | ${s.curso||"-"}`,m=(Array.isArray(s.equipos_rows_visible)?s.equipos_rows_visible:s.equipos_rows||[]).map(f=>({alumno:String(f.alumno||"").trim(),equipo:String(f.equipo||"").trim()})).filter(f=>f.alumno&&f.alumno!=="-").map(f=>`<li>${f.alumno}${f.equipo?` (${f.equipo})`:""}</li>`).join("");return`
            <section class="registro">
              <p class="common">${u}</p>
              ${m?`<ul class="alumnos-cols">${m}</ul>`:"<p>Sin alumnos registrados.</p>"}
            </section>
          `}).join("");return`<section class="fecha-bloque"><h3>${a}</h3>${i}</section>`}).join("")}
      </body>
    </html>
  `,n=window.open("","_blank");n&&(n.document.write(r),n.document.close(),n.focus(),n.print())}async function Lr(e){var r;e.preventDefault();const t=(r=mt==null?void 0:mt.files)==null?void 0:r[0];if(!t){_.innerHTML="<p>Selecciona un archivo CSV.</p>";return}try{const n=await t.text(),a=br(n);T=de(Ar(a)),pe(),O=[...T],Cr()}catch(n){_.innerHTML=`<p>Error al leer CSV: ${n.message}</p>`,it()}}async function kr(){rr(),he("theme-toggle-admin"),or(),Ft("config"),mr();try{ce=await ve("")}catch(i){g(Ht,`No se pudo cargar app_config.json: ${i.message}`,!0);return}const e=new URL(window.location.href).searchParams.get("configUrl")||Xt;B&&(B.value=e),ie.textContent="Carga configuración JSON para continuar";const t=(i,s=!1)=>{et&&(et.textContent=i,et.className=`feedback ${s?"error":"ok"}`)},r=i=>{t(i),hr(),g(Ht,"Configuración cargada.")},n=()=>{dt==null||dt.classList.remove("hidden")},a=()=>{const s=String((B==null?void 0:B.value)||e).trim()||Xt;return dr(s)};lt==null||lt.addEventListener("click",()=>{n(),C==null||C.focus()}),C==null||C.addEventListener("focus",()=>{n()});const o=async(i,s)=>{if(!i)return g(s,"Selecciona un archivo JSON.",!0),!1;try{const u=await i.text(),l=JSON.parse(u);return re(l,i.name),!0}catch(u){return g(s,`Error leyendo JSON: ${u.message}`,!0),!1}};z==null||z.addEventListener("click",async i=>{var u;i.preventDefault(),z.disabled=!0,await o((u=ct==null?void 0:ct.files)==null?void 0:u[0],et)&&r("Configuración cargada desde archivo."),z.disabled=!1}),ut==null||ut.addEventListener("click",()=>{const i=a();window.open(i,"_blank","noopener"),t("Carpeta de Drive abierta en otra pestaña.")}),ft==null||ft.addEventListener("click",()=>{const i=String((C==null?void 0:C.value)||"").trim();if(!i){t("Pegue o descargue primero el JSON antes de cargarlo.",!0),n();return}try{const s=JSON.parse(i);re(s,"JSON pegado"),r("Configuración cargada desde el JSON pegado.")}catch(s){t(`Error leyendo JSON: ${s.message}`,!0)}}),Ne.addEventListener("submit",i=>{var f,p,b,v;i.preventDefault();const s=ye(c("students-list").value);if(s.length===0){g(y,"No hay alumnos para esa combinación Curso + Unidad + Asignatura.",!0);return}if(c("asignatura").value==="Otra..."&&!((A==null?void 0:A.value)||"").trim()){g(y,"Escribe el nombre de la asignatura en 'Otra asignatura'.",!0);return}const u=new Date().toISOString(),l={sessionId:h||Se(),docente:c("docente").value.trim(),recurso:c("recurso").value,ubicacion:c("ubicacion").value,curso:c("curso").value,unidad:c("unidad").value,asignatura:c("asignatura").value==="Otra..."?((A==null?void 0:A.value)||"").trim():c("asignatura").value,fecha:c("fecha").value,hora:c("hora").value,puestosFijosCurso:!!(X!=null&&X.checked),url_inicio:String((W==null?void 0:W.value)||d.url_inicio||Tt).trim(),registrationOpenedAt:u,students:s,totalPCs:Number(((f=d.config_general)==null?void 0:f.totalPCs)||30),assignments:((p=k(h||""))==null?void 0:p.assignments)||{},registrations:((b=k(h||""))==null?void 0:b.registrations)||[],accessCode:((v=k(h||""))==null?void 0:v.accessCode)||le()},m=ae(l);d.url_inicio=l.url_inicio,fr(m),Ft("acceso"),g(y,`Sesion activa ${m.sessionId}. Alumnos cargados: ${s.length}.`)}),c("copy-url").addEventListener("click",async()=>{if(Rt.value)try{await navigator.clipboard.writeText(Rt.value),g(y,"URL copiada al portapapeles.")}catch{g(y,"No se pudo copiar la URL.",!0)}}),M==null||M.addEventListener("click",async()=>{const i=String(M.textContent||"").trim();if(/^\d{5}$/.test(i))try{await navigator.clipboard.writeText(i),g(y,"Código copiado al portapapeles.")}catch{g(y,"No se pudo copiar el código.",!0)}}),window.addEventListener("focus",()=>{kt()}),window.addEventListener("pageshow",()=>{kt()}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&kt()}),yt==null||yt.addEventListener("click",i=>{i.preventDefault(),qt(Ot)}),q==null||q.addEventListener("click",async i=>{i.preventDefault(),i.stopPropagation(),await pr()}),gt==null||gt.addEventListener("click",lr),F==null||F.addEventListener("click",i=>{i.preventDefault(),Ze()}),pt==null||pt.addEventListener("click",i=>{i.preventDefault(),cr()}),_t==null||_t.addEventListener("click",i=>{i.preventDefault(),ee()}),N==null||N.addEventListener("change",()=>{const i=N.value==="si";L&&(L.disabled=!i,i||(L.value=""))}),St==null||St.addEventListener("submit",i=>{if(i.preventDefault(),!h){g(y,"No hay sesion activa para anadir registros.",!0);return}const s=String((Y==null?void 0:Y.value)||"").trim(),u=String((Q==null?void 0:Q.value)||"").trim(),l=(N==null?void 0:N.value)==="si",m=l?String((L==null?void 0:L.value)||"").trim():"",f=nt(h,p=>{p.registrations=Array.isArray(p.registrations)?p.registrations:[];const b={studentName:s,resource:u,hasIncident:l,observation:m,registeredAt:new Date().toISOString()};return p.registrations.push(b),p});f&&I(f),g(y,"Registro añadido."),ee()}),ke.addEventListener("submit",Lr),ht==null||ht.addEventListener("click",i=>{i.preventDefault(),rt(),K()}),bt==null||bt.addEventListener("click",i=>{i.preventDefault(),pe(),wr(),K()}),vt==null||vt.addEventListener("click",i=>{i.preventDefault(),Nr()}),At==null||At.addEventListener("click",i=>{i.preventDefault(),qt(xt)}),ur()}kr();
