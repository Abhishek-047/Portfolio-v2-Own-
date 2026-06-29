import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isLight, setIsLight] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        if (isLight) {
            document.body.classList.add('light');
        } else {
            document.body.classList.remove('light');
        }
    }, [isLight]);

    const toggleTheme = () => {
        setIsLight(!isLight);
    };

    const handleNavClick = (id) => {
        setActiveSection(id);
    };

    const navItems = [
        { id: 'about', icon: 'person-circle-outline', label: 'about' },
        { id: 'resume', icon: 'file-tray-full-outline', label: 'resume' },
        { id: 'projects', icon: 'layers-outline', label: 'projects' },
        { id: 'skills', icon: 'star-outline', label: 'skills' },
        { id: 'contact', icon: 'mail-outline', label: 'contact' },
    ];

    return (
        <nav className="navbar">
            <div className="box theme">
                <div className="item" onClick={toggleTheme}>
                    <ion-icon 
                        id="lightBtn" 
                        name="sunny-outline" 
                        style={{ display: isLight ? 'none' : 'block' }}
                    ></ion-icon>
                    <ion-icon 
                        id="darkBtn" 
                        name="moon-outline" 
                        style={{ display: isLight ? 'block' : 'none' }}
                    ></ion-icon>
                </div>
            </div>
            <div className="box nav">
                {navItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <div
                            className={`item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.id)}
                        >
                            <a href={`#${item.id}`}>
                                <ion-icon name={item.icon}></ion-icon>
                                <p>{item.label}</p>
                            </a>
                        </div>
                        {index < navItems.length - 1 && <div className="divider rtl"></div>}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
