import React, { Component } from 'react';
import UserListContainer from './containers/UserListContainer';
import TodoListContainer from './containers/TodoListContainer';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return 
      <Switch>
        <Route exact path='/' component={UserListContainer}/>
        <Route path='/todos/:userId' component={TodoListContainer}/>
      </Switch>
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
