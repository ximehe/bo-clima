import ForecastCard from "./ForecastCard"
import { getWeatherIcon } from "../utils/weatherCode"
import { formatDay } from "../utils/date"

type ForecastProps = {
  daily: {
    time: string[]
    temperatureMax: number[]
    temperatureMin: number[]
    weatherCode: number[]
  }
}

function Forecast({ daily }: ForecastProps) {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        Pronóstico semanal
      </h2>

       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {daily.time.map((date, index) => (
        <ForecastCard
            key={date}
            day={formatDay(date)}
            icon={getWeatherIcon(daily.weatherCode[index])}
            max={daily.temperatureMax[index]}
            min={daily.temperatureMin[index]}
        />
        ))}
      </div>

    </section>
  )
}

export default Forecast