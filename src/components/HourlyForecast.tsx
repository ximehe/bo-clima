import { useEffect, useRef, useState } from "react"
import HourlyForecastCard from "./HourlyForecastCard"
import { getWeatherIcon } from "../utils/weatherCode"
import { formatHour } from "../utils/date"

type HourlyForecastProps = {
  hourly: {
    time: string[]
    temperature: number[]
    weatherCode: number[]
    precipitationProbability: number[]
  }
  darkMode: boolean
  isNight: boolean
}

function HourlyForecast({ hourly, darkMode, isNight }: HourlyForecastProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const currentHour = new Date()
  currentHour.setMinutes(0, 0, 0)

  const currentHourIndex = hourly.time.findIndex((time) => {
    const hour = new Date(time)
    hour.setMinutes(0, 0, 0)

    return hour.getTime() === currentHour.getTime()
  })

  const startIndex = currentHourIndex >= 0 ? currentHourIndex : 0

  const next24Hours = hourly.time
    .slice(startIndex, startIndex + 24)
    .map((time, index) => {
      const realIndex = startIndex + index

      return {
        time,
        temperature: hourly.temperature[realIndex],
        weatherCode: hourly.weatherCode[realIndex],
        precipitationProbability:
          hourly.precipitationProbability[realIndex],
      }
    })

  function updateScrollButtons() {
    const container = scrollContainerRef.current

    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)

    setCanScrollRight(
      container.scrollLeft + container.clientWidth <
        container.scrollWidth - 1
    )
  }

  useEffect(() => {
    updateScrollButtons()

    const container = scrollContainerRef.current

    if (!container) return

    container.addEventListener("scroll", updateScrollButtons)
    window.addEventListener("resize", updateScrollButtons)

    return () => {
      container.removeEventListener("scroll", updateScrollButtons)
      window.removeEventListener("resize", updateScrollButtons)
    }
  }, [next24Hours.length])

  function scrollLeft() {
    scrollContainerRef.current?.scrollBy({
      left: -500,
      behavior: "smooth",
    })
  }

  function scrollRight() {
    scrollContainerRef.current?.scrollBy({
      left: 500,
      behavior: "smooth",
    })
  }

  return (
    <section className="mt-6">
     <h2
      className={`text-2xl font-bold mb-4 ${
        darkMode || isNight
          ? "text-white"
          : "text-slate-800"
      }`}
    >
      Pronóstico por hora
    </h2>

      <div className="flex items-center gap-3">
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            aria-label="Ver horas anteriores"
            className={`hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full shadow-md border transition-all duration-200 hover:scale-105 ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                : "bg-white border-sky-200 text-slate-700 hover:bg-sky-50"
            }`}
          >
            ←
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex-1 flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        >
          {next24Hours.map((hour, index) => (
            <HourlyForecastCard
              key={hour.time}
              hour={index === 0 ? "Ahora" : formatHour(hour.time)}
              icon={getWeatherIcon(hour.weatherCode)}
              temperature={hour.temperature}
              precipitationProbability={
                hour.precipitationProbability
              }
              darkMode={darkMode}
            />
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={scrollRight}
            aria-label="Ver próximas horas"
            className={`hidden md:flex shrink-0 w-10 h-10 items-center justify-center rounded-full shadow-md border transition-all duration-200 hover:scale-105 ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                : "bg-white border-sky-200 text-slate-700 hover:bg-sky-50"
            }`}
          >
            →
          </button>
        )}
      </div>
    </section>
  )
}

export default HourlyForecast