import React from "react";
import { FaGithubSquare } from "react-icons/fa";

function projects() {
  return (
    <div className="pdiv">
      <div className="projectcontainer">
        <div>
          <h3>Projelerim</h3>
          <p>Aşağıdaki ikondan Github hesabımı inceleyebilirsiniz. </p>
        </div>
        <div>
          <a target="_blank" href="https://github.com/ozanakgon">
            <FaGithubSquare id="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default projects;
