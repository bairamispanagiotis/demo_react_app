import React from 'react';

export default class MyForm extends React.Component {

    state = {
        name: '',
        rememberMe: '',
        title: 'Test'
    }

    handleChange = (event) => {
        const isCheckbox = event.target.name === 'checkbox';
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input name="name" value={this.state.name} onChange={this.handleChange} />
            <input name="rememberMe" onChange={this.handleChange} type="checkbox" checked={this.state.rememberMe} />
            <div>
                <select name="title" value={this.state.title} onChange={this.handleChange}>
                    <option>Test</option>
                    <option>Test2</option>
                    <option>Test3</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    }
}