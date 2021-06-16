import { AxiosResponse } from "axios";
import { ICoordinate } from "../../interfaces/weather";
import OpenWeatherMap from "../../utils/OpenWeatherMap/OpenWeatherMap"

export async function getWeatherByCoordinate (coord: ICoordinate): Promise<AxiosResponse> {
	return OpenWeatherMap.get('/weather', {
		params: {
			lat: coord.lat,
			lon: coord.lon,
		},
	});
}

export async function getWeatherByCityId(id: number): Promise<AxiosResponse> {
	return OpenWeatherMap.get('/weather', {
		params: {
			id,
		}
	});
}

export async function getWeathersByMultipleCityId(ids: Array<number>): Promise<AxiosResponse> {
	return OpenWeatherMap.get('/group', {
		params: {
			id: ids.join(','),
		}
	});
}
