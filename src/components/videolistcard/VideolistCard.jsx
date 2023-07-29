import React from "react";

import styles from "./VideolistCard.module.css";

import { MdOutlineWatchLater } from "react-icons/md";

import { Link } from "react-router-dom";

const VideolistCard = ({ video, category }) => {
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
          <button className={styles.iconbtn}>
            <MdOutlineWatchLater />
          </button>
        </div>
      </div>

      <Link to={`/singlevideo/${video._id}`} className={styles.videolink}>
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
