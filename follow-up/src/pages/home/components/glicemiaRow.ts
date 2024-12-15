import { Glicemia } from '../../../types/Glicemia';
import { convertInputValue } from '../../../utils/handleDate';

export function glicemiaRow(item: Glicemia) {
  const { id, data, v1, v2, v3, v4 } = item;

  return `
<div id="glicemia${id}" class="mb-1">
  <div class="row border-top border-dark">
    <div class="col-9 text-center fs-5 fw-bold">${convertInputValue(data)}</div>
    <div class="col-3 text-center">
      <i class="edit-glicemia bi bi-pencil-fill text-success pe-3 fs-6" id="edit-glicemia${id}"></i>
      <i class="del-glicemia bi bi-trash3-fill text-danger fs-6" id="del-glicemia${id}"></i>
    </div>
  </div>

  <div class="row border-top border-bottom">
    <div class="fw-bold fst-italic col-5 p-0 ps-2">Jejum</div>
    <div class="col-1 p-0" id="v1">${v1}</div>
    <div class="fw-bold fst-italic col-5 p-0">Primeira medição</div>
    <div class="col-1 p-0" id="v2">${v2}</div>
  </div>

  <div class="row border-bottom border-dark">
    <div class="fw-bold fst-italic col-5 p-0 ps-2">segunda medição</div>
    <div class="col-1 p-0" id="v3">${v3}</div>
    <div class="fw-bold fst-italic col-5 p-0">terceira medição</div>
    <div class="col-1 p-0" id="v4">${v4}</div>
  </div>
</div>`;
}
