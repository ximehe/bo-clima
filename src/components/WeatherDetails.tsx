type WeatherDetailsProps = {
  humidity: number
  wind: number
  darkMode: boolean
}

function WeatherDetails({ humidity, wind, darkMode }: WeatherDetailsProps) {
  return (
    <section
    className={`rounded-3xl shadow-md border p-6 grid grid-cols-2 gap-6 transition-colors duration-300 ${
    darkMode
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-sky-200"
     }`}
    >
      <div className="text-center">
        <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-9 h-9 text-sky-500"
          aria-hidden="true"
        >
          <path d="M12 3s-6 6.5-6 11a6 6 0 0 0 12 0c0-4.5-6-11-6-11Z" />
        </svg>
      </div>
        <p className="text-slate-500 mt-2">Humedad</p>
        <p 
        className={`text-2xl font-bold ${
          darkMode ? "text-white" : "text-slate-800"
        }`}>
          {humidity}%
        </p>
      </div>

      <div className="text-center">
        <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="w-9 h-9 text-sky-500"
          aria-hidden="true"
        >
          <path d="M3 8h11a3 3 0 1 0-3-3" />
          <path d="M3 12h15a3 3 0 1 1-3 3" />
          <path d="M3 16h8" />
        </svg>
      </div>
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