(()=>{"use strict";var e={618:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BlockButton=t.Button=void 0,t.Button=function(e){return`<button \ntype="button" \nclass="btn btn-${e.outline?"outline-":""}${e.color}${e.additionalClass?` ${e.additionalClass}`:""}" \nid="${e.id}"\n${e.disabled?"disabled":""}\n${e.toggle?'data-bs-toggle="button"':""}\n${e.additionalProps?e.additionalProps:""}>${e.label}</button>`},t.BlockButton=function(e){return`<div class="d-grid gap-2">\n  <button \n    type="button" \n    class="btn btn-${e.outline?"outline-":""}${e.color}${e.additionalClass?` ${e.additionalClass}`:""}" \n    id="${e.id}"\n    ${e.disabled?"disabled":""}\n    ${e.toggle?'data-bs-toggle="button"':""}\n    ${e.additionalProps?e.additionalProps:""}>${e.label}</button>\n</div>`}},84:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0,t.Input=function(e){return`\n<div class="input-group">\n  <span class="input-group-text w-25" id="basic-addon1">${e.title}</span>\n  <input \n    type="${e.type}" \n    class="form-control${e.additionalClass?` ${e.additionalClass}`:""}" \n    id="${e.id}"\n    value="${e.value?e.value:""}" \n    placeholder="${e.placeholder?e.placeholder:e.title}">\n</div>`}},432:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalToggle=t.modalFooter=t.Modal=void 0;const a=n(618);function i(){document.getElementById("openModal").click()}t.Modal=function(e){const t=document.getElementById("modalSpot");let n="";e.fullscreen&&("full"===e.fullscreen?n=" modal-fullscreen":"sm-down"===e.fullscreen?n=" modal-fullscreen-sm-down":"md-down"===e.fullscreen?n=" modal-fullscreen-md-down":"lg-down"===e.fullscreen&&(n=" modal-fullscreen-lg-down")),t.innerHTML=`\n<button \n    type="button" \n    id="openModal"\n    class="btn btn-primary" \n    data-bs-toggle="modal" \n    data-bs-target="#${e.id}" style="display: none !important"></button>\n\n<div \nclass="modal fade" \nid="${e.id}" \ntabindex="-1" \naria-labelledby="${e.id}Label" \naria-hidden="true"\n${e.staticBackdrop?' data-bs-backdrop="static" data-bs-keyboard="false"':""}>\n  <div class="modal-dialog modal-dialog-scrollable${e.centered?" modal-dialog-centered":""}${e.fullscreen?n:""}">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h1 class="modal-title fs-5" id="${e.id}Label">${e.title}</h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        ${e.content}\n      </div>\n      <div class="modal-footer">\n        ${e.footer}\n      </div>\n    </div>\n  </div>\n</div>`,i()},t.modalFooter=function(e){const t=(0,a.Button)(e.btn1);let n="";return 2===e.btns&&(n=(0,a.Button)(e.btn2)),`${t}${n}`},t.modalToggle=i},757:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Root=void 0,t.Root=document.getElementById("root")},523:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startHome=void 0;const a=n(432),i=n(757),l=n(519),o=n(777),d=n(741),s=n(982);t.startHome=function(){i.Root.innerHTML='\n<div class="display-6 text-center py-2 border-bottom mb-2">Acompanhamento</div>\n\n<div class="mb-2 sticky-top">\n  <ul class="nav nav-tabs nav-justified">\n    <li class="nav-item">\n      <a class="nav-link active" aria-current="page" id="glicemia">Glicemia</a>\n    </li>\n    <li class="nav-item">\n      <a class="nav-link" id="pa">Pressão</a>\n    </li>\n  </ul>\n</div>\n\n<div id="content" class="container"></div>\n\n<button id="btnAdd" type="button" class="btn btn-primary btn-lg rounded-circle fw-bold">+</button>';const e=document.getElementById("content");let t="glicemia";e.innerHTML=(0,o.renderGlicemias)(),(0,s.setClicks)(t),document.getElementById("btnAdd").addEventListener("click",(()=>{"glicemia"===t?((0,a.Modal)({title:"Adicionar Glicemia",id:"modal",fullscreen:"full",content:(0,l.modalAddGlicemia)(),footer:(0,a.modalFooter)({btns:2,btn1:{color:"danger",id:"cancel",label:"Cancelar",additionalProps:'data-bs-dismiss="modal"'},btn2:{color:"success",id:"save",label:"Salvar"}})}),document.getElementById("save").addEventListener("click",(()=>{(0,d.saveGlicemia)()}))):((0,a.Modal)({title:"Adicionar Pressão",id:"modal",fullscreen:"full",content:"",footer:(0,a.modalFooter)({btns:2,btn1:{color:"danger",id:"cancel",label:"Cancelar",additionalProps:'data-bs-dismiss="modal"'},btn2:{color:"success",id:"save",label:"Salvar"}})}),document.getElementById("save").addEventListener("click",(()=>{console.log()})))}));const n=document.querySelectorAll(".nav-link");n.forEach((a=>{a.addEventListener("click",(()=>{t=a.id,n.forEach((e=>{e.classList.remove("active")})),a.classList.add("active"),console.log(t),"glicemia"===t?(e.innerHTML=(0,o.renderGlicemias)(),(0,s.setClicks)(t)):(e.innerHTML="",(0,s.setClicks)(t))}))}))}},59:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.glicemiaRow=void 0;const a=n(411);t.glicemiaRow=function(e){const{id:t,data:n,v1:i,v2:l,v3:o,v4:d}=e;return`\n<div id="glicemia${t}" class="mb-1">\n  <div class="row border-top border-dark">\n    <div class="col-9 text-center fs-5 fw-bold">${(0,a.convertInputValue)(n)}</div>\n    <div class="col-3 text-center">\n      <i class="edit-glicemia bi bi-pencil-fill text-success pe-3 fs-6" id="edit-glicemia${t}"></i>\n      <i class="del-glicemia bi bi-trash3-fill text-danger fs-6" id="del-glicemia${t}"></i>\n    </div>\n  </div>\n\n  <div class="row border-top border-bottom">\n    <div class="fw-bold fst-italic col-5 p-0 ps-2">Jejum</div>\n    <div class="col-1 p-0" id="v1">${i}</div>\n    <div class="fw-bold fst-italic col-5 p-0">Primeira medição</div>\n    <div class="col-1 p-0" id="v2">${l}</div>\n  </div>\n\n  <div class="row border-bottom border-dark">\n    <div class="fw-bold fst-italic col-5 p-0 ps-2">segunda medição</div>\n    <div class="col-1 p-0" id="v3">${o}</div>\n    <div class="fw-bold fst-italic col-5 p-0">terceira medição</div>\n    <div class="col-1 p-0" id="v4">${d}</div>\n  </div>\n</div>`}},519:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalAddGlicemia=void 0;const a=n(84),i=n(411);t.modalAddGlicemia=function(e){let t="";return t+=(0,a.Input)({id:"data",title:"Data",type:"date",value:(null==e?void 0:e.data)||(0,i.dateStringtoInputValue)(),additionalClass:"mb-2"}),t+=(0,a.Input)({id:"v1",title:"Jejum",type:"number",additionalClass:"mb-2",value:(null==e?void 0:e.v1)||""}),t+=(0,a.Input)({id:"v2",title:"V2",type:"number",additionalClass:"mb-2",value:(null==e?void 0:e.v2)||""}),t+=(0,a.Input)({id:"v3",title:"V3",type:"number",additionalClass:"mb-2",value:(null==e?void 0:e.v3)||""}),t+=(0,a.Input)({id:"v4",title:"V4",type:"number",additionalClass:"mb-2",value:(null==e?void 0:e.v4)||""}),t}},777:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderGlicemias=void 0;const a=n(80),i=n(59);t.renderGlicemias=function(){const e=(0,a.getStorageData)("glicemias")||[];let t="";return e.sort(((e,t)=>t.id-e.id)).forEach((e=>{t+=(0,i.glicemiaRow)(e)})),t}},741:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveGlicemia=void 0;const a=n(432),i=n(80),l=n(986);t.saveGlicemia=function(){const e=(0,i.getStorageData)("glicemias")||[],t=document.getElementById("data"),n=document.getElementById("v1"),o=document.getElementById("v2"),d=document.getElementById("v3"),s=document.getElementById("v4");if(""===n.value)return alert("Informe um valor inicial!"),void(0,l.invalidateInput)(n);const r={id:Date.now(),data:t.value,v1:n.value,v2:o.value||"-",v3:d.value||"-",v4:s.value||"-"};e.push(r),(0,i.saveToStorage)("glicemias",e),(0,a.modalToggle)()}},982:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setClicks=void 0,t.setClicks=function(e){document.querySelectorAll(`.edit-${e}`).forEach((t=>{t.addEventListener("click",(()=>{const n=t.id.replace(`edit-${e}`,"");console.log(`Editar ${n}`)}))})),document.querySelectorAll(`.del-${e}`).forEach((t=>{t.addEventListener("click",(()=>{const n=t.id.replace(`del-${e}`,"");console.log(`Deletar ${n}`)}))}))}},411:(e,t)=>{function n(){const e=(new Date).getDate();let t="";return t=e<10?"0"+e:String(e),t}function a(){return["01","02","03","04","05","06","07","08","09","10","11","12"][(new Date).getMonth()]}function i(){return(new Date).getFullYear()}function l(){return["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"][(new Date).getDay()]}function o(){return`${(new Date).getHours()}:${(new Date).getMinutes()}`}Object.defineProperty(t,"__esModule",{value:!0}),t.convertInputValue=t.dateStringtoInputValue=t.fullDateString=t.getHourString=t.getWeekDay=t.getYearString=t.getMonthString=t.getTodayString=void 0,t.getTodayString=n,t.getMonthString=a,t.getYearString=i,t.getWeekDay=l,t.getHourString=o,t.fullDateString=function(){return`${l()} - ${n()}/${a()}/${i()} ${o()}`},t.dateStringtoInputValue=function(){return`${i()}-${a()}-${n()}`},t.convertInputValue=function(e){return`${e[8]}${e[9]}/${e[5]}${e[6]}/${e[0]}${e[1]}${e[2]}${e[3]}`}},80:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveToSessionStorage=t.saveToStorage=t.getSessionStorageData=t.getStorageData=void 0,t.getStorageData=function(e){return JSON.parse(localStorage.getItem(e))},t.getSessionStorageData=function(e){return JSON.parse(sessionStorage.getItem(e))},t.saveToStorage=function(e,t){localStorage.setItem(e,JSON.stringify(t))},t.saveToSessionStorage=function(e,t){sessionStorage.setItem(e,JSON.stringify(t))}},986:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.invalidateInput=void 0,t.invalidateInput=function(e){e.classList.add("is-invalid"),e.focus(),e.addEventListener("change",(()=>{e.classList.remove("is-invalid")}))}}},t={};(0,function n(a){var i=t[a];if(void 0!==i)return i.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,n),l.exports}(523).startHome)()})();