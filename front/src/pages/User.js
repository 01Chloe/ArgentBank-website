import "../styles/user.css"
import Button from "../components/Button"
import Account from "../components/Account"

export default function User() {
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
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button text={"Edit Name"} className={"edit-button"} />
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
  )
}
