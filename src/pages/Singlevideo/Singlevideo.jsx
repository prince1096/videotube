import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";
import { useParams } from "react-router-dom";

const Singlevideo = () => {
  const { state } = useContext(VideoContext);

  const { videoid } = useParams();

  const findVideo = state?.allvideos?.find((video) => video?._id === +videoid);

  console.log(findVideo);

  return <div></div>;
};

export default Singlevideo;
