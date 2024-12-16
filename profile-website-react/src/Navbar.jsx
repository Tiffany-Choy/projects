export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="link-to-home">
        Tiffany Choy
      </a>
      <ul>
        <customLink href="/work-experience">Work Experience</customLink>
        <customLink href="/projects">Projects</customLink>
      </ul>
    </nav>
  );
}

function customLink({href, children, ...props }){
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}