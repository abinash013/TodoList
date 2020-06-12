import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {

  getStyle = () =>{
    return {
       background:'#f4f4f4',
       borderBottom:'1px #ccc dotted',
       padding:'10px',
       textDecoration: this.props.todo.completed ? 'line-through' :'none'
  }
  }

  render(){

  const {id, title} = this.props.todo
  return (
    <div style={ this.getStyle() }>
<h1>
<input type="checkbox" onChange={ this.props.markComplete.bind(this,id)}/> {' '}
<button onClick={ this.props.delTodo.bind(this,id)} style={btnstyle}>X</button>
{title}
</h1>
</div>
  );
}
}

TodoItems.propTypes={
  todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnstyle={
  background : '#ff0000',
  color: '#fff',
  border: 'none',
  float: 'right',
  borderRadius:'50%',
  padding: '5px 8px',
  cursor: 'pointer'
}

export default TodoItems;
