import './TaskScreen.css';
import Button from './Button';
function DeletePopUp(props) {

    return(
        <div className = "TaskScreen" onClick={props.exitScreen}>
            <div className ="TaskSection">

                <div className = "TaskBoxDeletePopUp" onClick={(event) => event.stopPropagation()}>
                    <p className="alumni-sans-regular ">Are you sure you want to delete task?</p>
                    <div className = "TaskBoxSection-Bottom SubmitContainer">
                        <Button buttonTitle = "Confirm Delete" onClick={() => props.DeleteTask(props.taskID)} buttonExtraStyle= "SubmitButton"/>
                    </div>
   
                </div>
            </div>

        </div>

    )
}


export default DeletePopUp