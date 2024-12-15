export function invalidateInput(input: HTMLInputElement) {
  input.classList.add('is-invalid');

  input.focus();

  input.addEventListener('change', () => {
    input.classList.remove('is-invalid');
  });
}
