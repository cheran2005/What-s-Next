import { useState, useEffect } from 'react';

import { IoIosExit } from "react-icons/io";
import './App.css';
import Logo from './assets/Whats-Next.jpg';
import SearchTask from './component/SearchTask';
import Button from './component/Button';
import TaskTable from './component/TaskTable';
import TaskScreen from './component/TaskScreen';
import {DoesIndexDbSupport} from'./database/IndexedDb'
function App() {

  const [OpenTaskScreen , setTaskScreen] = useState(false);

  const status = ["Not Started", "In Progress", "Complete"]

  const openPopUp = () =>{
    setTaskScreen(true);
  }

  const closePopUp = () =>{
      setTaskScreen(false);
  }
  
  useEffect(() => {
    DoesIndexDbSupport();
  },[]);

  
  return (
    <>
      <div className = "Main">
          <div className = "Middle-Grid">

              <img className = "logo" src = {Logo} alt = "Logo pictures"/>

              <div className = "TopSection">

                <SearchTask />

                <div className = "Top-ButtonSection">
                  <Button  buttonTitle = "Add" onClick={openPopUp}/>
                  <Button  buttonTitle = "Edit"/>
                </div>  
                  
              </div>

            <TaskTable openTaskScreen = {() => openPopUp()}/> 

          </div>

      </div>
      {OpenTaskScreen ?  <TaskScreen StatusDropDown={status} ExitScreen={closePopUp}/> : null}
    </>
  )
}

export default App
