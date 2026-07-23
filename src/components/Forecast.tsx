import { weatherData } from "../data/mockWeather"
import ForecastCard from "./ForecastCard"


function Forecast() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Pronóstico semanal
      </h2>

       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
        {weatherData.forecast.map((day) => (
          <ForecastCard
            key={day.day}
            day={day.day}
            icon={day.icon}
            max={day.max}
            min={day.min}
          />
        ))}
      </div>

    </section>
  )
}

export default Forecast