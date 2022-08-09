import { Spacies } from "../../models/spacies";
import {
  Human,
  Droid,
  Wookie,
  Rodian,
  Hutt,
  Yoda,
  Trandoshan,
  MonCalamari,
  Ewok,
  Sullustan,
} from "../../assets/img/spacies";

export const spacies: Spacies = {
  Human: Human,
  Droid: Droid,
  Wookie: Wookie,
  Rodian: Rodian,
  Hutt: Hutt,
  "Yoda's species": Yoda,
  Trandoshan: Trandoshan,
  "Mon Calamari": MonCalamari,
  Ewok: Ewok,
  Sullustan: Sullustan,
};

export const getSpaciesImg = (name: string) => {
  const keyName = name;
  for (let [key, value] of Object.entries(spacies)) {
    if (key === keyName) {
      return value;
    } else {
      continue;
    }
  }
};
