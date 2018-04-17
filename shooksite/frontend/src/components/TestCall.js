import React, { Component } from "react";
import { Navbar, NavItem, Icon, Dropdown, Button } from "react-materialize";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import auth from '../auth';
import axios from 'axios';
// import './App.css';

const TestCall = (data) => {


  var getUser = function() {
    auth.getUser((res) => {
      console.log(res.data.id)
      //do something with the user id or username
    })
  }


    return (
      <div className='shake-item'>
        <h1>HELLO</h1>

        <p onClick={getUser}>GET USER</p>

        <p>this is below the props</p>
      </div>
    )


}

export default TestCall;
