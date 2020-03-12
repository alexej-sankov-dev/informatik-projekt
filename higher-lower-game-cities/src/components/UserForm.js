import React from 'react';
import {Field, reduxForm, Form} from 'redux-form';
import users from '../apis/Users'
import history from '../history'

class UserForm extends React.Component{
    componentDidMount() {
        /*
        if(this.props.isSignedIn) {
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


    render() {
        /*
        if(!this.props.isSignedIn) {
            return(
                <div></div>
            )
        }
        */
        return (
            <Form onSubmit={this.props.handleSubmit(this.props.onSubmit)} className="ui form error">
                <Field name="username" component={this.renderInput} label="Nutzername" />
                <button className="ui button primary">Speichern</button>
            </Form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.username) {
        errors.username = 'Du musst einen Nutzernamen eingeben'
    } else {
        if(formValues.username.length < 5) {
            errors.username = 'Nutzername musst mindestens 5 Zeichen haben'
        }
    }
    /*
    var usernameCheck = await users.post('/checkUsername', {username: formValues.username}) 
    console.log(usernameCheck.data)
    if(usernameCheck.data.check) {
        errors.username = 'Username already exists'
    }
    */


    return errors;
};

UserForm = reduxForm({
    form: 'userForm',
    destroyOnUnmount: false,
    validate
})(UserForm)

export default UserForm

