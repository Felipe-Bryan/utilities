import { modalToggle } from '../../../components/Modal';
import { Glicemia } from '../../../types/Glicemia';
import { getStorageData, saveToStorage } from '../../../utils/handleStorage';
import { invalidateInput } from '../../../utils/invalidateInput';
import { renderGlicemias } from './renderGlicemias';
import { setClicks } from './setClicks';

export function saveGlicemia() {
  const saved: Glicemia[] = getStorageData('glicemias') || [];

  const dataIpt = <HTMLInputElement>document.getElementById('data')!;
  const v1Ipt = <HTMLInputElement>document.getElementById('v1Ipt')!;
  const v2Ipt = <HTMLInputElement>document.getElementById('v2Ipt')!;
  const v3Ipt = <HTMLInputElement>document.getElementById('v3Ipt')!;
  const v4Ipt = <HTMLInputElement>document.getElementById('v4Ipt')!;

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
    const newItem: Glicemia = {
      id: Date.now(),
      data: dataIpt.value,
      v1: v1Ipt.value,
      v2: v2Ipt.value || '-',
      v3: v3Ipt.value || '-',
      v4: v4Ipt.value || '-',
    };

    saved.push(newItem);

    saveToStorage('glicemias', saved);

    modalToggle();

    const content = document.getElementById('content')!;

    content.innerHTML = renderGlicemias();
    setClicks('glicemia');
  }
}
