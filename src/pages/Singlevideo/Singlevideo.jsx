import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";
import { useParams } from "react-router-dom";

import styles from "./Singlevideo.module.css";

import { AiFillYoutube } from "react-icons/ai";

const Singlevideo = () => {
  const { state } = useContext(VideoContext);

  const { videoid } = useParams();

  const finalVideo = state?.allvideos?.find((video) => video?._id === +videoid);

  console.log(finalVideo);

  return (
    <div>
      {/* first part */}
      <div>
        <div className={styles.imgdiv}>
          <img
            src={finalVideo?.thumbnail}
            alt=""
            width="800px"
            height="600px"
          />

          {/* <a href={finalVideo?.src}>ok</a> */}

          <button className={styles.play}>
            {" "}
            <a href={finalVideo?.src}>
              <AiFillYoutube />{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Singlevideo;
