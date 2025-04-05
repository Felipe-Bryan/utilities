export function clearInputs() {
  const inputs = <NodeListOf<HTMLInputElement>>document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.value = '';
  });
}
