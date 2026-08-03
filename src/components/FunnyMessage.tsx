type FunnyMessageProps = {
  message: string
  darkMode: boolean
}

function FunnyMessage({ message, darkMode }: FunnyMessageProps) {
  return (
   <section 
   className={`h-full rounded-3xl border p-6 shadow-md flex flex-col transition-colors duration-300 ${
    darkMode
      ? "bg-slate-800 border-slate-700"
      : "bg-[#FEF3C7] border-yellow-300"
   }`}
   >
      <h2 
      className={`text-2xl font-bold mb-6 ${
       darkMode ? "text-white" : "text-sky-800"
      }`}
      >
        💬 Consejo del día
      </h2>

      <p 
       className={`text-lg leading-relaxed ${
        darkMode ? "text-slate-200" : "text-slate-700"
      }`}
      >
        {message}
      </p>

    </section>
  )
}

export default FunnyMessage