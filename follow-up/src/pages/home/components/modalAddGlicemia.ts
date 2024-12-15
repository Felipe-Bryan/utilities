import { Input } from '../../../components/Input';
import { Glicemia } from '../../../types/Glicemia';
import { dateStringtoInputValue } from '../../../utils/handleDate';

export function modalAddGlicemia(glicemia?: Glicemia) {
  let line = '';

  line += Input({
    id: 'data',
    title: 'Data',
    type: 'date',
    value: glicemia?.data || dateStringtoInputValue(),
    additionalClass: 'mb-2',
  });

  line += Input({
    id: 'v1',
    title: 'Jejum',
    type: 'number',
    additionalClass: 'mb-2',
    value: glicemia?.v1 || '',
  });

  line += Input({
    id: 'v2',
    title: 'V2',
    type: 'number',
    additionalClass: 'mb-2',
    value: glicemia?.v2 || '',
  });

  line += Input({
    id: 'v3',
    title: 'V3',
    type: 'number',
    additionalClass: 'mb-2',
    value: glicemia?.v3 || '',
  });

  line += Input({
    id: 'v4',
    title: 'V4',
    type: 'number',
    additionalClass: 'mb-2',
    value: glicemia?.v4 || '',
  });

  return line;
}
