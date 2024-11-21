import axios from 'axios';

const api = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v1',
});

export async function getCep(cep: string) {
  const url = `${cep}`;

  let result;

  await api.get(url).then((data) => {
    result = data.data;
  });

  return result;
}
