import { Modal, modalFooter } from './base-components/Modal';

interface AlertProps {
  title: string;
  content: string;
}

export function alertModal(props: AlertProps) {
  return Modal({
    id: 'alert',
    title: props.title,
    centered: true,
    staticBackdrop: true,
    content: props.content,
    footer: modalFooter({
      btns: [
        {
          color: 'danger',
          id: 'cancelAlert',
          label: 'OK',
          additionalProps: 'data-bs-dismiss="modal"',
        },
      ],
    }),
  });
}
