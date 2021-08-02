import SearchBar from "material-ui-search-bar";

function Search({onChange}) {
return (
  <SearchBar
    onChange={(newValue) => onChange(newValue)}
  />
);
}

export default Search
