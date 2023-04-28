import React from 'react';
import { Link } from 'react-router-dom';

const CourseOverview = () => {
  return (
    <div className="CourseOverview">
      <h2>Course Overview</h2>
      <ul>
        <li>
          <strong>Fundamentals of programming with JavaScript</strong>
          <br />
          Getting up to speed with the JavaScript Language and interacting with APIs
        </li>
        <li>
          <strong>Creating applications with the user in mind</strong>
          <br />
          User-driven design, UI/UX, and an introduction to Agile
        </li>
        <li>
          <strong>Databases and conventions</strong>
          <br />
          Databases, SQL, and RESTful APIs
        </li>
        <li>
          <strong>Robust code in systems</strong>
          <br />
          Testing and modern software engineering practices
        </li>
        <li>
          <strong>Component-based thinking and frameworks</strong>
          <br />
          React introduction, and advanced user interfaces
        </li>
        <li>
          <strong>Developing good, user-centric products in teams</strong>
          <br />
          Deeper dive into React, agile project management, and great user experiences
        </li>
        <li>
          <strong>Retrospectives and deployment</strong>
          <br />
          Learning from project experiences and Agile best practices, plus deploying projects with the cloud
        </li>
        <li>
          <strong>The world of server-side programming</strong>
          <br />
          Creating APIs, learning NodeJS, and communicating with data
        </li>
        <li>
          <strong>Adding depth to understanding</strong>
          <br />
          Going deeper into advanced computer science and software engineering concepts
        </li>
      </ul>
      <Link to="/" className="go-back">Go Back</Link>
    </div>
  );
};

export default CourseOverview;
