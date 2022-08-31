import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <Grid container direction="row">
        <Grid item xs={12} sm={5}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <h3>Hotel Hilton</h3>
              <p>Miami, USA</p>
            </Grid>
            <Grid item xs={6}>
              <p>Precio secreto disponible</p>
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={7}>
              <p>Totalmente reembolsable</p>
              <p>Acumula sellos</p>
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

export default ImgMediaCard;
