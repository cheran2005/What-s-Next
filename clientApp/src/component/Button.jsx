import './Button.css';

function Button(props) {
    return(
    <>
        <button className = {`alumni-sans-regular ButtonStyle ${props.buttonExtraStyle}`} onClick={props.onClick}>
            {props.buttonTitle}
        </button> 
    </>
    )
}


export default Button