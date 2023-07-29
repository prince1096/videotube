import React, { useContext, useState } from "react";
import { VideoContext } from "../../context/VideoProvider";
import VideolistCard from "../../components/videolistcard/VideolistCard";

import styles from "./Explorepage.module.css";

const Explorepage = () => {
  const { state } = useContext(VideoContext);

  const [text, setText] = useState("");

  const searchHandler = (event) => {
    setText(event.target.value);
  };

  const searchedVideo =
    text === ""
      ? [...state?.allvideos]
      : state?.allvideos?.filter((video) =>
          video?.title?.toLowerCase().includes(text?.toLowerCase())
        );

  const findcategory = (video) => {
    return state?.categories?.find(
      (category) => category?.category === video?.category
    );
  };

  return (
    <div>
      <h2>Explore</h2>

      <div>
        <input
          type="text"
          onChange={searchHandler}
          className={styles.input}
          placeholder="Search Video by Title"
        />
      </div>

      <div className={styles.explorediv}>
        {searchedVideo?.map((video) => (
          <VideolistCard category={findcategory(video)} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Explorepage;
