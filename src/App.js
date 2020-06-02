import React, {Component} from 'react';
import ContactCard from "./ContactCard"
import './App.css';
import Decrement from './Decrement';

class App extends Component{
  render(){
    return(
    <>
    <ContactCard 
      name="Jiang"
      mobile="123456789"
      work="8000022222"
      email="jiang@gmail.com"
     />
      <ContactCard 
      name="Lee"
      mobile="12479234"
      work="802342522"
      email="leas@gmail.com"
     />
      <ContactCard 
      name="Tim"
      mobile="12312789"
      work="8000213e22"
      email="lsfas@gmail.com"
     />
     <br></br>
     <h2>Decrementer</h2>
    <Decrement start={10}/>
    </>
    )
  }
}

export default App;

