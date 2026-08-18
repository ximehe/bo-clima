import boclimaLoader from "../assets/boclima-logo-loader.png"

type WeatherLoaderProps = {
  darkMode: boolean
  isNight: boolean
}

function WeatherLoader({ darkMode, isNight }: WeatherLoaderProps) {
  return (
    <main
      className={`relative min-h-screen overflow-hidden flex items-center justify-center px-6 transition-colors duration-700 ${
        isNight
          ? "bg-gradient-to-b from-[#0F172A] via-[#172554] to-[#1E3A5F]"
          : "bg-gradient-to-b from-[#7DD3FC] via-[#BAE6FD] to-[#E0F2FE]"
      }`}
    >

      {/* ☀️ Sol */}
      {!isNight && (
        <div className="absolute top-[7%] right-[8%] w-52 h-52 opacity-90">
          <svg
            viewBox="0 0 160 160"
            className="w-full h-full animate-pulse"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="sunGradient">
                <stop offset="0%" stopColor="#FFF7D6" />
                <stop offset="45%" stopColor="#FDE68A" />
                <stop offset="75%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="#F59E0B" />
              </radialGradient>

              <filter id="sunGlow">
                <feGaussianBlur stdDeviation="8" />
              </filter>
            </defs>

            {/* Halo */}
            <circle
              cx="80"
              cy="80"
              r="55"
              fill="#FDE68A"
              opacity="0.35"
              filter="url(#sunGlow)"
            />

            {/* Rayos */}
            <g
              stroke="#FCD34D"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            >
              <path d="M80 8v20" />
              <path d="M80 132v20" />
              <path d="M8 80h20" />
              <path d="M132 80h20" />

              <path d="m29 29 14 14" />
              <path d="m117 117 14 14" />

              <path d="m131 29-14 14" />
              <path d="m43 117-14 14" />
            </g>

            {/* Sol */}
            <circle
              cx="80"
              cy="80"
              r="38"
              fill="url(#sunGradient)"
            />
          </svg>
        </div>
      )}

      {/* 🌙 Luna */}
      {isNight && (
        <div
          className="
            absolute
            top-[9%]
            right-[10%]
            w-28
            h-28
            rounded-full
            bg-yellow-100
            shadow-[0_0_50px_rgba(254,249,195,0.5)]
          "
        >
          <div
            className="
              absolute
              -top-2
              -right-2
              w-28
              h-28
              rounded-full
              bg-[#172554]
            "
          />
        </div>
      )}

      {/* ☁️ Nube superior */}
      <div
        className={`absolute top-[21%] left-[7%] ${
          isNight ? "text-slate-700/70" : "text-white/75"
        }`}
      >
        <svg
          viewBox="0 0 180 80"
          className="w-48 h-auto"
          aria-hidden="true"
        >
          <path
            d="
              M35 62
              C18 62 10 52 10 40
              C10 27 20 18 34 18
              C39 7 50 2 62 5
              C73 7 81 15 83 25
              C88 21 95 19 103 19
              C119 19 132 30 134 45
              C151 45 164 52 164 63
              C164 72 155 77 143 77
              H35
              Z
            "
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ☁️ Nube inferior */}
      <div
        className={`absolute bottom-[15%] right-[5%] ${
          isNight ? "text-slate-700/60" : "text-white/60"
        }`}
      >
        <svg
          viewBox="0 0 180 80"
          className="w-40 h-auto"
          aria-hidden="true"
        >
          <path
            d="
              M35 62
              C18 62 10 52 10 40
              C10 27 20 18 34 18
              C39 7 50 2 62 5
              C73 7 81 15 83 25
              C88 21 95 19 103 19
              C119 19 132 30 134 45
              C151 45 164 52 164 63
              C164 72 155 77 143 77
              H35
              Z
            "
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ✨ Estrellas */}
      {isNight && (
        <>
          <span className="absolute top-[18%] left-[25%] text-white text-sm animate-pulse">
            ✦
          </span>

          <span
            className="absolute top-[32%] left-[12%] text-sky-100 text-xs animate-pulse"
            style={{ animationDelay: "500ms" }}
          >
            ✦
          </span>

          <span
            className="absolute top-[15%] right-[35%] text-white text-xs animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            ✦
          </span>

          <span
            className="absolute top-[38%] right-[22%] text-sky-100 text-sm animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            ✦
          </span>

          <span
            className="absolute bottom-[25%] left-[18%] text-white text-xs animate-pulse"
            style={{ animationDelay: "700ms" }}
          >
            ✦
          </span>

          <span
            className="absolute top-[10%] left-[45%] text-white/80 text-xs animate-pulse"
            style={{ animationDelay: "1.8s" }}
          >
            ✦
          </span>
        </>
      )}

      {/* 🌤️ Loader */}
      <div className="relative z-10 flex flex-col items-center text-center">

        <div className="relative mb-6">
          <div
            className={`absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse ${
              isNight ? "bg-sky-300" : "bg-sky-400"
            }`}
          />

          <img
            src={boclimaLoader}
            alt="BoClima"
            className="relative w-[180px] h-[180px] object-contain"
          />
        </div>

        <p
          className={`text-2xl font-semibold ${
            isNight || darkMode
              ? "text-white"
              : "text-slate-800"
          }`}
        >
          Consultando el cielo...
        </p>

        <div className="flex gap-1.5 mt-4">
          <span
            className={`w-2 h-2 rounded-full animate-bounce ${
              isNight ? "bg-sky-300" : "bg-sky-500"
            }`}
          />

          <span
            className={`w-2 h-2 rounded-full animate-bounce ${
              isNight ? "bg-sky-300" : "bg-sky-500"
            }`}
            style={{ animationDelay: "150ms" }}
          />

          <span
            className={`w-2 h-2 rounded-full animate-bounce ${
              isNight ? "bg-sky-300" : "bg-sky-500"
            }`}
            style={{ animationDelay: "300ms" }}
          />
        </div>

        <p
          className={`mt-4 text-sm ${
            isNight || darkMode
              ? "text-slate-300"
              : "text-slate-500"
          }`}
        >
          Estamos viendo cómo viene el tiempo ☁️
        </p>

      </div>
    </main>
  )
}

export default WeatherLoader