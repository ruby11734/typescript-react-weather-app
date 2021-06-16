import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/WeatherSlice';

export const store = configureStore({
	reducer: {
		cityWeather: weatherReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
