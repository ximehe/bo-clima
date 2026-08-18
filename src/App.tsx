import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import FunnyMessage from "./components/FunnyMessage"
import type { WeatherResponse } from "./types/weather"
import { getWeatherDescription } from "./utils/weatherCode"
import { getWeatherIcon } from "./utils/weatherCode"
import { getCurrentWeather, getCoordinates, getCurrentLocation, getLocationName } from "./services/weatherApi"
import Navbar from "./components/Navbar"
import { getWeatherAdvice } from "./utils/weatherAdvice"
import boclimaLoader from "./assets/boclima-logo-loader.png"
import HourlyForecast from "./components/HourlyForecast"
import WeatherBackground from "./components/WeatherBackground"

function App() {

  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [city, setCity] = useState("Montevideo")
  const [error, setError] = useState("")
  const [isCurrentLocation, setIsCurrentLocation] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
  const savedDarkMode = localStorage.getItem("darkMode")
  return savedDarkMode === "true"
  })

  async function handleSearch(cityName: string) {
  const coordinates = await getCoordinates(cityName)

  if (!coordinates) {
  setError("⚠️ No encontramos esa ciudad. Probá con otro departamento o localidad de Uruguay 🇺🇾.")
  return
  }
  setError("")

  setCity(coordinates.name)
  setIsCurrentLocation(false)
  localStorage.setItem("lastCity", coordinates.name)

  const data = await getCurrentWeather(
    coordinates.latitude,
    coordinates.longitude
  )

  setWeather(data)
  }

  async function handleCurrentLocation() {
  try {
    const position = await getCurrentLocation()

    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const locationName = await getLocationName(latitude, longitude)

    const data = await getCurrentWeather(latitude, longitude)

    setWeather(data)
    setCity(locationName)
    setIsCurrentLocation(true)
    setError("")
  } catch {
    setError("No pudimos acceder a tu ubicación.")
  }
  }

  useEffect(() => {
  const lastCity = localStorage.getItem("lastCity")
  if (lastCity) {
    handleSearch(lastCity)
  } else {
  handleSearch("Montevideo")
  }
  }, [])

  useEffect(() => {
  localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  const hour = new Date().getHours()

  const params = new URLSearchParams(window.location.search)

  const testTime = params.get("time")

  const isNight =
    testTime === "night"
      ? true
      : testTime === "day"
        ? false
        : hour >= 20 || hour < 6
        
if (!weather) {
  return (
    <main
      className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${
        darkMode ? "bg-[#0F172A]" : "bg-[#E0F2FE]"
      }`}
    >
      <div className="text-center">

        <div className="flex justify-center mb-2">
          <img
            src={boclimaLoader}
            alt="BoClima"
            className="w-[200px] h-[200px] object-contain animate-pulse"
          />
        </div>

        <p
          className={`text-2xl font-semibold ${
            darkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Cargando el clima...
        </p>

        <p
          className={`mt-2 ${
            darkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Estamos mirando cómo viene el cielo ☁️
        </p>

      </div>
    </main>
  )
}
  return (
    <>
    <div className="relative z-10">
  <Navbar
    city={city}
    onSearch={handleSearch}
    onCurrentLocation={handleCurrentLocation}
    darkMode={darkMode}
    onToggleDarkMode={() => setDarkMode(!darkMode)}
  />
</div>

<WeatherBackground
  weatherCode={weather.current.weather_code}
  darkMode={darkMode}
/>

<main className="relative z-10 min-h-screen transition-colors duration-300">
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
          feelsLike={weather.current.apparent_temperature}
          minTemperature={weather.daily.temperature_2m_min[0]}
          maxTemperature={weather.daily.temperature_2m_max[0]}
          condition={getWeatherDescription(weather.current.weather_code)}
          icon={getWeatherIcon(weather.current.weather_code)}
          isCurrentLocation={isCurrentLocation}
          darkMode={darkMode}
        />

        <WeatherDetails
        humidity={weather.current.relative_humidity_2m}
        wind={weather.current.wind_speed_10m}
        darkMode={darkMode}
        />


        </div>

        <div className="h-full">
        <FunnyMessage message={getWeatherAdvice(
          weather.current.temperature_2m,
          weather.current.weather_code,
          weather.current.wind_speed_10m
        )}
        darkMode={darkMode}
        />
        </div>

       </div>

        <HourlyForecast
          hourly={{
            time: weather.hourly.time,
            temperature: weather.hourly.temperature_2m,
            weatherCode: weather.hourly.weather_code,
            precipitationProbability:
              weather.hourly.precipitation_probability,
          }}
          darkMode={darkMode}
          isNight={isNight}
        />

       <Forecast
        daily={{
          time: weather.daily.time,
          temperatureMax: weather.daily.temperature_2m_max,
          temperatureMin: weather.daily.temperature_2m_min,
          weatherCode: weather.daily.weather_code,
        }}
        darkMode={darkMode}
        isNight={isNight}
        />

      </div>
    </main>
     </>
  )
}

export default App