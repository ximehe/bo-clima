import Cloud from "./Cloud"

type WeatherBackgroundProps = {
  weatherCode: number
  darkMode: boolean
}

function WeatherBackground({
  weatherCode,
  darkMode,
}: WeatherBackgroundProps) {
  const params = new URLSearchParams(window.location.search)

  const testWeather = params.get("weather")
  const testTime = params.get("time")

  const hour = new Date().getHours()

  const isNight =
    testTime === "night"
      ? true
      : testTime === "day"
        ? false
        : hour >= 20 || hour < 6

  function getWeatherType() {
    if (weatherCode === 0) {
      return "clear"
    }

    if (weatherCode === 1 || weatherCode === 2) {
      return "partly-cloudy"
    }

    if (weatherCode === 3) {
      return "cloudy"
    }

    if (weatherCode === 45 || weatherCode === 48) {
      return "fog"
    }

    if (weatherCode >= 51 && weatherCode <= 67) {
      return "rain"
    }

    if (weatherCode >= 71 && weatherCode <= 77) {
      return "snow"
    }

    if (weatherCode >= 80 && weatherCode <= 82) {
      return "rain"
    }

    if (weatherCode >= 85 && weatherCode <= 86) {
      return "snow"
    }

    if (weatherCode >= 95 && weatherCode <= 99) {
      return "storm"
    }

    return "clear"
  }

  const weatherType = testWeather || getWeatherType()

  return (
    <div
      className={`fixed inset-0 z-0 overflow-hidden transition-colors duration-1000 ${
        darkMode ? "bg-[#0F172A]" : "bg-[#E0F2FE]"
      }`}
    >
      {isNight && (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 transition-opacity duration-1000" />

            <div className="absolute inset-0 overflow-hidden">
            <span className="absolute top-[12%] left-[15%] w-1 h-1 rounded-full bg-white/70 animate-[starTwinkle_4s_ease-in-out_infinite]" />
            <span className="absolute top-[20%] left-[35%] w-1 h-1 rounded-full bg-white/50 animate-[starTwinkle_6s_ease-in-out_infinite]" />
            <span className="absolute top-[15%] left-[65%] w-1 h-1 rounded-full bg-white/60 animate-[starTwinkle_5s_ease-in-out_infinite]" />
            <span className="absolute top-[28%] left-[82%] w-1 h-1 rounded-full bg-white/50 animate-[starTwinkle_7s_ease-in-out_infinite]" />
            <span className="absolute top-[38%] left-[25%] w-1 h-1 rounded-full bg-white/40 animate-[starTwinkle_5s_ease-in-out_infinite]" />
            <span className="absolute top-[32%] left-[52%] w-1 h-1 rounded-full bg-white/60 animate-[starTwinkle_8s_ease-in-out_infinite]" />
            <span className="absolute top-[45%] left-[72%] w-1 h-1 rounded-full bg-white/50 animate-[starTwinkle_6s_ease-in-out_infinite]" />
            <span className="absolute top-[55%] left-[10%] w-1 h-1 rounded-full bg-white/40 animate-[starTwinkle_7s_ease-in-out_infinite]" />
            <span className="absolute top-[60%] left-[88%] w-1 h-1 rounded-full bg-white/50 animate-[starTwinkle_5s_ease-in-out_infinite]" />
            <span className="absolute top-[72%] left-[42%] w-1 h-1 rounded-full bg-white/40 animate-[starTwinkle_8s_ease-in-out_infinite]" />
            </div>
        </>
        )}

      {weatherType === "clear" && !isNight && (
        <>
          <div
            className="
              absolute
              -top-40
              -right-40
              w-[500px]
              h-[500px]
              rounded-full
              bg-yellow-300/40
              blur-3xl
              animate-[sunGlow_12s_ease-in-out_infinite]
            "
          />

          <div
            className="
              absolute
              -top-20
              -right-20
              w-[300px]
              h-[300px]
              rounded-full
              bg-yellow-100/20
              blur-3xl
              animate-[sunGlow_18s_ease-in-out_infinite_reverse]
            "
          />
        </>
      )}

       {weatherType === "partly-cloudy" && !isNight && (
        <>
            {/* Arriba izquierda */}
            <Cloud
            darkMode={darkMode}
            size="large"
            className="
                top-16
                left-[5%]
                animate-[cloudDrift_30s_ease-in-out_infinite]
            "
            />

            {/* Arriba derecha */}
            <Cloud
            darkMode={darkMode}
            size="small"
            className="
                top-24
                right-[5%]
                animate-[cloudDriftReverse_40s_ease-in-out_infinite]
            "
            />

            {/* Centro */}
            <Cloud
            darkMode={darkMode}
            size="small"
            className="
                top-[35%]
                left-[40%]
                opacity-70
                animate-[cloudDrift_45s_ease-in-out_infinite]
            "
            />

            {/* Abajo izquierda */}
            <Cloud
            darkMode={darkMode}
            size="small"
            className="
                top-[55%]
                left-[15%]
                opacity-60
                animate-[cloudDriftReverse_50s_ease-in-out_infinite]
            "
            />

            {/* Abajo derecha */}
            <Cloud
            darkMode={darkMode}
            size="large"
            className="
                top-[60%]
                right-[10%]
                opacity-50
                animate-[cloudDrift_55s_ease-in-out_infinite]
            "
            />
        </>
        )}

      {weatherType === "cloudy" && (
        <>
          <div className="absolute top-20 -left-40 w-[500px] h-40 rounded-full bg-white/15 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />

          <div className="absolute top-48 -right-40 w-[600px] h-48 rounded-full bg-white/10 blur-3xl animate-[pulse_10s_ease-in-out_infinite]" />
        </>
      )}

      {weatherType === "fog" && (
        <>
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

          <div className="absolute top-1/3 -left-40 w-[600px] h-40 rounded-full bg-white/20 blur-3xl animate-[pulse_8s_ease-in-out_infinite]" />
        </>
      )}

      {weatherType === "rain" && (
        <div className="absolute inset-0 bg-slate-500/10" />
      )}

      {weatherType === "snow" && (
        <div className="absolute inset-0 bg-white/10" />
      )}

      {weatherType === "storm" && (
        <div className="absolute inset-0 bg-slate-900/20" />
      )}
    </div>
  )
}

export default WeatherBackground