import Container from '@mui/material/Container';
import NavBar from '../../Components/NavBar';
import CharacterCardsContainer from '../../Components/CharactersCardContainer';

function Home() {
  return (
    <Container style={{ maxWidth: 1300 }}>
      <NavBar />
      <CharacterCardsContainer />
    </Container>
  );
}

export default Home;
