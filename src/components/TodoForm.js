import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTask: ""
        };
    }
    handleChange = e => {
        this.setState({...this.state,
        newTask: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTask)
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange}
                    type="text"
                    name="item"
                    value={this.state.newTask}
                />
                <button>New Task</button>
            </form>
        );
    }
}

export default TodoForm;