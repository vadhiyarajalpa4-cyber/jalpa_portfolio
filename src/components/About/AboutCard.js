import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Jalpa Vadhiyara</span>{" "}
            from <span className="purple">Ahemdabad, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">React Full Stack Developer</span> at{" "}
            <span className="purple">Destiny Solution Private Ltd. as a Intern</span>.
            <br />I hold an Integrated M.Sc.(CA&IT) in{" "}
            <span className="purple">Computer Science and Information Technology</span> from{" "}
            <span className="purple">Gujarat University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Jalpa Vadhiyara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
