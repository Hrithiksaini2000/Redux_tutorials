import { useDispatch, useSelector } from "react-redux"
import { MdDeleteForever } from "react-icons/md"
import { useState } from "react"
import { addtask, deletetask, fetchtask } from "../store"

export const Todo = () => {

    const [task, setTask] = useState("")

    const tasks = useSelector((state) => state.task)
    //    console.log("React States",state.task)

    const dispatch = useDispatch()

    // const handleformsubmit=(e)=>{
    //     e.preventDefault()  
    //     dispatch(addtask(task))
    //     return setTask("")
    // }
    const handleformsubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    dispatch(addtask(task));
    setTask("");
};

    const handlefetchtasks = () =>{
        dispatch(fetchtask())
    }

    const handletaskdelete=(id)=>{
        return dispatch(deletetask(id))
    }
    return (
        <div className="container">
            <div className="todo-app">
                <h1>Todo List : </h1>
                <div className="row">
                    <form onSubmit={handleformsubmit}>
                        <input type="text" id="input-box" placeholder="Add a new task" value={task} onChange={(e) => setTask(e.target.value)}/>
                        <button>Add Task</button>
                        <button onClick={handlefetchtasks}>Fetch Tasks</button>
                    </form>
                </div>
                <ul id="list-container">
                    {
                        tasks.map((curtask, index) => {
                            return (
                                <li key={index}>
                                    <p>{index}: {curtask}</p>
                                    <div>
                                        <MdDeleteForever onClick={()=> handletaskdelete(index)} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}