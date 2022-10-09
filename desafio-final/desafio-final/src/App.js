import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import JobList from "./components/JobList";
import SearchBar from "./components/SearchBar";

// Array with dummy data for testing
const DUMMY_EXPENSES = [
  {
    title: "Junior Fullstack Developer",
    description: "01ijsd oajsd 010110 01010101",
    salary: 94.12,
  },
  {
    title: "Personal Trainer",
    description: "alkdj akldj alkdj alkdj ",
    salary: 799.49,
  },
  {
    title: "Secretary",
    description: "adadasdadasdad asd ad ads dasdad ads ad",
    salary: 294.67,
  },
];

function App() {
  const [jobs, setJobs] = useState(DUMMY_EXPENSES);

  return (
    <div className="App">
      <SearchBar jobs={jobs} />
      <Button>Test</Button>
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
