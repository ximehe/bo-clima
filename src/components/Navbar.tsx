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

        <div className="flex items-center justify-center md:justify-start gap-3 w-full md:w-auto">
        <div className="flex items-center">
          <div className="relative w-48 h-14">
            <img
              src={boclimaLogo2}
              alt="BoClima"
              className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 h-35 w-auto object-contain md:left-0 md:translate-x-0"
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
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          </button>

          <button
          onClick={onToggleDarkMode}
          className={`px-4 py-3 rounded-xl transition-colors ${
            darkMode
              ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
           >
          {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        )}
          </button>

        </div>

      </div>
    </header>
  )
}

export default Navbar