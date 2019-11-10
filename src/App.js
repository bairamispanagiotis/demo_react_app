import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

const Body = () => (
  <p>
    Hi! Edit <code>src/App.js</code> and save to reload.
</p>
);

class Test extends React.Component {

  //function here this.

  render() {
    return (
      <p>Test</p>
    );
  }
}

function Header(data) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt={data.title} />
      <Body />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
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
