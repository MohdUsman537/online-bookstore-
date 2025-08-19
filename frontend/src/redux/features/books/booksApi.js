import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseURL';

// Base query with simple setup
const baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const booksApi = createApi({
  reducerPath: 'booksApi',   // Where the state will live
  baseQuery,                 // The base fetch function
  tagTypes: ['Books'],       // Used for cache updates
  endpoints: (builder) => ({
    
    // Get all books
    fetchAllBooks: builder.query({
      query: () => '/',
      providesTags: ['Books'],
    }),

    // Get single book by ID
    fetchBookById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Books', id }],
    }),

    // Add a new book
    addBook: builder.mutation({
      query: (newBook) => ({
        url: '/create-book',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags: ['Books'], // Refresh the book list after adding
    }),

    // Update a book
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/edit/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Books'], // Refresh list after update
    }),

    // Delete a book
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'], // Refresh list after delete
    }),
  }),
});

// Export hooks for components to use
export const {
  useFetchAllBooksQuery,
  useFetchBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;

export default booksApi;
