import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import SignIn from "../pages/Login"
import User from "../pages/User"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<SignIn />} />
      <Route path="/User" element={<User />} />
    </Routes>
  )
}
