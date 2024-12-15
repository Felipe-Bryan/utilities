export function componentVisibility(id: string, status: 'hide' | 'show'): void {
  const component: HTMLElement = document.getElementById(id)!;

  if (status == 'show') {
    component.removeAttribute('style');
  } else {
    component.setAttribute('style', 'display: none !important');
  }
}
