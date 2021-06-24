import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/WeatherSlice';
import locationErrorReducer from './slices/LocationSlice';


export const store = configureStore({
	reducer: {
		setCityWeather: weatherReducer,
		setLocationError: locationErrorReducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
