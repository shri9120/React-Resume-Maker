import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ResumeDetails from './Components/ResumeMaker/ResumeDetails';
import SigninForm from './Components/Auth/SigninForm';
import SignupForm from './Components/Auth/SignupForm';
import ResumeForm from './Components/ResumeMaker/ResumeForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <br/>
        <br/>
        <br/>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/resume/:id" component={ResumeDetails}/>
          <Route path="/signup" component={SignupForm}/>
          <Route path="/signin" component={SigninForm}/>
          <Route path="/create" component={ResumeForm}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
