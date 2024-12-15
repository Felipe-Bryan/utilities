import { Modal, modalFooter } from '../../components/Modal';
import { Root } from '../../components/Root';
import { modalAddGlicemia } from './components/modalAddGlicemia';
import { renderGlicemias } from './functions/renderGlicemias';
import { saveGlicemia } from './functions/saveGlicemia';
import { setClicks } from './functions/setClicks';

export function startHome() {
  Root.innerHTML = `
<div class="display-6 text-center py-2 border-bottom mb-2">Acompanhamento</div>

<div class="mb-2 sticky-top">
  <ul class="nav nav-tabs nav-justified">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" id="glicemia">Glicemia</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pa">Pressão</a>
    </li>
  </ul>
</div>

<div id="content" class="container"></div>

<button id="btnAdd" type="button" class="btn btn-primary btn-lg rounded-circle fw-bold">+</button>`;

  const content = document.getElementById('content')!;

  let active: string = 'glicemia';

  content.innerHTML = renderGlicemias();

  setClicks(active);

  const btnAdd = document.getElementById('btnAdd')!;

  btnAdd.addEventListener('click', () => {
    if (active === 'glicemia') {
      Modal({
        title: 'Adicionar Glicemia',
        id: 'modal',
        fullscreen: 'full',
        content: modalAddGlicemia(),
        footer: modalFooter({
          btns: 2,
          btn1: {
            color: 'danger',
            id: 'cancel',
            label: 'Cancelar',
            additionalProps: 'data-bs-dismiss="modal"',
          },
          btn2: {
            color: 'success',
            id: 'save',
            label: 'Salvar',
          },
        }),
      });

      const btnSave = document.getElementById('save')!;

      btnSave.addEventListener('click', () => {
        saveGlicemia();
      });
    } else {
      Modal({
        title: 'Adicionar Pressão',
        id: 'modal',
        fullscreen: 'full',
        content: ``, // componente modal
        footer: modalFooter({
          btns: 2,
          btn1: {
            color: 'danger',
            id: 'cancel',
            label: 'Cancelar',
            additionalProps: 'data-bs-dismiss="modal"',
          },
          btn2: {
            color: 'success',
            id: 'save',
            label: 'Salvar',
          },
        }),
      });

      const btnSave = document.getElementById('save')!;

      btnSave.addEventListener('click', () => {
        console.log(); // salvar PA
      });
    }
  });

  const navItems = document.querySelectorAll('.nav-link');

  navItems.forEach((btn) => {
    btn.addEventListener('click', () => {
      active = btn.id;

      navItems.forEach((item) => {
        item.classList.remove('active');
      });

      btn.classList.add('active');

      console.log(active);

      if (active === 'glicemia') {
        content.innerHTML = renderGlicemias();

        setClicks(active);
      } else {
        content.innerHTML = ''; // render PA items

        setClicks(active);
      }
    });
  });
}
