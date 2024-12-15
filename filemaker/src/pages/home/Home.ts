import { Root } from '../../components/base-components/Root';
import { HomeComponent } from './components/HomeComponent';
import { addPropRow } from './functions/addPropRow';
import { setConfigBtns } from './functions/setConfigBtns';

export function startHome() {
  Root.innerHTML = HomeComponent();

  const content = document.getElementById('content')!;

  document.getElementById('addProp')!.addEventListener('click', (e) => {
    content.innerHTML += addPropRow();
    setConfigBtns();
  });

  setConfigBtns();
}
