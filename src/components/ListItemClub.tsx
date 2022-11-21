import { ListItemButton } from '@mui/material';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';
import { TClub } from '../types/TClub';

interface IListItemClubProps {
  club: TClub;
  index: number;
}

export default function ListItemClub(props: IListItemClubProps) {
  const { club, index } = props;
  const navigate = useNavigate();

  return (
    <ListItemButton
      divider={true}
      onClick={() => navigate(`/detailsview/${index}`)}
    >
      <div className="ListItemClubContainer">
        <Image
          src={club.image}
          alt="Logo"
          width="10%"
          height="10%"
          className="ListItemClubImage"
        />
        <div className="ListClubInfo">
          <div className="ListClubInfoName">{club.name}</div>
          <div className="ListClubInfoCountryAndValue">
            <b>{club.country}</b>
            {` ${club.value} Millionen Euro`}
          </div>
        </div>
      </div>
    </ListItemButton>
  );
}
