export async function getCurrentWeather(
  latitude: number,
  longitude: number
) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
  )

  const data = await response.json()

  return data
}

export async function getCoordinates(city: string) {
  const response = await fetch(
   `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=es&format=json`
  )

  const data = await response.json()

  if (!data.results || data.results.length === 0) {
    return null
  }

  const uruguayResult = data.results.find(
    (result: any) => result.country_code === "UY"
  )

  if (!uruguayResult) {
    return null
  }


  return {
    latitude: uruguayResult.latitude,
    longitude: uruguayResult.longitude,
    name: uruguayResult.name,
  }
}

export function getCurrentLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export async function getLocationName(
  latitude: number,
  longitude: number
) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
  )

  const data = await response.json()

  return (
    data.address?.city ||
    data.address?.town ||
    data.address?.village ||
    data.address?.municipality ||
    data.address?.county ||
    "Mi ubicación"
  )
}