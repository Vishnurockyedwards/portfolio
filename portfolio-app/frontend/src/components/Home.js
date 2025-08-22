import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FaUser, FaLaptopCode, FaStar, FaEnvelope, FaArrowDown, FaDownload } from "react-icons/fa";
import "../styles/Home.css";

export default function Home() {
    const history = useHistory();
    const [isVisible, setIsVisible] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    const roles = [
        "Frontend Developer",
        "UI/UX Designer", 
        "React Specialist",
        "Creative Coder"
    ];

    useEffect(() => {
        setIsVisible(true);
        
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setIsTyping(true);
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
    }, [currentTextIndex]);

    const handleNavigation = (path) => {
        history.push(path);
    };

    const handleDownloadResume = async () => {
        setIsDownloading(true);
        try {
            // First, try to fetch the file to check if it exists
            const response = await fetch('/Vishnu_Anand_resume.pdf');

            if (!response.ok) {
                throw new Error('Resume file not found');
            }

            // Get the blob data
            const blob = await response.blob();

            // Create object URL
            const url = window.URL.createObjectURL(blob);

            // Create a link element and trigger download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Vishnu_Anand_Resume.pdf';
            link.style.display = 'none';

            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up the object URL
            window.URL.revokeObjectURL(url);

            console.log("Resume download completed successfully");
        } catch (error) {
            console.error('Error downloading resume:', error);
            // Fallback: open in new tab
            window.open('/Vishnu_Anand_resume.pdf', '_blank');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="greeting">
                            <span className="wave">👋</span>
                            <span>Hello, I'm</span>
                        </div>
                        
                        <h1 className="hero-title">
                            <span className="name">Vishnu Anand</span>
                        </h1>
                        
                        <div className="role-container">
                            <span className="role-label">I'm a </span>
                            <span className={`role-text ${isTyping ? 'typing' : ''}`}>
                                {roles[currentTextIndex]}
                            </span>
                            <span className="cursor">|</span>
                        </div>
                        
                        <p className="hero-description">
                            Passionate about creating beautiful, functional, and user-friendly web experiences. 
                            I transform ideas into elegant code and turn caffeine into pixel-perfect interfaces.
                        </p>
                        
                        <div className="hero-actions">
                            <button 
                                className="btn btn-primary"
                                onClick={() => handleNavigation("/projects")}
                            >
                                <FaLaptopCode />
                                View My Work
                            </button>
                            
                            <button
                                className="btn btn-secondary"
                                onClick={handleDownloadResume}
                                disabled={isDownloading}
                            >
                                <FaDownload />
                                {isDownloading ? 'Downloading...' : 'Download Resume'}
                            </button>
                        </div>
                    </div>
                    
                    <div className="hero-visual">
                        <div className="avatar-container">
                            <div className="avatar-circle">
                                <span className="avatar-initial">VA</span>
                            </div>
                            <div className="avatar-decoration"></div>
                        </div>
                    </div>
                </div>
                
                <div className="scroll-indicator">
                    <FaArrowDown className="scroll-icon" />
                    <span>Scroll to explore</span>
                </div>
            </section>

            <section className="features-section">
                <div className="features-grid">
                    <div 
                        className="feature-card"
                        onClick={() => handleNavigation("/about")}
                    >
                        <div className="feature-icon">
                            <FaUser />
                        </div>
                        <h3>About Me</h3>
                        <p>Learn about my journey, experience, and what drives me</p>
                    </div>
                    
                    <div 
                        className="feature-card"
                        onClick={() => handleNavigation("/projects")}
                    >
                        <div className="feature-icon">
                            <FaLaptopCode />
                        </div>
                        <h3>Projects</h3>
                        <p>Explore my latest work and creative solutions</p>
                    </div>
                    
                    <div 
                        className="feature-card"
                        onClick={() => handleNavigation("/skills")}
                    >
                        <div className="feature-icon">
                            <FaStar />
                        </div>
                        <h3>Skills</h3>
                        <p>Discover my technical expertise and tools</p>
                    </div>
                    
                    <div 
                        className="feature-card"
                        onClick={() => handleNavigation("/contact")}
                    >
                        <div className="feature-icon">
                            <FaEnvelope />
                        </div>
                        <h3>Contact</h3>
                        <p>Let's discuss your next project together</p>
                    </div>
                </div>
            </section>
        </div>
    );
}