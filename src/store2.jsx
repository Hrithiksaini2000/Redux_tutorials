// Import createStore from Redux
import { createStore } from "redux";


// 1. Initial State (Data inside Redux store)
const initialState = {
    count: 0
};


// 2. Reducer Function
// Reducer receives current state and action
function counterReducer(state = initialState, action) {

    switch(action.type) {

        // When type is INCREMENT
        case "INCREMENT":
            return {
                count: state.count + 1
            };


        // When type is DECREMENT
        case "DECREMENT":
            return {
                count: state.count - 1
            };


        // When type is ADD_BY_VALUE
        // Here we are using payload
        case "ADD_BY_VALUE":
            return {
                count: state.count + action.payload
            };


        // If no action matches
        default:
            return state;
    }
}


// 3. Create Redux Store
const store = createStore(counterReducer);


// 4. Get Initial State
console.log("Initial State:", store.getState());


// 5. Dispatch INCREMENT Action
store.dispatch({
    type: "INCREMENT"
});

console.log("After Increment:", store.getState());


// 6. Dispatch DECREMENT Action
store.dispatch({
    type: "DECREMENT"
});

console.log("After Decrement:", store.getState());


// 7. Dispatch Action with Payload
store.dispatch({
    type: "ADD_BY_VALUE",
    payload: 10
});

console.log("After Adding 10:", store.getState());