import Navbar from "./Navbar";
import Home from "./pages/Home";
import Work_experience from "./pages/Work_experience";
import Projects from "./pages/Projects";
function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/work-experience":
      component = <Work_experience />;
      break;
    case "/projects":
      component = <Projects />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
