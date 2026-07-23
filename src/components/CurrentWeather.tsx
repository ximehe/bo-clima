type CurrentWeatherProps = {
  city: string
  temperature: number
  condition: string
}

function CurrentWeather({
  city,
  temperature,
  condition,
}: CurrentWeatherProps) {

  return (
    <section className="bg-white rounded-2xl shadow-md p-6 text-center">

      <h2 className="text-2xl font-semibold text-gray-800">
        {city}
      </h2>

      <p className="text-6xl my-4">
        🌤️
      </p>

      <h1 className="text-5xl font-bold text-gray-900">
        {temperature}°
      </h1>

      <p className="text-gray-500 mt-2">
        {condition}
      </p>

    </section>
  )
}

export default CurrentWeather