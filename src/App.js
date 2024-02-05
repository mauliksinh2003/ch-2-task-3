import logo from './logo.svg';
import React from 'react';
import DigitalClock from './DigitalClock';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
      <h1>Component will Unmount</h1>
      <DigitalClock/>
      </div>
    )
  }
}
export default App;
