export default function Project({
  id,
  title,
  languages,
  text,
  github,
  live,
  work,
}) {
  return (
    <>
      <div class="project" id={id}>
        <div class="title">
          <h2>{title}</h2>
          <p id="languages">{languages}</p>
        </div>
        <div id="project-description">
          <p id="text">{text}</p>
          <Links github={github} live={live} work={work} />
        </div>
      </div>
    </>
  );
}

function Links({ github, live, work }) {
  return (
    <>
      {github ? (
        <a id="links" href={github}>
          Check it out on github!
        </a>
      ) : null}
      {live ? (
        <a id="links" href={live}>
          Check out the website
        </a>
      ) : null}
      {work ? (
        <a id="links" href={work}>
          Learn more about the experience here
        </a>
      ) : null}
    </>
  );
}
