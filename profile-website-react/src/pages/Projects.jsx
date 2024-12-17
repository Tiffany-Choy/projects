import Project from "../functions/Project";
import "./Projects.css"
export default function Projects() {
  return (
    <>
      <h1>Projects!!!</h1>
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
      <Project id="trc-web" title="Transit Research Center Website" languages="SiteFarm" text="This project utilizes SiteFarm (website builder) to communicate 
                    effectively with the general public. I aimed to make the website engaging 
                    and easy to navigate. This project also allowed for documentation to help 
                    guide others on how to build the site." live="https://transitresearch.ucdavis.edu" work="work-experience.html#trc"/>
    </>
  );
}
