import react from "react";
export default function Education() {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Ravindra Engineering Collage For Women</h3>
            <div className="subheading mb-3">Bachelor of Technology</div>
            <div>Computer Science Engineering</div>
            <p>Percentage: 76.5</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">September 2012 - May 2016</span>
          </div>
        </div>
      </div>
    </section>
  );
}
