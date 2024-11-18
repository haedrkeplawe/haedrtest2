import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Search = () => {
  const { Lang } = useContext(MainContext);
  return (
    <div className="search-component">
      <form>
        <div>
          <input
            type="text"
            placeholder={Lang !== "ar" ? "Search" : "بحث"}
            required
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </form>
    </div>
  );
};

export default Search;
