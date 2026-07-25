type FunnyMessageProps = {
  message: string
}

function FunnyMessage({ message }: FunnyMessageProps) {
  return (
   <section className="h-full bg-sky-100 rounded-3xl border border-sky-200 p-6 shadow-sm flex flex-col">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        💬 Consejo del día
      </h2>

      <p className="text-lg text-slate-700 leading-relaxed">
        {message}
      </p>

    </section>
  )
}

export default FunnyMessage