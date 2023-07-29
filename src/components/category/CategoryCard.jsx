import React from "react";
import { Link } from "react-router-dom";

import styles from "../../pages/homepage/Homepage.module.css";

const CategoryCard = ({ category }) => {
  return (
    <div>
      <Link to={`/singlecategory/${category._id}`}>
        <div>
          <img src={category?.thumbnail} alt="" width="300px" />

          <p className={styles.catp}>{category?.category}</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
