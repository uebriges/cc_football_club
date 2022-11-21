import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from 'mui-image';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

export default function ClubDetails() {
  const navigate = useNavigate();
  const { clubId } = useParams();
  console.log('clubId: ', clubId);
  const clubs: any = useLoaderData();
  console.log('clubs: ', clubs);

  const currentClub = clubId ? clubs[clubId] : null;
  console.log('currentClub: ', currentClub);

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
          src={currentClub.image}
          alt="Logo"
          fit="contain"
          // width="100"
          height="300px"
          style={{ margin: 'auto' }}
          className="ListItemClubImage"
        />
        <div>{currentClub.country}</div>
      </div>
      <div className="clubDetailsInfo">
        Der Club <b>{currentClub.name}</b> aus {currentClub.country} hat einen
        Wert von {currentClub.value} Millionen Euro.
      </div>
    </>
  );
}
