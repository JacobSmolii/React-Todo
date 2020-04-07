import React,{Component} from "react";
import Todo from "./Todo";
import Form from './Form'


class TodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            todo: []

        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.toggleComplition = this.toggleComplition.bind(this);
    }
    create(newTodo){
        this.setState({
            todo: [...this.state.todo,newTodo]
        })
    }
    remove(id){
        this.setState({
            todo:this.state.todo.filter(t => t.id !== id)
        })
    }
    toggleComplition(id){
        const updatedTodo = this.state.todo.map(todo => {
            if(todo.id === id){
                return{...todo,completed: !todo.completed}
            }
            return todo;
        })
        this.setState({todo:updatedTodo})
    }
    render() {
        const todos = this.state.todo.map(todo => {
            return <Todo  key = {todo.id} id = {todo.id} test = {todo.task}  removeTodo = {this.remove} completed = {todo.completed} toggleTodo = {this.toggleComplition}/>
        })
        return (
            <div>
                <h1>Todo List</h1>
                <Form create = {this.create}/>
                {todos}
            </div>
        );
    }
}

export default TodoList