import { Button } from '../components/base-components/Button';
import { Root } from '../components/base-components/Root';

export function setHome() {
  Root.innerHTML = '<div class="container" id="kmItems"></div>';

  Root.innerHTML += Button({
    id: 'btnAdd',
    color: 'primary',
    label: '+',
    additionalClass: 'rounded-circle btn-lg fw-bold',
  });
}
