export interface ICollection {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  genres: {name: string}[];
  budget: {currency: string; value: number}
  year: number;
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  countries: [
    {
      name: string;
    },
  ];
  poster: {
    url: string;
    previewUrl: string;
  };
}
