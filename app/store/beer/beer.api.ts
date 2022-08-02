import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBeer, IQueryGetAll, IQuerySearch } from "./beer.types";

export const beersApi = createApi({
  reducerPath: "beersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2" }),
  endpoints: (build) => ({
    getBeers: build.query<IBeer[], IQueryGetAll>({
      query: ({ page = 1, perPage = 25 }) => ({
        url: `/beers`,
        params: {
          page: page,
          per_page: perPage,
        },
      }),
    }),

    getBeerById: build.query<IBeer, { id: number }>({
      transformResponse: (response: IBeer[]): IBeer => {
        return { ...response[0] };
      },
      query: ({ id }) => ({
        url: `/beers/${id}`,
      }),
    }),

    searchByName: build.mutation<IBeer[], IQuerySearch>({
      query: ({ q = " ", perPage = 80 }) => ({
        url: "/beers",
        params: {
          beer_name: q,
          per_page: perPage,
        },
      }),
    }),
  }),
});

export const {
  useGetBeersQuery,
  useGetBeerByIdQuery,
  useSearchByNameMutation,
} = beersApi;
