import { useEffect } from 'react';
import NavBar from "../Components/Nav/Nav.tsx";
import '../css/HomePage.css'
import Pdf from './static/Ashton Akridge Resume.pdf'
import { gsap } from 'gsap';



export default function HomePage() {

    useEffect(() => {
        gsap.fromTo('.widget', {opacity: -1, y: 30}, {opacity: 1, y: 0, duration: 1, delay: 0.25})

    }, []);
    return (
        <>
        <NavBar />
            <div className="widget">
                <div className="content">
                    <h4>Hey, I’m <span className="highlight">Ashton.</span></h4>
                    <h4>I’m a Front End Developer.</h4>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z" fill="#535353"/>
                            </svg>
                        Huntsville, AL | Undergraduate Student @Mississippi State University
                    </p>
                    <div className="svg-container">
                        <div className="github-svg-container">
                            <a href="https://github.com/Ashton-Akridge" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3.25rem" height="3.25rem"
                                     viewBox="0 0 98 96"
                                     fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                          fill="#535353"/>
                                </svg>
                                <span className="tooltip">Github</span>
                            </a>

                        </div>
                        <div className="linkedIn-svg-container">
                            <a href="https://www.linkedin.com/in/ashton-akridge-351321290" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="3.75rem" height="3.75rem">
                                    <path
                                        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill="#535353"/>
                                </svg>
                                <span className="tooltip">LinkedIn</span>
                            </a>
                        </div>
                        <div className="resume-svg-container">
                            <a href={Pdf} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                                     viewBox="0 0 95 122.88" width="3.25rem" height="3.25rem"><title>paper</title>
                                    <path
                                        d="M98.63,35.57A8.37,8.37,0,0,0,96,32.12L64.39,1.32A3.53,3.53,0,0,0,61.63,0H6.43A6.42,6.42,0,0,0,0,6.43v110a6.42,6.42,0,0,0,6.43,6.43H92.21a6.42,6.42,0,0,0,6.4-6.43V63.37h0V35.57Zm-33.43-23L86.68,32.69H65.2V12.57ZM49.75,115.7H7.18V7.15H58V36.26a3.61,3.61,0,0,0,3.61,3.61H91.45v23.5h0V115.7ZM20.47,53a2.58,2.58,0,0,1,1.87-.88H64.53a2.55,2.55,0,0,1,1.91.87,3,3,0,0,1,.76,2,3.08,3.08,0,0,1-.77,2,2.57,2.57,0,0,1-1.9.88H22.37a2.56,2.56,0,0,1-1.91-.87,3.1,3.1,0,0,1,0-4.08Zm0,40.77a2.53,2.53,0,0,1,1.9-.88H76.25a2.55,2.55,0,0,1,1.91.88,3.1,3.1,0,0,1,0,4.08,2.59,2.59,0,0,1-1.92.86H22.37a2.59,2.59,0,0,1-1.91-.86,3.1,3.1,0,0,1,0-4.08ZM76.25,72.52a2.59,2.59,0,0,1,1.91.88,3.1,3.1,0,0,1,0,4.08,2.57,2.57,0,0,1-1.92.87H22.37a2.56,2.56,0,0,1-1.91-.87,3.1,3.1,0,0,1,0-4.08,2.57,2.57,0,0,1,1.9-.88ZM20.47,32.63a2.57,2.57,0,0,1,1.9-.88H41.86a2.56,2.56,0,0,1,1.91.87,3,3,0,0,1,.76,2,3.07,3.07,0,0,1-.75,2l0,0a2.58,2.58,0,0,1-1.9.88H22.37a2.56,2.56,0,0,1-1.91-.87,3.1,3.1,0,0,1,0-4.08Z" fill="#535353"/>
                                </svg>
                                <span className="tooltip">Resume</span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}