import logo from "../img/argentBankLogo.png"
import "../styles/header.css"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <img src={logo} alt="ArgentBank logo" className="main-nav-logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Link to="/Login" className="main-nav-item">
        <i className="fa-solid fa-circle-user"></i>
        Sign In
      </Link>
    </nav>
  )
}
