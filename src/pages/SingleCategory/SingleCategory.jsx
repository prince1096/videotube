import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { VideoContext } from "../../context/VideoProvider";
import VideolistCard from "../../components/videolistcard/VideolistCard";

import styles from "../../components/videolistcard/VideolistCard.module.css";

const SingleCategory = () => {
  const { state } = useContext(VideoContext);

  const { categoryid } = useParams();

  const finalCategory = state?.categories?.find(
    (category) => category?._id === categoryid
  );

  const categoryVideo = state?.allvideos?.filter(
    (video) => video?.category === finalCategory?.category
  );

  return (
    <div>
      <h2 className={styles.heading}>{finalCategory?.category}</h2>

      <div className={styles?.mainvideodiv}>
        {categoryVideo?.map((video, index) => (
          <VideolistCard key={index} video={video} category={finalCategory} />
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
