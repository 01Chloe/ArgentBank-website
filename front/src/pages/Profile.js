import "../styles/user.css"
import Account from "../components/Account"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import EditUserNameForm from "../components/EditUserNameForm"

export default function Profile() {
  const state = useSelector((state) => state.user)
  const data = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ]

  return (
    <>
      {state.token && (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {`${state.firstName} ${state.lastName} !`}
            </h1>
            <EditUserNameForm />
          </div>
          <h2 className="sr-only">Accounts</h2>
          {data.map((item, index) => (
            <Account
              key={index}
              title={item.title}
              amount={item.amount}
              description={item.description}
            />
          ))}
        </main>
      )}
      {!state.token && <Navigate to="/" replace />}
    </>
  )
}
