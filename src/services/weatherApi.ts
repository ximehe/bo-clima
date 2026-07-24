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
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es&format=json&countryCode=UY`
  )

  const data = await response.json()

  if (!data.results || data.results.length === 0) {
    return null
  }

  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
    name: data.results[0].name,
  }
}