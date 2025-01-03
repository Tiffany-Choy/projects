import profilePic from "../images/profile-pic.jpg";
import juniLogo from "../images/juni-learning-logo.png";
import "./stylesheets/Home.css";
import Project from "../functions/Project.jsx";
import Work from "../functions/Work.jsx";

export default function Home() {
  return (
    <>
      <h1>Tiffany Choy</h1>
      <Introduction />
      <FeaturedProjects />
      <FeaturedWork />
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
            I am a passionate software engineer and recent UC Davis graduate
            with a strong foundation in computer science. I am eager to apply my
            coding and problem-solving skills to real-world projects,
            collaborating with talented teams to create innovative solutions.
            Driven by a desire for continuous learning and a commitment to
            making a positive impact, I look forward to contributing to projects
            that shape the future.
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

function FeaturedWork() {
  return (
    <Work
      id="juni"
      title="Instructor at Juni Learning"
      time="May 2021 - Present"
      logo={juniLogo}
      description="As a Computer Science Instructor at Juni Learning, I taught programming and computer 
        science concepts to students aged 8-18 through customized one-on-one sessions. I covered languages 
        such as Python, Java, and C++, as well as concepts like algorithms and data structures. I provided 
        personalized feedback to help students develop problem-solving skills, debug code, and complete 
        projects. I adapted my teaching to individual learning styles and maintained regular communication 
        with parents."
    />
  );
}
