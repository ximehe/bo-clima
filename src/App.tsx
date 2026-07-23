import CurrentWeather from "./components/CurrentWeather"
import WeatherDetails from "./components/WeatherDetails"
import Forecast from "./components/Forecast"
import FunnyMessage from "./components/FunnyMessage"


function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          BoClima 🌦️
        </h1>

        <CurrentWeather />

        <WeatherDetails />

        <Forecast />

        <FunnyMessage />

      </div>
    </main>
  )
}

export default App