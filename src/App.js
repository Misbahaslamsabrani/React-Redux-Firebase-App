import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/projectdetails/:id" component={ProjectDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createproject" component={CreateProject} />

        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
