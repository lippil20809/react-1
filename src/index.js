import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


class Person extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      age: 28,
    }

this.hendalClick = this.hendalClick.bind(this)

  }
/*
  hendalClick(){
    this.setState({age:this.state.age + 1})
    this.setState({age:this.state.age + 1})
    this.setState({age:this.state.age + 1})
    this.setState({age:this.state.age + 1})
    this.setState({age:this.state.age + 1})
    один раз 
  }
*/
/*
hendalClick(){
  this.setState((state)=>({age:state.age + 1}))
  this.setState((state)=>({age:state.age + 1}))
  this.setState((state)=>({age:state.age + 1}))
  this.setState((state)=>({age:state.age + 1}))
  this.setState((state)=>({age:state.age + 1}))
  +5
}
*/

hendalClick(){
  this.setState((state)=>({age:state.age + 1}),
  ()=>{
    console.log(this.state)})
  
}

  render(){
    const {name,lastName} = this.props;
    const {age} = this.state;
    return (
      <p>
        <button onClick={this.hendalClick}>click</button>
        <p>
        name - {name}, lastName - {lastName}, age - {age}
        </p>
        
      </p>  

    )
  }
}
const PersonList = () =>{
  return (
    <>
    <Person name="Vlad" lastName="Tarasov"/>
    <Person name="Vlad" lastName="Tarasov"/>
    <Person name="Vlad" lastName="Tarasov"/>
    </>
  )
}

ReactDOM.render(<PersonList/>,document.getElementById('root'))