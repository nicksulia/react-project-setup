import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the data types for our example API
export interface ExampleItem {
  id: number;
  name: string;
  value: string;
}

export interface ExampleData {
  id: number;
  title: string;
  description: string;
  items: ExampleItem[];
  metadata: {
    createdAt: string;
    version: string;
  };
}

// Define a service using a base URL and expected endpoints
export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Example'],
  endpoints: (builder) => ({
    getExampleData: builder.query<ExampleData, void>({
      query: () => 'poc/example.json',
      providesTags: ['Example'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExampleDataQuery } = exampleApi;
