import React from 'react';
import './Projects.css';

const Projects = () => {
  const handleGithubRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div id='projects'>
      <h2 className='title'>projects.</h2>
      <div className='projects-details-container'>
        <div className='about-container'>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img
                src='./images/hr.jpg'
                alt='project '
                className='project-img'
              />
            </div>
            <h2>Hr. Management System</h2>
            <div className='projectintro'>
              <p>A project designed to streamline and optimize various aspects of human resource operations within an organization. With a user-friendly interface, this project ensures seamless integration into existing workflows, facilitating efficiency and effectiveness across the board.</p>
            </div>
            <button 
              className='btn project-btn' 
              onClick={() => handleGithubRedirect('https://github.com/devshakie/attachment-hr-group-project')}
            >
              Github
            </button>
          </div>
        </div>

        <div className='about-container'>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img
                src='./images/portfolio.jpg'
                alt='project '
                className='project-img'
              />
            </div>
            <h2>Portfolio</h2>
            <div className='projectintro'>
              <p>This project involved developing a portfolio webpage for my Coursera advanced react project.</p>
            </div>
            <button 
              className='btn project-btn' 
              onClick={() => handleGithubRedirect('https://github.com/devshakie/Portfolio')}
            >
              Github
            </button>
          </div>
        </div>

        <div className='about-container'>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img
                src='./images/calc.jpg'
                alt='project '
                className='project-img'
              />
            </div>
            <h2>Calculator</h2>
            <button 
              className='btn project-btn' 
              onClick={() => handleGithubRedirect('https://github.com/devshakie/calculator ')}
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
