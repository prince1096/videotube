import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";

const Watchlater = () => {
  const { state } = useContext(VideoContext);

  return <div>Watchlater</div>;
};

export default Watchlater;
