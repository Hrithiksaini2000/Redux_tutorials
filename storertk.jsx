import { configureStore, createSlice } from "@reduxjs/toolkit";

const Add_Task = "type/add"
const Delete_Task = "type/delete"
const Fetch_task = "type/fetch"

const initialState = {
    task: [],
}


// Redux toolkit code
// RTK create Slice

const taskreducer = createSlice({
    name: "task",
    initialState,
    reducers:{
        addtask(state, action){
            state.task.push(action.payload)
        },
        deletetask(state, action){
            state.task = state.task.filter((cur_task,index)=>{
              return index !== action.payload
            })
        },
    }
})

// console.log(taskreducer)

// Action creators
export const {addtask, deletetask} = taskreducer.actions

// New method 
export const store = configureStore({
    reducer:{
        taskreducer: taskreducer.reducer,
    }
})

console.log("Intial state: ", store.getState())

// Dispatch Function
console.log(store.dispatch(addtask("Buy One Mango")))
console.log(store.dispatch(addtask("Buy One Apple")))
console.log(store.dispatch(addtask("Buy One Orange")))