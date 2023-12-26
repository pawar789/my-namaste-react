import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  // console.log(props);
  // console.log(props);
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, costForTwo, sla, areaName } =
    resData.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};
export default RestaurentCard;
