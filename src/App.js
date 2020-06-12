import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import about  from './components/pages/about';

class App extends Component{


  state = {
  todos: []

  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data }))
  }

  markComplete = (id) =>{
       this.setState({todos : this.state.todos.map( todo =>
         {
           if(todo.id === id){
             todo.completed = !todo.completed  //toggle between true and false
           }
           return todo;
         }
       )})
  }

  delTodo =(id) =>{
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
      //filter operator which removes list which matches the id
    });
    /*
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
   this.setState({
     todos: [...this.state.todos.filter(todo => todo.id !== id)]
   })
 );
      */
  }

  addTodo =(title) =>{
    const newTodo={
      id: uuid(),
      title :title,
      completed: false
    }
    this.setState({
          todos: [...this.state.todos, newTodo]
    });
  /*  axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
          })
          .then(res => {
            res.data.id = uuid.v4();
            this.setState({ todos: [...this.state.todos, res.data] });
          });
*/
  };
render(){
  return (
    <Router>
    <div className="App">           { /*Default as specified in index.js */ }
         <div className="container"> {/*for css*/}
           <Header />               {/* header of the page */}
           <Route exact path="/" render={ props=> (
             <React.Fragment>
           <AddTodo addTodo={this.addTodo}/>  {/*To add a list*/}
           <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
           {/*To delete a todo and to mark complete values passed are properties which are defined above*/}

           </React.Fragment>

         )} />
          <Route path="/about" component={about}/>
         </div>
    </div>
    </Router>
  );
}
}

export default App;
