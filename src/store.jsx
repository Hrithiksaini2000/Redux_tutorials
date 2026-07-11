import { createStore } from "redux"

const Add_Task = "type/add"
const Delete_Task = "type/delete"

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
                return index === action.payload
            })

            console.log(update_task)

            return{
                ...state,
                task: update_task,
            }

        default:
            return state;
    }
}

// Create Actioncreator function
const addtask = (data) =>{
    return{
    type: Add_Task,
    payload: data
    }
}

const deletetask = (id) =>{
    return{
    type: Delete_Task,
    payload: id 
    }
}

// Create a store 
export const store = createStore(taskreducer)

console.log("Intial state: ", store.getState())

// Dispatch Function
store.dispatch(addtask("Buy One Mango"))

// Get State
console.log("Add Dispatch", store.getState())

store.dispatch(addtask("Buy One More Mango"))

console.log("Add Dispatch", store.getState())

store.dispatch(deletetask(1))

console.log("Delete Dispatch", store.getState())
