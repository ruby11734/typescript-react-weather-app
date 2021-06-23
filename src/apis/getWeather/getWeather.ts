import { AxiosResponse } from "axios";
import { ICoordinate } from "../../interfaces/location";
import { IWeatherProps } from "../../interfaces/weather";
import OpenWeatherMap from "../../utils/OpenWeatherMap/OpenWeatherMap"

export async function getWeatherByCoordinate (coord: ICoordinate): Promise<AxiosResponse<IWeatherProps>> {
	return OpenWeatherMap.get('/weather', {
		params: {
			lat: coord.latitude,
			lon: coord.longitude,
		},
	});
}

export async function getWeatherByCityId(id: number): Promise<AxiosResponse<IWeatherProps>> {
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
