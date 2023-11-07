import  {configureStore} from '@reduxjs/toolkit'
import taskReducer from './Slices/taskSlice.js'



const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;