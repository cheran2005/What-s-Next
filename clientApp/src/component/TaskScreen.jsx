import { IoIosExit } from "react-icons/io";
import TaskInput  from './TaskScreenComponents/TaskInput';
import TaskTextArea from './TaskScreenComponents/TaskTextArea';
import DropDownInput from './TaskScreenComponents/DropDownInput';
import Button from './Button';
import './TaskScreen.css';
function TaskScreen(props) {
    const Status = ["Completed", "In Progress","Not Started"]
    const SaveTask = () =>{}
    return(
        <div className = "TaskScreen" onClick={props.ExitScreen}>
            <div className ="TaskSection">
                <div className = "TaskBox" onClick={(event) => event.stopPropagation()}>
                    <IoIosExit className ="ExitIcon" onClick={props.ExitScreen} />

                    <div className = "TaskBoxSectionContainer">

                        <TaskInput title = "Task Title" inputValue={props.TitleValue} inputOnChange = {props.TitleOnChange} 
                            divClassName ="TaskInputSection" TitleClassName = " MoreOption-Title alumni-sans-regular"
                            inputType = "text" 
                            inputClassName = "MoreOption-Input InputStyle"
                        />

                        <TaskTextArea title = "Task Details" textAreaValue = {props.DetailsValue} textAreaOnChange = {props.DetailsOnChange} 
                            divClassName ="TaskInputSection" TitleClassName = "MoreOption-Title alumni-sans-regular"
                            textAreaType = "Text" textAreaClassName = "MoreOption-Input InputStyle MoreOption-Input-Paragraph alumni-sans-regular"
                        />


                        <div className = "TaskBoxSection-Bottom">

                            <TaskInput title = "Due Date" inputValue={props.DueDateValue} inputOnChange = {props.DueDateOnChange} 
                                divClassName ="TaskInputSectionbottom" TitleClassName = " MoreOption-Title alumni-sans-regular"
                                inputType = "Date" inputClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                            />

                            <TaskInput title = "Category" inputValue={props.CategoryValue} inputOnChange = {props.CategoryOnChange} 
                                divClassName ="TaskInputSectionbottom" TitleClassName = " MoreOption-Title alumni-sans-regular"
                                inputType = "text" inputClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                            />

                            <DropDownInput  title = "Status" items = {props.StatusDropDown} dropDowninputValue={props.StatusValue} 
                                dropDowninputOnChange = {props.StatusOnChange} divClassName ="TaskInputSectionbottom" 
                                SelectClassName = "MoreOption-Input InputStyle alumni-sans-regular"
                                TitleClassName = " MoreOption-Title alumni-sans-regular" optionClassName = "DropDownOptionStyle"
                            />

                        </div>

                        <div className = "TaskBoxSection-Bottom SubmitContainer">
                            <Button buttonTitle = "Save" onClick={SaveTask} buttonExtraStyle= "SubmitButton"/>
                        </div>

                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}


export default TaskScreen