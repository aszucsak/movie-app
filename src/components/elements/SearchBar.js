import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";

import {
  StyledSearchBar,
  StyledSearchBarContent
} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
  const [search, setSearch] = useState("");
  const timeOut = useRef(null);

  const doSearch = event => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setSearch(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesome className="fa-search" name="search" size="2x" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={doSearch}
          value={search}
        />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;
