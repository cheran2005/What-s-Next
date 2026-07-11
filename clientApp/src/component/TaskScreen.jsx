import { IoIosExit } from "react-icons/io";
import TaskInput  from './TaskScreenComponents/TaskInput';
import TaskTextArea from './TaskScreenComponents/TaskTextArea';
import DropDownInput from './TaskScreenComponents/DropDownInput';
import './TaskScreen.css';
function TaskScreen(props) {
    const Status = ["Completed", "In Progress","Not Started"]
    return(
    <>
        <div className = "TaskScreen" onClick={props.ExitScreen}>
            <div className ="TaskSection">
                <div className = "TaskBox" onClick={(event) => event.stopPropagation()}>
                    <IoIosExit className ="ExitIcon" onClick={props.ExitScreen} />

                    <div className = "TaskBoxSectionContainer">

                        <TaskInput title = "Task Title" divClassName ="TaskInputSection" TitleClassName = " MoreOption-Title alumni-sans-regular"
                            inputType = "text" 
                            inputClassName = "MoreOption-Input InputStyle"
                        />

                        <TaskTextArea title = "Task Details" divClassName ="TaskInputSection" TitleClassName = "MoreOption-Title alumni-sans-regular"
                            textAreaType = "Text" textAreaClassName = "MoreOption-Input InputStyle MoreOption-Input-Paragraph alumni-sans-regular"
                        />


                        <div className = "TaskBoxSection-Bottom">

                            <TaskInput title = "Due Date" divClassName ="TaskInputSectionbottom" TitleClassName = " MoreOption-Title alumni-sans-regular"
                                inputType = "Date" inputClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                            />

                            <TaskInput title = "Category" divClassName ="TaskInputSectionbottom" TitleClassName = " MoreOption-Title alumni-sans-regular"
                                inputType = "text" inputClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                            />

                            <DropDownInput  title = "status" items = {Status} divClassName ="TaskInputSectionbottom" SelectClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                                TitleClassName = " MoreOption-Title alumni-sans-regular" optionClassName = "DropDownOptionStyle"
                            />

                        </div>
                        
                    </div>

                </div>
            </div>
            
        </div>
    </>
    )
}


export default TaskScreen