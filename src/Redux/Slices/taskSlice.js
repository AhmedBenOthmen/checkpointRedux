import { createSlice } from '@reduxjs/toolkit';

// Create a Redux slice named 'tasks' with initial state as an empty array
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // Define a 'addTask' action to add a task to the state
    addTask: (state, action) => {
      state.push(action.payload);
    },
    // Define an 'editTask' action to edit a task by ID
    editTask: (state, action) => {
      const { id, description, isDone } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.description = description;
        task.isDone = isDone;
      }
    },
  },
});

// Export the 'addTask' and 'editTask' actions
export const { addTask, editTask } = taskSlice.actions;

// Export the reducer function for the 'tasks' slice
export default taskSlice.reducer;
