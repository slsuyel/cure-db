import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.curesmabangladesh.org',
    credentials: 'include',
  }),
  endpoints: () => ({}),
  tagTypes: ['blogs', 'user-update'],
});

export default baseApi;
