import { getCep } from './cep.service';
import { timeOut } from './config';
import { fileMaker } from './filemaker';

export interface ValidCep {
  zipcode: string;
  district: string;
}

export async function checkCep(initial: number, finish: number) {
  let current = initial;

  const items: ValidCep[] = [];

  const root = document.getElementById('root')!;

  await getCep(String(current))
    .then((data: any) => {
      root.innerHTML += `<div>Processado: ${current}</div>`;

      const newValidCep: ValidCep = {
        zipcode: data.zipcode,
        district: data.district,
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
