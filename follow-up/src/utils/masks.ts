export function maskPhone(telefone: string): string {
  const numero = telefone.replace(/\D/g, '');

  if (numero.length == 10) {
    return `(${numero.slice(0, 2)}) ${numero.slice(2, 6)}-${numero.slice(6)}`;
  } else if (numero.length == 11) {
    return `(${numero.slice(0, 2)}) ${numero.slice(2, 3)} ${numero.slice(3, 7)}-${numero.slice(7)}`;
  } else {
    return String(numero);
  }
}

export function maskCep(number: string): string {
  const numero = number.replace(/\D/g, '');

  return `${numero.slice(0, 2)} ${numero.slice(2, 5)}-${numero.slice(5)}`;
}

export function maskBirth(number: string): string {
  const numero = number.replace(/\D/g, '');

  return `${numero.slice(0, 2)}/${numero.slice(2, 4)}/${numero.slice(4)}`;
}

// export function maskCPF(number: string) {
//   const numero = number.replace(/\D/g, '');
//   if (number.length === 14) {
//     return `${numero.slice(0, 2)}.${numero.slice(2, 5)}.${numero.slice(5, 8)}/${numero.slice(8, 12)}-${numero.slice(
//       12
//     )}`;
//   } else {
//     return `${numero.slice(0, 3)}.${numero.slice(3, 6)}.${numero.slice(6, 9)}-${numero.slice(9)}`;
//   }
// }
