import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task.js";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function ListTask() {
    // Get tasks from the Redux store
    const tasks = useSelector((state) => state.tasks);
    // State to manage task filtering
    const [filter, setFilter] = useState();

    // Filter tasks based on the selected filter
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
                {/* Buttons to filter tasks */}
                <ButtonGroup size="lg" className="mb-2">
                    <Button onClick={() => setFilter('all')}>All</Button>
                    <Button variant="success" onClick={() => setFilter('done')}>Done</Button>
                    <Button variant="danger" onClick={() => setFilter('notDone')}>Not Done</Button>
                </ButtonGroup>
            </div>
            {/* Render filtered tasks using the Task component */}
            {filteredTasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default ListTask;
