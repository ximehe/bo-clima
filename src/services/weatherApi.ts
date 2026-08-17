import type { WeatherResponse } from "../types/weather"

export async function getCurrentWeather(
  latitude: number,
  longitude: number
): Promise<WeatherResponse> {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m,apparent_temperature,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
  )

  if (!response.ok) {
    throw new Error("No se pudo obtener el clima")
  }

  const data: WeatherResponse = await response.json()

  return data
}
export async function getCoordinates(city: string) {
  const normalizedCity = city
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const departmentCoordinates: Record<
    string,
    { latitude: number; longitude: number; name: string }
  > = {
    artigas: {
      latitude: -30.4007,
      longitude: -56.4749,
      name: "Artigas",
    },
    canelones: {
      latitude: -34.5228,
      longitude: -56.2778,
      name: "Canelones",
    },
    "cerro largo": {
      latitude: -32.3703,
      longitude: -54.1675,
      name: "Cerro Largo",
    },
    colonia: {
      latitude: -34.4626,
      longitude: -57.8398,
      name: "Colonia",
    },
    durazno: {
      latitude: -33.3806,
      longitude: -56.5236,
      name: "Durazno",
    },
    flores: {
      latitude: -33.5165,
      longitude: -56.8996,
      name: "Flores",
    },
    florida: {
      latitude: -34.0956,
      longitude: -56.2142,
      name: "Florida",
    },
    lavalleja: {
      latitude: -34.3759,
      longitude: -55.2377,
      name: "Lavalleja",
    },
    maldonado: {
      latitude: -34.9011,
      longitude: -54.9518,
      name: "Maldonado",
    },
    montevideo: {
      latitude: -34.9011,
      longitude: -56.1645,
      name: "Montevideo",
    },
    paysandu: {
      latitude: -32.3214,
      longitude: -58.0756,
      name: "Paysandú",
    },
    "rio negro": {
      latitude: -32.3171,
      longitude: -58.0756,
      name: "Río Negro",
    },
    rivera: {
      latitude: -30.9053,
      longitude: -55.5508,
      name: "Rivera",
    },
    rocha: {
      latitude: -34.4833,
      longitude: -54.3333,
      name: "Rocha",
    },
    salto: {
      latitude: -31.3833,
      longitude: -57.9667,
      name: "Salto",
    },
    "san jose": {
      latitude: -34.3375,
      longitude: -56.7136,
      name: "San José",
    },
    soriano: {
      latitude: -33.2558,
      longitude: -58.0305,
      name: "Soriano",
    },
    tacuarembo: {
      latitude: -31.7333,
      longitude: -55.9833,
      name: "Tacuarembó",
    },
    "treinta y tres": {
      latitude: -33.2333,
      longitude: -54.3833,
      name: "Treinta y Tres",
    },
  }

  const department = departmentCoordinates[normalizedCity]

  if (department) {
    return department
  }

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}&count=10&language=es&format=json`
  )

  const data = await response.json()

  if (!data.results || data.results.length === 0) {
    return null
  }

  const uruguayResult = data.results.find(
    (result: any) => result.country_code === "UY"
  )

  if (!uruguayResult) {
    return null
  }

  return {
    latitude: uruguayResult.latitude,
    longitude: uruguayResult.longitude,
    name: uruguayResult.name,
  }
}

export function getCurrentLocation(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export async function getLocationName(
  latitude: number,
  longitude: number
) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10`
  )

  const data = await response.json()

  return (
    data.address?.city ||
    data.address?.town ||
    data.address?.village ||
    data.address?.municipality ||
    data.address?.county ||
    "Mi ubicación"
  )
}