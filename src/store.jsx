import { applyMiddleware, createStore } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension';

import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const Add_Task = "type/add"
const Delete_Task = "type/delete"
const Fetch_task = "type/fetch"

const initialState = {
    task: [],
}

// Reducer Function 

function taskreducer(state = initialState, action) {
    switch (action.type) {

        case Add_Task:
            return {
                ...state,
                task: [...state.task, action.payload],
            }

        case Delete_Task:
            const update_task = state.task.filter((curs_task, index) => {
                return index !== action.payload
            })

            console.log(update_task)

            return{
                ...state,
                task: update_task,
            }

         case Fetch_task:
            return{
                ...state,
                task: [...state.task, ...action.payload]
            }   

        default:
            return state;
    }
}

// Create Actioncreator function
export const addtask = (data) =>{
    return{
    type: Add_Task,
    payload: data
    }
}

export const deletetask = (id) =>{
    return{
    type: Delete_Task,
    payload: id 
    }
}

// Redux thunks function 
export const fetchtask = () =>{
    return async (dispatch) =>{
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            const task = await res.json()
            console.log(task)
            dispatch({
    type: Fetch_task,
    payload: task.map((cur_task) => cur_task.title)
    })
        } catch (error) {
            console.log(error)
        }
    }
}

// Create a store 
export const store = createStore(taskreducer,composeWithDevTools(applyMiddleware(thunk)))

console.log("Intial state: ", store.getState())

// Dispatch Function
store.dispatch(addtask("Buy One Mango"))
store.dispatch(addtask("Buy One Apple"))
store.dispatch(addtask("Buy One Orange"))

// Get State
console.log("Add Dispatch", store.getState())

store.dispatch(addtask("Buy One More Mango"))

console.log("Add Dispatch", store.getState())

store.dispatch(deletetask(1))
console.log("Delete Dispatch", store.getState())
