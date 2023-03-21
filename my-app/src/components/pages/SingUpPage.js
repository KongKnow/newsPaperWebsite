import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from './formSlice'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './formPage.scss'

const SingUpPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const hanadleSingUp = (email, password, name) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user)
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
                name: name
            }))

            return navigate("/profile");
        })
        .catch(console.error)
    }

    return (
        <>
            <Header/>
            <div className="form-section">
                <div className="container">
                    <div className="form-section-inner">
                        <Formik

                            initialValues={{
                                name : '',
                                email: '',
                                password: '',
                            }}
                            validationSchema={Yup.object({
                                name: Yup.string().min(5, 'Minimum 5 symbols').required('You should enter your name here'),
                                email: Yup.string().email('Enter an email, please!').required('You shoud enter your email!')
                            })}
                            onSubmit={values => {
                                hanadleSingUp(values.email, values.password, values.name)
                            }}
                        >
                            <Form className='form-section-form'>
                                <Field className='form-section-input' id='name' name='name' type='text'/>
                                <ErrorMessage className='form-section-error' name='name' component='div'/>
                                <Field className='form-section-input' id='email' name='email' type='text'/>
                                <ErrorMessage className='form-section-error' name='email' component='div'/>
                                <Field className='form-section-input' id='password' name='password' type='password'/>
                                <button type="submit" className='form-section-btn'>Sing Up</button>
                                <span className="form-section-redirection">You have an accont? Log in <Link to='/login' className='form-section-link'>here</Link></span>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SingUpPage