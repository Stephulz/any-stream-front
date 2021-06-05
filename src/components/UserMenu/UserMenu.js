import ReactModal from "react-modal";
import './UserMenu.css';

const UserMenu = (props) => {
    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.showModal}
            contentLabel="User Menu Modal"
            className="user-menu-modal"
            overlayClassName="user-menu-overlay"
            shouldCloseOnOverlayClick={true}
            onRequestClose={props.onClose}
        >
            <button onClick={props.onLogout}>Logout</button>
            {/* <button className="btn" onClick={() => handleOpenModal()}>
                <p>Entrar</p>
            </button> */}
        </ReactModal>
    );
}

export default UserMenu;