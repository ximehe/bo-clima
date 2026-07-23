export function formatDay(date: string): string {
  const day = new Date(date)

  return day.toLocaleDateString("es-UY", {
    weekday: "short",
    day: "numeric",
  })
}