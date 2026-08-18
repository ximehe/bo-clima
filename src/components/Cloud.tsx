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
        isLarge
          ? "w-48 h-24 md:w-72 md:h-32"
          : "w-32 h-16 md:w-48 md:h-24"
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
            isLarge
              ? "w-20 h-20 md:w-28 md:h-28"
              : "w-14 h-14 md:w-20 md:h-20"
          } rounded-full ${
            darkMode
              ? "bg-white/25"
              : "bg-slate-600/25"
          } blur-md`}
        />

        {/* Parte central */}
        <div
          className={`absolute bottom-5 left-[38%] ${
            isLarge
              ? "w-24 h-24 md:w-36 md:h-36"
              : "w-[72px] h-[72px] md:w-24 md:h-24"
          } rounded-full ${
            darkMode
              ? "bg-white/25"
              : "bg-slate-600/25"
          } blur-md`}
        />

        {/* Parte derecha */}
        <div
          className={`absolute bottom-3 right-[8%] ${
          isLarge
            ? "w-16 h-16 md:w-24 md:h-24"
            : "w-12 h-12 md:w-16 md:h-16"
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