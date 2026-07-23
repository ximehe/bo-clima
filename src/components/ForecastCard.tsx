type ForecastCardProps = {
  day: string
  icon: string
  max: number
  min: number
}

function ForecastCard({ day, icon, max, min }: ForecastCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-4 text-center">
      <h3 className="font-semibold text-gray-700">
        {day}
      </h3>

      <p className="text-4xl my-3">
        {icon}
      </p>

      <div className="flex justify-center gap-2">

        <p className="text-xl font-bold text-gray-800">
            {max}°
        </p>

        <p className="text-gray-400">
            {min}°
        </p>
        
        </div>

    </article>
  )
}

export default ForecastCard