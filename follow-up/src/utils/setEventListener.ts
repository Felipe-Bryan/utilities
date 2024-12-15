export function setEventListener(
  id: string,
  event: 'click' | 'change' | 'keyup' | 'blur' | 'focus' | 'dblclick' | 'mouseenter' | 'mouseleave',
  execute: () => any
) {
  const element = <HTMLElement>document.getElementById(id);

  if (element) {
    element.addEventListener(event, () => {
      execute();
    });
  }
}
