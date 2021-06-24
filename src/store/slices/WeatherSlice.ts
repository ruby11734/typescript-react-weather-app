import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICityWeatherState, IWeatherProps } from "../../interfaces/weather";
import type { RootState } from "../store";

const initialState: ICityWeatherState = {};

export const WeatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setCityWeather: (state: ICityWeatherState, action: PayloadAction<IWeatherProps>) => {
			state.cityWeather = action.payload;
		}
	}
});

export const { setCityWeather } = WeatherSlice.actions;

export const selectSetCity = (state: RootState) => state.setCityWeather;

export default WeatherSlice.reducer;