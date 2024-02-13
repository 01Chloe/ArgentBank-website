import "../styles/homeContent.css"
import chatIcon from "../img/icon-chat.png"
import moneyIcon from "../img/icon-money.png"
import securityIcon from "../img/icon-security.png"
import FeatureItem from "./FeatureItem"

export default function HomeContent() {
  const data = [
    {
      img: chatIcon,
      alt: "Chat Icon",
      title: "You are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      img: moneyIcon,
      alt: "Money Icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      img: securityIcon,
      alt: "Security Icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ]
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {data.map((item, index) => (
        <FeatureItem
          key={index}
          img={item.img}
          alt={item.alt}
          title={item.title}
          text={item.text}
        />
      ))}
    </section>
  )
}
