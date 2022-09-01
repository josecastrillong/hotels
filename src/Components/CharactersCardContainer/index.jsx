import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CharacterCard from '../CharacterCard';
import getCharacters from '../../api/getCharacters';

function CharacterCardsContainer() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => setCharacter(data));
  }, []);
  return (
    <Grid container rowSpacing={6} columnSpacing={4}>
      {characters.map((character) => (
        <Grid item xs={12} md={6} key={character.id}>
          <Box pt={3}>
            <CharacterCard key={character.id} character={character} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default CharacterCardsContainer;
