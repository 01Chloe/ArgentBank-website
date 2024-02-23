import { Navigate } from "react-router-dom"
import Button from "./Button"
import { useState, useEffect } from "react"
import {
  useLoginUserMutation,
  useUserInfosMutation,
} from "../authRedux/authApi"
import { useSelector, useDispatch } from "react-redux"
import {
  setUserName,
  setFirstName,
  setLastName,
  setUserEmail,
  tokenReceived,
} from "../authRedux/userSlice"
import "../styles/form.css"

export default function SignInForm() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.persistedReducer)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const [loginUser, { data: loginData, error: loginError }] =
    useLoginUserMutation()
  const [infosUser, { data: userData, error: userError }] =
    useUserInfosMutation()

  useEffect(() => {
    if (state.userEmail) {
      setEmail(state.userEmail)
    }
  }, [state.userEmail])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const { data } = await loginUser({ email, password })
      const token = data.body.token
      if (token) {
        dispatch(tokenReceived(token))
        const { data } = await infosUser({})
        const userName = data.body.userName
        const firstName = data.body.firstName
        const lastName = data.body.lastName
        const userEmail = data.body.email
        dispatch(setUserName(userName))
        dispatch(setFirstName(firstName))
        dispatch(setLastName(lastName))
        if (rememberMe) {
          dispatch(setUserEmail(userEmail))
        } else {
          dispatch(setUserEmail(null))
        }
      }
    } catch (error) {
      console.error("Error", error)
    }
  }

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked)
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="false"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="false"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginError && (
          <span className="error-message">Email or password invalid</span>
        )}
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={handleRememberMe}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <Button text={"Sign In"} className={"sign-in-button"} />
      {loginData && <Navigate to="/profile" />}
    </form>
  )
}
