import ForecastCard from "./ForecastCard"

function Forecast() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Pronóstico semanal
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <ForecastCard
          day="Lunes"
          icon="☀️"
          max="25°"
          min="17°"
        />

        <ForecastCard
          day="Martes"
          icon="🌧️"
          max="18°"
          min="12°"
        />

        <ForecastCard
          day="Miércoles"
          icon="🌤️"
          max="22°"
          min="15°"
        />

        <ForecastCard
          day="Jueves"
          icon="🌬️"
          max="20°"
          min="14°"
        />

      </div>
    </section>
  )
}

export default Forecast