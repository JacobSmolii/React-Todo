import React,{Component} from "react";
import "./Todo.css"

class Todo extends Component{
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

    }

    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    handleToggle(evt){
        this.props.toggleTodo(this.props.id)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemove}>X</button>
               <li className={this.props.completed ? 'completed' : ""} onClick={this.handleToggle}> {this.props.test}</li>
            </div>
        );
    }
}
export default Todo