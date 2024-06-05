import axios from 'axios';
const API_KEY = '44213256-a0da22d27c0a561a4a975a94d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  if (response.status !== 200) {
    throw new Error('Failed to fetch images');
  }
  return response.data;
}