import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import './Login.css'
const { REACT_APP_API_URL } = process.env;

const Login = (props) => {
    const [username, setUsername] = useState('');
    useEffect(() => {
        console.log('useEffect username: ', username);
    }, [username]);

    const [password, setPassword] = useState('');
    useEffect(() => {
        console.log('useEffect password: ', password);
    }, [password]);

    async function fetchData(event) {
        event.preventDefault();
        let user = {
            username: username,
            password: password
        }

        axios.post(`${REACT_APP_API_URL}auth/signin`, user)
            .then(res => {
                console.log(res);
                const userRes = res.data;
            })
    }

    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.showModal}
            contentLabel="Minimal Modal Example"
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
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <p className="form-label">Senha</p>
                <input
                    type="password"
                    name="password"
                    className="form-input-senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button className="form-button" type="submit" >
                    <p className="form-label-button">Entrar</p>
                </button>
            </form>
        </ReactModal >
    );
}

export default Login;