import resList from "../utils/mockData";
import RestaurentCard, {
  withPromtedLabel,
  withPromted,
} from "./RestaurentCard";
import UserContext from "../utils/UserContext";
import { useState, useEffect, useContext } from "react"; // named import - {}
//import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import resList from "../utils/mockData";
import Shimmer from "../Shimmer";
import useOnileStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestraurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurentCardPromoted = withPromted(RestaurentCard);
  const onlineStatus = useOnileStatus();
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9431365&lng=77.6263452&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    console.log("body rendered", listOfRestaurants);
    const json = await data.json();
    console.log(data);
    // Optional Chaining
    setListOfRestraurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(listOfRestaurants);
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  }
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          {/* <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          /> */}
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchText);
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100  rounded-lg"
            onClick={() => {
              // Filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.0
              );

              setListOfRestraurent(filteredList);
              console.log(filteredList);
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username:</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurentCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
