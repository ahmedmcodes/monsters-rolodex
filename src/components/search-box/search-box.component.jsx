import React from "react";
import "./Search-box.styles.css";

const SearchBox = ({ stateData }) => {
  const { setMonsters, originalMonsters } = stateData;
  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = originalMonsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue);
    });
    setMonsters(filteredArray);
  };
  return (
    <label>
      Search Monster
      <br />
      <input
        className="search-box"
        type="search"
        placeholder="Search Monster"
        onChange={handleSearchChange}
      />
    </label>
  );
};

export default SearchBox;
