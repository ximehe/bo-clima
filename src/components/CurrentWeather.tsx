type CurrentWeatherProps = {
  city: string
  temperature: number
  condition: string
  icon: string
}

function CurrentWeather({
  city,
  temperature,
  condition,
  icon,
}: CurrentWeatherProps) {

  return (
    <section className="bg-white rounded-3xl shadow-sm p-8 text-center border border-sky-100">

      <h2 className="text-2xl font-semibold text-slate-700">
        {city}
      </h2>

      <p className="text-7xl my-6">
        {icon}
      </p>

      <p className="text-6xl font-bold text-slate-900">
        {Math.round(temperature)}°
      </p>

      <p className="text-lg text-slate-500 mt-2">
        {condition}
      </p>

    </section>
  )
}

export default CurrentWeather