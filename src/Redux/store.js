import  {configureStore} from '@reduxjs/toolkit'
import taskReducer from './Slices/taskSlice.js'


// Create a Redux store with the taskReducer
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;