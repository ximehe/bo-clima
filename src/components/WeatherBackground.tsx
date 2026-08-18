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
        absolute
        top-12
        left-[-15%]
        md:top-16
        md:left-[5%]
        animate-[cloudDrift_30s_linear_infinite]
      "
    />

    {/* Arriba derecha */}
    <Cloud
      darkMode={darkMode}
      size="small"
      className="
        absolute
        top-32
        right-[-12%]
        md:top-24
        md:right-[5%]
        animate-[cloudDriftReverse_40s_linear_infinite]
      "
    />

    {/* Centro */}
    <Cloud
      darkMode={darkMode}
      size="small"
      className="
        absolute
        top-[38%]
        left-[5%]
        md:top-[35%]
        md:left-[40%]
        opacity-70
        animate-[cloudDrift_45s_linear_infinite]
      "
    />

    {/* Abajo izquierda */}
    <Cloud
      darkMode={darkMode}
      size="small"
      className="
        absolute
        top-[62%]
        left-[-15%]
        md:top-[55%]
        md:left-[15%]
        opacity-60
        animate-[cloudDriftReverse_50s_linear_infinite]
      "
    />

    {/* Abajo derecha */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        absolute
        top-[70%]
        right-[-15%]
        md:top-[60%]
        md:right-[10%]
        opacity-50
        animate-[cloudDrift_55s_linear_infinite]
      "
    />
  </>
)}

    {weatherType === "cloudy" && (
  <>
    {/* Cielo cubierto */}
    <div
      className={`absolute inset-0 ${
        darkMode
          ? "bg-slate-900/35"
          : "bg-slate-400/25"
      }`}
    />

    {/* Capa de nubosidad difusa superior */}
    <div
      className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl ${
        darkMode
          ? "bg-slate-300/10"
          : "bg-slate-500/20"
      } animate-[pulse_12s_ease-in-out_infinite]`}
    />

    {/* Nube grande - izquierda */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-12
        left-[-5%]
        opacity-90
        animate-[cloudDrift_55s_ease-in-out_infinite]
      "
    />

    {/* Nube grande - derecha */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-20
        right-[-5%]
        opacity-85
        animate-[cloudDriftReverse_60s_ease-in-out_infinite]
      "
    />

    {/* Nube central */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-[30%]
        left-[32%]
        opacity-75
        animate-[cloudDrift_65s_ease-in-out_infinite]
      "
    />

    {/* Nube abajo izquierda */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-[55%]
        left-[-3%]
        opacity-70
        animate-[cloudDriftReverse_70s_ease-in-out_infinite]
      "
    />

    {/* Nube abajo derecha */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-[60%]
        right-[-3%]
        opacity-65
        animate-[cloudDrift_75s_ease-in-out_infinite]
      "
    />
  </>
)}

     {weatherType === "fog" && (
  <>
    {/* Capa general de niebla */}
    <div
      className={`absolute inset-0 ${
        darkMode
          ? "bg-slate-300/10"
          : "bg-slate-200/35"
      }`}
    />

    {/* Primera capa */}
    <div
      className={`absolute top-[20%] -left-[15%] w-[130%] h-32 rounded-full blur-3xl ${
        darkMode
          ? "bg-slate-200/15"
          : "bg-white/40"
      } animate-[fogDrift_18s_ease-in-out_infinite]`}
    />

    {/* Segunda capa */}
    <div
      className={`absolute top-[40%] -right-[15%] w-[130%] h-40 rounded-full blur-3xl ${
        darkMode
          ? "bg-slate-100/10"
          : "bg-white/35"
      } animate-[fogDriftReverse_24s_ease-in-out_infinite]`}
    />

    {/* Tercera capa */}
    <div
      className={`absolute top-[65%] -left-[20%] w-[140%] h-36 rounded-full blur-3xl ${
        darkMode
          ? "bg-slate-200/10"
          : "bg-white/30"
      } animate-[fogDrift_30s_ease-in-out_infinite]`}
    />
  </>
)}
     {weatherType === "rain" && (
  <>
    <div
      className={`absolute inset-0 ${
        darkMode
          ? "bg-slate-900/25"
          : "bg-slate-500/15"
      }`}
    />

    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <span className="rain-drop left-[5%] delay-0" />
      <span className="rain-drop left-[12%] delay-1" />
      <span className="rain-drop left-[19%] delay-2" />
      <span className="rain-drop left-[26%] delay-3" />
      <span className="rain-drop left-[33%] delay-4" />
      <span className="rain-drop left-[40%] delay-5" />
      <span className="rain-drop left-[47%] delay-6" />
      <span className="rain-drop left-[54%] delay-7" />
      <span className="rain-drop left-[61%] delay-8" />
      <span className="rain-drop left-[68%] delay-9" />
      <span className="rain-drop left-[75%] delay-10" />
      <span className="rain-drop left-[82%] delay-11" />
      <span className="rain-drop left-[89%] delay-12" />
      <span className="rain-drop left-[96%] delay-13" />

      <span className="rain-drop rain-drop-small left-[8%] delay-7" />
      <span className="rain-drop rain-drop-small left-[22%] delay-3" />
      <span className="rain-drop rain-drop-small left-[37%] delay-11" />
      <span className="rain-drop rain-drop-small left-[52%] delay-5" />
      <span className="rain-drop rain-drop-small left-[67%] delay-9" />
      <span className="rain-drop rain-drop-small left-[78%] delay-2" />
      <span className="rain-drop rain-drop-small left-[93%] delay-6" />

    </div>

        {/* Nubosidad */}
    <Cloud
    darkMode={darkMode}
    size="large"
    className="
        top-10
        left-[-5%]
        opacity-60
        animate-[cloudDrift_60s_ease-in-out_infinite]
    "
    />

    <Cloud
    darkMode={darkMode}
    size="large"
    className="
        top-20
        right-[-5%]
        opacity-55
        animate-[cloudDriftReverse_70s_ease-in-out_infinite]
    "
    />

    <Cloud
    darkMode={darkMode}
    size="small"
    className="
        top-[30%]
        left-[45%]
        opacity-40
        animate-[cloudDrift_80s_ease-in-out_infinite]
    "
    />
  </>
)}

     {weatherType === "snow" && (
  <>
    {/* Cielo frío */}
    <div
      className={`absolute inset-0 ${
        darkMode
          ? "bg-slate-800/30"
          : "bg-slate-300/20"
      }`}
    />

    {/* Nubosidad suave */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-10
        left-[-5%]
        opacity-55
        animate-[cloudDrift_70s_ease-in-out_infinite]
      "
    />

    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-20
        right-[-5%]
        opacity-50
        animate-[cloudDriftReverse_80s_ease-in-out_infinite]
      "
    />

    {/* Nieve */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <span className="snowflake snow-1">•</span>
      <span className="snowflake snow-2">•</span>
      <span className="snowflake snow-3">•</span>
      <span className="snowflake snow-4">•</span>
      <span className="snowflake snow-5">•</span>
      <span className="snowflake snow-6">•</span>
      <span className="snowflake snow-7">•</span>
      <span className="snowflake snow-8">•</span>
      <span className="snowflake snow-9">•</span>
      <span className="snowflake snow-10">•</span>
      <span className="snowflake snow-11">•</span>
      <span className="snowflake snow-12">•</span>

    </div>
  </>
)}

     {weatherType === "storm" && (
  <>
    {/* Cielo oscuro de tormenta */}
    <div
      className={`absolute inset-0 ${
        darkMode
          ? "bg-slate-950/45"
          : "bg-slate-700/30"
      }`}
    />

    {/* Capa profunda de nubes */}
    <div
      className={`absolute inset-0 ${
        darkMode
          ? "bg-slate-900/20"
          : "bg-slate-600/15"
      }`}
    />

    {/* Nube grande - izquierda */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-8
        left-[-8%]
        opacity-90
        animate-[cloudDrift_70s_ease-in-out_infinite]
      "
    />

    {/* Nube grande - derecha */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-16
        right-[-8%]
        opacity-90
        animate-[cloudDriftReverse_75s_ease-in-out_infinite]
      "
    />

    {/* Nube central */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-[25%]
        left-[35%]
        opacity-80
        animate-[cloudDrift_85s_ease-in-out_infinite]
      "
    />

    {/* Nube inferior izquierda */}
    <Cloud
      darkMode={darkMode}
      size="large"
      className="
        top-[55%]
        left-[-5%]
        opacity-70
        animate-[cloudDriftReverse_90s_ease-in-out_infinite]
      "
    />

        {/* Lluvia intensa */}
   <span className="storm-drop left-[5%] delay-0" />
<span className="storm-drop left-[9%] delay-6" />

<span className="storm-drop left-[17%] delay-2" />
<span className="storm-drop left-[22%] delay-9" />

<span className="storm-drop left-[30%] delay-4" />
<span className="storm-drop left-[36%] delay-1" />

<span className="storm-drop left-[44%] delay-7" />
<span className="storm-drop left-[50%] delay-3" />

<span className="storm-drop left-[58%] delay-10" />
<span className="storm-drop left-[64%] delay-5" />

<span className="storm-drop left-[72%] delay-8" />
<span className="storm-drop left-[78%] delay-11" />

<span className="storm-drop left-[86%] delay-12" />
<span className="storm-drop left-[93%] delay-13" />

      {/* Relámpago */}
        <div className="absolute inset-0 pointer-events-none">
        <div className="lightning-bolt lightning-one" />
        <div className="lightning-bolt lightning-two" />
        </div>

    {/* Relámpago */}
    <div
      className="
        absolute
        inset-0
        bg-white/20
        opacity-0
        animate-[lightningFlash_8s_ease-in-out_infinite]
        pointer-events-none
      "
    />
  </>
)}
    </div>
  )
}

export default WeatherBackground