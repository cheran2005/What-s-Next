import { useState, useEffect } from 'react';
import {DoesIndexDbSupport,DBSetUp,GetAllTask,GetTask,UpdateTask,DeleteTask} from './database/IndexedDb'
import { IoIosExit } from "react-icons/io";

import './App.css';
import Logo from './assets/Whats-Next.jpg';
import SearchTask from './component/SearchTask';
import Button from './component/Button';
import TaskTable from './component/TaskTable';
import TaskScreen from './component/TaskScreen';
import DeletePopUp from './component/DeletePopUp';


function App() {

  const [OpenTaskScreen , setTaskScreen] = useState(false);
  const [db, setdb] = useState(null);
  const [tasks , setTask] = useState([]);
  const [searchTask, setSearchTask] = useState("");
  const [searchTaskSet, setSearchTaskSet] = useState([]);
  const [ taskId, setTaskId] = useState(null);
  const [ taskTitle, setTaskTitle] = useState("");
  const [ taskDetails, setTaskDetails] = useState("");
  const [ taskDueDate, setTaskDueDate] = useState("");
  const [ taskCategory, setTaskCategory] = useState("");
  const [ taskStatus, setTaskStatus] = useState("");
  const [ deletePopUp, setDeletePopUp] = useState(false);

  const status = ["Not Started", "In Progress", "Complete"]

  const openPopUp = () =>{
    setTaskScreen(true);
  }

  const closePopUp = () =>{
    setTaskId(null);
    setTaskTitle("");
    setTaskDetails("");
    setTaskDueDate("");
    setTaskCategory("");
    setTaskStatus("");
    setTaskScreen(false);
  }
  
  const handleRowClick = async (id) => {
    const Task = await GetTask(db,id);
    setTaskId(id);
    setTaskTitle(Task.taskTitle);
    setTaskDetails(Task.taskDetails);
    setTaskDueDate(Task.dueDate);
    setTaskCategory(Task.category);
    setTaskStatus(Task.status);
    openPopUp();
  }


  const loadTask = async () => {
    const allTask = await GetAllTask(db); 
    setTask(allTask);
  }

  useEffect(() => {
      const startUp = async () =>{
        const dbPromise = await DBSetUp();
        const allTask = await GetAllTask(dbPromise);
        setdb(dbPromise);
        setTask(allTask); 
        
      }
    startUp();
    
    
  },[])


  useEffect(() => {
    if (db != null){
      loadTask();

    }
    
  },[OpenTaskScreen])

  useEffect(() => {
    const lowerCaseSearch = searchTask.toLowerCase();
    const newTaskSet = tasks.filter((user) => user.taskTitle.toLowerCase().includes(lowerCaseSearch));
    setSearchTaskSet(newTaskSet);
    
  },[searchTask , tasks])


  const SaveTask = async () =>{
    const Task = {
      taskTitle : taskTitle || "untitled",
      taskDetails : taskDetails ,
      dueDate : taskDueDate ,
      category : taskCategory,
      status : taskStatus || "Not Started"
    }

    if (taskId != null){
      Task.id = taskId;
    }

    UpdateTask(db,Task);
    closePopUp();
  };

  const RemoveTask = async(id) =>{
    DeleteTask(db,id);
    loadTask();
    closePopUp();
    setDeletePopUp(false);
  };

  
  
  return (
    <>
      <div className = "Main">
          <div className = "Middle-Grid">

              <img className = "logo" src = {Logo} alt = "Logo pictures"/>

              <div className = "TopSection">

                <SearchTask inputValue= {searchTask} inputOnChange = {(event) => setSearchTask(event.target.value)}/>

                <div className = "Top-ButtonSection">
                  <Button  buttonTitle = "Add" onClick={openPopUp}/>
                </div>  
                  
              </div>

            <TaskTable Tasks = {searchTaskSet} handleRowClick = {handleRowClick}/> 

          </div>

      </div>
      {OpenTaskScreen ?  <TaskScreen StatusDropDown={status} exitScreen={closePopUp} 
        titleValue = {taskTitle} titleOnChange= {(event) => setTaskTitle(event.target.value)}
        detailsValue = {taskDetails} detailsOnChange= {(event) => setTaskDetails(event.target.value)}
        dueDateValue = {taskDueDate} dueDateOnChange= {(event) => setTaskDueDate(event.target.value)}
        categoryValue = {taskCategory} categoryOnChange= {(event) => setTaskCategory(event.target.value)}
        statusValue = {taskStatus} statusOnChange = {(event) => setTaskStatus(event.target.value)}
        SaveTask = {SaveTask}  taskID = {taskId} DeleteTask = {() =>setDeletePopUp(true)}
      
      /> : null}

      {deletePopUp ? <DeletePopUp DeleteTask = {RemoveTask} taskID = {taskId} exitScreen={() =>setDeletePopUp(false)}/> : null}
    </>
  )
}

export default App
