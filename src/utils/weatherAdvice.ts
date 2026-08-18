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
  "😎 Está lindo lindo para salir.",
  "🧉 Hoy pinta mate afuera.",
  "☀️ Hoy el sol está haciendo horas extra.",
  "☀️ Mirá ese solcito, una pinturita.",
  "☀️ Hoy la rambla pide a gritos unos mates.",
  "🧉 Este día está pidiendo termo y mate.",
  "☀️ ¿Cómo queda tomar unos mates en la rambla hoy?",
  "☀️ Está precioso afuera. Aprovechá que el tiempo acompaña.",
  "☀️ No hay una nube a la vista. El cielo se puso las pilas.",
  "🧉 Solcito, mate y a disfrutar el día.",
  "☀️ El día está despejado.",
  "😎 Hoy el sol es protagonista.",
  "🌞 Se viene una jornada con mucho sol.",
  "☀️ No hay una nube a la vista.",
  "🧉 ¿Unos mates afuera? Yo digo que sí.",
  "😎 Che, está lindo para salir hoy."
]

const cloudyMessages = [
  "⛅ Hoy el sol se hace rogar un poquito.",
  "⛅ El sol aparece cuando se le canta.",
  "☁️ Hay unas nubes dando vueltas, pero tranqui.",
  "☁️ El cielo está parcialmente nublado.",
  "🌥️ Hay algunas nubes, pero el tiempo acompaña.",
  "⛅ El sol se asoma entre las nubes.",
  "🌥️ Está para salir, pero llevate algo por las dudas.",
  "🌥️ Está medio gris, pero se banca.",
  "☁️ Está gris, pero no tanto como un lunes de mañana.",
  "🌥️ El cielo está indeciso. Más indeciso que vos eligiendo que comer.",
  "🌥️ El sol anda desaparecido. Si alguien lo ve, que avise.",
  "🌥️ El sol se asoma un rato y después se manda a mudar.",
  "⛅ El cielo está haciendo la suya, como siempre.",
  "☁️ El cielo está medio indeciso. Ni él sabe para qué lado agarrar."
]

const rainMessages = [
  "☔ Hoy el paraguas juega de titular.",
  "🌧️ El cielo hoy viene con otros planes.",
  "☔ Si salís, llevate paraguas. No seas porfiado.",
  "☔ Si justo lavaste el auto, felicitaciones.",
  "🌧️ Si tenías planes afuera... capaz revisalos.",
  "☔ Hoy salir sin paraguas es jugar a la ruleta.",
  "☔ Paraguas, campera y a hacerle frente.",
  "🌧️ Hoy pinta quedarse adentro con unos mates.",
  "☔ Si salís, llevate paraguas. Después no quiero escuchar quejas.",
  "🌧️ Pintaba lindo el día... hasta que miramos el pronóstico."
]

const otherMessages = [
  "🌤️ El tiempo está algo cambiante.",
  "🌦️ Hoy el clima puede sorprenderte.",
  "🌥️ El día viene medio impredecible.",
  "🌦️ El clima hoy está haciendo cualquiera.",
  "🌥️ El día viene medio entreverado.",
  "🌤️ Hoy el cielo está tirando cualquiera.",
  "🌦️ El clima hoy está improvisando fuerte.",
  "🌤️ Hoy el cielo dijo 'que sea lo que tenga que ser'.",
  "🌥️ Hoy el tiempo está más perdido que turista en Tres Cruces.",
  "🌥️ Hoy el tiempo está como tu ex, no sabe muy bien qué quiere.",
  "🌦️ El clima está como nosotros con el grupo de WhatsApp: nadie sabe qué está pasando."

]

const windyMessages = [
  "🌬️ Además, el viento se va a hacer sentir.",
  "💨 Ojo, hoy el peinado dura poco.",
  "🪁 Hay bastante viento, agarrá bien la gorra.",
  "🌬️ Hoy el viento viene con ganas.",
  "🌬️ El viento está haciendo de las suyas.",
  "🌬️ Está bravo el viento hoy.",
  "🌬️ Hoy caminar contra el viento cuenta como ejercicio.",
  "💨 El viento viene fuertecito. La rambla hoy es para valientes.",
  "💨 Hoy el viento te acomoda el pelo gratis.",
  "💨 Está bravo el viento, bo.",
  "💨 Si vas a la rambla, llevate un ancla.",
  "💨 Ojo que hoy el viento no perdona.",
  "🌬️ Hoy salir con el pelo peinado es tener fe."
]

