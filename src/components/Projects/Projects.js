import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Inventory from './Inventory Management System Showcase.png';
import Social from './social.png';
import Hospital from './hospital (2).jpeg';
import Watch from './Sarvodaya Watch E-commerce Showcase.png';
import Smarttask from './SmartTask.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inventory}
              isBlog={false}
              title="Inventory_Management System"
              description="A role-based web application for managing products, stock, staff, shops, sales, and inventory reports efficiently from a centralized system."
              ghLink="https://github.com/vadhiyarajalpa4-cyber/Inventory1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Watch}
              isBlog={false}
              title="Sarvodaya_Watch"
              description="A modern full-stack e-commerce platform for browsing, managing, and securely purchasing stylish watches with user authentication, product management, orders, payments, and admin controls."
              ghLink="https://github.com/vadhiyarajalpa4-cyber/watch"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Social}
              isBlog={false}
              title="Social_Media_management"
              description="A MERN stack web application for managing user profiles, posts, notifications, connections, and social interactions through a centralized and user-friendly platform."
              ghLink="https://github.com/vadhiyarajalpa4-cyber/social"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Smarttask}
              isBlog={false}
              title="SmartTask_Management"
              description="A MERN stack web application for creating,organizing, managing, and securely accessing digital notes with an intuitive and user-friendly interface."
              ghLink="https://github.com/vadhiyarajalpa4-cyber/SmartNotebookSystem"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hospital}
              isBlog={false}
              title="Hospital_management_system"
              description="A MERN stack web application for managing user profiles, posts, notifications, connections, and social interactions through a centralized and user-friendly platform."
              ghLink="https://github.com/vadhiyarajalpa4-cyber/Hospital_management_system"
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
