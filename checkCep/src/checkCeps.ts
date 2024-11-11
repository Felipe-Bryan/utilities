import { getCep } from './cep.service';
import { timeOut } from './config';
import { fileMaker } from './filemaker';

export interface ValidCep {
  cep: string;
  bairro: string;
}

export async function checkCep(initial: number, finish: number) {
  let current = initial;

  const items: ValidCep[] = [];

  const root = document.getElementById('root')!;

  await getCep(String(current))
    .then((data: any) => {
      root.innerHTML += `<div>Processado: ${current}</div>`;
      window.scroll(0, 99999999);

      const newValidCep: ValidCep = {
        cep: data.cep,
        bairro: data.bairro,
      };

      items.push(newValidCep);

      current++;

      if (current < finish) {
        setTimeout(() => {
          checkCep(Number(current), finish);
        }, timeOut);
      } else if (current === finish) {
        console.log('finalizado');

        console.log(items);

        fileMaker(items, `${Date.now()}.js`);
      }
    })
    .catch(() => {
      root.innerHTML += `<div>Processado: ${current}</div>`;
      window.scroll(0, 99999999);

      current++;

      if (current < finish) {
        setTimeout(() => {
          checkCep(Number(current), finish);
        }, timeOut);
      } else if (current === finish) {
        console.log('finalizado');

        console.log(items);
      }
    });
}
