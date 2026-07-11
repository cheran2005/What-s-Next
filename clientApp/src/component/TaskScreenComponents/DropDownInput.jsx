function DropDownInput(props) {
    
    return(
    <>
        <div className = {props.divClassName}>
            <p className  = {props.TitleClassName}>
                {props.title}
            </p>
            <select className = {props.SelectClassName}>
                {props.items.map((item, index) => (
                    <option key={index} className = {props.optionClassName}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    </>
    )
}


export default DropDownInput