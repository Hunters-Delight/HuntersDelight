import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import {
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ApiCalendar from 'react-google-calendar-api';

export default class minePage extends React.Component {
    constructor() {
        super();
        this.state = {
          journals: [],
          exercises: []
        };
        
      }


     
  render() {

    return (   
      <div>
        
      </div>
    );
  }
}