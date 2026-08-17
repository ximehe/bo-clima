type CurrentWeatherProps = {
  city: string
  temperature: number
  feelsLike: number
  minTemperature: number
  maxTemperature: number
  condition: string
  icon: string
  isCurrentLocation: boolean
  darkMode: boolean
}

function CurrentWeather({
  city,
  temperature,
  feelsLike,
  minTemperature,
  maxTemperature,
  condition,
  icon,
  isCurrentLocation,
  darkMode
}: CurrentWeatherProps) {

  return (
    <section 
    className={`rounded-3xl shadow-md p-8 text-center border transition-colors duration-300 ${
    darkMode
      ? "bg-slate-800 border-slate-700"
      : "bg-white border-sky-200"
    }`}
    >

      <h2 
      className={`text-2xl font-semibold ${
      darkMode ? "text-white" : "text-slate-700"
      }`}
      >
        {city}
      </h2>

      {isCurrentLocation && (
      <p className="text-sm text-slate-400 mt-1">
        📍 Mi ubicación
      </p>
       )}

      {/* {isCurrentLocation && (
        <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded-full">
          📍 Mi ubicación
        </span>
      )} */}


      <p className="text-7xl my-6">
        {icon}
      </p>

      <p 
        className={`text-6xl font-bold ${
        darkMode ? "text-white" : "text-slate-900"
        }`}      
      >
        {Math.round(temperature)}°
      </p>

      <p 
        className={`text-lg mt-2 ${
        darkMode ? "text-slate-300" : "text-slate-500"
       }`}
      >
        {condition}
      </p>

      <p
        className={`text-sm mt-3 ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Sensación térmica {Math.round(feelsLike)}°
      </p>

      <div className="flex justify-center gap-8 mt-5">
        <div>
          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            ↓ Mínima
          </p>

          <p
            className={`text-lg font-semibold ${
              darkMode ? "text-white" : "text-slate-700"
            }`}
          >
            {Math.round(minTemperature)}°
          </p>
        </div>

        <div>
          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            ↑ Máxima
          </p>

          <p
            className={`text-lg font-semibold ${
              darkMode ? "text-white" : "text-slate-700"
            }`}
          >
            {Math.round(maxTemperature)}°
          </p>
        </div>
      </div>

    </section>
  )
}

export default CurrentWeather