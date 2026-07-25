function TaskInput(props) {
    
    return(
    <>
            <div className = {props.divClassName}>
                <p className  = {props.TitleClassName}>
                    {props.title}
                </p>
                <input                 
                        type={props.inputType || "text"}
                        value={props.inputValue}
                        onChange={props.inputOnChange}
                        placeholder={props.inputPlaceholder || ""}
                        className={props.inputClassName || ""}
                />
            </div>
    </>
    )
}


export default TaskInput