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

      {/* Ubicación */}
      <h2
        className={`text-2xl font-semibold ${
          darkMode ? "text-white" : "text-slate-700"
        }`}
      >
        {city}
      </h2>

      {isCurrentLocation && (
        <span
          className={`inline-flex items-center mt-2 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
            darkMode
              ? "bg-sky-900/50 text-sky-300 border border-sky-800"
              : "bg-sky-50 text-sky-700 border border-sky-200"
          }`}
        >
          📍 Ubicación actual
        </span>
      )}

      {/* Icono del clima */}
      <p className="text-7xl my-5">
        {icon}
      </p>

      {/* Temperatura */}
      <p
        className={`text-6xl font-bold ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {Math.round(temperature)}°
      </p>

      {/* Condición */}
      <p
        className={`text-lg mt-2 ${
          darkMode ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {condition}
      </p>

      {/* Detalles */}
      <div
        className={`grid grid-cols-3 mt-7 pt-5 border-t ${
          darkMode
            ? "border-slate-700"
            : "border-slate-100"
        }`}
      >

        {/* Sensación */}
        <div
          className={`px-2 ${
            darkMode ? "border-slate-700" : "border-slate-100"
          } border-r`}
        >
          <p
            className={`text-xs font-medium ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Sensación
          </p>

          <p
            className={`text-xl font-semibold mt-1 ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            {Math.round(feelsLike)}°
          </p>
        </div>

        {/* Mínima */}
        <div
          className={`px-2 ${
            darkMode ? "border-slate-700" : "border-slate-100"
          } border-r`}
        >
          <p
            className={`text-xs font-medium ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Mínima
          </p>

          <p
            className={`text-xl font-semibold mt-1 ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            {Math.round(minTemperature)}°
          </p>
        </div>

        {/* Máxima */}
        <div className="px-2">
          <p
            className={`text-xs font-medium ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Máxima
          </p>

          <p
            className={`text-xl font-semibold mt-1 ${
              darkMode ? "text-white" : "text-slate-800"
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