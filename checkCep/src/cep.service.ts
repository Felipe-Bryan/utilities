import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.brasilaberto.com/v1/zipcode',
});

export async function getCep(cep: string) {
  const url = `${cep}`;

  let result;

  await api.get(url).then((data) => {
    result = data.data.result;
  });

  return result;
}
