import { Input } from '../../../components/Input';
import { Glicemia } from '../../../types/Glicemia';
import { dateStringtoInputValue } from '../../../utils/handleDate';

export function modalAddGlicemia(glicemia?: Glicemia) {
  let line = '';

  line += Input({
    id: 'data',
    title: 'Data',
    type: 'date',
    value: glicemia ? glicemia.data : dateStringtoInputValue(),
    groupAdditionalClass: 'mb-2',
  });

  line += Input({
    id: 'v1Ipt',
    title: 'Jejum',
    type: 'number',
    groupAdditionalClass: 'mb-2',
    value: glicemia ? glicemia.v1 : '',
  });

  line += Input({
    id: 'v2Ipt',
    title: 'V2',
    type: 'number',
    groupAdditionalClass: 'mb-2',
    value: glicemia ? glicemia.v2 : '',
  });

  line += Input({
    id: 'v3Ipt',
    title: 'V3',
    type: 'number',
    groupAdditionalClass: 'mb-2',
    value: glicemia ? glicemia.v3 : '',
  });

  line += Input({
    id: 'v4Ipt',
    title: 'V4',
    type: 'number',
    groupAdditionalClass: 'mb-2',
    value: glicemia ? glicemia.v4 : '',
  });

  return line;
}
