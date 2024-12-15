export function getTodayString() {
  const today = new Date().getDate();

  let todayString = '';

  if (today < 10) {
    todayString = '0' + today;
  } else {
    todayString = String(today);
  }

  return todayString;
}

export function getMonthString() {
  const meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  const month = meses[new Date().getMonth()];

  return month;
}

export function getYearString() {
  return new Date().getFullYear();
}

export function getWeekDay(): string {
  const semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

  return semana[new Date().getDay()];
}

export function getHourString() {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();

  return `${hour}:${min}`;
}

export function fullDateString() {
  return `${getWeekDay()} - ${getTodayString()}/${getMonthString()}/${getYearString()} ${getHourString()}`;
}
