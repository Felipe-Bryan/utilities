import { Button } from '../../../components/base-components/Button';
import { Input } from '../../../components/base-components/Input';
import { Select, SelectOptionProps } from '../../../components/base-components/Select';

export function propertyRow(seq: number) {
  const typeOptions: SelectOptionProps[] = [
    {
      name: 'String',
      value: 'string',
    },
    {
      name: 'Number',
      value: 'number',
    },
    {
      name: 'Boolean',
      value: 'boolean',
    },
  ];

  let line = `<div class="row mb-1">
    <div class="col-2 p-0 me-1">`;

  line += Input({
    id: `propName${seq}`,
    type: 'text',
    title: 'Prop Name',
    additionalClass: 'propNameIpt',
  });

  line += `</div>
  <div class="col-2 p-0 me-1">`;

  line += Select({
    id: `propType${seq}`,
    title: 'Prop Type',
    options: typeOptions,
    additionalClass: 'propTypeIpt',
  });

  line += `</div>
  <div class="col p-0 me-1">`;

  line += Button({
    color: 'dark',
    outline: true,
    id: `configEntity${seq}`,
    label: 'Entity',
    additionalClass: 'me-1 entityBtn',
  });

  line += Button({
    color: 'dark',
    outline: true,
    id: `configModel${seq}`,
    label: 'Model',
    additionalClass: 'me-1 modelBtn',
  });

  line += Button({
    color: 'dark',
    outline: true,
    id: `configController${seq}`,
    label: 'Controller',
    additionalClass: 'me-1 controllerBtn',
  });

  line += Button({
    color: 'dark',
    outline: true,
    id: `configRepository${seq}`,
    label: 'Repository',
    additionalClass: 'me-1 repositoryBtn',
  });

  line += Button({
    color: 'dark',
    outline: true,
    id: `configRoutes${seq}`,
    label: 'Routes',
    additionalClass: 'me-1 routesBtn',
  });

  line += `</div>
</div>`;

  return line;
}
