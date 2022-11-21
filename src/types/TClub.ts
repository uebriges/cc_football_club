export type TClub = {
  id: string;
  name: string;
  country: string;
  value: number;
  image: string;
  european_titles: number;
  stadium: {
    size: number;
    name: string;
  };
  location: {
    lat: number;
    lng: number;
  };
};
