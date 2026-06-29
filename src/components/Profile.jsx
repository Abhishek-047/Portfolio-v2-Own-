import React from 'react';

const Profile = () => {
    return (
        <div className="box profile">
            <img className="header" src="Images v2/Main.png" alt="Profile Picture" />
            <img className="img" src="Images v2/Avatar.png" alt="logo type" />
            <h2>Abhishek Panigrahi</h2>
            <p className="colored">Web Developer</p>

            <ul>
                <li><a href="https://www.instagram.com/_abhishek.4.7/" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="https://x.com/Strang3_47" target="_blank" rel="noreferrer"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href="https://github.com/Abhishek-047" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href="https://www.linkedin.com/in/abhishek-panigrahi-666b6336a" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>
            <div className="footer">
                <div className="divider rtl"></div>
                <table>
                    <tbody>
                        <tr>
                            <td><a href="#resume">My Resume<ion-icon name="file-tray-full-outline"></ion-icon></a></td>
                            <td><a href="#contact">Contact Me<ion-icon name="call-outline"></ion-icon></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;
