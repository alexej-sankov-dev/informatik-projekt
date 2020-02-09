import React from 'react';
import {Field, reduxForm} from 'redux-form';
import users from '../apis/Users'
import history from '../history'

class UserForm extends React.Component{
    componentDidMount() {
        /*
        if(!this.props.isSignedIn) {
            history.push('/')
        }
        */
    }

    renderError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        this.props.setUserData(formValues);
    };

    render() {
        /*
        if(!this.props.isSignedIn) {
            return(
                <div></div>
            )
        }
        */
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="username" component={this.renderInput} label="Enter Username" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = async (formValues) => {
    const errors = {};
    if(!formValues.username) {
        errors.username = 'You must enter a username'
    }
    /*
    if(formValues.username < 5) {
        errors.username = 'Username must have at least 5 charcters'
    }
    
    var usernameCheck = await users.post('/checkUsername', formValues.username) 
    if(!usernameCheck.body.check) {
        errors.username = 'Username already exists'
    }
    */



    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(UserForm);

