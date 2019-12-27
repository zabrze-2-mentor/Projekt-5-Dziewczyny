import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div>
            <div className="modal_wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-10vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <span className="close_modal_btn" onClick={props.close}>×</span>
                <div className="modal_header">
                    <h1>Bardzo długaśny tytuł jakiegoś nudnego filmu o czymś ciekawym</h1>
                </div>

                <div className="modal_body">
                    <div className="info">
                        <img src="https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2019/11/harry-potter-kamie%C5%84-filozoficzny-premiera.jpg" />
                        <div className="info_wrapper">
                            <div className="det">
                                <h6><span>Gatunek: </span><br />Horror</h6>
                                <h6><span>Rok produkcji: </span><br />2019</h6>
                                <h6><span>Reżyser: </span><br />Imię i Nazwisko</h6>
                                <h6><span>Kraj produkcji: </span><br />Kraj</h6>
                            </div>
                            <div className="descr">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nis ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nis ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nis ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nis ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;