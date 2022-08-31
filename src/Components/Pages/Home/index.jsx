import Container from '@mui/material/Container';
import NavBar from '../../NavBar';
import HotelCard from '../../HotelCard';

function Home() {
  return (
    <Container style={{ maxWidth: 1300 }}>
      <NavBar />
      <HotelCard />
    </Container>
  );
}

export default Home;
