import { calcMS } from './calcMS';
import { checkCep } from './checkCeps';
import { timeOut } from './config';

const initial = Number(prompt('Informe o número Inicial no formato: 00000000'));

const finish = Number(prompt('Informe o número Final no formato: 00000000'));

const total = finish - initial + 1;

alert(`Serão verificados ${total} Ceps --> Tempo estimado: ${calcMS(total * timeOut)}`);

localStorage.removeItem('validCeps');

checkCep(initial, finish);
