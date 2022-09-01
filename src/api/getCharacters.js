import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/character';

// eslint-disable-next-line import/prefer-default-export
async function getCharacters() {
  const response = await axios.get(baseURL);
  try {
    if (!response.data.results) {
      throw new Error('No results');
    }
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
}

export default getCharacters;
