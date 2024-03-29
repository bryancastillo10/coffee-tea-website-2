import "src/styles/index.css";

const Button = (props) => {
  return (
    <div>
      <button className="ui__button">
        <img src={props.image} alt="coffee-button-icon" />
        {props.text}
      </button>
    </div>
  );
};

export default Button;
