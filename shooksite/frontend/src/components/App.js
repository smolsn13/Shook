import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import Tester from "./Test";
import Home from "./Home";
import Nav from "./Nav";
import Profile from "./Profile";
import auth from '../auth';
import Login from './Login';
import SignUp from './SignUp';
import ShakeList from './ShakeList';
import ProposalForm from './ProposalForm';
import StatusEditForm from './StatusEditForm';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import ShakeDetail from './ShakeDetail';



const App = () => (
    <Router history={Router.browserHistory}>
      <div>
      <Nav />
      <Route path = "/login" component={Login} />
      <Route path = '/signup' component={SignUp} />
      <Route path='/proposeshake' component={ProposalForm} />
      <Route path='/shakes/:id' component={(params) => (
        <DataProvider endpoint="/api/shakes/" params={params} render={
                      (data) => (<ShakeDetail data={data}/>)
                    } /> ) }/>
      <Route exact path="/" render={() => (
        (auth.loggedIn()) ? (
          <Redirect to="/profile"/>
        ) : (
          <Home/>
        ))} />
      <Route path = "/profile" component={Profile} />
      <Route path = '/shakelist' component={ShakeList} />
      <Link to='/shakes/4'>CLICK ME</Link>
      {/* <DataProvider endpoint="api/shook/"
                    render={(data) => <Table data={data} />} /> */}
      {/* <Form endpoint="api/shook/" /> */}
      </div>
    </Router>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
