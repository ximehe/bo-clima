type HourlyForecastCardProps = {
  hour: string
  icon: string
  temperature: number
  precipitationProbability: number
  darkMode: boolean
}

function HourlyForecastCard({
  hour,
  icon,
  temperature,
  precipitationProbability,
  darkMode,
}: HourlyForecastCardProps) {
  return (
    <article
      className={`min-w-[110px] rounded-3xl border shadow-md p-4 text-center transition-colors duration-300 ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-sky-200"
      }`}
    >
      <p
        className={`text-sm font-semibold ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {hour}
      </p>

      <p className="text-3xl my-3">
        {icon}
      </p>

      <p
        className={`text-xl font-bold ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
      >
        {Math.round(temperature)}°
      </p>

      <p
        className={`text-xs mt-2 ${
          darkMode ? "text-sky-300" : "text-sky-600"
        }`}
      >
        💧 {precipitationProbability}%
      </p>
    </article>
  )
}

export default HourlyForecastCard