import React from 'react';
import CustomButton from '../../components/button/Button';
import { Field, reduxForm } from 'redux-form'
import {Form, Segment, Grid, Header, Message} from 'semantic-ui-react';
import './Login.css';
import Input from '../../components/inputs/Input';
import {required} from '../../validations';
import { Link } from 'react-router-dom';
import {fetchLoginUser} from '../../redux/modules/auth'
import { useDispatch } from 'react-redux';

let Login = (props) => {
    const {handleSubmit, history} = props;
    const dispatch = useDispatch();
    const onSubmit = prop => {
      dispatch(fetchLoginUser(prop));
      history.push("/");
    }

    return (
        <div className="ui-login">
        <Grid textAlign="center" verticalAlign="middle" className="login-form">
          <Grid.Column>
            <Header as="h2" color="blue" textAlign="center">
              Please Login...
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)} size="large">
              <Segment stacked>
                <Field
                  fluid
                  name='email'
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  component={Input}
                  validate={required}
                />
                <Field
                  name='password'
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  component={Input}
                  validate={required}
                />
                <CustomButton type="submit" fluid size="large">
                  Login
                </CustomButton>
              </Segment>
            </Form>
            <Message>
              New User? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
}

Login = reduxForm({
    form: 'login'
  })(Login)

export default Login;