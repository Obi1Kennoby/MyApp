// @flow
const API_KEY = '23567b218376f79d9415'; // other valid API keys: '760b5fb497225856222a', '0e2a751704a65685eefc'
const API_ENDPOINT = 'http://195.39.233.28:8035';

let token;
async function auth() {
  const response = await fetch(`${API_ENDPOINT}/auth`, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify({apiKey: API_KEY}),
  });

  if (response.ok) {
    const json = await response.json();
    token = json.token;
  }
}

function getAuthHeader(): string {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: null,
  };
  if (token) {
    headers.Authorization = 'Bearer ' + token;
  }
  return headers;
}

async function query(url: string, parameters) {
  const response = await fetch(url, parameters);
  if (response.ok) {
    return response;
  }
  console.trace('query error');
}

export async function getPictures(page: number = 1): any[] {
  await auth();
  return query(`${API_ENDPOINT}/images?page=${page}`, {
    method: 'GET',
    headers: getAuthHeader(),
  });
}

export async function getPictureDetails(id: number): any {
  await auth()
  return query(`${API_ENDPOINT}/images/${id}`, {
    method: 'GET',
    headers: getAuthHeader(),
  });
}
