import { useState } from "react"

type SearchBarProps = {
  city: string
  onSearch: (city: string) => void
}

function SearchBar({ city, onSearch }: SearchBarProps) {

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
        className="w-full pl-10 pr-4 py-3 rounded-xl border border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
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