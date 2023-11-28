import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const restaurant = createApi({
  reducerPath: "restaurant",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.swiggy.com/dapi/",
  }),
  endpoints: (builder) => ({
    getRestaurant: builder.query({
      query: () =>
        "restaurants/list/v5?lat=28.4443683&lng=77.04061469999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    }),
    getRestaurantMenu: builder.query({
      query: (resId) =>
        `menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4443683&lng=77.04061469999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,
    }),
    addCart: builder.query({
      query: (data) => {},
    }),
  }),
});

export const {
  useGetRestaurantQuery,
  useGetRestaurantMenuQuery,
  useAddCartQuery,
} = restaurant;
