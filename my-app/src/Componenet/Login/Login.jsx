import React from 'react'
import { Formik } from "formik";
import { Form } from "formik";
import { Field } from 'formik';
import * as Yup from 'yup';
import './Login.css'
import Sing from '../Singup/Sing';
import { useState } from 'react';
const LoginSchema = Yup.object().shape({
    email_number: Yup.string().email("Email sehvdir").min(6, "Daha duzgun yazin").required("Email ve ya nomre daxil edin "),
password: Yup.string().min(8, "En az 8 isareli parol qoyun").required("Bu hisseni doldurun").matches(/^[a-zA-Z0-9@.#$%?]+$/)
});
function Login() {
    const [view, setview] = useState("none");
    const [opc, setopc] = useState(1)
    const wiew = () => {
        setview("block")
        setopc(0.25)
    }
    const hidden=()=>{
        setview("none")
        setopc(1)
    }
    return (
        <div className='login'>
            <div className='ad' style={{ opacity: opc }}>
                <div className='facebook'>
                    <div className='facebook_img'><img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" /></div>
                    <h2 >Connect with friends and the world around you on Facebook.</h2>
                </div>
                <div >
                    <Formik
                        initialValues={{
                            email_number: "",
                            password: "",

                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {

                            console.log(values);
                        }

                        }
                    >
                        {({ values, errors }) => (
                            <Form className='form'>
                                <div id='forms'>
                                    <Field id='email_number' name="email_number" placeholder="Email or phone number" />
                                    {errors.email_number ? <div style={{color:"red",fontsize:12}}>{errors.email_number}</div> : null}
                                </div>
                                <div id='forms'>
                                    <Field id='password' name="password" placeholder="Password" />
                                    {errors.password ? <div style={{color:"red",fontsize:12}}>{errors.password}</div> : null}
                                </div>

                                <button id='logbtn' type="submit">Log In</button>
                                <a href="./">Forgot password ?</a>
                                <div className='solid'></div>
                                <button id='newaccountbtn' onClick={wiew} >Create new account</button>
                            </Form>

                        )}
                    </Formik>
                </div>
            </div>
            <div className='signlog' style={{ display: view }}><button className='X' onClick={hidden}>X</button><Sing /></div>
        </div>
    )
}

export default Login