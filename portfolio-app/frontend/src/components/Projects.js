import React, { useState, useEffect } from "react";
import { 
  FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaHtml5, FaCss3Alt, 
  FaNodeJs, FaDatabase, FaCode 
} from "react-icons/fa";
import "../styles/Projects.css";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and CSS animations. Features smooth transitions, dark mode toggle, and interactive elements.",
      image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=Portfolio",
      technologies: ["React", "CSS3", "JavaScript", "HTML5"],
      category: "frontend",
      github: "https://github.com/",
      live: "https://example.com/",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Task+App",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      category: "frontend",
      github: "https://github.com/",
      live: "https://example.com/",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Weather+App",
      technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
      category: "frontend",
      github: "https://github.com/",
      live: "https://example.com/",
      featured: false
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/",
      live: "https://example.com/",
      featured: false
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
      image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=Blog+Platform",
      technologies: ["React", "Node.js", "PostgreSQL", "Prisma"],
      category: "fullstack",
      github: "https://github.com/",
      live: "https://example.com/",
      featured: false
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing social media accounts with analytics, scheduling, and content management.",
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Social+Dashboard",
      technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
      category: "fullstack",
      github: "https://github.com/",
      live: "https://example.com/",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'featured', label: 'Featured' }
  ];

  useEffect(() => {
    console.log('Projects component mounted');
    setIsVisible(true);
    filterProjects();
  }, [activeFilter]);

  const filterProjects = () => {
    console.log('Filtering projects with:', activeFilter);
    let filtered = [];
    
    if (activeFilter === 'all') {
      filtered = projects;
    } else if (activeFilter === 'featured') {
      filtered = projects.filter(project => project.featured);
    } else {
      filtered = projects.filter(project => project.category === activeFilter);
    }
    
    console.log('Filtered projects:', filtered);
    setFilteredProjects(filtered);
  };

  const getTechnologyIcon = (tech) => {
    const iconMap = {
      'React': FaReact,
      'JavaScript': FaJs,
      'HTML5': FaHtml5,
      'CSS3': FaCss3Alt,
      'Node.js': FaNodeJs,
      'MongoDB': FaDatabase,
      'PostgreSQL': FaDatabase
    };
    return iconMap[tech] || FaCode;
  };

  const handleProjectClick = (project) => {
    // Add any additional logic for project interaction
    console.log('Project clicked:', project.title);
  };

  return (
    <div className="projects-container">
      <section className="projects-hero">
        <div className="projects-content">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A collection of my work that showcases my skills and passion for creating 
            meaningful digital experiences
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => {
                    const Icon = getTechnologyIcon(tech);
                    return (
                      <span key={techIndex} className="technology-tag">
                        <Icon />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <h3>No projects found</h3>
            <p>Try selecting a different filter or check back later for new projects.</p>
          </div>
        )}
      </section>
    </div>
  );
}