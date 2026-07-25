import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import FunnyMessage from "./components/FunnyMessage"
import type { WeatherResponse } from "./types/weather"
import { getWeatherDescription } from "./utils/weatherCode"
import { getWeatherIcon } from "./utils/weatherCode"
import { getCurrentWeather, getCoordinates } from "./services/weatherApi"
import Navbar from "./components/Navbar"
import { getWeatherAdvice } from "./utils/weatherAdvice"

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
    <>
     <Navbar
     city={city}
     onSearch={handleSearch}
     />
    <main className="min-h-screen bg-sky-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        

        {error && (
        <p className="text-red-500 text-center mb-4">
          {error}
        </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 space-y-6">

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

        </div>

        <div className="h-full">
        <FunnyMessage message={getWeatherAdvice(
          weather.current.temperature_2m,
          weather.current.weather_code,
          weather.current.wind_speed_10m
        )}/>
        </div>

       </div>

       <Forecast
        daily={{
          time: weather.daily.time,
          temperatureMax: weather.daily.temperature_2m_max,
          temperatureMin: weather.daily.temperature_2m_min,
          weatherCode: weather.daily.weather_code,
        }}
        />

      </div>
    </main>
     </>
  )
}

export default App