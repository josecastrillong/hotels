import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { Grid } from '@mui/material';

function NavBar() {
  return (
    <AppBar
      position="static"
      style={{ maxWidth: 1700 }}
      sx={{
        m: 0,
        display: 'flex',
      }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Grid container justifyContent="flex-end">
          <Button color="inherit">
            <PublicIcon />
            Español
          </Button>
          <Button color="inherit">Iniciar sesión</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
