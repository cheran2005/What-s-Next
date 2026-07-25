import './TaskTable.css';
import { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti";
function TaskTable(prop) {
    const columnTitles = ["Task","Due Date", "Category", "Status"]
    const [openTaskScreen, setTaskScreen] = useState(false);
    const [tasks, setTasks] = useState([]);

    return(
        <>
           <div className = "Column-Section TableHeader alumni-sans-regular">
                {columnTitles.map((title,i) =>(
                    <p className ="columnTitle" key = {i}>{title}</p>
                ))}
           </div> 

            <div className = "TaskRows">

                
                    {(prop.Tasks || []).map((task) =>(
                        <div key = {task.id} className = "TaskRowContainer">

                            <div onClick = {() => prop.handleRowClick(task.id)} className = "Column-Section Row-Section alumni-sans-regular"  key = {task.id}>
                                <p className ="columnTitle Row-Title" >{task.taskTitle}</p>
                                <p className ="columnTitle Row-Title">{task.dueDate}</p>
                                <p className ="columnTitle Row-Title">{task.category}</p>
                                <p className ={`columnTitle Row-Title ${task.status === "Complete" ? "CompletedText" 
                                    : task.status === "In Progress" ? "InProgressText" :task.status === "Not Started" ? "InCompletedText" :"alumni-sans-regular"
                                }`}>{task.status}</p>

                                
                                
                            </div>
                        </div>
                    ))}

                    
           </div> 
        </>
    )
}


export default TaskTable