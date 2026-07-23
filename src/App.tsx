import { getCurrentWeather } from "./services/weatherApi"
import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import FunnyMessage from "./components/FunnyMessage"
import type { WeatherResponse } from "./types/weather"
import { getWeatherDescription } from "./utils/weatherCode"
import { getWeatherIcon } from "./utils/weatherCode"

function App() {

  const [weather, setWeather] = useState<WeatherResponse | null>(null)

  useEffect(() => {

    async function loadWeather() {
    const data = await getCurrentWeather()
    console.log(data)
    setWeather(data)

  }

  loadWeather()
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

        <CurrentWeather
        city="Montevideo"
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