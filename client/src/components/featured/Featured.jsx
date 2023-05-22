import React from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const { data, loading } = useFetch('/hotels/countByCity?cities=berlin,madrid,london')

  return (
    <div>
      <div className="featured">
        {loading ? "Loading please wait" : (
          <>
          <div className="featuredItem">
            <img src="https://images.pexels.com/photos/3586902/pexels-photo-3586902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="featuredImg" alt="" />
            <div className="featuredTitles">
              <h1>New york</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>
            <div className="featuredItem">
              <img src="https://images.pexels.com/photos/3586902/pexels-photo-3586902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="featuredImg" alt="" />
              <div className="featuredTitles">
                <h1>New york</h1>
                <h1>{data[1]} properties</h1>
              </div>
            </div>
            <div className="featuredItem">
              <img src="https://images.pexels.com/photos/3586902/pexels-photo-3586902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="featuredImg" alt="" />
              <div className="featuredTitles">
                <h1>New york</h1>
                <h1>123 properties</h1>
              </div>
            </div>
          </>)
        }
      </div>
    </div>
  );
};

export default Featured;
