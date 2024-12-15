import { deleteGlicemia } from './deleteGlicemia';
import { editGlicemia } from './editGlicemia';

export function setClicks(entity: string) {
  const editBtns = document.querySelectorAll(`.edit-${entity}`);

  editBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.id.replace(`edit-${entity}`, ''));

      editGlicemia(id);
    });
  });

  const delBtns = document.querySelectorAll(`.del-${entity}`);

  delBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.id.replace(`del-${entity}`, ''));

      deleteGlicemia(id);
    });
  });
}
