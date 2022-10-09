import React from "react";
import JobItem from "./JobItem";
import "./JobList.css";

function JobList(props) {
  // Mapping the array, where you return a job from that array with: title, desc, salary
  return (
    <div className="list-container">
      <ul className="jobs-list">
        {props.jobs.map((job) => (
          <JobItem
            title={job.title}
            description={job.description}
            salary={job.salary}
          />
        ))}
      </ul>
    </div>
  );
}

export default JobList;
