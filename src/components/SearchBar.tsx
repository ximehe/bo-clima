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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar ciudad..."
        className="w-full p-3 rounded-xl border border-gray-300 mb-6"
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