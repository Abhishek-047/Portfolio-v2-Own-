import React, { useState } from 'react';
import Heatmap from './Heatmap';

const MainContent = () => {
    const [showMoreSkills, setShowMoreSkills] = useState(false);

    const renderMoreSkills = () => (
        <>
            <h2>More <span className="colored">Skills</span></h2>
            <div className="divider rtl"></div>
            <section className="more-skills">
                <div><img src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML" /><p>HTML</p></div>
                <div><img src="https://www.svgrepo.com/show/349330/css3.svg" alt="CSS" /><p>CSS</p></div>
                <div><img src="https://www.svgrepo.com/show/452045/js.svg" alt="JavaScript" /><p>JavaScript</p></div>
                <div><img src="https://www.svgrepo.com/show/452091/python.svg" alt="Python" /><p>Python</p></div>
                <div><img src="https://www.svgrepo.com/show/452150/adobe-premiere.svg" alt="Premier Pro" /><p>Premier Pro</p></div>
                <div><img src="https://www.svgrepo.com/show/452141/adobe-after-effects.svg" alt="After Effects" /><p>After Effects</p></div>
                <div><img src="https://www.svgrepo.com/show/452145/adobe-lightroom.svg" alt="Lightroom" /><p>Lightroom</p></div>
                <div><img src="https://www.svgrepo.com/show/452149/adobe-photoshop.svg" alt="Photoshop" /><p>Photoshop</p></div>
                <div><img src="https://www.svgrepo.com/show/373528/cpp3.svg" alt="C++" /><p>C++</p></div>
                <div><img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" alt="MySQL" /><p>MySQL</p></div>
                <div><img src="https://www.svgrepo.com/show/373482/c.svg" alt="C" /><p>C</p></div>
                <div><img src="Images v2/icons8-davinci-resolve.svg" alt="Davinci Resolve" /><p>Davinci Resolve</p></div>
                <div><img src="https://www.svgrepo.com/show/402866/video-camera.svg" alt="Photography" /><p>Photography</p></div>
            </section>
            <button className="back-btn" onClick={() => setShowMoreSkills(false)}>Back</button>
        </>
    );

    const renderMainContent = () => (
        <>
            <h2 id="about">Hey <span className="colored">there!</span>👋🏻</h2>
            <div className="divider rtl"></div>
            <p>
                Hey, I’m Abhishek. I’m deeply interested in technology, problem-solving, and building intelligent
                systems. I enjoy exploring how things work under the hood — from algorithms and software systems to
                emerging fields like artificial intelligence and space technology.
                <br /><br />
                I like experimenting with ideas, writing code, and creating projects that challenge me to think
                better and build smarter. My long-term goal is to work as a software engineer or scientist,
                contributing to advanced technologies that can shape the future.
            </p>

            {/* Achievements */}
            <section className="achivements">
                <div>
                    <h3><ion-icon name="layers-outline"></ion-icon>0</h3>
                    <p>Websites Designed</p>
                </div>
                <div>
                    <h3><ion-icon name="briefcase-outline"></ion-icon>0</h3>
                    <p>Experience</p>
                </div>
                <div>
                    <h3><ion-icon name="rocket-outline"></ion-icon>2</h3>
                    <p>Completed Projects</p>
                </div>
            </section>

            {/* Skills Content */}
            <h2 id="skills">My <span className="colored">Skills</span></h2>
            <div className="divider rtl"></div>

            <section className="skills">
                <div><ion-icon name="logo-html5"></ion-icon><p>HTML</p></div>
                <div><ion-icon name="logo-css3"></ion-icon><p>CSS</p></div>
                <div><ion-icon name="logo-javascript"></ion-icon><p>JavaScript</p></div>
                <div><ion-icon name="logo-python"></ion-icon><p>Python</p></div>
                <div>
                    <div className="circle" style={{ "--percent": "65%" }}>
                        <h4>65 <small>%</small></h4>
                    </div>
                    <p>C++</p>
                </div>
                <div id="moreSkillsBtn" onClick={() => setShowMoreSkills(true)} style={{ cursor: 'pointer' }}>
                    <div className="circle" style={{ "--percent": "40%" }}>
                        <h4><small>%</small></h4>
                    </div>
                    <p>More Skills</p>
                </div>
                <div>
                    <div className="progress-bar">
                        <p>MySQL <span>85%</span></p>
                        <progress value="85" max="100"></progress>
                    </div>
                    <div className="progress-bar">
                        <p>C <span>30%</span></p>
                        <progress value="30" max="100"></progress>
                    </div>
                </div>
            </section>

            {/* Experience Content */}
            <h1 id="resume">My <span className="colored">Experience</span></h1>
            <div className="divider rtl"></div>
            <section className="experience">
                {[1, 2, 3].map((item) => (
                    <div className="experience" key={item}>
                        <h2>Position</h2>
                        <h4>Company Name <span className="date">Date start</span> &#x26AC; <span className="date">Date end</span> </h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, autem nam sit, quos fuga voluptatum aliquam consequuntur accusamus accusantium unde repellat! Fuga molestiae obcaecati saepe ipsum quo illum voluptatum ratione.</p>
                    </div>
                ))}
            </section>

            {/* Contributions Content (Heatmap) */}
            <h1>My <span className="colored">Contribution Streak</span></h1>
            <div className="divider rtl"></div>
            <Heatmap />

            {/* Projects Content */}
            <h1 id="projects">My <span className="colored">Projects</span></h1>
            <div className="divider rtl"></div>

            <section className="projects">
                <div className="project">
                    <div className="left">
                        <h3>Health-<span className="colored">Care</span></h3>
                        <img src="Images v2/Health-care.png" alt="Health Care Project" />
                    </div>
                    <div className="right">
                        <p>A modern, responsive and user-friendly Healthcare Website designed to provide a smooth experience for users to explore healthcare features, book appointments, and connect with medical services online.</p>
                        <div className="buttons">
                            <button>Live View</button>
                            <button>Code</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects">
                <div className="project">
                    <div className="left">
                        <h3>Portfolio-<span className="colored">v1</span></h3>
                        <img src="Images v2/Portfolio.png" alt="Portfolio v1" />
                    </div>
                    <div className="right">
                        <p>A modern, responsive, and user-friendly personal portfolio website designed to showcase my skills, projects, and achievements in a professional online presence.</p>
                        <div className="buttons">
                            <button onClick={() => window.open('https://portfoliov2-ashy-one.vercel.app/', '_blank')}>Live View</button>
                            <button onClick={() => window.open('https://github.com/Abhishek-047/Portfolio-v2-Own-', '_blank')}>Code</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects">
                <div className="project">
                    <div className="left">
                        <h3>Project <span className="colored">Title-3</span></h3>
                        <img src="Images v2/Space Explorer.png" alt="Space Explorer" />
                    </div>
                    <div className="right">
                        <p>🚀 Overview Space Explorer is a premium web-based application that allows users to explore space imagery using NASA APIs. It provides a cinematic UI experience with real-time search, dynamic rendering, and an interactive landing page.</p>
                        <div className="buttons">
                            <button onClick={() => window.open('https://space-explorer-web-app.vercel.app/', '_blank')}>Live View</button>
                            <button onClick={() => window.open('https://github.com/Abhishek-047/Space-Explorer-Web-App', '_blank')}>Code</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <h1 id="contact">Contact <span className="colored">Me</span></h1>
            <div className="divider rtl"></div>
            <section>
                <iframe 
                    className="map" 
                    width="100%" 
                    height="300" 
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3349.148544859166!2d85.10656558995666!3d20.115585728897862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDA2JzU2LjMiTiA4NcKwMDYnMzAuOCJF!5e1!3m2!1sen!2sin!4v1770730734639!5m2!1sen!2sin"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
                <form action="#" className="contact">
                    <div>
                        <input type="text" className="input" name="name" placeholder="Your Name..." required />
                    </div>
                    <div>
                        <input type="email" className="input" name="email" placeholder="Your Email..." required />
                    </div>
                    <div>
                        <textarea className="input" rows="4" name="subject" placeholder="Your Message..." required></textarea>
                    </div>
                    <button type="submit" className="submit">Send Message</button>
                </form>
            </section>
        </>
    );

    return (
        <div className="box content">
            <div className="wrapper" id="rightPanel">
                {showMoreSkills ? renderMoreSkills() : renderMainContent()}
            </div>
        </div>
    );
};

export default MainContent;
