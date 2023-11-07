import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Slices/taskSlice.js';
import { Button } from 'react-bootstrap';

function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (description.trim() !== '') {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription('');
    }
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='addTask'>
      <input
        type="text"
        placeholder="Add a new task to do"
        value={description}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
      />
      <Button onClick={handleAddTask}> Add Task to do</Button>
      
    </div>
  );
}

export default AddTask;
