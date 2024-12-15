import { Pressao } from '../../../types/Pressao';
import { getStorageData, saveToStorage } from '../../../utils/handleStorage';
import { renderPas } from './renderPas';
import { setClicks } from './setClicks';

export function deletePressao(id: number) {
  const confirmation = confirm('Deseja realmente deletar as anotações do dia?');

  if (!confirmation) {
    return;
  } else {
    const savedItems: Pressao[] = getStorageData('pas');

    const index = savedItems.findIndex((item) => item.id === id);

    savedItems.splice(index, 1);

    saveToStorage('pas', savedItems);
    const content = document.getElementById('content')!;

    content.innerHTML = renderPas();
    setClicks('pa');
  }
}
