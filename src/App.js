import React from 'react';
import './Styles/ToDo.css';
import './Styles/ProgressBar.css';
import './Styles/Loading.css';
import './Styles/Level-1.css';
import './Styles/Level-2.css';
import './Styles/Level-3.css';
import './Styles/Level-4.css';
import './Styles/Level-5.css';
import ToDoList from './Components/ToDoList';


function App() {
  return (
    <div className='todo-app'>

      <ToDoList />
      
    </div>
  );
}

export default App;
