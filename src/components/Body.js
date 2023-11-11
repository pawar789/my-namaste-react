import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";

import { useState } from "react"; // named import - {}
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestraurent] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            console.log(filteredList);
            setListOfRestraurent(filteredList);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
