import { deleteGlicemia } from './deleteGlicemia';
import { deletePressao } from './deletePressao';
import { editGlicemia } from './editGlicemia';
import { editPressao } from './editPressao';

export function setClicks(entity: 'glicemia' | 'pa') {
  const editBtns = document.querySelectorAll(`.edit-${entity}`);

  editBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.id.replace(`edit-${entity}`, ''));

      entity === 'glicemia' ? editGlicemia(id) : editPressao(id);
    });
  });

  const delBtns = document.querySelectorAll(`.del-${entity}`);

  delBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.id.replace(`del-${entity}`, ''));

      entity === 'glicemia' ? deleteGlicemia(id) : deletePressao(id);
    });
  });
}
