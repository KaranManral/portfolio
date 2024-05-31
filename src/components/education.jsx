import React from "react";

function Education() {
  return (
    <div className="row" id="education">
      <div className="row my-4">
        <div className="col-12" id="eduHead">
          EDUCATION
        </div>
      </div>
      <div className="row my-4">
        <div className="col px-3 text-muted">
          <h6>Senior Secondary</h6>
          Lucknow Public College, Lucknow. <br />
          Year of 2020
        </div>
      </div>
      <div className="row my-4">
        <div className="col px-3 text-muted">
          <h6>Bachelors</h6>
          B.Sc. (Hons.) Computer Science <br /> University of Delhi, Delhi.{" "}
          <br />
          Year of 2020-2023
        </div>
      </div>
      <div className="row my-4">
        <div className="col px-3 text-muted">
          <h6>Masters</h6>
          Master of Computer Applications <br /> University of Lucknow, Lucknow.{" "}
          <br />
          Year of 2023-2025
        </div>
      </div>
    </div>
  );
}

export default Education;
