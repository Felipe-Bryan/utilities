import axios from 'axios';

const api = axios.create({
  baseURL: 'https://comanda-api-1.onrender.com',
});

export async function get() {
  await api.get('vivoli/client');
}
