import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/character';

// eslint-disable-next-line import/prefer-default-export
async function getCharacters(queryParams) {
  try {
    const response = await axios.get(`${baseURL}?${queryParams}`);
    if (!response.data.results) {
      throw new Error('No results');
    }
    return response.data.results;
  } catch (error) {
    return [];
  }
}

export default getCharacters;
