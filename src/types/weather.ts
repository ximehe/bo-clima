export interface WeatherResponse {
  current: {
    temperature_2m: number
    apparent_temperature: number
    relative_humidity_2m: number
    wind_speed_10m: number
    weather_code: number
    time: string
    interval: number
  }

  hourly: {
    time: string[]
    temperature_2m: number[]
    apparent_temperature: number[]
    weather_code: number[]
    precipitation_probability: number[]
  }

  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    weather_code: number[]
  }
}