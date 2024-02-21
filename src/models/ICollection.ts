export interface ICollection {
    id: number
    name: string,
    shortDescription: string
    year: number
    rating: {
        kp: number
        imdb: number
        tmdb: number
        filmCritics: number
        russianFilmCritics: number
        await: number
      },
      countries: [
        {
          name: string
        }
      ],
      poster: {
        url: string
        previewUrl: string
      }
}