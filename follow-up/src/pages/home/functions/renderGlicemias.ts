import { Glicemia } from '../../../types/Glicemia';
import { dateToNumber } from '../../../utils/handleDate';
import { getStorageData } from '../../../utils/handleStorage';
import { glicemiaRow } from '../components/glicemiaRow';

export function renderGlicemias() {
  const glicemias: Glicemia[] = getStorageData('glicemias') || [];

  let line = '';

  const sorted = glicemias.sort((a, b) => dateToNumber(b.data) - dateToNumber(a.data));

  sorted.forEach((item) => {
    line += glicemiaRow(item);
  });

  return line;
}
