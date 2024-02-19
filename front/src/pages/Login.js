import "../styles/login.css"
import SignInForm from "../components/SignInForm"

export default function Login() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa-solid fa-circle-user"></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  )
}
