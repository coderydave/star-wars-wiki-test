export interface IData {
  name: string;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  url: string;
  species: [];
  films: [Record<any, string>];
  starships: [Record<any, string>];
  vehicles: [Record<any, string>];
}
