import React from 'react'

const WorkModal = (prop) => {
    return (
        <div className="work__modal">
            <div className="work__modal-content">
                <i className="uil uil-times work__modal-close"></i>
                <h3 className="work__modal-title">{prop.title}</h3>
                <p className="work__modal-description">{prop.description}</p>
                <ul className="work__modal-data">
                    <li className="work__modal-data-owner">Client: {prop.owner}</li>
                    <li className="work__modal-data-qualification">Qualification: {prop.qualification}</li>
                    <li className="work__modal-data-place">City: {prop.place}</li>
                </ul>
            </div>
        </div>
    )
}

export default WorkModal