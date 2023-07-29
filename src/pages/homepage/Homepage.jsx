import React, { useContext } from "react";
import { VideoContext } from "../../context/VideoProvider";
import CategoryCard from "../../components/category/CategoryCard";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const { state, dispatch } = useContext(VideoContext);

  console.log(state?.categories);

  return (
    <div>
      <h2 className={styles.homeh2}>Categories</h2>

      <div className={styles.catdiv}>
        {state?.categories?.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
