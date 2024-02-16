import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import SignIn from "../pages/Login"
import Profile from "../pages/Profile"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
