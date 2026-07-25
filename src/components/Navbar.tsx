type NavbarProps = {
  city: string
  onSearch: (city: string) => void
}

import SearchBar from "./SearchBar"

function Navbar({ city, onSearch }: NavbarProps) {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-sky-100 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
        <span className="text-4xl">🌦️</span>

        <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-slate-800">
            BoClima
            </h1>

            <p className="text-xs text-slate-500">
            El clima de Uruguay
            </p>
        </div>
</div>

        <div className="w-full md:w-96">
          <SearchBar
            city={city}
            onSearch={onSearch}
          />
        </div>

      </div>
    </header>
  )
}

export default Navbar