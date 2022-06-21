import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import {useDispatch} from "react-redux";
import {addMessageAC, updateTextForMessageAC} from "../Redux/Dialogs-reducer";

const loginFormSchema = Yup.object({
    newMessageBody: Yup.string().min(1, 'Must be longer than 1 characters').required('Required'),
});

const AddMessageForm = () => {
const dispatch = useDispatch()

    return (
        <div>
            <Formik
                initialValues={{newMessageBody:''}}
                validationSchema={loginFormSchema}
                onSubmit={(values) => {
                    dispatch(updateTextForMessageAC(values.newMessageBody))
                    dispatch(addMessageAC())
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field type='textarea' name='newMessageBody' placeholder='enter text'/>
                            <ErrorMessage name='newMessageBody' component='p'/>
                        </div>

                        <button type='submit'>Add message</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddMessageForm;