import React from 'react';

export default class MyForm extends React.Component {

    state = {
        name: '',
        rememberMe: false,
        title: 'Test'
    }

    handleChange = (event, fieldName, isCheckbox) => {

        this.setState({ [fieldName]: isCheckbox ? event.target.checked : event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input value={this.state.name} onChange={(event) => this.handleChange(event, 'name')} />
            <input onChange={this.handleChange} type="checkbox" checked={(event) => this.state.rememberMe(event, 'checkbox', true)} />
            <div>
                <select value={(event) => this.state.rememberMe(event, 'select')} onChange={this.handleChange}>
                    <option>Test</option>
                    <option>Test2</option>
                    <option>Test3</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    }
}