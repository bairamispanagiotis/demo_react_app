import React from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';
import MyForm from './components/MyForm';

class Test extends React.Component {

  //function here this.

  render() {
    return (
      <p>Test</p>
    );
  }
}

class App extends React.Component {
  state = {
    visible: true
  }
  //const add = (a, b) => a + b;
  render() {

    const buttonText = this.state.visible ? "hide" : "show";
    const slider = this.state.visible ? <ImageSlider /> : null ;

    return (
      <div className="App">
        {/* <Header title="Hello from app" num={7} myObj={{
          a: 5,
          b: 6
        }}
          myArray={[1, 2, 3]}
          myFunc={(a, b) => a + b} />
        <Counter initialCount={0} />
        <Counter initialCount={10} />
        {slider}
        <button onClick={() => {
          this.setState({ visible: !this.state.visible });
        }}> {buttonText}</button> */}
        <MyForm />
      </div>
    );
  }

}

export default App;
