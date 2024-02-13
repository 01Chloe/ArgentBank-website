import { Link } from "react-router-dom"
import Button from "./Button"
import "../styles/form.css"

export default function Form() {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Link to="/User">
        <Button text={"Sign In"} className={"sign-in-button"} />
      </Link>
    </form>
  )
}
