type WeatherDetailsProps = {
  humidity: number
  wind: number
}

function WeatherDetails({ humidity, wind }: WeatherDetailsProps) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 mt-6 grid grid-cols-2 gap-4">
      <div className="text-center">
        <p className="text-3xl">💧</p>
        <p className="text-gray-500 mt-2">Humedad</p>
        <p className="text-xl font-bold text-gray-800">
          {humidity}%
        </p>
      </div>

      <div className="text-center">
        <p className="text-3xl">🌬️</p>
        <p className="text-gray-500 mt-2">Viento</p>
        <p className="text-xl font-bold text-gray-800">
          {wind}km/h
        </p>
      </div>
    </section>
  )
}

export default WeatherDetails