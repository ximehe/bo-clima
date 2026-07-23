export async function getCurrentWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-34.90&longitude=-56.16&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto"
  )

  const data = await response.json()

  return data
}