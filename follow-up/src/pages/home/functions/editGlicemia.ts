import { Modal, modalFooter, modalToggle } from '../../../components/Modal';
import { Glicemia } from '../../../types/Glicemia';
import { getStorageData, saveToStorage } from '../../../utils/handleStorage';
import { modalGlicemia } from '../components/modalGlicemia';
import { renderGlicemias } from './renderGlicemias';
import { setClicks } from './setClicks';

export function editGlicemia(id: number) {
  const savedItems: Glicemia[] = getStorageData('glicemias');

  const toEdit = savedItems.find((item) => item.id === id)!;

  Modal({
    title: 'Adicionar Glicemia',
    id: 'modal',
    fullscreen: 'full',
    content: modalGlicemia(toEdit),
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

function saveEdit(items: Glicemia[], toEdit: Glicemia) {
  const dataIpt = <HTMLInputElement>document.getElementById('data')!;
  const v1Ipt = <HTMLInputElement>document.getElementById('v1Ipt')!;
  const v2Ipt = <HTMLInputElement>document.getElementById('v2Ipt')!;
  const v3Ipt = <HTMLInputElement>document.getElementById('v3Ipt')!;
  const v4Ipt = <HTMLInputElement>document.getElementById('v4Ipt')!;

  toEdit.data = dataIpt.value;
  toEdit.v1 = v1Ipt.value;
  toEdit.v2 = v2Ipt.value;
  toEdit.v3 = v3Ipt.value;
  toEdit.v4 = v4Ipt.value;

  items.forEach((item) => {
    if (item.id === toEdit.id) {
      item = toEdit;
    }
  });

  saveToStorage('glicemias', items);

  modalToggle();

  const content = document.getElementById('content')!;

  content.innerHTML = renderGlicemias();
  setClicks('glicemia');
}
