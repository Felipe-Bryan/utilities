import { Pressao } from '../../../types/Pressao';
import { convertInputValue } from '../../../utils/handleDate';

export function pressaoRow(item: Pressao) {
  const { id, data, v1, v2 } = item;

  return `
<div id="pa${id}" class="mb-1">
  <div class="row border-top border-dark">
    <div class="col-9 text-center fs-5 fw-bold">${convertInputValue(data)}</div>
    <div class="col-3 text-center">
      <i class="edit-pa bi bi-pencil-fill text-success pe-3 fs-6" id="edit-pa${id}"></i>
      <i class="del-pa bi bi-trash3-fill text-danger fs-6" id="del-pa${id}"></i>
    </div>
  </div>

  <div class="row border-top border-bottom">
    <div class="fw-bold fst-italic col-4 p-0 ps-2">Manhã</div>
    <div class="col-2 p-0" id="v1">${v1}</div>
    <div class="fw-bold fst-italic col-4 p-0">Tarde</div>
    <div class="col-2 p-0" id="v2">${v2}</div>
  </div>
</div>`;
}
