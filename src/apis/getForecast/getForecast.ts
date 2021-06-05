import { AxiosResponse } from "axios";
import OpenWeatherMap from "../../utils/OpenWeatherMap/OpenWeatherMap"

export default async function getForecastById(id: number): Promise<AxiosResponse>{
	return OpenWeatherMap.get('/forecast', {
		params: {
			id,
		}
	});
}