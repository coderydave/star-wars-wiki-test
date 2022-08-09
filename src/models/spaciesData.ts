export interface ISpacies {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: [string];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [string];
  starships: [string];
  url: string;
  vehicles: [string];
}

export interface IMultiSpacies {
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
  people: [];
  films: [Record<any, string>];
  starships: [Record<any, string>];
  vehicles: [Record<any, string>];
  average_height: string;
  average_lifespan: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
  language: string;
  skin_colors: string;
}
export interface IProfileSpacies {
  name: string;
  created: string;
  height: string;
  edited: string;
  gender: string;
  mass: string;
  species: [string];
  homeworld: string;
  films: [string];
  average_height: string;
  average_lifespan: string;
  classification: string;
  eye_color: string;
  hair_color: string;
  language: string;
  skin_color: string;
}
