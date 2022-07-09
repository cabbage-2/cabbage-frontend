import axios from "axios";

const RestaurantSearchBar = () => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Find a restaurant"></input>
        <button>search</button>
      </form>
    </div>
  );
};

export default RestaurantSearchBar;
