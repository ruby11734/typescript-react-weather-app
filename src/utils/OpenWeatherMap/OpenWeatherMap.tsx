import axios, { AxiosRequestConfig } from "axios";
import { APP_ID } from "../../config/config";

const baseURL = 'https://api.openweathermap.org/data/2.5/';

const OpenWeatherMap = axios.create({
	baseURL,
});

const requestWithAppId = (config: AxiosRequestConfig) => {
	// console.log(APP_ID);
	config.params.appid = 'b091783d6e0f7a19cde9004ff5adc247';
	return config;
}

const requestWithCelsiusUnits = (config: AxiosRequestConfig) => {
	config.params.units = 'metric';
	return config;
}

OpenWeatherMap.interceptors.request.use(requestWithAppId);
OpenWeatherMap.interceptors.request.use(requestWithCelsiusUnits);

export default OpenWeatherMap;