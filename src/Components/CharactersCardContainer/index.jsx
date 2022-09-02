import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';
import { TextField, MenuItem, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CharacterCard from '../CharacterCard';
import getCharacters from '../../api/getCharacters';

function CharacterCardsContainer() {
  const [params, setParams] = useSearchParams('');
  const [characters, setCharacter] = useState([]);
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  const genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'unknown', label: 'Unkown' },
    { value: 'genderless', label: 'Genderless' },
  ];

  const liveStatus = [
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
    { value: 'unkown', label: 'Unkonwn' },
  ];

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const addParams = () => {
    setParams({
      page,
      gender,
      status,
    });
  };

  useEffect(() => {
    getCharacters(params.toString()).then((data) => setCharacter(data));
    console.log(params.toString());
  }, [params]);

  return (
    <Box sx={{ boxShadow: 1 }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 8, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField
          id="select-gender"
          label="select gender"
          select
          value={gender}
          onChange={handleGenderChange}>
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField id="select-page" label="select page" value={page} onChange={handlePageChange} />

        <TextField
          id="select-gender"
          label="select status"
          select
          value={status}
          onChange={handleStatusChange}>
          {liveStatus.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button onClick={addParams} variant="outlined" sx={{ m: 8, width: '25ch' }}>
          Buscar
        </Button>
      </Box>
      {characters.length > 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {characters.map((character) => (
            <Grid item py={2} p={5} key={character.id}>
              <CharacterCard key={character.id} character={character} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center' }}>No hay personajes que coincidan con los parámetros</Box>
      )}
    </Box>
  );
}
export default CharacterCardsContainer;
