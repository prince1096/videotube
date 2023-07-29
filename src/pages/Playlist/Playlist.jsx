import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";

import { Link } from "react-router-dom";

const Playlist = () => {
  const { state } = useContext(VideoContext);

  console.log(state?.allplaylist);

  return (
    <div>
      <h2>Playlist</h2>

      <div>
        <button>Add</button>
      </div>

      <div>
        {state?.allplaylist?.map((name, index) => (
          <div>
            <Link to={`/singleplaylist/${index}`}>
              <img src={name?.video[0]?.thumbnail} alt="" />
            </Link>
            <p>{name?.title}</p>
            <p>{name?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
