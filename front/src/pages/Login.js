import SignInForm from "../components/SignInForm"

export default function Login() {
  return (
    <main className="main bg-dark">
      <section className="form-container">
        <i className="fa-solid fa-circle-user"></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </main>
  )
}