//Recomendaciones según temperatura
const freezingRecommendations = [
  "🥶 Hoy hace más frío que el culo de un pingüino.",
  "🧣 Salí bien abrigado, porque el frío no perdona.",
  "🥶 Si ves un mate echando humo... abrazalo.",
  "🥶 Está más para guiso que para ensalada.",
  "🥶 Hoy hasta el perro pide entrar.",
  "🧣 Ponete todo lo que encuentres. Hoy no es día para hacerse el valiente.",
  "🥶 Está para salir con tres camperas y todavía tener frío.",
  "🥶 Hace un frío que te hace replantearte salir de la cama.",
  "🧣 Hoy salís vestido como si fueras a la Antártida.",
  "🧉 Hoy el mate es calefacción portátil."
]

const coolRecommendations = [
  "🧥 Llevate un buzo. Después no digas que no te avisamos.",
  "🍂 Está fresco. Esa camperita en la silla hoy tiene destino.",
  "😌 No hace un frío terrible, pero de manga corta capaz te arrepentís.",
  "🧥 Hoy el buzo no está de adorno.",
  "🧥 Llevate algo de abrigo. Después no quiero escuchar 'pa, qué frío'.",
  "🧥 Esa campera que tenés colgada hace tres días hoy pide salir.",
  "🍂 Está fresquito. El buzo te puede salvar la jornada.",
  "😌 No es para morirse de frío, pero tampoco para andar de remerita.",
  "😌 Está ese frío traicionero que parece que no es nada... hasta que salís.",
  "🧥 Ponete un buzo, campeón. Después no digas que no te avisé.",
  "😌 No está para congelarse, pero tampoco para hacerse el lindo.",
  "🍂 Está fresquito. El mate ayuda, pero no hace milagros.",
  "🧥 Hoy la campera te puede ahorrar un 'qué frío de mierda'."

]

const freshRecommendations = [
  "🧥 El buzo hoy cumple, pero tampoco te abrigues como para el Polo Sur.",
  "🧥 Hoy el buzo es más por las dudas que por necesidad.",
  "😌 Fresquito justo. Ni frío ni calor, una joyita.",
  "🌤️ Está lindo, pero llevate algo por las dudas.",
  "🧥 Un buzo viene bárbaro.",
  "😌 Está fresquito, pero se banca.",
  "Una campera liviana es una buena idea.",
  "No salgas de manga corta si vas a estar un rato afuera.",
  "🧥 Una camperita liviana y estás hecho.",
  "🧥 Llevate una campera liviana. Después agradecés.",
  "🧉 Está para salir con un buzo y el mate bajo el brazo.",
  "😌 Está fresquito, pero tampoco para dramatizar.",
  "🌤️ Temperatura ideal para no saber qué ponerte.",
  "🧥 Hoy pinta buzo liviano y a otra cosa.",
  "😌 Está para salir sin abrigo y arrepentirte a los veinte minutos... mentira, llevate un buzo."
]

const pleasantRecommendations = [
  "🧉 Está para unos mates tranquilos y charla larga.",
  "😎 Si estabas buscando una excusa para salir, acá tenés.",
  "🌤️ Hoy el clima se portó. Hay que aprovechar.",
  "🧉 Este día pide rambla.",
  "🚶 Está lindo para caminar un rato y despejar la cabeza.",
  "🧉 Está ideal para unos mates afuera.",
  "🚶 Aprovechá que el tiempo acompaña.",
  "😎 Hoy dan ganas de no quedarse encerrado.",
  "🧉 Hoy el mate afuera se disfruta el doble.",
  "🧉 ¿Unos mates en la rambla? Yo no lo pensaría mucho.",
  "😎 Fa, está lindo para salir hoy.",
  "🚶 Hoy pinta caminar sin apuro.",
  "🧉 Está para mate, rambla y cero apuro.",
  "😎 Hoy quedarse encerrado es desperdiciar el día.",
  "🌤️ Hoy hasta salir a hacer un mandado parece un buen plan.",
  "🧉 El mate ya está pidiendo salir de casa.",
  "😎 Hoy está prohibido decir 'qué embole'."
]

const warmRecommendations = [
  "👕 Está para andar liviano.",
  "🧉 Unos mates en la sombra suenan como un planazo.",
  "🌤️ Aprovechá que el tiempo acompaña.",
  "👕 Hoy pinta remera y a otra cosa.",
  "🧉 Está para mate, sombra y cero apuro.",
  "😎 Está lindo para salir sin andar cargando media casa.",
  "🌤️ Está de esos días que te hacen querer salir aunque no tengas ningún plan.",
  "🧉 Unos mates a la sombra y estamos hechos.",
  "👕 Hoy la campera puede quedarse en casa tranquila.",
  "😎 Está para salir liviano y ver qué pinta.",
  "🌤️ El día está lindo, no inventemos excusas para quedarnos adentro.",
  "🧉 Está para sentarse afuera y arreglar el mundo hablando pavadas."
]

