export function calcPercent(value1: number, value2: number) {
  let v1 = value1 / value2;

  let v2 = v1 - 1;

  let v3 = v2 * 100;

  let v4 = v3.toFixed(1);

  return `${v4}%`;
}
