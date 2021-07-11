import ReactModal from "react-modal";
import Button from "../Common/Button/Button";
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
            <div className="user-menu-container">



                <Button label="Canal" onClick={props.onLogout} customClass={'user-menu-item'} />
                <hr className="user-menu-hr" />
                <Button label="Sair" onClick={props.onLogout} customClass={'user-menu-item'} />
            </div>
        </ReactModal>
    );
}

export default UserMenu;