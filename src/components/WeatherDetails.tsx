type WeatherDetailsProps = {
  humidity: number
  wind: number
  darkMode: boolean
}

function WeatherDetails({ humidity, wind, darkMode }: WeatherDetailsProps) {
  return (
    <section
    className={`rounded-3xl shadow-sm border p-6 grid grid-cols-2 gap-6 transition-colors duration-300 ${
    darkMode
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-sky-100"
     }`}
    >
      <div className="text-center">
        <p className="text-4xl">💧</p>
        <p className="text-slate-500 mt-2">Humedad</p>
        <p 
        className={`text-2xl font-bold ${
        darkMode ? "text-slate-300" : "text-slate-500"
         }`}>
          {humidity}%
        </p>
      </div>

      <div className="text-center">
        <p className="text-4xl">🌬️</p>
        <p className="text-slate-500 mt-2">Viento</p>
        <p 
         className={`text-2xl font-bold ${
         darkMode ? "text-white" : "text-slate-800"
         }`}
        >
          {Math.round(wind)}km/h
        </p>
      </div>
    </section>
  )
}

export default WeatherDetails