import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import FunnyMessage from "./components/FunnyMessage"
import type { WeatherResponse } from "./types/weather"
import { getWeatherDescription } from "./utils/weatherCode"
import { getWeatherIcon } from "./utils/weatherCode"
import { getCurrentWeather, getCoordinates } from "./services/weatherApi"
import SearchBar from "./components/SearchBar"

function App() {

  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [city, setCity] = useState("Montevideo")
  const [error, setError] = useState("")

  async function handleSearch(cityName: string) {
  const coordinates = await getCoordinates(cityName)

  if (!coordinates) {
  setError("⚠️ No encontramos esa ciudad. Probá con otro departamento o localidad de Uruguay 🇺🇾.")
  return
  }
  setError("")

  setCity(coordinates.name)

  const data = await getCurrentWeather(
    coordinates.latitude,
    coordinates.longitude
  )

  setWeather(data)
  }

  useEffect(() => {
  handleSearch("Montevideo")
  }, [])


if (!weather) {
 return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500 text-xl">
        Cargando clima...
      </p>
    </main>
  )
}
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          BoClima 🌦️
        </h1>


       <SearchBar
        city={city}
        onSearch={handleSearch}
        />

        {error && (
        <p className="text-red-500 text-center mb-4">
          {error}
        </p>
        )}

        <CurrentWeather
        city={city}
        temperature={weather.current.temperature_2m}
        condition={getWeatherDescription(weather.current.weather_code)}
        icon={getWeatherIcon(weather.current.weather_code)}
        />

        <WeatherDetails
        humidity={weather.current.relative_humidity_2m}
        wind={weather.current.wind_speed_10m}
        />

        <Forecast
        daily={{
          time: weather.daily.time,
          temperatureMax: weather.daily.temperature_2m_max,
          temperatureMin: weather.daily.temperature_2m_min,
          weatherCode: weather.daily.weather_code,
        }}
        />

        <FunnyMessage />

      </div>
    </main>
  )
}

export default App