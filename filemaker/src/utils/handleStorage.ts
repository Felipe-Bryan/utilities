export function getStorageData(key: string) {
  const data = JSON.parse(localStorage.getItem(key)!);

  return data;
}

export function getSessionStorageData(key: string) {
  const data = JSON.parse(sessionStorage.getItem(key)!);

  return data;
}

export function saveToStorage(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function saveToSessionStorage(key: string, data: any) {
  sessionStorage.setItem(key, JSON.stringify(data));
}
