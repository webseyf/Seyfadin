import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    
    // Original titles
    const originalTitles = [' Seyfadin  🎉Abdela', 'Website  Developer  ', 'Frontend Developer', 'ReactJs  Developer  '];
    
    // Preprocess titles to make them equal in length
    const maxLength = Math.max(...originalTitles.map(title => title.trim().length));
    const titles = originalTitles.map(title => {
        const trimmedTitle = title.trim(); // Remove leading and trailing spaces
        const lengthDiff = maxLength - trimmedTitle.length;
        return trimmedTitle + ' '.repeat(lengthDiff); // Pad with spaces to make them equal
    });

    useEffect(() => {
        const titleInterval = setInterval(() => {
            setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 1700); // Change title every 1.7 seconds

        return () => clearInterval(titleInterval); // Cleanup interval on component unmount
    }, [titles]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Seyfadin(react)2.pdf'; // Path to the PDF in your public folder
        link.download = 'Seyfadin_CV.pdf'; // Name for the downloaded file
        link.click(); // Trigger the download
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="text-content">
                    <h1 className="name">Hey There 👋</h1>
                    <h2 className="title">
                        I'm👉 <span>{titles[titleIndex]}</span>
                    </h2>
                    <p className="tagline">I Craft beautiful and functional web experiences.</p>
                    <div className="cta-button univ">
                        <button className="uiverse" onClick={handleDownload}>
                            <div className="wrapper">
                                <span>Get my CV</span>
                                <div className="circle circle-12" />
                                <div className="circle circle-11" />
                                <div className="circle circle-10" />
                                <div className="circle circle-9" />
                                <div className="circle circle-8" />
                                <div className="circle circle-7" />
                                <div className="circle circle-6" />
                                <div className="circle circle-5" />
                                <div className="circle circle-4" />
                                <div className="circle circle-3" />
                                <div className="circle circle-2" />
                                <div className="circle circle-1" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="image-container">
                    <img
                        src="/photo_2024-10-04_14-25-47 (1).png"
                        alt="Seyfadin"
                        className="profile-photo"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;