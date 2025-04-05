import { Checkbox } from '../../../components/base-components/Checkbox';
import { Input } from '../../../components/base-components/Input';

export function entityConfigModal() {
  let content = Checkbox({
    id: 'nullable',
    label: 'Nullable?',
    value: 'nullable',
  });

  content += Checkbox({
    id: 'decimal',
    label: 'Decimal?',
    value: 'decimal',
  });

  content += Input({
    id: 'default',
    title: 'Default Value?',
    type: 'text',
  });

  return content;
}
