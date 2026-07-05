import { useState } from 'react';
import './App.css';
import Logo from './assets/Whats-Next.jpg';
import SearchTask from './component/SearchTask';
import EditButton from './component/EditButton';
import AddButton from './component/AddButton';
import TaskTable from './component/TaskTable';
function App() {
  

  return (
    <>
      <div className = "Main">
          <div className = "Middle-Grid">
              <img className = "logo" src = {Logo} alt = "Logo pictures"/>

              <div className = "TopSection">
                <SearchTask />
                <div className = "Top-ButtonSection">
                  <AddButton />
                  <EditButton  />
                </div>
                  
              </div>

            <TaskTable/> 
          </div>
      </div>
    </>
  )
}

export default App
