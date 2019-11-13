import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// implement Todo component
const Todo = props => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/"+props.todo._id}>Edit</Link>
    </td>
  </tr>
)

export default class TodosList extends Component {

  // initialize the state with an empty todos array
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  // to retrieve the todo data from the database the component DidMount method is added
  componentDidMount() {
    axios.get('http://localhost:4000/todos')
      .then(response => {
        this.setState({ todos: response.data });
      })
      .catch(function (error){
        console.log(error);
      })
  }

  // a method to output a table row for each todo item that will be in tbody element
  todoList() {
    return this.state.todos.map(function(currentTodo, i){
      return <Todo todo={currentTodo} key={i} />;
    })
  }

  render() {
          return (
              <div>
                  <h3>Todos List</h3>
                  <table className="table table-striped" style={{ marginTop: 20 }} >
                      <thead>
                          <tr>
                              <th>Description</th>
                              <th>Responsible</th>
                              <th>Priority</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                        { this.todoList() }
                      </tbody>
                  </table>
              </div>
          )
      }
}
