import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WorkData() {
    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/work/all")
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
                workData.map((work) => (
                    <div key={work._id} className="work__content">
                        <img src={work.image} alt={work.name} />
                        <h3 className="work__title">{work.title}</h3>
                        <span className="work__button">View More</span>
                        <div className="work__modal">
                            <div className="work__modal-content">
                                <i className="uil uil-times work__modal-close"></i>
                                <h3 className="work__modal-title">{work.title}</h3>
                                <p className="work__modal-description">{work.description}</p>
                                <ul className="work__modal-data">
                                    <li className="work__modal-data-owner">{work.owner}</li>
                                    <li className="work__modal-data-qualification">{work.qualification}</li>
                                    <li className="work__modal-data-place">{work.place}</li>
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