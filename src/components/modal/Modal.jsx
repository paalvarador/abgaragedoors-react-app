import React, { useState } from 'react'
import "./modal.css";

const Modal = (prop) => {
    const [toggle, showModal] = useState(false);

    return (
        <div className={toggle ? "modal active-modal" : "modal"}>
            <div className="modal-content">
                <i className="uil uil-times modal-close" onClick={() => showModal(false)}></i>
                <img src="work1.jpg" className="modal-image" alt={prop.title} />img
                <h3 className="modal-title">{prop.title}title</h3>
                <p className="modal-description">{prop.description}desc</p>
                <ul className="modal-data">
                    <li className="modal-data-owner">Client: {prop.owner}</li>
                    <li className="modal-data-qualification">Qualification: {prop.qualification}</li>
                    <li className="modal-data-place">City: {prop.place}</li>
                </ul>
            </div>
        </div>
    )
}

export default Modal