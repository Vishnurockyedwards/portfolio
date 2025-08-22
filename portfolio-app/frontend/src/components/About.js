import React, { useState, useEffect } from "react";
import { FaCode, FaGraduationCap, FaHeart, FaRocket, FaLightbulb, FaUsers, FaCertificate } from "react-icons/fa";
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
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
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

  const certifications = [
    {
      id: 1,
      title: 'Google Cybersecurity',
      subtitle: 'Certificate • 2024',
      provider: 'Coursera',
      description: 'Comprehensive cybersecurity program covering threat detection, incident response, and security frameworks.',
      icon: '🎓',
      gradientColors: ['#3B82F6', '#60A5FA'],
      waveColors: [
        ['#6366F1', '#8B5CF6', '#6366F1'],
        ['#8B5CF6', '#A855F7', '#8B5CF6']
      ]
    },
    {
      id: 2,
      title: 'HTML, CSS',
      subtitle: '& JavaScript • 2023',
      provider: 'Coursera',
      description: 'Frontend web development fundamentals covering HTML5, CSS3, and JavaScript programming essentials.',
      icon: '🏛️',
      gradientColors: ['#10B981', '#34D399'],
      waveColors: [
        ['#059669', '#047857', '#059669'],
        ['#047857', '#065F46', '#047857']
      ]
    },
    {
      id: 3,
      title: ' Design and ',
      subtitle: 'analysis of algorithms • 2025',
      provider: 'NPTEL',
      description: 'Advanced programming concepts using Python with focus on data structures and algorithmic problem solving.',
      icon: '📱',
      gradientColors: ['#8B5CF6', '#A78BFA'],
      waveColors: [
        ['#7C3AED', '#6D28D9', '#7C3AED'],
        ['#6D28D9', '#5B21B6', '#6D28D9']
      ]
    },
    {
      id: 4,
      title: 'Cloud Computing',
      subtitle: ' • 2023',
      provider: 'Coursera',
      description: 'Cloud infrastructure, services, and deployment strategies covering major cloud platforms and architectures.',
      icon: '🎓',
      gradientColors: ['#3B82F6', '#60A5FA'],
      waveColors: [
        ['#6366F1', '#8B5CF6', '#6366F1'],
        ['#8B5CF6', '#A855F7', '#8B5CF6']
      ]
    },
    {
      id: 5,
      title: 'Software Engineering',
      subtitle: ' • 2022',
      provider: 'Coursera',
      description: 'Software development lifecycle, design patterns, testing methodologies, and project management principles.',
      icon: '⚙️',
      gradientColors: ['#8B5CF6', '#A78BFA'],
      waveColors: [
        ['#7C3AED', '#6D28D9', '#7C3AED'],
        ['#6D28D9', '#5B21B6', '#6D28D9']
      ]
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

            {activeTab === 'certifications' && (
              <div className="tab-panel fade-in-up">
                <h3>Professional Certifications</h3>
                <div className="certifications-container">
                  <div className="certifications-marquee">
                    <div className="certifications-track">
                      {[...certifications, ...certifications].map((cert, index) => (
                        <article key={`${cert.id}-${index}`} className="deconstructed-card">
                          <div className="card-layer card-background">
                            <svg className="wave-svg" viewBox="0 0 300 400" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id={`gradient-${cert.id}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor={cert.gradientColors[0]} />
                                  <stop offset="100%" stopColor={cert.gradientColors[1]} />
                                </linearGradient>
                                <linearGradient id={`wave1-${cert.id}-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor={cert.waveColors[0][0]} />
                                  <stop offset="50%" stopColor={cert.waveColors[0][1]} />
                                  <stop offset="100%" stopColor={cert.waveColors[0][2]} />
                                </linearGradient>
                                <linearGradient id={`wave2-${cert.id}-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor={cert.waveColors[1][0]} />
                                  <stop offset="50%" stopColor={cert.waveColors[1][1]} />
                                  <stop offset="100%" stopColor={cert.waveColors[1][2]} />
                                </linearGradient>
                              </defs>
                              <rect width="100%" height="100%" fill={`url(#gradient-${cert.id}-${index})`} />
                              <path d="M0,230 C30,220 60,240 90,230 C120,220 150,240 180,230 C210,220 240,240 270,230 C290,225 295,230 300,225 L300,400 L0,400 Z"
                                    fill={`url(#wave1-${cert.id}-${index})`} opacity="0.8" />
                              <path d="M0,260 C40,250 80,270 120,260 C160,250 200,270 240,260 C280,250 290,260 300,255 L300,400 L0,400 Z"
                                    fill={`url(#wave2-${cert.id}-${index})`} opacity="0.9" />
                              <path d="M0,290 C50,280 100,300 150,290 C200,280 250,300 300,290 L300,400 L0,400 Z"
                                    fill="rgba(255,255,255,0.2)" opacity="0.7" />
                            </svg>
                          </div>
                          <div className="card-layer card-frame">
                            <svg viewBox="0 0 300 400" preserveAspectRatio="none">
                              <path className="frame-path" d="M 20,20 H 280 V 380 H 20 Z"
                                    fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2"
                                    strokeDasharray="1520" />
                            </svg>
                          </div>
                          <div className="card-layer card-content">
                            <div className="content-fragment">
                              <div className="cert-header">
                                <div className="cert-indicator"></div>
                                <span className="cert-provider">{cert.provider}</span>
                              </div>
                              <h2 className="cert-title">{cert.title}</h2>
                              <h3 className="cert-subtitle">{cert.subtitle}</h3>
                            </div>
                            <div className="cert-icon-container">
                              <div className="cert-icon">{cert.icon}</div>
                            </div>
                            <div className="content-fragment cert-description">
                              <p>{cert.description}</p>
                            </div>
                            <div className="content-fragment cert-action">
                              <div className="cert-button">
                                <div className="button-bg"></div>
                                <span>VIEW CERTIFICATE</span>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
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