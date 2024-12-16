export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="link-to-home">
        Tiffany Choy
      </a>
      <ul>
        <li>
          <a href="/work-experience">Work Experience</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
