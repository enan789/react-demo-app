import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    if(this.props.todo){
      return (
        <li className="Todo">
          <strong>{this.props.todo.title}</strong>
        </li>
      );
    }
    else {
      return null;
    }
  }
}

export default TodoItem;
