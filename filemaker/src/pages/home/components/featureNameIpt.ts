import { Input } from '../../../components/base-components/Input';

export function featureNameIpt() {
  let line = `<div class="row mb-2">
  <div class="col-12 p-0">`;

  line += Input({
    id: 'name',
    type: 'text',
    title: 'Feature Name',
  });

  line += `</div>
</div>`;

  return line;
}
