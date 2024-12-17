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
        description="As a Computer Science Instructor at Juni Learning, I taught both foundational and advanced computer 
                    science concepts to students aged 8-18 through one-on-one sessions on zoom. I designed and delivered 
                    customized lesson plans covering a range of topics including programming languages like Python, Java, C++, 
                    HTML/CSS, and Javascript, as well as algorithms, data structures, and computational thinking. I provided 
                    clear explanations and guidance, helping students develop critical problem-solving skills, understand 
                    coding logic, the ability to debug their code, and successfully complete coding projects. By assessing 
                    student progress through assignments, quizzes, and projects, I offered detailed feedback to foster growth 
                    and improve coding proficiency. My approach was to motivate and engage students in a positive and supportive 
                    manner, cultivating a passion for coding. I adapted my teaching methods to accommodate diverse learning styles, ensuring 
                    that every student could progress at their own pace. Additionally, I maintained open communication with 
                    parents to provide regular updates on student progress and discuss areas for improvement. I also kept 
                    myself up-to-date with the latest trends in computer science education and contributed to the 
                    development of course materials and curriculum improvements to enhance the learning experience for 
                    future students."
      />
      <Work
        id="trc"
        title="Assistant at the Transit Research Center of UC Davis"
        time="October 2023 - June 2024"
        logo={trcLogo}
        description="As an Assistant at the Transit Research Center of UC Davis, I supported the research and media teams by redesigning 
                    and maintaining the center’s website to enhance communication with both researchers and the public. I worked closely 
                    with cross-functional teams, translating their ideas into engaging, user-friendly web content. My responsibilities 
                    included summarizing research projects, creating and updating web pages to align with the site’s theme, and 
                    incorporating interactive elements to boost audience engagement. I played a key role in bringing team ideas to life, 
                    ensuring that content was accessible, visually appealing, and aligned with the Transit Research Center’s goals."
      />
    </>
  );
}
