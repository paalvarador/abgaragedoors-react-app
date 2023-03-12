import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactData() {

    const [contacts, setContacts] = useState([]);

    useEffect((res, err) => {
        axios
            .get("http://localhost:3000/api/contact/all")
            .then(res => {
                console.log(res);
                setContacts(res.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    return (
        <ul className="list__info">
            {contacts.map((contact) => (<li className="list__item"><a key={contact._id} href="#home" className='contact__info__item1'><i class="uil uil-calling contact__info__icon"></i>{contact.phone[0]}</a></li>))}
            {contacts.map((contact) => (<li className="list__item"><a key={contact._id} href="#home" className='contact__info__item2'><i class="uil uil-calling contact__info__icon"></i>{contact.phone[1]}</a></li>))}
            {contacts.map((contact) => (<li className="list__item"><a key={contact._id} href="#home" className='contact__info__item3'><i class="uil uil-location-pin-alt contact__info__icon"></i>{contact.address}</a></li>))}
        </ul>
    )
}

export default ContactData