import React, { useContext } from "react";

import styles from "./VideolistCard.module.css";

import { MdOutlineWatchLater } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

import { Link } from "react-router-dom";
import { VideoContext } from "../../context/VideoProvider";

const VideolistCard = ({ video, category }) => {
  const { state, dispatch } = useContext(VideoContext);

  const watchHandler = (video) => {
    dispatch({
      type: "WATCH_LATER",
      payload: [...state?.watchLaterVideo, video],
    });
  };

  const removewatchHandler = (video) => {
    const filtervideoList = state?.watchLaterVideo?.filter(
      (vid) => vid?._id !== video?._id
    );

    dispatch({
      type: "WATCH_LATER",
      payload: [...filtervideoList],
    });
  };

  const presentVideo = state?.watchLaterVideo?.find(
    (later) => later?._id === video?._id
  );

  return (
    <div className={styles.videosdiv}>
      <div className={styles.imgdiv}>
        <img
          className={styles.bigimg}
          src={video?.thumbnail}
          alt=""
          //   width="300px"
          //   height="240px"
        />
        <div className={styles.icondiv}>
          {presentVideo ? (
            <button
              className={styles.iconbtn}
              onClick={() => removewatchHandler(video)}
            >
              <MdWatchLater />
            </button>
          ) : (
            <button
              className={styles.iconbtn}
              onClick={() => watchHandler(video)}
            >
              <MdOutlineWatchLater />
            </button>
          )}
        </div>
      </div>

      <Link to={`/singlevideo/${video?._id}`} className={styles.videolink}>
        <div className={styles.videodetail}>
          <div>
            <img
              className={styles.img}
              src={category?.thumbnail}
              alt=""
              height="60px"
              width="60px"
            />
          </div>

          <div>
            <p className={styles.p}>{video?.title}</p>
            <p className={styles.p}>{video?.category}</p>
            <p className={styles.pp}>
              {video?.views} views | {video?.creator}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideolistCard;
