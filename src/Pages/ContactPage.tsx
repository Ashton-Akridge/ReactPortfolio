import NavBar from "../Components/Nav/Nav.tsx";
import React, {useEffect, useState} from 'react';
import '../css/Contact.css'
import gsap from "gsap";


export default function ContactPage() {

    useEffect(() => {
        gsap.fromTo('.Contactwidget', {opacity: -1, y: 30}, {opacity: 1, y: 0, duration: 1, delay: 0.25})
        gsap.fromTo('.Email-icon', {opacity: -1, x: 30}, {opacity: 1, x: 0, duration: 2, delay: 0.5})
        gsap.fromTo('.In-SiteEmailWidget', {opacity: -1, y: 30}, {opacity: 1, y: 0, duration: 1.25, delay: 1.25})
        gsap.fromTo('.Hobbies', {opacity: -1, y: 30}, {opacity: 1, y: 0, duration: 1, delay: 1})
    }, []);



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <NavBar />
            <div className="Contactwidget">
                <div className="content">
                    <div className="Words">
                        <h4>Contact</h4>
                        <p>I'm always looking for opportunities to develop. Need a supportive hand? I have two! </p>
                    </div>
                    <div className="Email-icon">
                        <a href="mailto:contact@ashtonakridge.com">
                            <button className="boton-elegante">Email</button>
                        </a>
                    </div>
                    <div className="In-SiteEmailWidget">
                        <div className="Words">
                            <h4>Send a Message</h4>
                            <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                        </div>
                        <form action="https://formspree.io/f/mannlrpv" target='_blank' method="POST" className="In-SiteEmail">
                            <div className="Name-Email">
                                <div className="Name">
                                    <label htmlFor="name">
                                        <h6>Name</h6>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="Email">
                                    <label htmlFor="email">
                                        <h6>Email</h6>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="Message">
                                <label htmlFor="message">
                                    <h6>Message</h6>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    placeholder="Enter your message"
                                    required
                                />
                            </div>
                            <div className="SubmitButton">
                                <button type="submit" className="boton-elegante">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}