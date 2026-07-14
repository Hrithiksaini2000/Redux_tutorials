import { useSelector } from "react-redux"
import { MdDeleteForever } from "react-icons/md"

export const Todo = () => {

    const tasks = useSelector((state) => state.task)
    //    console.log("React States",state.task)

    return (
        <div className="container">
            <div className="todo-app">
                <h1>Todo List : </h1>
                <div className="row">
                    <form>
                        <input type="text" id="input-box" placeholder="Add a new task" />
                        <button>Add Task</button>
                    </form>
                </div>
                <ul id="list-container">
                    {
                        tasks.map((curtask, index) => {
                            return (
                                <li key={index}>
                                    <p>{index}: {curtask}</p>
                                    <div>
                                        <MdDeleteForever />
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