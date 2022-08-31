import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import HotelCard from '../HotelCard';
import getHotels from '../../api/getHotels';

function HotelCardsContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getResponse = getHotels();
    setData(getResponse);
    console.log(data);
  }, []);

  return (
    <Container>
      <HotelCard />
    </Container>
  );
}

export default HotelCardsContainer;
