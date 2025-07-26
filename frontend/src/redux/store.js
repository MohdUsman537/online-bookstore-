import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'


// RTK Query API's used to fetch data
import booksApi from './features/books/booksApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({

  reducer: {
    cart: cartReducer,
    // Adds RTK Query books API state to store
    [booksApi.reducerPath]: booksApi.reducer,
    // Adds RTK Query’s orders API state to store.
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})