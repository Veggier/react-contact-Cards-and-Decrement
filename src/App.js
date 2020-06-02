import React, {Component} from 'react';
import ContactCard from "./ContactCard"
import './App.css';
import Decrement from './Decrement';

// class HelloWorld extends Component{
//   render(){
//     return <h1>Hello world!{1+2}</h1>
//   }
// }
// class HelloWorld1 extends Component{
//   render(){
//     return <h1>Hello {this.props.name}!</h1>
//   }
// }
// class HelloFriend extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name: props.name,
//     };
//     setTimeout(this.updateName.bind(this), 2000);
// }
// updateName() {
//   this.setState({ name: "Jeff" });
// }
// render() {
//   return <h1>Hello {this.state.name}</h1>;
// }
// }
class App extends Component{
  render(){
    return(
    <>
    <ContactCard 
      name="jiang"
      mobile="123456789"
      work="8000022222"
      email="jiang@gmail.com"
     />
      <ContactCard 
      name="lee"
      mobile="12214126789"
      work="802342522"
      email="leas@gmail.com"
     />
      <ContactCard 
      name="tim"
      mobile="12312789"
      work="8000213e22"
      email="lsfas@gmail.com"
     />
    <Decrement start={5}/>
      {/* <HelloWorld />
      <HelloWorld1 name="Jiang"/>
      <HelloFriend name="tom"/> */}
    </>
    )
  }
}

export default App;

//npm cache clean --force
