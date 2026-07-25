type WeatherDetailsProps = {
  humidity: number
  wind: number
}

function WeatherDetails({ humidity, wind }: WeatherDetailsProps) {
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-sky-100 p-6 grid grid-cols-2 gap-6">
      <div className="text-center">
        <p className="text-4xl">💧</p>
        <p className="text-slate-500 mt-2">Humedad</p>
        <p className="text-2xl font-bold text-slate-800">
          {humidity}%
        </p>
      </div>

      <div className="text-center">
        <p className="text-4xl">🌬️</p>
        <p className="text-slate-500 mt-2">Viento</p>
        <p className="text-2xl font-bold text-slate-800">
          {Math.round(wind)}km/h
        </p>
      </div>
    </section>
  )
}

export default WeatherDetails