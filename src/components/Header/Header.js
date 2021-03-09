import React, { Component } from 'react';
import './Header.css';
import userImage from '../../resources/user.png'
import { BiSearchAlt2 } from "react-icons/bi";
import axios from 'axios';
import Login from '../Login/Login';
const { REACT_APP_API_URL } = process.env;

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
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
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    componentDidMount() {
        // axios.get(`${REACT_APP_API_URL}`)
        //     .then(res => {
        //         const persons = res.data;
        //         this.setState({ persons });
        //     })
    }

    render() {
        return (
            <div className="row">
                <div className="column">
                    <a href="/" className="column-logo">Any Stream</a>
                    <a href="#following">Seguindo</a>
                    <a href="#search">Procurar</a>
                </div>
                <div className="column-middle">
                    <form method="post">
                        <input
                            type="text"
                            name="search"
                            placeholder="Buscar"
                            className="search-input" />
                        <button type="submit" className="search-button">
                            <BiSearchAlt2
                                color="#b5b5b5"
                                size="25"
                            ></BiSearchAlt2>
                        </button>
                    </form>
                </div>
                <div className="column-right">
                    {this.state.user.username == null ?
                        <>
                            <button className="btn" onClick={() => this.handleOpenModal()}>
                                <p>Entrar</p>
                            </button>
                            <button className="btn">
                                <p>Criar Conta</p>
                            </button>
                        </>
                        : <p className="user-label">{this.state.user.username}</p>
                    }
                    <img className="avatar" src={this.state.user.imageUrl ? this.state.user.imageUrl : userImage} alt="User Profile"></img>
                </div>
                <Login showModal={this.state.showModal} onLogin={this.handleCloseModal.bind(this)}></Login>
            </div>
        );
    }
}

export default Header;