import { createSlice } from '@reduxjs/toolkit'

const radioSlice = createSlice({
	name: 'radio',
	initialState: {
		radio: 'all'
	},
	reducers: {
		setRadio(state, { payload }) {
			state.radio = payload.type
			console.log(payload.type)
		}
	}
})

export const { setRadio } = radioSlice.actions
export default radioSlice.reducer