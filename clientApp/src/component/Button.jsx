import './Button.css';

function Button(props) {
    return(
    <>
        <button className = " alumni-sans-regular ButtonStyle" onClick={props.onAddClick}>
            {props.buttonTitle}
        </button> 
    </>
    )
}


export default Button