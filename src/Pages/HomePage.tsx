import NavBar from "../Components/Nav/Nav.tsx";
import '../css/HomePage.css'
import Pdf from './static/Ashton Akridge Resume.pdf'



export default function HomePage() {
    return (
        <>
        <NavBar />
            <div className="widget">
                <div className="content">
                    <h4>Hey, I’m <span className="highlight">Ashton.</span></h4>
                    <h4>I’m a Front End Developer.</h4>
                    <p>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" viewBox="0 0 16 16"
                                 fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
                                      fill="#535353"/>
                            </svg>
                        </a>
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#535353" width="3.75rem" height="3.75rem"
                                     viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1">
                                    <rect height="1" width="12" x="10" y="2"/>
                                    <rect height="1" width="12" x="10" y="2"/>
                                    <rect height="1" transform="translate(-9.5 22.5) rotate(-90)" width="20" x="-3.5"
                                          y="15.5"/>
                                    <rect height="1" transform="translate(11.5 39.5) rotate(-90)" width="16" x="17.5"
                                          y="13.5"/>
                                    <rect height="1" width="6" x="17" y="6"/>
                                    <rect height="1" width="14" x="9" y="9"/>
                                    <rect height="1" width="14" x="9" y="12"/>
                                    <rect height="1" width="14" x="9" y="15"/>
                                    <rect height="1" width="14" x="9" y="18"/>
                                    <rect height="1" width="10" x="9" y="21"/>
                                    <rect height="1" width="7" x="9" y="24"/>
                                    <path d="M22,2V3h2a1,1,0,0,1,1,1V6h1V4a2,2,0,0,0-2-2Z"/>
                                    <path d="M10,2V3H8A1,1,0,0,0,7,4V6H6V4A2,2,0,0,1,8,2Z"/>
                                    <path d="M8,30V29H8a1,1,0,0,1-1-1V26H6v2a2,2,0,0,0,2,2Z"/>
                                    <path
                                        d="M21.91,21.15c-.57-.32-.91-.72-.91-1.15a6.09,6.09,0,0,1-.21,1.59c-1,4.07-6,7.18-12.12,7.4H8v1h.72c8.86-.15,16.07-3.15,17.14-7A3.77,3.77,0,0,0,26,22,8.72,8.72,0,0,1,21.91,21.15Zm-5.78,7a10.5,10.5,0,0,0,5.54-6,8.94,8.94,0,0,0,3.15.79C24.07,25,20.91,27,16.13,28.13Z"/>
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