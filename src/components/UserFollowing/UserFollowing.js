import ReactModal from "react-modal";
import './UserFollowing.css';

const UserFollowing = (props) => {
    return (
        <ReactModal
            ariaHideApp={false}
            isOpen={props.showModal}
            contentLabel="User Following Modal"
            className="user-menu-modal"
            overlayClassName="user-menu-overlay"
            shouldCloseOnOverlayClick={true}
            onRequestClose={props.onClose}
        >
            <button onClick={props.onLogout}>Logout</button>
        </ReactModal>
    );
}

export default UserFollowing;