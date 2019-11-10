import React from 'react';
import './App.css';
import Header from './components/Header';

class Test extends React.Component {

  //function here this.

  render() {
    return (
      <p>Test</p>
    );
  }
}

function App() {
  //const add = (a, b) => a + b;
  return (
    <div className="App">
      <Header title="Hello from app" num={7} myObj={{
        a: 5,
        b: 6
      }}
        myArray={[1, 2, 3]}
        myFunc={(a, b) => a + b} />
    </div>
  );
}

export default App;
