import { IoIosExit } from "react-icons/io";
import TaskInput  from './TaskScreenComponents/TaskInput';
import TaskTextArea from './TaskScreenComponents/TaskTextArea';
import DropDownInput from './TaskScreenComponents/DropDownInput';
import Button from './Button';
import './TaskScreen.css';
function TaskScreen(props) {

    return(
        <div className = "TaskScreen" onClick={props.exitScreen}>
            <div className ="TaskSection">
                <div className = "TaskBox" onClick={(event) => event.stopPropagation()}>
                    <IoIosExit className ="ExitIcon" onClick={props.exitScreen} />

                    <div className = "TaskBoxSectionContainer">

                        <TaskInput title = "Task Title" inputValue={props.titleValue} inputOnChange = {props.titleOnChange} 
                            divClassName ="TaskInputSection" TitleClassName = " MoreOption-Title alumni-sans-regular"
                            inputType = "text" 
                            inputClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                        />

                        <TaskTextArea title = "Task Details" textAreaValue = {props.detailsValue} textAreaOnChange = {props.detailsOnChange} 
                            divClassName ="TaskInputSection" TitleClassName = "MoreOption-Title alumni-sans-regular"
                            textAreaType = "Text" textAreaClassName = "MoreOption-Input InputStyle MoreOption-Input-Paragraph alumni-sans-regular"
                        />


                        <div className = "TaskBoxSection-Bottom">

                            <TaskInput title = "Due Date" inputValue={props.dueDateValue} inputOnChange = {props.dueDateOnChange} 
                                divClassName ="TaskInputSectionbottom" TitleClassName = " MoreOption-Title alumni-sans-regular"
                                inputType = "Date" inputClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                            />

                            <TaskInput title = "Category" inputValue={props.categoryValue} inputOnChange = {props.categoryOnChange} 
                                divClassName ="TaskInputSectionbottom" TitleClassName = " MoreOption-Title alumni-sans-regular"
                                inputType = "text" inputClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                            />

                            <DropDownInput  title = "Status" items = {props.StatusDropDown} value={props.statusValue} 
                                onChange = {props.statusOnChange} divClassName ="TaskInputSectionbottom" 
                                SelectClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                                TitleClassName = " MoreOption-Title alumni-sans-regular" optionClassName = "DropDownOptionStyle" 
                                CompleteTextClassName = "CompletedText" InProgressTextClassName = "InProgressText"  NotStartedTextClassName = "InCompletedText"
                            />

                        </div>

                        <div className = "TaskBoxSection-Bottom SubmitContainer">
                            <Button buttonTitle = "Save" onClick={() => props.SaveTask()} buttonExtraStyle= "SubmitButton"/>
                            {props.taskID ? <Button buttonTitle = "Delete" onClick={() => props.DeleteTask(props.taskID)} buttonExtraStyle= "SubmitButton"/> 
                                : null  } 
                        </div>

                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}


export default TaskScreen