import { useEffect, useState } from "react"
import CurrentWeather from "./components/CurrentWeather"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import FunnyMessage from "./components/FunnyMessage"
import type { WeatherResponse } from "./types/weather"
import { getWeatherDescription } from "./utils/weatherCode"
import { getWeatherIcon } from "./utils/weatherCode"
import {
  getCurrentWeather,
  getCoordinates,
  getCurrentLocation,
  getLocationName
} from "./services/weatherApi"
import Navbar from "./components/Navbar"
import { getWeatherAdvice } from "./utils/weatherAdvice"
import HourlyForecast from "./components/HourlyForecast"
import WeatherBackground from "./components/WeatherBackground"
import WeatherMap from "./components/WeatherMap"
import WeatherLoader from "./components/WeatherLoader"

function App() {

  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [city, setCity] = useState("Montevideo")
  const [error, setError] = useState("")
  const [isCurrentLocation, setIsCurrentLocation] = useState(false)
  const [dailyAdvice, setDailyAdvice] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode")
    return savedDarkMode === "true"
  })

  async function handleSearch(cityName: string) {

    setIsLoading(false)

    const loadingTimer = setTimeout(() => {
      setIsLoading(true)
    }, 500)

    const coordinates = await getCoordinates(cityName)

    if (!coordinates) {
      clearTimeout(loadingTimer)
      setIsLoading(false)

      setError(
        " No encontramos esa ciudad. Probá con otro departamento o localidad de Uruguay 🇺🇾."
      )

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

    clearTimeout(loadingTimer)

    setWeather(data)
    setIsLoading(false)
  }

  async function handleCurrentLocation() {

    setIsLoading(false)

    const loadingTimer = setTimeout(() => {
      setIsLoading(true)
    }, 500)

    try {
      const position = await getCurrentLocation()

      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      const locationName = await getLocationName(latitude, longitude)

      const data = await getCurrentWeather(latitude, longitude)

      clearTimeout(loadingTimer)

      setWeather(data)
      setCity(locationName)
      setIsCurrentLocation(true)
      setError("")
      setIsLoading(false)

    } catch {
      clearTimeout(loadingTimer)
      setIsLoading(false)
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

  useEffect(() => {
    if (!weather) return

    const today = new Date().toISOString().split("T")[0]
    const adviceKey = `dailyAdvice_${city}_${today}`

    const savedAdvice = localStorage.getItem(adviceKey)

    if (savedAdvice) {
      setDailyAdvice(savedAdvice)
      return
    }

    const newAdvice = getWeatherAdvice(
      weather.current.temperature_2m,
      weather.current.weather_code,
      weather.current.wind_speed_10m
    )

    localStorage.setItem(adviceKey, newAdvice)
    setDailyAdvice(newAdvice)

  }, [weather, city])

  const hour = new Date().getHours()

  const params = new URLSearchParams(window.location.search)

  const testTime = params.get("time")

  const isNight =
    testTime === "night"
      ? true
      : testTime === "day"
        ? false
        : hour >= 20 || hour < 6

  if (isLoading || !weather) {
    return (
      <WeatherLoader
        darkMode={darkMode}
        isNight={isNight}
      />
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

      <main className="relative z-10 min-h-screen">

        <div className="max-w-6xl mx-auto px-6 py-8">

          {error && (
            <div
              className={`mb-6 flex items-center justify-center gap-3 rounded-2xl border px-5 py-3 text-sm shadow-sm transition-all duration-300 ${
                darkMode
                  ? "bg-red-950/40 border-red-900/60 text-red-300"
                  : "bg-red-50 border-red-200 text-red-600"
              }`}
            >
              <span className="text-lg">⚠️</span>
              <p>{error}</p>
            </div>
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
              <FunnyMessage
                message={dailyAdvice}
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

          <WeatherMap
            latitude={weather.latitude}
            longitude={weather.longitude}
            darkMode={darkMode}
            isNight={isNight}
          />

          <footer
            className={`mt-12 pt-8 pb-8 border-t rounded-3xl transition-colors duration-300 ${
              darkMode
                ? "bg-slate-900/80 border-slate-700 text-slate-400"
                : "bg-white/85 border-sky-200 text-slate-600"
            }`}
          >
            <div className="flex flex-col items-center text-center gap-3">

              <p
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-slate-700"
                }`}
              >
                BoClima 🇺🇾
              </p>

              <p className="text-sm">
                Página meteorológica uruguaya
              </p>

              <p className="text-sm">
                Proyecto personal para aprender, experimentar y seguir creando.
              </p>

              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Ximena Hernandez
              </p>

              <div className="flex items-center gap-4 mt-2">

                <a
                  href="https://www.linkedin.com/in/ximehernandez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Ximena Hernandez"
                  className={`p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode
                      ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                      : "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.46v6.28zM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.54 20.45H7.1V9H3.54v11.45z" />
                  </svg>
                </a>

                <a
                  href="https://ximena-hernandez-portfolio.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio de Ximena Hernandez"
                  className={`p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                    darkMode
                      ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                      : "bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.2 2.4 3.4 5.4 3.4 9s-1.2 6.6-3.4 9c-2.2-2.4-3.4-5.4-3.4-9S9.8 5.4 12 3z" />
                  </svg>
                </a>

              </div>

              <p
                className={`text-xs mt-3 ${
                  darkMode ? "text-slate-500" : "text-slate-500"
                }`}
              >
                ☁️ Código, mate y ganas de aprender.
              </p>

              <p
                className={`text-xs mt-2 ${
                  darkMode ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Datos meteorológicos proporcionados por Open-Meteo
              </p>

            </div>
          </footer>

        </div>
      </main>
    </>
  )
}

export default App