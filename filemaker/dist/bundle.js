(()=>{"use strict";var e={421:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BlockButton=t.Button=void 0,t.Button=function(e){return`<button \ntype="button" \nclass="btn btn-${e.outline?"outline-":""}${e.color}${e.additionalClass?` ${e.additionalClass}`:""}" \nid="${e.id}"\n${e.disabled?"disabled":""}\n${e.toggle?'data-bs-toggle="button"':""}\n${e.additionalProps?e.additionalProps:""}>${e.label}</button>`},t.BlockButton=function(e){return`<div class="d-grid gap-2">\n  <button \n    type="button" \n    class="btn btn-${e.outline?"outline-":""}${e.color}${e.additionalClass?` ${e.additionalClass}`:""}" \n    id="${e.id}"\n    ${e.disabled?"disabled":""}\n    ${e.toggle?'data-bs-toggle="button"':""}\n    ${e.additionalProps?e.additionalProps:""}>${e.label}</button>\n</div>`}},673:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0,t.Input=function(e){return`\n<div class="input-group">\n  <span class="input-group-text w-25" id="basic-addon1">${e.title}</span>\n  <input \n    type="${e.type}" \n    class="form-control${e.additionalClass?` ${e.additionalClass}`:""}" \n    id="${e.id}"\n    value="${e.value?e.value:""}" \n    placeholder="${e.placeholder?e.placeholder:e.title}">\n</div>`}},639:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalFooter=t.Modal=void 0;const n=o(421);t.Modal=function(e){const t=document.getElementById("modalSpot");let o="";e.fullscreen&&("full"===e.fullscreen?o=" modal-fullscreen":"sm-down"===e.fullscreen?o=" modal-fullscreen-sm-down":"md-down"===e.fullscreen?o=" modal-fullscreen-md-down":"lg-down"===e.fullscreen&&(o=" modal-fullscreen-lg-down")),t.innerHTML=`\n<button \n    type="button" \n    id="openModal"\n    class="btn btn-primary" \n    data-bs-toggle="modal" \n    data-bs-target="#${e.id}" style="display: none !important"></button>\n\n<div \nclass="modal fade" \nid="${e.id}" \ntabindex="-1" \naria-labelledby="${e.id}Label" \naria-hidden="true"\n${e.staticBackdrop?' data-bs-backdrop="static" data-bs-keyboard="false"':""}>\n  <div class="modal-dialog modal-dialog-scrollable${e.centered?" modal-dialog-centered":""}${e.fullscreen?o:""}">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h1 class="modal-title fs-5" id="${e.id}Label">${e.title}</h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        ${e.content}\n      </div>\n      <div class="modal-footer">\n        ${e.footer}\n      </div>\n    </div>\n  </div>\n</div>`,document.getElementById("openModal").click()},t.modalFooter=function(e){const t=(0,n.Button)(e.btn1);let o="";return 2===e.btns&&(o=(0,n.Button)(e.btn2)),`${t}${o}`}},980:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Root=void 0,t.Root=document.getElementById("root")},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Select=void 0,t.Select=function(e){let t=`\n<div class="m-0 mb-2 px-2">\n    <select class="form-select m-0${e.additionalClass?` ${e.additionalClass}`:""}" id="${e.id}">\n        <option selected disabled value="0">${e.title}</option>`;return e.options.forEach((e=>{var o;t+=`<option value="${(o=e).value}">${o.name}</option>`})),t+="\n  </select>\n</div>",t}},523:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startHome=void 0;const n=o(980),l=o(336),d=o(148),a=o(770);t.startHome=function(){n.Root.innerHTML=(0,l.HomeComponent)();const e=document.getElementById("content");document.getElementById("addProp").addEventListener("click",(t=>{e.innerHTML+=(0,d.addPropRow)(),(0,a.setConfigBtns)()})),(0,a.setConfigBtns)()}},336:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HomeComponent=void 0;const n=o(421),l=o(647),d=o(544);t.HomeComponent=function(){let e='<div class="container">\n    <div class="row mb-1">\n        <div class="col text-center fw-bold fs-4">Gerador de arquivos API</div>\n    </div>';return e+=(0,l.featureNameIpt)(),e+=`<div class="row d-flex justify-content-around mb-2">\n    <div class="col text-center fw-bold fs-5">Propriedades</div>\n    <div class="col text-center">${(0,n.Button)({color:"primary",id:"addProp",label:"Nova Propriedade"})}</div>  \n    </div>\n</div>`,e+='<div class="container" id="content">',e+=(0,d.propertyRow)(0),e+="</div>",e}},647:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.featureNameIpt=void 0;const n=o(673);t.featureNameIpt=function(){let e='<div class="row mb-2">\n  <div class="col-12 p-0">';return e+=(0,n.Input)({id:"name",type:"text",title:"Feature Name"}),e+="</div>\n</div>",e}},544:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.propertyRow=void 0;const n=o(421),l=o(673),d=o(699);t.propertyRow=function(e){let t='<div class="row mb-1">\n    <div class="col-2 p-0 me-1">';return t+=(0,l.Input)({id:`propName${e}`,type:"text",title:"Prop Name",additionalClass:"propNameIpt"}),t+='</div>\n  <div class="col-2 p-0 me-1">',t+=(0,d.Select)({id:`propType${e}`,title:"Prop Type",options:[{name:"String",value:"string"},{name:"Number",value:"number"},{name:"Boolean",value:"boolean"}],additionalClass:"propTypeIpt"}),t+='</div>\n  <div class="col p-0 me-1">',t+=(0,n.Button)({color:"dark",outline:!0,id:`configEntity${e}`,label:"Entity",additionalClass:"me-1 entityBtn"}),t+=(0,n.Button)({color:"dark",outline:!0,id:`configModel${e}`,label:"Model",additionalClass:"me-1 modelBtn"}),t+=(0,n.Button)({color:"dark",outline:!0,id:`configController${e}`,label:"Controller",additionalClass:"me-1 controllerBtn"}),t+=(0,n.Button)({color:"dark",outline:!0,id:`configRepository${e}`,label:"Repository",additionalClass:"me-1 repositoryBtn"}),t+=(0,n.Button)({color:"dark",outline:!0,id:`configRoutes${e}`,label:"Routes",additionalClass:"me-1 routesBtn"}),t+="</div>\n</div>",t}},148:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addPropRow=void 0;const n=o(544);t.addPropRow=function(){const e=document.querySelectorAll(".propNameIpt");return(0,n.propertyRow)(e.length)}},770:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setConfigBtns=void 0;const n=o(639);t.setConfigBtns=function(){const e=["Entity","Model","Controller","Repository","Routes"];for(let t=0;t<e.length;t++)document.querySelectorAll(`.${e[t].toLowerCase()}Btn`).forEach((o=>{o.addEventListener("click",(()=>{const l=o.id.replace(`config${e[t]}`,"");let d="";"Entity"===e[t]?d="Entity Component":"Model"===e[t]?d="Model Component":"Controller"===e[t]?d="Controller Component":"Repository"===e[t]?d="Repository Component":"Routes"===e[t]&&(d="Routes Component"),(0,n.Modal)({id:"modalConfig",title:`Configure ${e[t]} ${l}`,content:d,centered:!0,staticBackdrop:!0,footer:(0,n.modalFooter)({btns:2,btn1:{id:"cancelConfig",label:"Cancelar",color:"danger",additionalProps:'data-bs-dismiss="modal"'},btn2:{id:"saveConfig",label:"Salvar",color:"success"}})})}))}))}}},t={};(0,function o(n){var l=t[n];if(void 0!==l)return l.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,o),d.exports}(523).startHome)()})();