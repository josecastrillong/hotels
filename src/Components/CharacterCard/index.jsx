import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import WarningIcon from '@mui/icons-material/Warning';
import styles from './styles.module.css';

function CharacterCard({ character }) {
  const { status } = character;

  let statusClass = '';
  if (status === 'Alive') {
    statusClass = styles.alive;
  } else if (status === 'Dead') {
    statusClass = styles.dead;
  } else {
    statusClass = styles.unknown;
  }

  return (
    <Card sx={{ maxWidth: 700 }}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={5}>
          <CardMedia component="img" alt="green iguana" image={character.image} />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <h3>{character.name}</h3>
              <p>{character.location.name}</p>
            </Grid>
            <Grid item xs={6} direction="row" justify="flex-end">
              <WarningIcon />
              <div className={statusClass}> {character.status}</div>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={7}>
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <p>
                <strong>6.8/10</strong>(3.452 opiniones)
              </p>
            </Grid>
            <Grid item xs={5}>
              <h3>COP 916.118</h3>
              <p>COP 2.000.000 en total</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

CharacterCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
