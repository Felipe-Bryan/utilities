export function toCash(number: number) {
  return `R$ ${number.toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
