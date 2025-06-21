import axios from 'axios';

const api = axios.create();

export async function get() {
  await api.get('https://comanda-api-1.onrender.com/vivoli/client');

  await api.get('https://api-9m8v.onrender.com/api/city');
}
