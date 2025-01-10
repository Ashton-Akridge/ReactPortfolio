import NavBar from "../Components/Nav/Nav.tsx";
import { useEffect, useState, useCallback, useMemo } from 'react';
import { PlaylistDisplay } from "./CallBack.tsx"; // Import the PlaylistDisplay component
import '../css/AboutPage.css';
import Chess from './static/Chess.png';
import Cars from './static/Cars.png';
import Baseball from './static/Baseball.png';
import Ashton from './static/Ashton.png';
import gsap from 'gsap'; // Import GSAP for animation

export default function AboutPage() {

    useEffect(() => {
        gsap.fromTo('.ashtonAkridge', {opacity: -1, x: -30}, {opacity: 1, x: 0, duration: 2})
        gsap.fromTo('.AboutMe', {opacity: -1, x: 30}, {opacity: 1, x: 0, duration: 1.75, delay: 0.25})
        gsap.fromTo('.Music', {opacity: -1, y: 30}, {opacity: 1, y: 0, duration: 1.25, delay: 0.75})
        gsap.fromTo('.Hobbies', {opacity: -1, y: 30}, {opacity: 1, y: 0, duration: 1, delay: 1})
    }, []);

    // Memoize the Hobbies array to avoid re-creating it on each render
    const Hobbies = useMemo(() => [
        { id: "chess", photo: Chess, description: "Chess" },
        { id: "baseball", photo: Baseball, description: "Sports" },
        { id: "cars", photo: Cars, description: "Cars" },
    ], []); // Empty dependency array means it only gets created once

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // This function handles the image transition, animated similar to the changeTrack function
    const changeImage = useCallback(() => {
        if (Hobbies.length > 0) {
            const currentHobby = Hobbies[currentImgIndex];
            const nextIndex = (currentImgIndex + 1) % Hobbies.length;
            const nextHobby = Hobbies[nextIndex];

            // Animate current image and description out
            gsap.to(`#${currentHobby.id}`, {
                x: '-1.5rem',
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
            });
            gsap.to(`#desc-${currentHobby.id}`, {
                x: '-1.5rem',
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
            });

            // Reset the next image and description
            gsap.set(`#${nextHobby.id}`, { x: '1.5rem', opacity: 0});
            gsap.set(`#desc-${nextHobby.id}`, { x: '1.5rem', opacity: 0});

            // Animate next image and description in
            gsap.to(`#${nextHobby.id}`, {
                x: '0px',
                opacity: 1,
                duration: 1,
                delay: 1,
                ease: 'power2.inOut',
            });
            gsap.to(`#desc-${nextHobby.id}`, {
                x: '0px',
                opacity: 1,
                duration: 1,
                delay: 1,
                ease: 'power2.inOut',
            });

            setCurrentImgIndex(nextIndex);
        }
    }, [currentImgIndex, Hobbies]);

    useEffect(() => {
        const interval = setInterval(() => {
            changeImage(); // Trigger the image change animation
        }, 6000); // Change every 6 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [changeImage]);

    return (
        <>
            <NavBar />
            <div className="container">
                <div className="ashtonAkridge">
                    <div className="content">
                        <h4>Ashton Akridge</h4>
                        <div>
                            <img src={Ashton} alt={Ashton}/>
                            <p>Huntsville, AL | Software Engineering Student</p>
                        </div>

                    </div>
                </div>
                <div className="AboutMe">
                    <div className="content">
                        <h4>About Me</h4>
                        <p>I am a software engineering student at Mississippi State University (MSU).
                            I specialize in UI/UX design and penetration testing concepts.</p>
                        <p>I dedicate much of my time to exploring technology—whether building websites,
                            practicing penetration testing, or working with audio boards.
                            I am committed to using my technical expertise to create meaningful solutions
                            and serve my community.</p>
                    </div>
                </div>
                <div className="Music">
                    <div className="content">
                        <div className="title-container">
                            <h4>Favorite Music</h4>
                            <a href="https://open.spotify.com/user/v2sto5mlcv6zhrv7hjmxhah10?si=0be72eb749e84e5e"
                               target="_blank" rel="noreferrer">
                                <svg className="Scale" xmlns="http://www.w3.org/2000/svg" width="5rem" height="5rem"
                                     viewBox="0 0 25 25" fillRule="evenodd" clipRule="evenodd">
                                    <path
                                        d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
                                        fill="#535353"/>
                                </svg>
                            </a>
                        </div>
                        <PlaylistDisplay playlistId="3v5NmAezsgeCqMaZ5lh0K5" />
                    </div>
                </div>
                <div className="Hobbies">
                    <div className="content">
                        <h4>Hobbies</h4>
                        {Hobbies.map((hobby) => (
                            <div key={hobby.id} style={{ position: "absolute"}}>
                                <img
                                    id={hobby.id}
                                    src={hobby.photo}
                                    width="233.4"
                                    height="239.2"
                                    alt={hobby.id}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        opacity: 0, // Initially hidden
                                    }}
                                />
                                <p
                                    id={`desc-${hobby.id}`}
                                >
                                    {hobby.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
