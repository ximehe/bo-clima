import { defineConfig, type Plugin } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import weatherMapHandler from "./api/weather-map"
import dotenv from "dotenv"

dotenv.config()

function weatherMapApi(): Plugin {
  return {
    name: "weather-map-api",

    configureServer(server) {
      server.middlewares.use("/api/weather-map", async (req, res) => {
        try {
          const url = new URL(
            req.url ?? "",
            `http://${req.headers.host ?? "localhost"}`
          )

          const query = Object.fromEntries(url.searchParams.entries())

          let statusCode = 200
          let responseBody: Buffer | string = ""

          const mockResponse = {
            status(code: number) {
              statusCode = code
              return mockResponse
            },

            json(data: unknown) {
              responseBody = JSON.stringify(data)
              return mockResponse
            },

            setHeader(name: string, value: string) {
              res.setHeader(name, value)
              return mockResponse
            },

            send(data: Buffer | string) {
              responseBody = data
              return mockResponse
            },
          }

          await weatherMapHandler(
            {
              query,
            } as any,
            mockResponse as any
          )

          res.statusCode = statusCode

          if (typeof responseBody === "string") {
            res.end(responseBody)
          } else {
            res.end(responseBody)
          }
        } catch (error) {
          console.error("Weather Map API error:", error)

          res.statusCode = 500
          res.end(
            JSON.stringify({
              error: "Error interno del servidor",
            })
          )
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    weatherMapApi(),
  ],
})