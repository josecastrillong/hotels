import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PublicIcon from '@mui/icons-material/Public';
import { Grid } from '@mui/material';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
    </Box>
  );
}

export default NavBar;
