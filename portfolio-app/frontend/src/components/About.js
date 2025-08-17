import React, { useState, useEffect } from "react";
import { FaCode, FaGraduationCap, FaHeart, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import "../styles/About.css";

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = [
    { id: 'story', label: 'My Story', icon: FaHeart },
    { id: 'experience', label: 'Experience', icon: FaRocket },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'values', label: 'Values', icon: FaLightbulb }
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Frontend Developer',
      company: 'Tech Company',
      description: 'Building modern web applications with React and TypeScript'
    },
    {
      year: '2022 - 2023',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Developed responsive websites and learned modern web technologies'
    },
    {
      year: '2021 - 2022',
      title: 'Freelance Developer',
      company: 'Self-employed',
      description: 'Created custom websites for small businesses and individuals'
    }
  ];

  const education = [
    {
      year: '2021',
      degree: 'Bachelor of Computer Science',
      school: 'University Name',
      description: 'Focused on software engineering and web development'
    },
    {
      year: '2020',
      degree: 'Web Development Bootcamp',
      school: 'Coding Academy',
      description: 'Intensive training in modern web technologies'
    }
  ];

  const values = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable, readable, and efficient code'
    },
    {
      icon: FaUsers,
      title: 'User-First',
      description: 'Always prioritizing user experience and accessibility'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Embracing new technologies and creative solutions'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Loving what I do and putting heart into every project'
    }
  ];

  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">
              A passionate developer who believes in the power of clean code and beautiful design
            </p>
            <p className="about-description">
              Hello! I'm Vishnu Anand, a frontend developer with a love for creating 
              exceptional digital experiences. I believe that great software is built 
              not just with code, but with empathy, creativity, and attention to detail.
            </p>
          </div>
          <div className="about-visual">
            <div className="about-avatar">
              <div className="avatar-image">VA</div>
              <div className="avatar-glow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-tabs">
        <div className="tabs-container">
          <div className="tabs-header">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="tab-content">
            {activeTab === 'story' && (
              <div className="tab-panel fade-in-up">
                <h3>My Journey</h3>
                <p>
                  My journey in web development began with a simple curiosity about how websites work. 
                  What started as tinkering with HTML and CSS has evolved into a passion for creating 
                  meaningful digital experiences.
                </p>
                <p>
                  I believe that technology should make life easier and more beautiful. Every line of 
                  code I write is an opportunity to solve a problem, delight a user, or make someone's 
                  day a little bit better.
                </p>
                <div className="story-highlights">
                  <div className="highlight-item">
                    <FaCode />
                    <span>Started coding in 2020</span>
                  </div>
                  <div className="highlight-item">
                    <FaRocket />
                    <span>Built 20+ projects</span>
                  </div>
                  <div className="highlight-item">
                    <FaHeart />
                    <span>Passionate about UX</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="tab-panel fade-in-up">
                <h3>Professional Experience</h3>
                <div className="timeline">
                  {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <div className="timeline-year">{exp.year}</div>
                        <h4>{exp.title}</h4>
                        <div className="timeline-company">{exp.company}</div>
                        <p>{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="tab-panel fade-in-up">
                <h3>Education & Training</h3>
                <div className="education-grid">
                  {education.map((edu, index) => (
                    <div key={index} className="education-card">
                      <div className="education-year">{edu.year}</div>
                      <h4>{edu.degree}</h4>
                      <div className="education-school">{edu.school}</div>
                      <p>{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="tab-panel fade-in-up">
                <h3>What Drives Me</h3>
                <div className="values-grid">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="value-card">
                        <div className="value-icon">
                          <Icon />
                        </div>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}