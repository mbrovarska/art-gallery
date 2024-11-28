import { Routes, Route } from "react-router"
import HomePage from './pages/home-page'
import LocationPage from "./pages/location-page"

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route exact path="/location" element={<LocationPage />}/>
     </Routes>
  )
}

export default App
