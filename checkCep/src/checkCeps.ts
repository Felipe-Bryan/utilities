import { getCep } from './cep.service';
import { timeOut } from './config';
import { fileMaker } from './filemaker';

export interface ValidCep {
  cep: string;
  bairro: string;
}

export async function checkCep(initial: number, finish: number) {
  let current = initial;

  const items: ValidCep[] = JSON.parse(localStorage.getItem('validCeps') || '[]');

  const root = document.getElementById('root')!;

  await getCep(String(current))
    .then((data: any) => {
      root.innerHTML += `<div>Processado: ${current}</div>`;
      window.scroll(0, 99999999);

      const newValidCep: ValidCep = {
        cep: data.cep,
        bairro: data.neighborhood,
      };

      console.log(newValidCep);
      items.push(newValidCep);
      console.log(items);
      localStorage.setItem('validCeps', JSON.stringify(items));

      current++;

      if (current <= finish) {
        setTimeout(() => {
          checkCep(Number(current), finish);
        }, timeOut);
      } else if (current === finish + 1) {
        console.log('finalizado');

        console.log(items);

        fileMaker(items, `${Date.now()}.js`);
      }
    })
    .catch(() => {
      root.innerHTML += `<div>Processado: ${current}</div>`;
      window.scroll(0, 99999999);

      current++;

      if (current <= finish) {
        setTimeout(() => {
          checkCep(Number(current), finish);
        }, timeOut);
      } else if (current === finish + 1) {
        console.log('finalizado');

        console.log(items);

        fileMaker(items, `${Date.now()}.js`);
      }
    });
}
