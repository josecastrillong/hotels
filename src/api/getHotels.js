import axios from 'axios';

const baseURL = 'https://hotels4.p.rapidapi.com/properties/list';

const config = {
  headers: {
    'X-RapidAPI-Key': '0276cb07cbmsh718d4394af8036cp1c5e25jsn585535c5a6b2',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
};

async function getCharacters(queryParams) {
  try {
    const response = await axios.get(`${baseURL}?${queryParams}`, config);
    if (response.status === 200) {
      const hotels = response.data.data.body.searchResults.results;
      return hotels;
    }
    return console.log(response.status);
  } catch (error) {
    return console.error(error);
  }
}

export default getCharacters;
