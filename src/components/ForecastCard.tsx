type ForecastCardProps = {
  day: string
  icon: string
  max: number
  min: number
  darkMode: boolean
}

function ForecastCard({ day, icon, max, min, darkMode }: ForecastCardProps) {
  return (
    <article 
    className={`rounded-3xl border shadow-sm p-4 text-center transition-colors duration-300 ${
    darkMode
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-sky-100"
    }`}
    >
      <h3 
      className={`font-semibold ${
        darkMode ? "text-slate-200" : "text-gray-700"
      }`}
      >
        {day}
      </h3>

      <p className="text-4xl my-3">
        {icon}
      </p>

      <div className="flex justify-center gap-2">

        <p 
        className={`text-xl font-bold ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
        >
            {Math.round(max)}°
        </p>

        <p 
        className={`${
          darkMode ? "text-slate-400" : "text-gray-400"
        }`}
        >
            {Math.round(min)}°
        </p>
        
        </div>

    </article>
  )
}

export default ForecastCard