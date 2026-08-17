export function getWeatherDescription(code: number): string {
  switch (code) {
    case 0:
      return "Despejado"

    case 1:
      return "Mayormente despejado"

    case 2:
      return "Parcialmente nublado"

    case 3:
      return "Nublado"

    case 45:
    case 48:
      return "Neblina"

    case 51:
    case 53:
    case 55:
      return "Llovizna"

    case 56:
    case 57:
      return "Llovizna helada"

    case 61:
    case 63:
    case 65:
      return "Lluvia"

    case 66:
    case 67:
      return "Lluvia helada"

    case 71:
    case 73:
    case 75:
      return "Nieve"

    case 77:
      return "Copos de nieve"

    case 80:
      return "Chaparrones ligeros"

    case 81:
      return "Chaparrones moderados"

    case 82:
      return "Chaparrones fuertes"

    case 85:
    case 86:
      return "Chaparrones de nieve"

    case 95:
      return "Tormenta"

    case 96:
    case 99:
      return "Tormenta con granizo"

    default:
      return "Clima desconocido"
  }
}

export function getWeatherIcon(code: number): string {
  switch (code) {
    case 0:
      return "☀️"

    case 1:
      return "🌤️"

    case 2:
      return "⛅"

    case 3:
      return "☁️"

    case 45:
    case 48:
      return "🌫️"

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return "🌦️"

    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return "🌧️"

    case 71:
    case 73:
    case 75:
    case 77:
      return "❄️"

    case 80:
    case 81:
      return "🌦️"

    case 82:
      return "🌧️"

    case 85:
    case 86:
      return "🌨️"

    case 95:
    case 96:
    case 99:
      return "⛈️"

    default:
      return "🌡️"
  }
}