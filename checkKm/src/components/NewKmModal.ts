import { Input } from './base-components/Input';
import { Modal, modalFooter } from './base-components/Modal';

export function NewKmModal() {
  let content = Input({
    id: 'prevKm',
    title: 'KM',
    type: 'number',
  });

  content += Input({
    id: 'kmDate',
    title: 'Data',
    type: 'date',
  });

  Modal({
    id: 'infKm',
    title: 'Informar KM Inicial',
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
    content,
  });
}
