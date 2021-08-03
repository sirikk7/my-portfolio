import react from "react";
export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Shirisha
          <span className="text-primary"> K</span>
        </h1>
        <div className="subheading mb-5">
          301 C-Block· Risinia Intellipark,500090 , Hyd.{" "}
          <a href="mailto:siri.kk7@gmail.com">siri.kk7@gmail.com</a>
        </div>
        <p className="lead mb-5">
          To work in a challenging atmosphere by exhibiting my skills with
          utmost sincerity and dedicated smart work for the growth of
          organization along with mine.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/shirisha-k/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="social-icon" href="https://github.com/sirikk7">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
