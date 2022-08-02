interface IVolume {
  value: number;
  unit: string;
}

export interface IBoilVolume {
  value: number;
  unit: string;
}

export interface ITemp {
  value: number;
  unit: string;
}

export interface IMashTemp {
  temp: ITemp;
  duration?: number;
}

export interface ITemp2 {
  value: number;
  unit: string;
}

export interface IFermentation {
  temp: ITemp2;
}

export interface IMethod {
  mash_temp: IMashTemp[];
  fermentation: IFermentation;
  twist: string;
}

export interface IAmount {
  value: number;
  unit: string;
}

export interface IMalt {
  name: string;
  amount: IAmount;
}

export interface IAmount2 {
  value: number;
  unit: string;
}

export interface IHop {
  name: string;
  amount: IAmount2;
  add: string;
  attribute: string;
}

export interface IIngredients {
  malt: IMalt[];
  hops: IHop[];
  yeast: string;
}

export interface IBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu?: number;
  target_fg: number;
  target_og: number;
  ebc?: number;
  srm?: number;
  ph?: number;
  attenuation_level: number;
  volume: IVolume;
  boil_volume: IBoilVolume;
  method: IMethod;
  ingredients: IIngredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface IQueryGetAll {
  page?: number;
  perPage?: number;
}

export interface IQuerySearch {
  perPage?: number;
  q: string;
}
