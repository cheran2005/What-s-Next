import './SearchTask.css';

function SearchTask(props) {

    return(
        <>
            <input
                className = " alumni-sans-regular InputStyle SearchTask"
                type="text"
                placeholder="Search Task..."
                value={props.inputValue}
                onChange={props.inputOnChange}
            />
        </>
    )
}


export default SearchTask