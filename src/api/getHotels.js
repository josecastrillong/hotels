import axios from 'axios';

const baseURL = 'https://hotels4.p.rapidapi.com/properties/list';

const config = {
  headers: {
    'X-RapidAPI-Key': 'eaf08ca640mshc3061bfeb3d9c7dp1abae6jsna40a7e591c08',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
  },
};

// eslint-disable-next-line consistent-return
async function getHotels() {
  try {
    const response = await axios.get(baseURL, config);
    if (!response) {
      const error = new Error('Algo salió mal');
      console.error(error);
    }
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

export default getHotels;
