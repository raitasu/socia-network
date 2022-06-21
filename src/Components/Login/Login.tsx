import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import classes from './Login.module.css';
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {authMe} from "../Redux/Auth-reducer";

const loginFormSchema = Yup.object({
    email: Yup.string().email('Invalid e-mail').required('Required'),
    password: Yup.string().min(8, 'Must be longer than 8 characters').required('Required'),
});

const Login = () => {
    const dispatch = useDispatch();  // w1 w2


    return (
        <div className={classes.login}>

            <h1>Login</h1>
            <div style={{color: 'green'}}>email = free@gmail.com</div>
            <div style={{color: 'green'}}>password = qwerty123</div>
            <Formik
                initialValues={{email: '', password: '', rememberMe: false}}
                validationSchema={loginFormSchema}
                onSubmit={(values) => {
                    if (values.email === 'free@gmail.com' && values.password === 'qwerty123') {
                        dispatch(authMe())

                    }
                    console.log(values);
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field type='email' name='email' placeholder='e-mail'/>
                            <ErrorMessage name='email' component='p'/>
                        </div>
                        <div>
                            <Field type='password' name='password' placeholder='password'/>
                            <ErrorMessage name='password' component='p'/>
                        </div>
                        <div>
                            <Field type='checkbox' name='rememberMe'/>
                            <label htmlFor='rememberMe'>remember me</label>
                        </div>
                        <button type='submit'>Log in</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;