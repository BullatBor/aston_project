import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICollection } from "../../models/ICollection";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", `${process.env.REACT_APP_API_KEY}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    getMovieCollection: build.query<ICollection[], number>({
      query: (limit = 10) => ({
        url: "/movie",
        _limit: limit,
      }),
      transformResponse: (response: { docs: [] }) => {
        return response.docs;
      },
    }),
  }),
});
