import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import './Login.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const { REACT_APP_API_URL } = process.env;

const Login = (props) => {
    const MySwal = withReactContent(Swal)

    const [userLogin, setUser] = useState({
        user: {
            username: '',
            password: ''
        }
    });

    useEffect(() => {
        console.log('useEffect user: ', userLogin);
    }, [userLogin]);

    function onChangeHandler(event) {
        const { name, value } = event.target
        setUser({ user: { ...userLogin.user, [name]: value } })
    }

    async function fetchData(event) {
        event.preventDefault();
        axios.post(`${REACT_APP_API_URL}auth/signin`, userLogin.user)
            .then(res => {
                console.log(res);
                const userRes = res.data;
                localStorage.setItem("user", JSON.stringify(userRes))
                props.onLogin();
            }).catch(error => {
                MySwal.fire({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    icon: 'error',
                    title: <p className="logo">Error {error.response.status}</p>,
                    background: '#1a1a1f',
                    showClass: true,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                console.log("ERROR: ", error.response);
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
            <button className="btn-close" onClick={props.onLogin}>&times;</button>
            <p className="logo">Any Stream</p>
            <form onSubmit={(e) => fetchData(e)} className="form-login">
                <p className="form-label">E-mail</p>
                <input
                    type="email"
                    name="username"
                    className="form-input-email"
                    onChange={(e) => onChangeHandler(e)}
                    value={userLogin.username}
                    required
                />
                <p className="form-label">Senha</p>
                <input
                    type="password"
                    name="password"
                    className="form-input-senha"
                    onChange={(e) => onChangeHandler(e)}
                    value={userLogin.password}
                    required
                />
                <button className="form-button" type="submit" >
                    <p className="form-label-button">Entrar</p>
                </button>
            </form>
        </ReactModal >
    );
}

export default Login;