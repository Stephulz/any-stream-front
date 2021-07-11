import React, { useEffect, useState } from 'react';
import './Header.css';
import userImage from '../../resources/user.png'
import { BiSearchAlt2 } from "react-icons/bi";
import Login from '../Login/Login';
import UserMenu from '../UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import fetchStreams from '../../redux/services/stream.service';
import Button from '../Common/Button/Button';

const Header = () => {

    const [showModal, setShowModal] = useState(false);
    const [showUserMenuModal, setShowUserMenuModal] = useState(false);
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        user: {
            id: Number,
            username: null,
            email: String,
            streamKey: String,
            imageUrl: null,
            roles: [
                {
                    id: Number,
                    name: String
                }
            ]
        },
    });

    useEffect(() => {
        const retrievedUser = JSON.parse(localStorage.getItem("user"));
        console.log("user from local storage: ", retrievedUser);
        if (retrievedUser !== null) {
            setUser(retrievedUser);
        }
    }, [showModal]);

    const schema = yup.object({
        search: yup.string()
            .required('Obrigatorio')
    })

    async function handleSearchStream(obj) {
        console.log(obj)
        dispatch(fetchStreams(obj.search));
    }

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleOpenUserMenuModal = () => {
        setShowUserMenuModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setShowUserMenuModal(false);
    }

    const handleLogout = () => {
        localStorage.clear();
        handleCloseModal();
        setUser({ user: null });
    }

    return (
        <div className="row">
            <div className="column">
                <NavLink to="/" className="column-logo" exact>Any Stream</NavLink>
                <NavLink to="/following">Seguindo</NavLink>
                <NavLink to="/search?">Procurar</NavLink>
            </div>

            <div className="column-middle">
                <Formik
                    initialValues={{ search: '' }}
                    validationSchema={schema}
                    onSubmit={(search) => handleSearchStream(search)}
                    validateOnChange={true}
                    validateOnMount={true}
                >
                    {(props) => (
                        <form onSubmit={props.handleSubmit} noValidate>
                            <Field
                                id="search"
                                type="text"
                                name="search"
                                placeholder="Buscar"
                                className="search-input"
                            />
                            <button
                                className={props.errors.search ? "search-button-invalid" : "search-button"}
                                type="submit">
                                <BiSearchAlt2
                                    className="search-button-icon"
                                    color="#b5b5b5"
                                ></BiSearchAlt2>
                            </button>
                        </form>
                    )}
                </Formik>
            </div>

            <div className="column-right">
                {user.username == null ?
                    <>
                        <Button label='Entrar' customClass='btn-custom' onClick={() => handleOpenModal()} />
                        <Button label='Criar Conta' customClass='btn-custom' onClick={() => console.log('Create account')} />
                    </>
                    : <p className="user-label">{user.username}</p>
                }

                <img
                    className="avatar"
                    src={user.imageUrl ? user.imageUrl : userImage}
                    alt="User Profile"
                    onClick={() => user.username ? handleOpenUserMenuModal() : ''}
                />

                <UserMenu
                    showModal={showUserMenuModal}
                    onLogout={() => handleLogout()}
                    onClose={() => handleCloseModal()}
                />
            </div>

            <Login
                showModal={showModal}
                onLogin={() => handleCloseModal()}
            />
        </div>
    );
}

export default Header;