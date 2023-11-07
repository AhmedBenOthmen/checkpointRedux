import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../Redux/Slices/taskSlice.js';
import { Button } from 'react-bootstrap';

function Task({ task }) {
  // State to manage the edit mode and edited description
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  // Function to handle saving the edited task
  const handleEdit = () => {
    dispatch(editTask({ id: task.id, description: editedDescription, isDone: task.isDone }));
    setIsEditing(false);
  };

  return (
    <div className='task'>
      {isEditing ? (
        // Render edit input and save button when in edit mode
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="editInput"
          />
          <Button variant="info" onClick={handleEdit}>Save</Button>
        </div>
      ) : (
        // Render task description, checkbox, and edit button when not in edit mode
        <div className='littleTask'>
          <span className="task-text"> {task.description}</span>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => dispatch(editTask({ id: task.id, description: task.description, isDone: !task.isDone }))}
            className="checkbox"
          />
          <Button variant="info" onClick={() => setIsEditing(true)}>Edit Task</Button>
        </div>
      )}
    </div>
  );
}

export default Task;
