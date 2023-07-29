import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { VideoContext } from "../../context/VideoProvider";
import VideolistCard from "../../components/videolistcard/VideolistCard";

import styles from "./PlayListOpen.module.css";

const PlayListOpen = () => {
  const { state } = useContext(VideoContext);
  const { playid } = useParams();

  console.log(playid);

  console.log(state?.allplaylist);

  const findPlaylist = state?.allplaylist?.find(
    (name, index) => index === +playid
  );

  console.log(findPlaylist);

  const findcategory = (video) => {
    return state?.categories?.find(
      (category) => category?.category === video?.category
    );
  };

  return (
    <div>
      <h2>{findPlaylist?.title}</h2>

      <div className={styles?.namediv}>
        {findPlaylist?.video?.map((vid) => (
          <VideolistCard video={vid} category={findcategory(vid)} />
        ))}
      </div>
    </div>
  );
};

export default PlayListOpen;
