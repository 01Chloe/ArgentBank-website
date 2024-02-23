import "../styles/button.css"

export default function Button({ text, className, onClick }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  )
}
