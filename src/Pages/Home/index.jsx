import Container from '@mui/material/Container';
import NavBar from '../../Components/NavBar';
import CharacterCardsContainer from '../../Components/CharactersCardContainer';

function Home() {
  return (
    <Container fluid style={{ maxWidth: 1700 }}>
      <NavBar />
      <CharacterCardsContainer />
    </Container>
  );
}

export default Home;
