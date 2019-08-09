import React from 'react';
import './App.css';
import BmiCalculator from './components/BmiCalculator';	

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      title: "Body mass index (BMI) Calculator" 
    }
  } 

  render() {
    return (
      <div className="App">
        <BmiCalculator title={this.state.title}/>         
      </div>
    );
  }
}

export default App;
