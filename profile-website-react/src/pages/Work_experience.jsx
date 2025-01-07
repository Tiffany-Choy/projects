import Work from "../functions/Work";
import "./stylesheets/Work_experience.css";
import WorkData from "../data/work.json";
export default function Work_experience() {
  return (
    <>
      {WorkData &&
        WorkData.map((job) => {
          return (
            <Work
              id={job.id}
              title={job.title}
              logo={job.logo}
              description={job.description}
              skills={job.skills}
            />
          );
        })}
    </>
  );
}
