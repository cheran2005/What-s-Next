function TaskTextArea(props) {
    return(
    <>
        <div className = {props.divClassName}>
            <p className  = {props.TitleClassName}>
                {props.title}
            </p>
            <textarea                
                type={props.textAreaType}
                value={props.textAreaValue}
                onChange={props.textAreaOnChange}
                placeholder={props.textAreaPlaceholder}
                className={props.textAreaClassName}
            />
        </div>
    </>
    )
}


export default TaskTextArea