const API_KEY = '44213256-a0da22d27c0a561a4a975a94d';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}