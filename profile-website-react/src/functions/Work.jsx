
export default function Work({ id, title, time, logo, description }) {
  return (
    <>
      <div class="job" id={id}>
        <div class="title">
          <h2>{title}</h2>
          <p id="time">{time}</p>
        </div>
        <div id="job-description">
          <div id="logo">
            <img src={logo} id="logo" />
          </div>
          <p id="text">{description}</p>
        </div>
      </div>
    </>
  );
}
