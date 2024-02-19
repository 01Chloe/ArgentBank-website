import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Router from "./components/Router"
import Footer from "./components/Footer"
import "./app.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
