


export default async function getCurrentLocation (): Promise<GeolocationPosition> {
	return new Promise((res, rej) => {
		navigator.geolocation.getCurrentPosition(res, rej);
	});
}
