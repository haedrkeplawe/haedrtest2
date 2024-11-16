import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const lang = "ar";
  return (
    <div className="search-component">
      <form>
        <div>
          <input
            type="text"
            placeholder={lang !== "ar" ? "Search" : "بحث"}
            required
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </form>
    </div>
  );
};

export default Search;
