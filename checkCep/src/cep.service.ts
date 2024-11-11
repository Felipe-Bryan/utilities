import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.cepaberto.com/api/v3',
  headers: {
    Authorization: 'Token token=6328b196c331937bdb84e3bab50ebba6',
  },
});

export async function getCep(cep: string) {
  const url = `cep?cep=${cep}`;

  let result;

  await api.get(url).then((data) => {
    result = data.data;
  });

  return result;
}
