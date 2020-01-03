import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import {useSelector} from 'react-redux'


const Modal = (props) => {
    const modal=useSelector(state=>state.modalReducer)
    return (

        <div className="modal_wrapper"
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-10vh)',
                display: props.show ? 'unset' : 'none'
            }}>
            <span className="close_modal_btn" onClick={props.close}>×</span>
            <div className="modal_header">
                <h1>{props.title}</h1>
            </div>

            <div className="modal_body">
                <img src={props.poster} alt="film" />
                <div className="det">
                    <h6><span>Tytuł orginału: </span><br />{props.original_title}</h6>
                    <h6><span>Gatunek: </span><br />{props.genre}</h6>
                    <h6><span>Data premiery: </span><br />{props.release_date}</h6>
                    <h6><span>Język orginału: </span><br />{props.original_language}</h6>
                </div>
                <div className="descr">
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
        </div>

    )
}

Modal.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
}

Modal.defaultProps = {
    poster: "https://www.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png",
    title: "Nie podano tytułu",
    vote_average: "-",
    text: "Brak opisu",
    original_language: "-",
    genre: "nie podano",
}

export default Modal;