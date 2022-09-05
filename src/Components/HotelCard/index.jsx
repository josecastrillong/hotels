import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styles from './styles.module.css';

function HotelCard({ hotel }) {
  const { name, address, guestReviews, optimizedThumbUrls, ratePlan } = hotel;

  return (
    <Card sx={{ minWidth: 600, maxWidth: 700, Height: 282 }}>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={5}>
          <CardMedia
            className={styles.img}
            component="img"
            alt="Hotel Photo"
            image={optimizedThumbUrls.srpDesktop}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid container direction="row">
            <Grid item xs={12}>
              <h3>{name}</h3>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={6}>
              <p>{address.locality}</p>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={7}>
              <p className={styles.reimbursement}>Totalmente reembolsable</p>
              <p>Acumula sellos</p>
              <p>
                <strong>{`${guestReviews.rating}/10`}</strong>
                {` (${guestReviews.total} opiniones)`}
              </p>
            </Grid>
            <Grid item xs={5}>
              <p className={styles.secret_price}>
                <LocalOfferIcon />
                Precio secreto disponible
              </p>
              <h3>USD {`${ratePlan.price.current}`}</h3>
              <p>{`${ratePlan.price.fullyBundledPricePerStay.replace('&nbsp;', ' ')}`}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

HotelCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  hotel: PropTypes.object.isRequired,
};

export default HotelCard;
