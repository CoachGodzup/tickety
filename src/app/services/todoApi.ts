import type { Card } from '../store/card'
import process from 'node:process'
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type CardBackend = Card

// Define a service using a base URL and expected endpoints
export const todoApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.SUPABASE_URL}/rest/v1/` }),
  endpoints: builder => ({
    getAllTodos: builder.query<CardBackend, string>({
      query: () => `todo/`,
    }),
    getTodoById: builder.query<CardBackend, string>({
      query: id => `todo/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todoApi
