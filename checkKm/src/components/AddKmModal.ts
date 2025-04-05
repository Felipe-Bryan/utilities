import { registeredKmKey } from '..';
import { KMType } from '../types/KM';
import { dateString } from '../utils/handleDate';
import { getStorageData } from '../utils/handleStorage';
import { Input } from './base-components/Input';
import { Modal, modalFooter } from './base-components/Modal';

export function AddKmModal() {
  Modal({
    id: 'infKm',
    title: 'Adicionar KM',
    fullscreen: 'full',
    footer: modalFooter({
      btns: [
        {
          id: 'confirm',
          color: 'success',
          label: 'Salvar',
        },
      ],
    }),
    content: contentModal(),
  });
}

function contentModal() {
  const registeredKms: KMType[] = getStorageData(registeredKmKey);
  const lastKm = registeredKms[registeredKms.length - 1];

  let line = '';

  line += Input({
    id: 'kmDate',
    title: 'Data',
    type: 'date',
    value: dateString(),
  });

  line += Input({
    id: 'prevKm',
    title: 'KM Anterior',
    type: 'number',
    value: String(lastKm.currentKm),
    disabled: true,
  });

  line += Input({
    id: 'currentKm',
    title: 'KM Atual',
    type: 'number',
  });

  line += Input({
    id: 'liters',
    title: 'Litros',
    type: 'number',
  });

  line += Input({
    id: 'mileage',
    title: 'Rodado',
    type: 'number',
    disabled: true,
  });

  line += Input({
    id: 'kml',
    title: 'KM / Litro',
    type: 'number',
    disabled: true,
  });

  return line;
}
