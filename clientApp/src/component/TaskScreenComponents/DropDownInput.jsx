function DropDownInput(props) {
    const getOptionClass= (item) => {
        if (item === "Complete") return props.CompleteTextClassName;
        if (item === "In Progress") return props.InProgressTextClassName;
        if (item === "Not Started") return props.NotStartedTextClassName;
    }
    return(
    <>
        <div className = {props.divClassName}>
            <p className  = {props.TitleClassName}>
                {props.title}
            </p>
            <select 
                className = {`${props.SelectClassName} ${getOptionClass(props.value)}`}
                value = {props.value} 
                onChange = {props.onChange}
            >
                {props.items.map((item, index) => (
                    <option 
                        key={index} 
                        className = {`${props.optionClassName} ${getOptionClass(item)}`}
                        value = {item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </div>
    </>
    )
}


export default DropDownInput