import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";
import { useParams } from "react-router-dom";

import styles from "./Singlevideo.module.css";

import { AiFillYoutube } from "react-icons/ai";

import { AiOutlineComment } from "react-icons/ai";

import { MdOutlineWatchLater } from "react-icons/md";

import { MdPlaylistAdd } from "react-icons/md";

const Singlevideo = () => {
  const { state } = useContext(VideoContext);

  const { videoid } = useParams();

  const finalVideo = state?.allvideos?.find((video) => video?._id === +videoid);

  console.log(finalVideo);

  const category = state?.categories?.find(
    ({ category }) => category === finalVideo?.category
  );

  return (
    <div className={styles.singlevideo}>
      {/* first part */}
      <div>
        <div className={styles.imgdiv}>
          <img src={finalVideo?.thumbnail} alt="" className={styles.mainimg} />

          <button className={styles.play}>
            {" "}
            <a className={styles.btna} href={finalVideo?.src}>
              <AiFillYoutube className={styles.youtubeicon} />{" "}
            </a>
          </button>
        </div>

        <div className={styles.detailv}>
          <div className={styles.pdiv}>
            <img
              src={category?.thumbnail}
              alt=""
              width="40px"
              height="40px"
              className={styles.imgpp}
            />

            <p className={styles.titlep}>{finalVideo?.title}</p>
          </div>

          <div className={styles.pdiv}>
            <p className={styles.addp}>
              <MdOutlineWatchLater />
            </p>

            <p className={styles.playadd}>
              <MdPlaylistAdd />
            </p>

            <p className={styles.cmt}>
              <AiOutlineComment />
            </p>
          </div>
        </div>

        <hr />

        <h3 className={styles.comment}>My Notes</h3>
      </div>
    </div>
  );
};

export default Singlevideo;
