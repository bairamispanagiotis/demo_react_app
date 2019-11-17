import React from 'react';

const initialState = {
    name: '',
    surname: '',
    password: '',
    email: '',
    nameError: '',
    surnameError: '',
    passwordError: '',
    emailError: ''
}


export default class MyForm extends React.Component {

   
    state = initialState;

    handleChange = (event) => {
        const isCheckbox = event.target.name === 'checkbox';
        this.setState({ [event.target.name]: isCheckbox ? event.target.checked : event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
       
        const isValid = this.validate();
       
        if (isValid) {
            console.log(this.state);
            this.setState(initialState);
            //clear form
        }
    };

    validate = () => {
      
        let emailError = '';
        let passwordError = '';
        let nameError = '';
        let surname = '';
       
        if (!this.state.email.includes('@')) {
          
            emailError = 'Invalid email';
        }

        if(!this.state.name){
            nameError = "name cannot be blank";
        }

        if (emailError) {
            this.setState({ emailError });
            return false;
        }

        if (nameError) {
            this.setState({ nameError });
            return false;
        }


        return true;
    };

    render() {
        return <form noValidate onSubmit={this.handleSubmit}>
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
            </div>
            <div>
                <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                <div style={{ fontSize: 12, color: "red" }}>{this.state.surnameError}</div>
            </div>
            <div>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
            </div>
            <div>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
            </div>

            <button type="submit">Submit</button>
        </form>
    };
}