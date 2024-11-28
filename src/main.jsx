import ReactDOM from "react-dom/client"
import { BrowserRouter} from "react-router"
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react"

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
)
