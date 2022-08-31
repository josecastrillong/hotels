import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Grid } from '@mui/material';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 700 }}>
      <Grid container direction="row">
        <Grid item xs={5}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
          />
        </Grid>
        <Grid item xs={7}>
          <h5>Miami, USA</h5>
          <h3>Hotel Hilton</h3>
        </Grid>
      </Grid>
    </Card>
  );
}
