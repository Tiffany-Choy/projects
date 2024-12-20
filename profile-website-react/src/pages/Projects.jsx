import Project from "../functions/Project";
import "./stylesheets/Projects.css";
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
      <Project
        id="trc-web"
        title="Transit Research Center Website"
        languages="SiteFarm"
        text="This project utilizes SiteFarm (website builder) to communicate 
                    effectively with the general public. I aimed to make the website engaging 
                    and easy to navigate. This project also allowed for documentation to help 
                    guide others on how to build the site."
        live="https://transitresearch.ucdavis.edu"
        work="work-experience.html#trc"
      />
      <Project
        id="hofu"
        title="Hofu"
        languages="HTML/CSS and Javascript"
        text="This project utilizes HTML/CSS and Javascript to work collaboratively on a team of 4 to address food insecurity. 
                    This project was completed in a 24 hour time frame for a coding competition known as HackDavis. I worked mostly on the HTML/CSS 
                    of the project to create an engaging and easy to navigate user interface as well as the front end to ensure the pages are 
                    functional and communicate with one another. We won Best Hack for the UCD Pantry 2022!"
        github="https://github.com/Ako-Tako/Hofu"
        live="https://tinyurl.com/UCDhofu"
      />
    </>
  );
}
