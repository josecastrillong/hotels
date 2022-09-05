import Container from '@mui/material/Container';
import NavBar from '../../Components/NavBar';
import HotelsContainer from '../../Components/HotelsContainer';

function Home() {
  return (
    <Container fluid style={{ maxWidth: 1700 }}>
      <NavBar />
      <HotelsContainer />
    </Container>
  );
}

export default Home;
