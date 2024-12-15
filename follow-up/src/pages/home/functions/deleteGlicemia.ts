import { Glicemia } from '../../../types/Glicemia';
import { getStorageData, saveToStorage } from '../../../utils/handleStorage';
import { renderGlicemias } from './renderGlicemias';
import { setClicks } from './setClicks';

export function deleteGlicemia(id: number) {
  const confirmation = confirm('Deseja realmente deletar as anotações do dia?');

  if (!confirmation) {
    return;
  } else {
    const savedItems: Glicemia[] = getStorageData('glicemias');

    const index = savedItems.findIndex((item) => item.id === id);

    savedItems.splice(index, 1);

    saveToStorage('glicemias', savedItems);
    const content = document.getElementById('content')!;

    content.innerHTML = renderGlicemias();
    setClicks('glicemia');
  }
}
