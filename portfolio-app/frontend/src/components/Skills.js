import React, { useState, useEffect, useRef } from "react";
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, 
  FaGit, FaDocker, FaFigma, FaPython, FaJava, FaAws,
  FaCode, FaPalette, FaRocket, FaUsers, FaLightbulb
} from "react-icons/fa";
import "../styles/Skills.css";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    { id: 'frontend', label: 'Frontend', icon: FaCode },
    { id: 'backend', label: 'Backend', icon: FaRocket },
    { id: 'design', label: 'Design', icon: FaPalette },
    { id: 'tools', label: 'Tools', icon: FaUsers }
  ];

  const skills = {
    frontend: [
      { name: 'React', level: 90, icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', level: 85, icon: FaJs, color: '#F7DF1E' },
      { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', level: 88, icon: FaCss3Alt, color: '#1572B6' },
      { name: 'TypeScript', level: 75, icon: FaCode, color: '#3178C6' },
      { name: 'Next.js', level: 70, icon: FaCode, color: '#000000' }
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: FaNodeJs, color: '#339933' },
      { name: 'Python', level: 75, icon: FaPython, color: '#3776AB' },
      { name: 'Java', level: 70, icon: FaJava, color: '#ED8B00' },
      { name: 'MongoDB', level: 75, icon: FaDatabase, color: '#47A248' },
      { name: 'PostgreSQL', level: 70, icon: FaDatabase, color: '#336791' },
      { name: 'AWS', level: 65, icon: FaAws, color: '#FF9900' }
    ],
    design: [
      { name: 'Figma', level: 85, icon: FaFigma, color: '#F24E1E' },
      { name: 'UI/UX Design', level: 80, icon: FaPalette, color: '#6366F1' },
      { name: 'Responsive Design', level: 90, icon: FaCode, color: '#10B981' },
      { name: 'Prototyping', level: 75, icon: FaLightbulb, color: '#F59E0B' },
      { name: 'Design Systems', level: 70, icon: FaCode, color: '#8B5CF6' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: FaGit, color: '#F05032' },
      { name: 'Docker', level: 70, icon: FaDocker, color: '#2496ED' },
      { name: 'VS Code', level: 90, icon: FaCode, color: '#007ACC' },
      { name: 'Postman', level: 80, icon: FaCode, color: '#FF6C37' },
      { name: 'Jest', level: 75, icon: FaCode, color: '#C21325' }
    ]
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getSkillLevel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    if (level >= 60) return 'Beginner';
    return 'Learning';
  };

  const getSkillColor = (level) => {
    if (level >= 90) return '#10B981';
    if (level >= 80) return '#3B82F6';
    if (level >= 70) return '#F59E0B';
    if (level >= 60) return '#EF4444';
    return '#6B7280';
  };

  const SkillProgress = ({ level }) => {
    const [value, setValue] = useState(0);
    const containerRef = useRef(null);
    const startedRef = useRef(false);

    useEffect(() => {
      const node = containerRef.current;
      if (!node) return;

      const durationMs = 1200;
      let rafId = 0;
      let startTime = 0;

      const animate = (ts) => {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(level * eased);
        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            rafId = requestAnimationFrame(animate);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(node);
      return () => {
        observer.disconnect();
        if (rafId) cancelAnimationFrame(rafId);
      };
    }, [level]);

    const rounded = Math.round(value);
    return (
      <div ref={containerRef} className="skill-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${rounded}%`,
              backgroundColor: getSkillColor(level)
            }}
          ></div>
        </div>
        <span className="progress-text">{rounded}%</span>
      </div>
    );
  };

  return (
    <div className="skills-container">
      <section className="skills-hero">
        <div className="skills-content">
          <h1 className="skills-title">Skills & Expertise</h1>
          <p className="skills-subtitle">
            A comprehensive overview of my technical skills, design capabilities, 
            and the tools I use to bring ideas to life
          </p>
        </div>
      </section>

      <section className="skills-section">
        <div className="skills-categories">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="skills-grid">
          {skills[activeCategory].map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div 
                  className="skill-icon"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                >
                  <skill.icon />
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{getSkillLevel(skill.level)}</span>
                </div>
              </div>
              
              <SkillProgress level={skill.level} />
            </div>
          ))}
        </div>
      </section>

      <section className="skills-overview">
        <div className="overview-content">
          <h2>Why These Skills Matter</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">
                <FaCode />
              </div>
              <h3>Technical Excellence</h3>
              <p>
                Strong foundation in modern web technologies allows me to build 
                robust, scalable applications that perform exceptionally well.
              </p>
            </div>
            
            <div className="overview-card">
              <div className="overview-icon">
                <FaPalette />
              </div>
              <h3>Design Thinking</h3>
              <p>
                Understanding of design principles helps me create intuitive 
                user experiences that are both beautiful and functional.
              </p>
            </div>
            
            <div className="overview-card">
              <div className="overview-icon">
                <FaRocket />
              </div>
              <h3>Problem Solving</h3>
              <p>
                Experience with various tools and technologies enables me to 
                find the best solutions for complex technical challenges.
              </p>
            </div>
            
            <div className="overview-card">
              <div className="overview-icon">
                <FaUsers />
              </div>
              <h3>Collaboration</h3>
              <p>
                Proficiency in development tools and practices ensures smooth 
                collaboration with teams and efficient project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}