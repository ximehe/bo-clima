import { useState } from "react"

type SearchBarProps = {
  city: string
  onSearch: (city: string) => void
  darkMode: boolean
}

function SearchBar({ city, onSearch, darkMode}: SearchBarProps) {

  const [search, setSearch] = useState(city)


  function handleSubmit(event: React.FormEvent) {
  event.preventDefault()


  if (search.trim() === "") {
    return
  }

  onSearch(search)
  setSearch("")
  }

  return (
    <form onSubmit={handleSubmit} className="relative">

        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          🔍
          </span>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar ciudad o localidad..."
        className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-colors duration-300 ${
          darkMode
            ? "bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
            : "bg-white border-sky-200 text-slate-800"
        }`}
      />

      <button
        type="submit"
        className="hidden"
      >
        Buscar
      </button>
    </form>
  )
}

export default SearchBar