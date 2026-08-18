type CloudProps = {
  darkMode: boolean
  size?: "small" | "large"
  className?: string
}

function Cloud({
  darkMode,
  size = "large",
  className = "",
}: CloudProps) {
  const isLarge = size === "large"

  return (
    <div
      className={`absolute ${
        isLarge ? "w-72 h-32" : "w-48 h-24"
      } ${className}`}
    >
      <div className="relative w-full h-full">

        {/* Base de la nube */}
        <div
          className={`absolute bottom-0 left-0 w-full h-1/2 rounded-full ${
            darkMode
              ? "bg-white/20"
              : "bg-slate-600/25"
          } blur-md`}
        />

        {/* Parte izquierda */}
        <div
          className={`absolute bottom-4 left-[12%] ${
            isLarge ? "w-28 h-28" : "w-20 h-20"
          } rounded-full ${
            darkMode
              ? "bg-white/25"
              : "bg-slate-600/25"
          } blur-md`}
        />

        {/* Parte central */}
        <div
          className={`absolute bottom-5 left-[38%] ${
            isLarge ? "w-36 h-36" : "w-24 h-24"
          } rounded-full ${
            darkMode
              ? "bg-white/25"
              : "bg-slate-600/25"
          } blur-md`}
        />

        {/* Parte derecha */}
        <div
          className={`absolute bottom-3 right-[8%] ${
            isLarge ? "w-24 h-24" : "w-16 h-16"
          } rounded-full ${
            darkMode
              ? "bg-white/20"
              : "bg-slate-600/20"
          } blur-md`}
        />

      </div>
    </div>
  )
}

export default Cloud