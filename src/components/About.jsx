import { NavLink } from "react-router-dom";
import "./about/about.scss";
function About() {
  return (
    <div className="about">
      <h1>About ExamMatcher</h1>
      <p className="para">
        ExamMatcher makes it easy to get a second examiner for your exam. Once you have published a request, others will be able to apply for your request until you have chosen a second examiner.
        With this software you can also have a look trough a catalogue to find requests you want to apply for.  
      </p>
      <h2>Meet the creators</h2>
      <p className="creators">
        <a target={"_blank"} href="https://github.com/SivertGullbergHansen">
          Sivert Gullberg Hansen
        </a>
        <span className="material-icons">linear_scale</span>
        <a target={"_blank"} href="https://github.com/henriklgntnu">
          Henrik Landgraff Granum
        </a>
        <span className="material-icons">linear_scale</span>
        <a target={"_blank"} href="https://github.com/sivanmah">
          Sivan Sabir Mahmud
        </a>
        <span className="material-icons">linear_scale</span>
        <a target={"_blank"} href="https://github.com/Magnumoe">
          Magnus Moen
        </a>
      </p>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
}

export default About;
