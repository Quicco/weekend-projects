import React, { useState } from "react";

function SearchBar(props) {
  // Search term state
  const [searchTerm, setSearchTerm] = useState("");

  // Search term becomes whatever is typed
  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="Job title, company name..."
      />
    </div>
  );
}

export default SearchBar;
