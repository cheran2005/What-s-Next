import { useState } from 'react';
import { IoIosExit } from "react-icons/io";
import './App.css';
import Logo from './assets/Whats-Next.jpg';
import SearchTask from './component/SearchTask';
import Button from './component/Button';
import TaskTable from './component/TaskTable';
import TaskScreen from './component/TaskScreen';
function App() {

  const [OpenTaskScreen , setTaskScreen] = useState(false);

  const openPopUp = () =>{
    setTaskScreen(true);
  }

    const closePopUp = () =>{
      setTaskScreen(false);
    } 

  return (
    <>
      <div className = "Main">
          <div className = "Middle-Grid">

              <img className = "logo" src = {Logo} alt = "Logo pictures"/>

              <div className = "TopSection">

                <SearchTask />

                <div className = "Top-ButtonSection">
                  <Button  buttonTitle = "Add" onAddClick={openPopUp}/>
                  <Button  buttonTitle = "Edit"/>
                </div>  
                  
              </div>

            <TaskTable /> 

          </div>

      </div>
      {OpenTaskScreen ?  <TaskScreen  ExitScreen={closePopUp}/> : null}
    </>
  )
}

export default App
