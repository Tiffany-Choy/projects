import Project from "../functions/Project";
import "./stylesheets/Projects.css";
import ProjectData from "../data/project.json";
export default function Projects() {
  return (
    <>
      <h1>Projects!!!</h1>
      {ProjectData &&
        ProjectData.map((data) => {
          return (
            <Project
              id={data.id}
              title={data.title}
              languages={data.languages}
              text={data.text}
              github={data.github}
              live={data.live}
              work={data.work}
            />
          );
        })}
    </>
  );
}
