import { TClub } from '../types/TClub';

export default async function getClubs(): Promise<TClub[]> {
  const clubsResponse = await fetch(
    'https://public.allaboutapps.at/hiring/clubs.json ',
  );
  return await clubsResponse.json();
}
