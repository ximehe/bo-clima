export function formatDay(date: string): string {
  const day = new Date(date)

  return day.toLocaleDateString("es-UY", {
    weekday: "short",
    day: "numeric",
  })
}

export function formatHour(date: string): string {
  const hour = new Date(date)

  return hour.toLocaleTimeString("es-UY", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
}