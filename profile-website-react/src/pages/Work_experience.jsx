import Work from "../functions/Work";
import juniLogo from "../images/juni-learning-logo.png";
import trcLogo from "../images/trc-logo.jpg";
import "./stylesheets/Work_experience.css";
export default function Work_experience() {
  return (
    <>
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
        skills= {[{name: 'Python'}, {name: 'Java'}, {name: 'C++'}, {name: 'JavaScript'}, {name: 'HTML/CSS'}]}
      />
      <Work
        id="trc"
        title="Assistant at the Transit Research Center of UC Davis"
        time="October 2023 - June 2024"
        logo={trcLogo}
        description="As an Assistant at the UC Davis Transit Research Center, I helped redesign and maintain the 
                    center's website to improve communication with researchers and the public. I collaborated 
                    with cross-functional teams to create engaging, user-friendly content, summarized research 
                    projects, and incorporated interactive elements to enhance audience engagement. My work 
                    ensured that the website was visually appealing, accessible, and aligned with the center’s goals."
        skills= {[{name: 'SiteFarm'}, {name: 'documentation'}, {name: 'cross-functional teams'}]}
      />
    </>
  );
}
