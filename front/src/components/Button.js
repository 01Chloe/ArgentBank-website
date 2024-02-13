import "../styles/button.css"

export default function Button({ text, className }) {
  return <button className={className}>{text}</button>
}
