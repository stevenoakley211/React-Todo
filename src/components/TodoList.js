import React from "react";
import Task from "./Todo";

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const TodoList = props => {
    return(
        <div>
            {
                props.tasks.map(
                    task => (
                        <div>
                            <Task 
                                key={task.id}
                                task={task}
                                toggleFinished={props.toggleFinished}
                            />
                        </div>
                    )
                )
            }
            <button onClick={props.clearFinished}>Clear Finished</button>
        </div>
    )
}
export default TodoList