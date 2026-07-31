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
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
        <span className="text-4xl">🌦️</span>

        <div className="flex flex-col">
            <h1 
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
            >
            BoClima
            </h1>

            <p
            className={`text-xs ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
            >
            El clima de Uruguay
            </p>
        </div>
</div>

        <div className="flex items-center gap-2 w-full md:w-auto">

          <div className="w-72">
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