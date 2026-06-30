export default function RestInfo({ restData }) {
  //Restinfo have name price rating description
  //right side have button and image

  return (
    <>
      <div className="mb-2 flex w-full flex-col gap-4 pb-2 sm:flex-row sm:justify-between">
        <div className="w-full sm:w-[70%]">
          <p className="mb-1 text-xl font-semibold text-gray-700 sm:text-2xl">
            {restData?.name}
          </p>
          <p className="text-lg sm:text-xl">
            {"₹" +
              ("defaultPrice" in restData
                ? restData?.defaultPrice / 100
                : restData?.price / 100)}
          </p>
          <span className="text-green-700">
            {restData?.ratings?.aggregatedRating?.rating}
          </span>
          <span>
            {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
          </span>
          <p className="text-sm sm:text-base">{restData?.description}</p>
        </div>
        <div className="relative w-full sm:w-40">
          <img
            className="h-36 w-full rounded-3xl object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restData.imageId
            }
          ></img>
          <button className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-xl border border-white bg-white px-5 py-1 text-xl text-green-600 shadow-md">
            ADD
          </button>
        </div>
      </div>
      <hr className="mb-6 mt-2"></hr>
    </>
  );
}
