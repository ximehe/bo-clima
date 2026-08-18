import type { VercelRequest, VercelResponse } from "@vercel/node"

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const apiKey = process.env.OPENWEATHER_API_KEY

  if (!apiKey) {
    return res.status(500).json({
      error: "OPENWEATHER_API_KEY no está configurada",
    })
  }

  const layer = req.query.layer
  const z = req.query.z
  const x = req.query.x
  const y = req.query.y

  const allowedLayers = [
    "precipitation_new",
    "clouds_new",
  ]

  if (
    typeof layer !== "string" ||
    !allowedLayers.includes(layer) ||
    typeof z !== "string" ||
    typeof x !== "string" ||
    typeof y !== "string"
  ) {
    return res.status(400).json({
      error: "Parámetros inválidos",
    })
  }

  const openWeatherUrl =
    `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png` +
    `?appid=${apiKey}`

  try {
    const controller = new AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 10000)

    const response = await fetch(openWeatherUrl, {
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      return res.status(response.status).json({
        error: "OpenWeather rechazó la solicitud",
        status: response.status,
      })
    }

    const image = Buffer.from(
      await response.arrayBuffer()
    )

    res.setHeader("Content-Type", "image/png")
    res.setHeader(
      "Cache-Control",
      "public, max-age=300"
    )

    return res.status(200).send(image)
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "AbortError"
    ) {
      return res.status(504).json({
        error: "OpenWeather tardó demasiado en responder",
      })
    }

    console.error(error)

    return res.status(500).json({
      error: "Error al comunicarse con OpenWeather",
    })
  }
}