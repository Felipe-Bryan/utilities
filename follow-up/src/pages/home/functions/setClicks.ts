export function setClicks(entity: string) {
  const editBtns = document.querySelectorAll(`.edit-${entity}`);

  editBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.id.replace(`edit-${entity}`, '');

      console.log(`Editar ${id}`);
    });
  });

  const delBtns = document.querySelectorAll(`.del-${entity}`);

  delBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.id.replace(`del-${entity}`, '');

      console.log(`Deletar ${id}`);
    });
  });
}
