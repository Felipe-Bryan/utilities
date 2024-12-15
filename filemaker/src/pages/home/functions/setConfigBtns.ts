import { Modal, modalFooter } from '../../../components/base-components/Modal';

export function setConfigBtns() {
  const toConfig: string[] = ['Entity', 'Model', 'Controller', 'Repository', 'Routes'];

  for (let i = 0; i < toConfig.length; i++) {
    const configBtns = document.querySelectorAll(`.${toConfig[i].toLowerCase()}Btn`);

    configBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const seq = btn.id.replace(`config${toConfig[i]}`, '');

        let content: string = '';

        if (toConfig[i] === 'Entity') {
          content = 'Entity Component';
        } else if (toConfig[i] === 'Model') {
          content = 'Model Component';
        } else if (toConfig[i] === 'Controller') {
          content = 'Controller Component';
        } else if (toConfig[i] === 'Repository') {
          content = 'Repository Component';
        } else if (toConfig[i] === 'Routes') {
          content = 'Routes Component';
        }

        Modal({
          id: 'modalConfig',
          title: `Configure ${toConfig[i]} ${seq}`,
          content,
          centered: true,
          staticBackdrop: true,
          footer: modalFooter({
            btns: 2,
            btn1: {
              id: 'cancelConfig',
              label: 'Cancelar',
              color: 'danger',
              additionalProps: 'data-bs-dismiss="modal"',
            },
            btn2: {
              id: 'saveConfig',
              label: 'Salvar',
              color: 'success',
            },
          }),
        });
      });
    });
  }
}
