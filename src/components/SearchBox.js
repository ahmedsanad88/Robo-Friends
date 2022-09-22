import React from "react";

const SearchBox = ({ searchTerm }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br3"
        type="search"
        placeholder="search robots"
        onChange={searchTerm}
      />
    </div>
  );
};

export default SearchBox;
