import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";
import VideolistCard from "../../components/videolistcard/VideolistCard";

import styles from "./Watchlater.module.css";

const Watchlater = () => {
  const { state } = useContext(VideoContext);

  const findcategory = (video) => {
    return state?.categories?.find(
      (category) => category?.category === video?.category
    );
  };

  console.log(state?.watchLaterVideo);

  return (
    <div>
      <h2 className={styles.heading}>Watch Later</h2>
      <div className={styles.watchlater}>
        {state?.watchLaterVideo?.length > 0 &&
          state?.watchLaterVideo?.map((video) => (
            <VideolistCard video={video} category={findcategory(video)} />
          ))}
      </div>
    </div>
  );
};

export default Watchlater;
