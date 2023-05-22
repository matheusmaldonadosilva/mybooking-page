import useFetch from "../../hooks/useFetch.js";
import "./property.css";

const Property = () => {
  const { data, loading } = useFetch("/hotels/countByType");

  const images = [
    "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  return (
      <div className="pList">
        {loading ? (
          "loading"
        ) : (
          <>
            {data &&
              images.map((img, i) => (
                <div className="pListItem" key={i}>
                  <img
                    src={img}
                    className="pListImg"
                    alt=""
                  />
                  <div className="pListTitles">
                    <>
                      <h1>{data[i]?.type}</h1>
                      <h2>{data[i]?.count} {data[i]?.type}</h2>
                    </>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
  );
};

export default Property;
