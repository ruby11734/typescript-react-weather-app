import { createSlice } from "@reduxjs/toolkit";
import { ILocationState } from "../../interfaces/location";
import { RootState } from "../store";

const initialState: ILocationState = {error:false};

export const LocationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
		setLocationError: (initialState) => {
			initialState.error = true;
		}
	}
});

export const { setLocationError } = LocationSlice.actions;
export const selectSetError = (state: RootState) => state.setLocationError;
export default LocationSlice.reducer;