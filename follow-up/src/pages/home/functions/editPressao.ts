import { Modal, modalFooter, modalToggle } from '../../../components/Modal';
import { Pressao } from '../../../types/Pressao';
import { getStorageData, saveToStorage } from '../../../utils/handleStorage';
import { modalPressao } from '../components/modalPressao';
import { renderPas } from './renderPas';
import { setClicks } from './setClicks';

export function editPressao(id: number) {
  const savedItems: Pressao[] = getStorageData('pas');

  const toEdit = savedItems.find((item) => item.id === id)!;

  Modal({
    title: 'Editar Pressão',
    id: 'modal',
    fullscreen: 'full',
    content: modalPressao(toEdit),
    footer: modalFooter({
      btns: 2,
      btn1: {
        color: 'danger',
        id: 'cancel',
        label: 'Cancelar',
        additionalProps: 'data-bs-dismiss="modal"',
      },
      btn2: {
        color: 'success',
        id: 'save',
        label: 'Salvar',
      },
    }),
  });

  const btnSave = document.getElementById('save')!;

  btnSave.addEventListener('click', () => {
    saveEdit(savedItems, toEdit);
  });
}

function saveEdit(items: Pressao[], toEdit: Pressao) {
  const dataIpt = <HTMLInputElement>document.getElementById('data')!;
  const v1Ipt = <HTMLInputElement>document.getElementById('v1Ipt')!;
  const v2Ipt = <HTMLInputElement>document.getElementById('v2Ipt')!;

  toEdit.data = dataIpt.value;
  toEdit.v1 = v1Ipt.value;
  toEdit.v2 = v2Ipt.value;

  items.forEach((item) => {
    if (item.id === toEdit.id) {
      item = toEdit;
    }
  });

  saveToStorage('pas', items);

  modalToggle();

  const content = document.getElementById('content')!;

  content.innerHTML = renderPas();
  setClicks('pa');
}
