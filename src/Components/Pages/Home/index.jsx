import Container from '@mui/material/Container';
import NavBar from '../../NavBar';
import HotelCardsContainer from '../../HotelCardsContainer';

function Home() {
  return (
    <Container style={{ maxWidth: 1300 }}>
      <NavBar />
      <HotelCardsContainer />
    </Container>
  );
}

export default Home;
