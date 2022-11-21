import SortIcon from '@mui/icons-material/Sort';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import getClubs from '../../helpers/getClubs';
import { TClub } from '../../types/TClub';
import ListItemClub from '../ListItemClub';

// interface IHomeProps {
//   clubs: TClub[];
// }

export default function Home() {
  const [clubs, setClubs] = useState<TClub[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getClubs();
      setClubs(result);
    })();
  });

  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: '#1dbf44' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            all about clubs
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
          >
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        {clubs.map((club: any, index: number) => (
          <ListItemClub club={club} index={index} />
        ))}
      </List>
    </div>
  );
}
