import React from "react";

 const Task = (props) => {
    return (
      <div
      style={props.task.finished ? {textDecoration: 'line-through'} :null}
      //   className={`item${item.purchased ? " Finished" : ""}`}
      onClick={() => props.toggleFinished(props.task.id)}
      >
        <p>{props.task.name}</p>
      </div>
    );
  };
  
  export default Task;
  