import profilePic from "../profile-pic.jpg";
import "./Home.css";
import Project from "../functions/Project.jsx";

export default function Home() {
  return (
    <>
      <h1>Tiffany Choy</h1>
      <Introduction />
      <FeaturedProjects />
      <Skills />
      <Education />
    </>
  );
}
function Introduction() {
  return (
    <>
      <div className="intro">
        <h2>About</h2>
        <div id="intro-content">
          <p id="words">
            Hello! I’m a passionate software engineer with a strong desire to
            continually expand my knowledge and make a positive impact on both
            my local community and the world at large. I’m a recent graduate of
            UC Davis, where I honed my skills in computer science and developed
            a deep interest in coding, problem-solving, and building meaningful
            technology solutions. As I transition into the software engineering
            industry, I am excited to apply my technical skills to real-world
            projects and work collaboratively with talented teams to create
            innovative solutions. I’m driven by the opportunity to continuously
            learn, tackle new challenges, and make a tangible impact through
            technology. I look forward to the journey ahead and am eager to
            contribute to projects that can help shape the future.
          </p>
          <img id="profile" src={profilePic}></img>
        </div>
      </div>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className="skills">
        <h2>Skills</h2>
        <div id="skills-list">
          <div id="systems">
            <h3>Systems</h3>
            <ul>
              <li>Windows</li>
              <li>UNIX</li>
              <li>Linux</li>
              <li>Ubuntu</li>
              <li>Github</li>
              <li>Wix</li>
              <li>Sitefarm</li>
              <li>Microsoft Office</li>
              <li>Zoom</li>
              <li>Slack</li>
            </ul>
          </div>
          <div id="program">
            <h3>Programming</h3>
            <div id="Languages">
              <div id="coding">
                <h4>Languages</h4>
                <ul>
                  <li>Java</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>Javascript</li>
                  <li>HTML/CSS</li>
                  <li>SQL</li>
                  <li>x86</li>
                </ul>
              </div>
              <div id="other">
                <h4>Other</h4>
                <ul>
                  <li>React</li>
                  <li>JSON</li>
                  <li>NodeJS</li>
                  <li>unit test</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="soft">
            <h3>Soft Skills</h3>
            <ul>
              <li>Leader</li>
              <li>Time Management</li>
              <li>Adaptable</li>
              <li>Problem Solver</li>
              <li>Effective communicator</li>
              <li>Task Management</li>
              <li>Collaboration</li>
              <li>Organized</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Education() {
  return (
    <>
      <div className="education">
        <h2>Education</h2>
        <div class="school">
          <div>
            <h3>
              Bachelor of Science in Computer Science and Minor in Technology
              Management
            </h3>
            <p class="location">at University of California, Davis</p>
          </div>
          <p id="time">Graduated in March 2024</p>
        </div>
        <div class="school">
          <div>
            <h3>Certificate of Specialization in Project Management</h3>
            <p class="location">at College of San Mateo</p>
          </div>
          <p id="time">Projected Graduation Winter 2025</p>
        </div>
      </div>
    </>
  );
}

function FeaturedProjects() {
  return (
    <Project
      id="travel-recs"
      title="Travel Recommender"
      languages="Python"
      text="This project utilizes machine learning with content based
                    solutions to analyze data and create suggestions on where to travel
                    next based on the correlation of duration, accommodation type,
                    accommodation cost, transportation type, and transportation cost using a previous destination."
      github="https://github.com/Tiffany-Choy/projects/tree/main/travel%20recommendations"
    />
  );
}
