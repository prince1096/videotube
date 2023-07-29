import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";

const Playlist = () => {
  const { state } = useContext(VideoContext);

  console.log(state?.allplaylist[0]?.video[0]?.thumbnail);

  return (
    <div>
      {state?.allplaylist?.map((name) => (
        <div>
          <img src={name[0]?.video[0]?.thumbnail} alt="" />
          <p>{name?.title}</p>
          <p>{name?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
