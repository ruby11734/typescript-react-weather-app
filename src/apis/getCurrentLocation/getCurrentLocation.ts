export default async function getCurrentLocation (): Promise<GeolocationPosition> {
	return new Promise((res, rej) => (
		navigator.geolocation && navigator.geolocation.getCurrentPosition(res, rej)
	));
}
