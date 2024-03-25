import 'src/styles/index.css'
import coffeeCup from "src/assets/icons/coffee-cup.svg";
const Button = (props) => {
  return (
    <div>
      <button className="ui__button">
      <img src={coffeeCup} alt="coffee-button-icon" />
      {props.text}
      </button>
    </div>
  )
}



export default Button
