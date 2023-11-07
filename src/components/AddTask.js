import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/Slices/taskSlice.js';
import { Button } from 'react-bootstrap';

function AddTask() {
  // State to manage the task description input
  const [description, setDescription] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  // Function to add a new task to the Redux store
  const handleAddTask = () => {
    if (description.trim() !== '') {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription(''); // Clear the input after adding the task
    }
  };

  // Function to handle changes in the input field
  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  // Function to handle the Enter key press to add a task
  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='addTask'>
      {/* Input field for adding a new task */}
      <input
        type="text"
        placeholder="Add a new task to do"
        value={description}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyPress}
      />
      {/* Button to add a task */}
      <Button variant="secondary" onClick={handleAddTask}> Add Task to do</Button>
    </div>
  );
}

export default AddTask;
