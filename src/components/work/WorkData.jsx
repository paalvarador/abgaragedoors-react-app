import React, { useEffect, useState } from 'react';
import axios from 'axios';


const WorkData = () => {
    const [workData, setWorkData] = useState([]);
    const [toggle, showModal] = useState(false);

    useEffect(() => {
        axios
            .get("https://sample-api-abgarage.herokuapp.com/api/work/all")
            .then(res => {
                console.log(res);
                setWorkData(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);
    return (
        <div className="work__container">
            {
                workData.map((work, index) => (
                    <div key={work._id} className="work__content">
                        <img src={work.image} alt={work.name} />
                        <h3 className="work_title">{work.title}</h3>
                        <div className={toggle ? "work__modal active-modal" : "work__modal"}>
                            <div className="work__modal-content">
                                <i className="uil uil-times work__modal-close" onClick={() => showModal(false)}></i>
                                <h3 className="work__modal-title">{work.title}</h3>
                                <p className="work__modal-description">{work.description}</p>
                                <ul className="work__modal-data">
                                    <li className="work__modal-data-owner">Client: {work.owner}</li>
                                    <li className="work__modal-data-qualification">Qualification: {work.qualification}</li>
                                    <li className="work__modal-data-place">City: {work.place}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default WorkData