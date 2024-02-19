import logo from "../img/argentBankLogo.png"
import "../styles/header.css"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../store/authSlice"

export default function Header() {
  const state = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <nav className="main-nav">
      <Link to="/">
        <img src={logo} alt="ArgentBank logo" className="main-nav-logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!state.token ? (
        <Link to="/login" className="main-nav-item">
          <i className="fa-solid fa-circle-user"></i>
          Sign In
        </Link>
      ) : (
        <div>
          <Link to="/profile" className="main-nav-item">
            <i className="fa-solid fa-circle-user"></i>
            {state.userName}
          </Link>
          <Link
            to="/"
            className="main-nav-item"
            onClick={() => dispatch(logout())}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Sign Out
          </Link>
        </div>
      )}
    </nav>
  )
}
