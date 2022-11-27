import SortIcon from '@mui/icons-material/Sort';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import List from '@mui/material/List';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { TClub } from '../../types/TClub';
import ListItemClub from '../ListItemClub';

// interface IHomeProps {
//   clubs: TClub[];
// }

export default function Home() {
  const clubsData: any = useLoaderData();
  const [sortedAsc, setSortedAsc] = useState<boolean>(true);
  const [clubs] = useState<TClub[]>(clubsData);

  const handleSort = () => {
    console.log('click');
    if (sortedAsc) {
      console.log('asc');
      clubs.sort((a: TClub, b: TClub) => a.name.localeCompare(b.name));
      localStorage.setItem('ascSort', false.toString());
      setSortedAsc(false);
    } else {
      console.log('desc');
      clubs.sort((a: TClub, b: TClub) => a.name.localeCompare(b.name) * -1);
      localStorage.setItem('ascSort', true.toString());
      setSortedAsc(true);
    }
  };

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
            onClick={handleSort}
            color="inherit"
          >
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        {clubs.map((club: any, index: number) => {
          return <ListItemClub club={club} index={index} />;
        })}
      </List>
    </div>
  );
}
