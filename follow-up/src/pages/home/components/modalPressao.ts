import { Input } from '../../../components/Input';
import { Pressao } from '../../../types/Pressao';
import { dateStringtoInputValue } from '../../../utils/handleDate';

export function modalPressao(pressao?: Pressao) {
  let line = '';

  line += Input({
    id: 'data',
    title: 'Data',
    type: 'date',
    value: pressao ? pressao.data : dateStringtoInputValue(),
    groupAdditionalClass: 'mb-2',
  });

  line += Input({
    id: 'v1Ipt',
    title: 'Manhã',
    type: 'text',
    groupAdditionalClass: 'mb-2',
    value: pressao ? pressao.v1 : '',
  });

  line += Input({
    id: 'v2Ipt',
    title: 'Tarde',
    type: 'text',
    groupAdditionalClass: 'mb-2',
    value: pressao ? pressao.v2 : '',
  });

  return line;
}
