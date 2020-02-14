// @flow
import {AsyncStorage} from "react-native";

const API_KEY = '23567b218376f79d9415'; // other valid API keys: '760b5fb497225856222a', '0e2a751704a65685eefc'
const API_ENDPOINT = 'http://195.39.233.28:8035';

let token: string | undefined;

async function auth() {
  const response = await fetch(`${API_ENDPOINT}/auth`, {
    method: 'POST',
    headers: getAuthHeader(),
    body: JSON.stringify({apiKey: API_KEY}),
  });

  if (response.ok) {
    const json = await response.json();
    token = json.token;
    return token;
  }
}

function shouldRefreshToken(response) {
  return response.status === 401;
}

function getAuthHeader() {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: null,
  };

  if (token != null) {
    headers.Authorization = 'Bearer ' + token;
  }
  return headers;
}

async function query(url: string, parameters) {
  if (token == null) {
    await auth();
  }
  const response = await fetch(url, { ...parameters,  headers: getAuthHeader()});
  if (response.ok) {
    return response;
  } else if (shouldRefreshToken(response)) {
    await auth();
    return query(url, { ...parameters,  headers: getAuthHeader()});
  }
}

export async function getPictures(page: number = 1) {
  return query(`${API_ENDPOINT}/images?page=${page}`, {
    method: 'GET',
    headers: getAuthHeader(),
  });
}

export async function getPictureDetails(id: number) {
  return query(`${API_ENDPOINT}/images/${id}`, {
    method: 'GET',
    headers: getAuthHeader(),
  });
}
