import './TaskTable.css';

function TaskTable() {
    const columnTitles = ["Task","Due Date", "Category", "Status"]

    var tasks = [
        {id : 1, Task : 'Basketball',DueDate : '2026/07/04',Category : "Sports" , Status : 'Completed'},
        {id : 2, Task : 'Basketball',DueDate : '2026/07/04',Category : "Sports" , Status : 'Completed'}
    ]
    return(
        <>
           <div className = "Column-Section alumni-sans-regular">
                {columnTitles.map((title,i) =>(
                    <p className ="columnTitle" key = {i}>{title}</p>
                ))}
           </div> 

            <div className = "TaskRows">
                {tasks.map((task) =>(
                    <div className = "Column-Section Row-Section alumni-sans-regular"  key = {task.id}>
                        <p className ="columnTitle Row-Title" >{task.Task}</p>
                        <p className ="columnTitle Row-Title">{task.DueDate}</p>
                        <p className ="columnTitle Row-Title">{task.Category}</p>
                        <p className ="columnTitle Row-Title">{task.Status}</p>
                    </div>
                ))}
           </div> 
        </>
    )
}


export default TaskTable