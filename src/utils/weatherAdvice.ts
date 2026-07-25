export function getWeatherAdvice(
  temperature: number,
  weatherCode: number,
  wind: number
) {

  let weatherMessage = ""
  let temperatureMessage = ""
  let recommendation = ""
  let extraMessage = ""

  // Estado del tiempo
  if (weatherCode >= 61) {
  weatherMessage = randomMessage(rainMessages)
  }
  else if (weatherCode === 0) {
    weatherMessage = randomMessage(sunnyMessages)
  }
  else if (weatherCode <= 3) {
    weatherMessage = randomMessage(cloudyMessages)
  }
  else {
    weatherMessage = randomMessage(otherMessages)
  }

  // Temperatura
  if (temperature <= 5) {
    temperatureMessage = randomMessage(freezingMessages)
    recommendation = randomMessage(freezingRecommendations)
  }
  else if (temperature <= 10) {
    temperatureMessage = randomMessage(coldMessages)
    recommendation = randomMessage(coolRecommendations)
  }
  else if (temperature <= 15) {
    temperatureMessage = randomMessage(freshMessages)
    recommendation = randomMessage(freshRecommendations)
  }
  else if (temperature <= 22) {
    temperatureMessage = randomMessage(pleasantMessages)
    recommendation = randomMessage(pleasantRecommendations)
  }
  else if (temperature <= 28) {
    temperatureMessage = randomMessage(warmMessages)
    recommendation = randomMessage(warmRecommendations)
  }
  else {
    temperatureMessage = randomMessage(hotMessages)
    recommendation = randomMessage(hotRecommendations)
  }


  if (wind >= 35) {
  extraMessage = randomMessage(windyMessages)
  }

  return `${weatherMessage} ${temperatureMessage} ${recommendation} ${extraMessage}`.trim()
}

function randomMessage(messages: string[]) {
  return messages[Math.floor(Math.random() * messages.length)]
}

//Estado del tiempo
const sunnyMessages = [
  "☀️ El día está despejado.",
  "😎 Hoy el sol es protagonista.",
  "🌞 Se viene una jornada con mucho sol.",
  "☀️ No hay una nube a la vista."
]

const cloudyMessages = [
  "☁️ El cielo está parcialmente nublado.",
  "🌥️ Hay algunas nubes, pero el tiempo acompaña.",
  "⛅ El sol se asoma entre las nubes."
]

const rainMessages = [
  "☔ Hoy el paraguas juega de titular.",
  "🌧️ Mejor no confiarse del cielo.",
  "💧 Si salís, preparate para mojarte un poco."
]

const otherMessages = [
  "🌤️ El tiempo está algo cambiante.",
  "🌦️ Hoy el clima puede sorprenderte.",
  "🌥️ El día viene con condiciones variables."
]

const windyMessages = [
  "🌬️ Además, el viento se va a hacer sentir.",
  "💨 Ojo, hoy el peinado dura poco.",
  "🪁 Hay bastante viento, agarrá bien la gorra."
]

//Recomendaciones según temperatura
const freezingRecommendations = [
  "🥶 Hoy hace más frío que el culo de un pingüino.",
  "🧣 Salí bien abrigado, porque el frío no perdona.",
  "🥶 Si ves un mate echando humo... abrazalo."
]

const coolRecommendations = [
  "🧥 Llevate un buzo. Después no digas que no te avisamos.",
  "🍂 Está fresco. Esa camperita en la silla hoy tiene destino.",
  "😌 No hace un frío terrible, pero de manga corta capaz te arrepentís."
]

const freshRecommendations = [
  "Un buzo viene bárbaro.",
  "Una campera liviana es una buena idea.",
  "No salgas de manga corta si vas a estar un rato afuera."
]

const pleasantRecommendations = [
  "🧉 Está ideal para unos mates afuera.",
  "🚶 Aprovechá que el tiempo acompaña.",
  "😎 Hoy dan ganas de no quedarse encerrado."
]

const warmRecommendations = [
  "👕 Está para andar liviano.",
  "🧉 Unos mates en la sombra suenan como un planazo.",
  "🌤️ Aprovechá que el tiempo acompaña."
]

const hotRecommendations = [
  "🥵 Hoy el ventilador va a ser tu mejor amigo.",
  "💧 Tomá agua que el calor viene bravo.",
  "🌞 Si salís al sol, llevá gorra... y paciencia."
]

//Mensajes para la temperatura
const coldMessages = [
  "Hace frío.",
  "La temperatura está bastante baja.",
  "El frío se hace notar."
]

const freezingMessages = [
  "Hace mucho frío.",
  "El frío está pegando fuerte.",
  "Hoy el invierno vino con ganas."
]

const freshMessages = [
  "Está fresco.",
  "Se siente un ambiente fresco.",
  "Hay un fresquito lindo."
]

const pleasantMessages = [
  "La temperatura está ideal.",
  "Se está muy bien afuera.",
  "El tiempo acompaña."
]

const warmMessages = [
  "Está templado.",
  "Ya se siente un lindo calorcito.",
  "El día invita a estar afuera."
]

const hotMessages = [
  "Hace bastante calor.",
  "El calor se hace sentir.",
  "Hoy el sol no está para chistes."
]