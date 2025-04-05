import { Button, ButtonProps } from './Button';

export interface ModalProps {
  id: string;
  title: string;
  staticBackdrop?: boolean;
  centered?: boolean;
  fullscreen?: 'full' | 'sm-down' | 'md-down' | 'lg-down';
  content: string;
  footer: string;
}

export function Modal(props: ModalProps) {
  const spot = document.getElementById('modalSpot')!;

  let fullscreen = '';

  if (props.fullscreen) {
    if (props.fullscreen === 'full') {
      fullscreen = ' modal-fullscreen';
    } else if (props.fullscreen === 'sm-down') {
      fullscreen = ' modal-fullscreen-sm-down';
    } else if (props.fullscreen === 'md-down') {
      fullscreen = ' modal-fullscreen-md-down';
    } else if (props.fullscreen === 'lg-down') {
      fullscreen = ' modal-fullscreen-lg-down';
    }
  }

  spot.innerHTML = `
<button 
    type="button" 
    id="openModal"
    class="btn btn-primary" 
    data-bs-toggle="modal" 
    data-bs-target="#${props.id}" style="display: none !important"></button>

<div 
class="modal fade" 
id="${props.id}" 
tabindex="-1" 
aria-labelledby="${props.id}Label" 
aria-hidden="true"
${props.staticBackdrop ? ` data-bs-backdrop="static" data-bs-keyboard="false"` : ''}>
  <div class="modal-dialog modal-dialog-scrollable${props.centered ? ' modal-dialog-centered' : ''}${
    props.fullscreen ? fullscreen : ''
  }">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${props.id}Label">${props.title}</h1>
        <button type="button" id="closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${props.content}
      </div>
      <div class="modal-footer">
        ${props.footer}
      </div>
    </div>
  </div>
</div>`;

  document.getElementById('openModal')!.click();
}

export interface ModalFooterProps {
  // btns: 1 | 2;
  // btn1: ButtonProps;
  // btn2: ButtonProps;

  btns: ButtonProps[];
}

export function modalFooter(props: ModalFooterProps) {
  let btns = '';

  props.btns.forEach((btn) => {
    btns += Button(btn);
  });

  return btns;

  // data-bs-dismiss="modal"
}

export function modalClose() {
  document.getElementById('closeModal')!.click();
}
