import { modalToggle } from '../../../components/Modal';
import { Pressao } from '../../../types/Pressao';
import { getStorageData, saveToStorage } from '../../../utils/handleStorage';
import { invalidateInput } from '../../../utils/invalidateInput';
import { renderPas } from './renderPas';
import { setClicks } from './setClicks';

export function savePressao() {
  const saved: Pressao[] = getStorageData('pas') || [];

  const dataIpt = <HTMLInputElement>document.getElementById('data')!;
  const v1Ipt = <HTMLInputElement>document.getElementById('v1Ipt')!;
  const v2Ipt = <HTMLInputElement>document.getElementById('v2Ipt')!;

  if (v1Ipt.value === undefined || v1Ipt.value === '') {
    console.log(v1Ipt);
    alert('Informe um valor inicial!');

    invalidateInput(v1Ipt);

    return;
  }

  let valid = true;

  saved.forEach((item) => {
    if (item.data === dataIpt.value) {
      alert('Já existe anotação para a data informada.\nPor favor verifique!');

      invalidateInput(dataIpt);

      valid = false;
    }
  });

  if (!valid) {
    return;
  } else {
    const newItem: Pressao = {
      id: Date.now(),
      data: dataIpt.value,
      v1: v1Ipt.value,
      v2: v2Ipt.value || '-',
    };

    saved.push(newItem);

    saveToStorage('pas', saved);

    modalToggle();

    const content = document.getElementById('content')!;

    content.innerHTML = renderPas();
    setClicks('pa');
  }
}
