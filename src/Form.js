import React,{Component} from "react";
import uuid from 'uuid/v4';

class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            task:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })

    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.create({...this.state, id: uuid(), completed:false });
        this.setState({task: ""});
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <label htmlFor="task">Todo Task</label>
               <input
                   type="text"
                   name = "task"
                   id = "task"
                   value={this.state.task}
                   onChange={this.handleChange}
               />
               <button>Submit Todo</button>
           </form>
        );
    }
}
export default Form