import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
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

export const { addTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
