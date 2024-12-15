import { Pressao } from '../../../types/Pressao';
import { dateToNumber } from '../../../utils/handleDate';
import { getStorageData } from '../../../utils/handleStorage';
import { pressaoRow } from '../components/pressaoRow';

export function renderPas() {
  const pas: Pressao[] = getStorageData('pas') || [];

  let line = '';

  const sorted = pas.sort((a, b) => dateToNumber(b.data) - dateToNumber(a.data));

  sorted.forEach((item) => {
    line += pressaoRow(item);
  });

  return line;
}
