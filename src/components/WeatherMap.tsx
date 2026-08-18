import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
})

type WeatherMapProps = {
  latitude: number
  longitude: number
  darkMode: boolean
  isNight: boolean
}
function WeatherMap({
  latitude,
  longitude,
  darkMode,
  isNight,
}: WeatherMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return
    if (mapRef.current) return

    const map = L.map(mapContainerRef.current, {
      minZoom: 5,
      maxZoom: 15,
      maxBounds: [
        [-38, -59],
        [-30, -53],
      ],
      maxBoundsViscosity: 1.0,
    }).setView([latitude, longitude], 7)

    // 🛰️ Mapa satelital
    const satelliteLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Tiles © Esri",
      }
    )

    // 🌧️ Precipitación
    const precipitationLayer = L.tileLayer(
    "/api/weather-map?layer=precipitation_new&z={z}&x={x}&y={y}",
    {
      opacity: 0.65,
      minZoom: 5,
      maxZoom: 15,
      noWrap: true,
      attribution:
        '&copy; <a href="https://openweathermap.org/">OpenWeather</a>',
    }
  )

    // ☁️ Nubosidad
   const cloudsLayer = L.tileLayer(
  "/api/weather-map?layer=clouds_new&z={z}&x={x}&y={y}",
  {
    opacity: 0.55,
    minZoom: 5,
    maxZoom: 15,
    noWrap: true,
    attribution:
      '&copy; <a href="https://openweathermap.org/">OpenWeather</a>',
  }
)
satelliteLayer.addTo(map)

    const baseMaps = {
      "🛰️ Satélite": satelliteLayer,
    }

    const overlays = {
      "🌧️ Precipitación": precipitationLayer,
      "☁️ Nubosidad": cloudsLayer,
    }

    L.control
      .layers(baseMaps, overlays, {
        position: "topright",
      })
      .addTo(map)

    // 📍 Ubicación
    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup("Ubicación seleccionada")

    mapRef.current = map

    setTimeout(() => {
      map.invalidateSize()
    }, 100)

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [latitude, longitude])

  return (
    <section className="mt-8">
      <h2
        className={`text-2xl font-bold mb-4 ${
          darkMode || isNight ? "text-white" : "text-slate-800"
        }`}
      >
        Mapa meteorológico
      </h2>

      <div
        ref={mapContainerRef}
        className="
          w-full
          h-[300px]
          sm:h-[350px]
          lg:h-[450px]
          rounded-2xl
          overflow-hidden
          shadow-lg
        "
      />
    </section>
  )
}

export default WeatherMap