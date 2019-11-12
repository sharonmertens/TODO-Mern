import React, { Component } from 'react';

export default class CreateTodo extends Component {

  // add constructor to the component class:
  constructor(props) {
    super(props);

    // because we are dealing with the component's state object, we need to make sure to bind the methods to this by adding:
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // inside constructor, setting the initial state of the component by assigning an object to this.state
    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
  }

  // adding methods which can be used to update the state properties
  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setstate({
      todo_responsible: e.target.value
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  // another method to handle the submit even of the form to create a new todo item

onSubmit(e) {
  // ensure that the default HTML form submit behavior is prevented
  e.preventDefault();

  console.log(`Form submitted:`);
  console.log(`Todo Description: ${this.state.todo_description}`);
  console.log(`Todo Responsible: ${this.state.todo_responsible}`);
  console.log(`Todo Priority: ${this.state.todo_priority}`);

  // resetting the form
  this.setState({
    todo_description: '',
    todo_responsible: '',
    todo_priority: '',
    todo_completed: false
  })
}

// add the JSK code  needed to display the form:
  render() {
    return (
      <div style={{marginTop: 10}}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Description: </label>
            <input  type="text"
                    className="form-control"
                    value={this.state.todo_description}
                    onChange={this.onChangeTodoDescription}
                    />
          </div>

          <div className="form-group">
            <label>Responsible: </label>
            <input  type="text"
                    className="form-control"
                    value={this.state.todo_responsible}
                    onChange={this.onChangeTodoResponsible}
                    />
          </div>

          <div className="form-group">
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                      type="radio"
                      name="priorityOptions"
                      id="priorityLow"
                      value="low"
                      checked={this.state.todo_priority==='Low'}
                      onChange={this.onChangeTodoPriority}
                      />
                <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                      type="radio"
                      name="priorityOptions"
                      id="priorityMedium"
                      value="medium"
                      checked={this.state.todo_priority==='Medium'}
                      onChange={this.onChangeTodoPriority}
                      />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input  className="form-check-input"
                      type="radio"
                      name="priorityOptions"
                      id="priorityHigh"
                      value="High"
                      checked={this.state.todo_priority==='High'}
                      onChange={this.onChangeTodoPriority}
                      />
                <label className="form-check-label">High</label>
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Todo" className="btn btn-primary" />
          </div>

        </form>
      </div>
    )
  }
}