const hotRecommendations = [
  "🥵 Hoy el ventilador va a ser tu mejor amigo.",
  "💧 Tomá agua que el calor viene bravo.",
  "🌞 Si salís al sol, llevá gorra... y paciencia.",
  "🥵 Hoy hasta el perro busca la sombra.",
  "💧 Tomá agua, bo. No seas porfiado.",
  "🌞 Está para vivir pegado al ventilador.",
  "🥵 Hoy la sombra cotiza en bolsa.",
  "🧉 Mate sí, pero buscate una sombra primero.",
  "🥵 Está para prender el aire y no preguntar cuánto consume.",
  "🌞 Hoy salir al mediodía es una decisión que merece ser cuestionada.",
  "💧 Agua, sombra y a sobrevivir.",
  "🥵 Hoy el asfalto está cocinando.",
  "🌞 Si vas a salir, hacelo con gorra, agua y ganas de sufrir un poquito.",
  "🥵 Hoy hasta el mate transpira."
]

//Mensajes para la temperatura
const coldMessages = [
  "🥶 Hace frío.",
  "🧥 Está bastante fresco afuera.",
  "🥶 El frío se hace notar.",
  "🧥 Hoy pinta salir bien abrigado.",
  "🥶 Está fresquito de verdad.",
  "🧥 Hoy el buzo tiene trabajo.",
  "🥶 Está para abrigo, mate y a otra cosa.",
  "🧥 El frío está haciendo acto de presencia.",
  "🧥 Está de esos fríos que te hacen cerrar bien la campera."
]

const freezingMessages = [
  "🥶 Hace un frío de aquellos.",
  "🥶 Hoy el frío vino con ganas.",
  "🥶 Está para quedarse abajo de las frazadas.",
  "🥶 Hace un frío que pela.",
  "🥶 Hoy el invierno está jugando fuerte.",
  "🥶 Está bravo el frío, bo.",
  "🥶 Hoy salir de la cama ya cuenta como hazaña.",
  "🥶 Está para guiso y frazada.",
  "🥶 El frío está haciendo horas extra.",
  "🥶 Hoy hasta levantarse temprano duele."
]

const freshMessages = [
  "🍂 Está fresco.",
  "😌 Se siente un fresquito lindo.",
  "🧥 Está fresco pero se banca.",
  "🍂 Está de esos días que no sabés si llevar buzo o no.",
  "😌 Fresquito justo, ni frío ni calor.",
  "🧉 Está fresco, pero un mate lo arregla.",
  "🍂 Está lindo el fresquito.",
  "😌 Hoy el clima se portó bastante bien.",
  "🧥 Está para un buzo liviano y a otra cosa.",
  "🍂 Fresquito, pero sin exagerar."
]

const pleasantMessages = [
  "😎 La temperatura está ideal.",
  "🌤️ Se está muy bien afuera.",
  "😌 El tiempo acompaña.",
  "😎 Fa, qué linda temperatura.",
  "🌤️ Está justo para disfrutar el día.",
  "😌 Ni frío ni calor. Una joyita.",
  "😎 Hoy el clima se portó.",
  "🌤️ Está lindo lindo afuera.",
  "😌 Una temperatura que no pide ni campera ni ventilador.",
  "😎 Hoy no hay mucho para quejarse del tiempo."
]

const warmMessages = [
  "🌤️ Está templado.",
  "☀️ Ya se siente un lindo calorcito.",
  "😎 El día invita a estar afuera.",
  "☀️ Está lindo el calorcito.",
  "😎 Hoy pinta andar liviano.",
  "🌤️ Está de esos días que dan ganas de salir.",
  "☀️ El calorcito se hizo presente.",
  "😎 Fa, está lindo para andar afuera.",
  "🌤️ Hoy el tiempo está para aprovecharlo.",
  "☀️ Está empezando a apretar el calorcito."
]

const hotMessages = [
  "🥵 Hace bastante calor.",
  "☀️ El calor se hace sentir.",
  "🥵 Hoy el sol no está para chistes.",
  "🥵 Hace un calor de aquellos.",
  "☀️ Hoy el sol está laburando horas extra.",
  "🥵 Está bravo el calor, bo.",
  "☀️ El verano vino con ganas.",
  "🥵 Hoy hace calor en serio.",
  "☀️ El sol está jugando fuerte hoy.",
  "🥵 Está para buscar sombra apenas salís de casa."
]