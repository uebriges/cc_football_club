import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'mui-image';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

export default function ClubDetails() {
  const navigate = useNavigate();
  const locationState = useLocation().state;
  const clubLoaderData: any = useLoaderData();

  let club;

  if (locationState) {
    club = locationState.club;
  } else {
    club = clubLoaderData;
  }

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#1dbf44' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            all about clubs
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="clubDetailsImageAndCountry">
        <Image
          src={club.image}
          alt="Logo"
          fit="contain"
          // width="100"
          height="300px"
          style={{ margin: 'auto' }}
          className="ListItemClubImage"
        />
        <p className="country">{club.country}</p>
      </div>
      <div className="clubDetailsInfo">
        Der Club <b>{club.name}</b> aus {club.country} hat einen Wert von{' '}
        {club.value} Millionen Euro.
      </div>
    </>
  );
}
