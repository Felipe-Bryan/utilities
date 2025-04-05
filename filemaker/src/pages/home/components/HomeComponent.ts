import { Button } from '../../../components/base-components/Button';
import { Checkbox } from '../../../components/base-components/Checkbox';
import { featureNameIpt } from './featureNameIpt';
import { propertyRow } from './propertyRow';

export function HomeComponent() {
  let line = `<div class="container">
    <div class="row mb-1">
        <div class="col text-center fw-bold fs-4">Gerador de arquivos API</div>
    </div>`;

  line += featureNameIpt();

  line += `<div class="row mb-1">`;

  line += Checkbox({
    label: 'Auto generated ID',
    id: 'generatedIdIpt',
    value: 'true',
  });

  line += `</div>`;

  line += `<div class="row mb-2">`;

  line += Button({
    label: 'Gerar arquivos',
    id: 'generateFiles',
    color: 'success',
  });
  line += `</div>`;

  line += `<div class="row d-flex justify-content-around mb-2">
    <div class="col text-center fw-bold fs-5">Propriedades</div>
    <div class="col text-center">${Button({
      color: 'primary',
      id: 'addProp',
      label: 'Nova Propriedade',
    })}</div>  
    </div>
</div>`;

  line += `<div class="container" id="content">`;

  line += propertyRow(0);

  line += `</div>`;

  return line;
}
