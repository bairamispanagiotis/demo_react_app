import React from 'react';

export default class MyForm extends React.Component {

    state = {
        name: '',
        rememberMe: false,
        title: 'Test'
    }

    handleChange = event => {
        this.setState({name: event.target.value});
    };

    handleChangeChecked = event => {
        this.setState({rememberMe: event.target.checked});
    };

    handleSelect = event => {
        this.setState({title: event.target.value});
    }

    handleSubmit = () =>{
        console.log(this.state);
    }

    render() {
        return <div>
            <input value={this.state.name} onChange={this.handleChange}  />
            <input onChange={this.handleChangeChecked} type="checkbox"  checked={this.state.rememberMe} />
            <div>
            <select value={this.state.title} onChange={this.handleSelect}>
                <option>Test</option>
                <option>Test2</option>
                <option>Test3</option>
                </select>
            </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
    }
}