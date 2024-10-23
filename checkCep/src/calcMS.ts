export function calcMS(ms: number) {
  const restoH = ms % 3600000;
  const horas = (ms - restoH) / 3600000;

  const restoM = restoH % 60000;
  const minutos = (restoH - restoM) / 60000;

  const restoS = restoM % 1000;
  const segundos = (restoM - restoS) / 1000;

  return `${horas}h${minutos}m${segundos}s`;
}
