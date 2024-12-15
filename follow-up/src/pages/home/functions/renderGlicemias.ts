import { Glicemia } from '../../../types/Glicemia';
import { getStorageData } from '../../../utils/handleStorage';
import { glicemiaRow } from '../components/glicemiaRow';

export function renderGlicemias() {
  const glicemias: Glicemia[] = getStorageData('glicemias') || [];

  let line = '';

  const sorted = glicemias.sort((a, b) => b.id - a.id);

  sorted.forEach((item) => {
    line += glicemiaRow(item);
  });

  return line;
}
