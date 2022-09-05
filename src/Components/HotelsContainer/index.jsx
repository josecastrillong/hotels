/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useSearchParams } from 'react-router-dom';
import { TextField, MenuItem, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import getHotels from '../../api/getHotels';
import HotelCard from '../HotelCard';

function HotelsContainer() {
  const [destinationId, setDestination] = useState('');
  const [pageNumber, setPage] = useState('');
  const [pageSize, setResults] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults1, setAdultsNumber] = useState('');
  const [params, setParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const destination = [
    { value: 1506246, label: 'New York' },
    { value: 1447930, label: 'Miami' },
    { value: 457987, label: 'Madrid' },
  ];

  const handleDestination = (event) => {
    setDestination(event.target.value);
  };

  const handlePageChange = (event) => {
    setPage(event.target.value);
  };

  const handleNumberOfResults = (event) => {
    setResults(event.target.value);
  };

  const handleCheckIn = (event) => {
    setCheckIn(event.target.value);
  };

  const handleCheckOut = (event) => {
    setCheckOut(event.target.value);
  };

  const handleNumberOfAdultsChange = (event) => {
    setAdultsNumber(event.target.value);
  };

  const addParams = () => {
    setParams({
      destinationId,
      pageNumber,
      pageSize,
      checkIn,
      checkOut,
      adults1,
    });
    setIsLoading(true);
  };

  useEffect(() => {
    getHotels(params.toString()).then((response) => {
      setHotels(response);
      setIsLoading(false);
    });
    console.log(hotels);
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
          required
          id="select-destination"
          label="destino"
          select
          defaultValue=""
          value={destinationId}
          onChange={handleDestination}>
          {destination.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="select-page"
          label="selecciona pagina"
          value={pageNumber}
          onChange={handlePageChange}
        />
        <TextField
          required
          id="select-results"
          label="número de resultados"
          value={pageSize}
          onChange={handleNumberOfResults}
        />
        <TextField
          required
          id="select-checkIn"
          label="check in"
          value={checkIn}
          onChange={handleCheckIn}
          helperText="YYYY-MM-DD"
        />
        <TextField
          required
          id="select-checkOut"
          label="check out"
          value={checkOut}
          onChange={handleCheckOut}
          helperText="YYYY-MM-DD"
        />
        <TextField
          required
          id="select-adults"
          label="número de adultos"
          value={adults1}
          onChange={handleNumberOfAdultsChange}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Button onClick={addParams} variant="outlined" sx={{ m: 8, width: '25ch' }}>
            Buscar
          </Button>
        )}
      </Box>
      {!params.toString() ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Selecciona parámetros de búsqueda</p>
        </Box>
      ) : !hotels ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>No hay hoteles que coincidan con tu busqueda</p>
        </Box>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {hotels.map((hotel) => (
            <Grid item py={3} px={5} key={hotel.id}>
              <HotelCard hotel={hotel} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
export default HotelsContainer;
