import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import './Login.scss'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Button from '../Common/Button/Button';
import ScaleLoader from "react-spinners/ScaleLoader";

import * as yup from 'yup';
import { css } from "@emotion/react";
import { ErrorMessage, Field, Formik } from 'formik';
const { REACT_APP_API_URL } = process.env;

const Login = (props) => {
    const MySwal = withReactContent(Swal)
    let [loading, setLoading] = useState(false);
    const override = css`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

    // const [userLogin, setUser] = useState({
    //     user: {
    //         username: '',
    //         password: ''
    //     }
    // });

    const schema = yup.object({
        username: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório')
    })

    // useEffect(() => {
    //     console.log('useEffect user: ', userLogin);
    // }, [userLogin]);

    // function onChangeHandler(event) {
    //     const { name, value } = event.target
    //     setUser({ user: { ...userLogin.user, [name]: value } })
    // }

    async function fetchData(event) {
        setLoading(true);
        axios.post(`${REACT_APP_API_URL}auth/signin`, event)
            .then(res => {
                console.log(res);
                const userRes = res.data;
                localStorage.setItem("user", JSON.stringify(userRes))
                setLoading(false);
                props.onLogin();
            }).catch(error => {
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    icon: 'error',
                    title: <p className="logo">Error {error?.response?.status}</p>,
                    background: '#1a1a1f',
                    showClass: true,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                console.log("ERROR: ", error.response);
                setLoading(false);
            })
    }

    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.showModal}
            contentLabel="Login Modal"
            className="modal"
            overlayClassName="overlay"
            shouldCloseOnOverlayClick={true}
            onRequestClose={props.onLogin}
        >
            <div className="form-login">
                <ScaleLoader color={'#ffffff'} loading={loading} css={override} size={150} />
                <button className="btn-close" onClick={props.onLogin}>&times;</button>
                <p className="logo">Any Stream</p>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    validationSchema={schema}
                    onSubmit={(userLogin) => fetchData(userLogin)}
                    validateOnChange={false}
                    validateOnMount={false}
                >
                    {({ errors, touched, handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="form-login" noValidate>
                            <p className="form-label">E-mail</p>
                            <Field
                                type="email"
                                name="username"
                                className={errors.username ? 'form-input-error' : 'form-input'}
                            />
                            <ErrorMessage component="p" className="form-label-error" name="username" />
                            <p className="form-label">Senha</p>
                            <Field
                                type="password"
                                name="password"
                                className={touched.password && errors.password ? 'form-input-error' : 'form-input'}
                            />
                            <ErrorMessage component="p" className="form-label-error" name="password" />
                            <Button label="Entrar" type='submit' customClass="form-button" labelCustomClass="form-label-button" customHover />
                        </form>
                    )}
                </Formik>
            </div>
        </ReactModal >
    );
}

export default Login;