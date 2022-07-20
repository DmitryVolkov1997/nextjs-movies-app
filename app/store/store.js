import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './moviesSlice/moviesSlice'
import searchSlice from './searchSlice/searchSlice'
import radioSlice from './radioSlice/radioSlice'

export const store = configureStore({
	reducer: {
		movies: moviesSlice,
		search: searchSlice,
		radio: radioSlice
	}
})