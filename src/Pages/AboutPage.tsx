import NavBar from "../Components/Nav/Nav.tsx";
import '../css/AboutPage.css'


export default function AboutPage() {
    return (
        <>
            <NavBar/>

            <div className="conatiner">
                <div className="Memojiwidget">
                    <div className="content">
                    </div>
                </div>
                <div className="AboutMe">
                    <div className="content">
                        <h4>About Me</h4>
                        <p>I am a software engineering student at Mississippi State University(MSU).
                            I specialize in UI/UX design and penetration testing concepts.</p>
                        <p>I dedicate much of my time to  exploring technology—whether building websites,
                            practicing penetration testing, or working with audio boards.
                            I am committed to using my technical expertise to create meaningful solutions
                            and serve my community.</p>
                    </div>
                </div>
                <div className="Music">
                    <div className="content">
                    </div>
                </div>
                <div className="Hobbies">
                    <div className="content">
                    </div>
                </div>
            </div>
        </>
    )
}



