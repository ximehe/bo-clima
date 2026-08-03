import boclimaLogo from "../assets/boclima-logo-horizontal.png"
import boclimaLogo2 from "../assets/boclima-logo-horizontal2.png"

type NavbarProps = {
  city: string
  onSearch: (city: string) => void
  onCurrentLocation: () => void
  darkMode: boolean
  onToggleDarkMode: () => void
}

import SearchBar from "./SearchBar"

function Navbar({ city, onSearch, onCurrentLocation, darkMode,
  onToggleDarkMode }: NavbarProps) {
  return (
    <header
    className={`backdrop-blur-md shadow-sm border-b sticky top-0 z-10 transition-colors duration-300 ${
      darkMode
        ? "bg-slate-900/90 border-slate-700"
        : "bg-white/90 border-sky-100"
    }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

        <div className="flex items-center gap-3">
        <div className="flex items-center">
          <div className="relative w-48 h-14">
            <img
              src={boclimaLogo2}
              alt="BoClima"
              className="absolute left-0 top-[50%] -translate-y-1/2 h-35 w-auto object-contain"
            />
          </div>
        </div>

      
</div>

        <div className="flex items-center gap-2 w-full md:w-auto">

          <div className="flex-1 md:w-72">
            <SearchBar
              city={city}
              onSearch={onSearch}
              darkMode={darkMode}
            />
          </div>

          <button
            onClick={onCurrentLocation}
            className={`px-4 py-3 rounded-xl transition-colors ${
              darkMode
                ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                : "bg-sky-100 text-sky-700 hover:bg-sky-200"
            }`}
          >
            📍
          </button>

          <button
          onClick={onToggleDarkMode}
          className={`px-4 py-3 rounded-xl transition-colors ${
            darkMode
              ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
           >
          {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

      </div>
    </header>
  )
}

export default Navbar