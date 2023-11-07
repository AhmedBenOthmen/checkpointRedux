import React, {useState} from "react";
import { useSelector } from "react-redux"; 
import Task from "./Task.js";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ListTask() {
    const tasks = useSelector((state) => state.tasks);
    const [filter, setFilter] = useState();
  
    const filteredTasks = tasks.filter((task) => {
      if (filter === 'all') return true;
      if (filter === 'done') return task.isDone;
      if (filter === 'notDone') return !task.isDone;
      return true;
    });
  
    return (
      <div className='taskList'>
        <h2>Tasks</h2>
        <div className='filterButtons'>
        <ButtonGroup size="lg" className="mb-2">
        <Button onClick={() => setFilter('all')}>All</Button>
        <Button variant="success" onClick={() => setFilter('done')}>Done</Button>
        <Button variant="danger" onClick={() => setFilter('notDone')}>Not Done</Button>
      </ButtonGroup>
           
        </div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    );
  }
  
  export default ListTask;