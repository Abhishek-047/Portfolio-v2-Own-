import React, { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const Heatmap = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsLight(document.body.classList.contains('light'));
                }
            });
        });
        observer.observe(document.body, { attributes: true });
        
        setIsLight(document.body.classList.contains('light'));
        
        return () => observer.disconnect();
    }, []);

    const customTheme = {
        light: ['#EBEDF0', '#9BE9A8', '#30C463', '#30A14E', '#216E39'],
        dark: ['#1A2328', '#0E4545', '#006C69', '#25A0A7', '#37C9D5']
    };

    return (
        <section className="streak">
            <div className="wrapper">
                <div className="top-row">
                    <select 
                        className="year-selector" 
                        value={selectedYear} 
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        <option value="" disabled>Select Year</option>
                        <option value="last">Last Year</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                    </select>

                    <div className="coding-links">
                        <a href="https://codeforces.com/profile/Abhishek047" target="_blank" rel="noreferrer">
                            <img className="img-link" src="Images v2/image.png" alt="Codeforces" />
                        </a>

                        <a href="https://leetcode.com/u/Abhish3k47/" target="_blank" rel="noreferrer">
                            <img className="img-link" src="Images v2/image copy.png" alt="LeetCode" />
                        </a>

                        <a href="https://www.codechef.com/users/strange_47" target="_blank" rel="noreferrer">
                            <img className="img-link" src="Images v2/image copy 2.png" alt="CodeChef" />
                        </a>
                    </div>
                </div>
                
                <div style={{ padding: '10px 20px', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <GitHubCalendar 
                        username="Abhishek-047" 
                        year={selectedYear}
                        theme={customTheme}
                        colorScheme={isLight ? "light" : "dark"}
                        blockSize={13}
                        blockMargin={4}
                        fontSize={14}
                    />
                </div>
            </div>
        </section>
    );
};

export default Heatmap;
