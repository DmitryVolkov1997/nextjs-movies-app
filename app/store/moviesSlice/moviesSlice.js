import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		movies: [],
		filteredMovies: [],
		loading: true
	},
	reducers: {
		setMovies(state, { payload }) {
			state.movies = payload.data
		},
		setLoading(state, { payload }) {
			state.loading = payload
		},
		setFilteredMovies(state, { payload }) {
			state.filteredMovies = payload.data
		}
	}
})

export const { setMovies, setLoading, setFilteredMovies } = moviesSlice.actions
export default moviesSlice.reducer