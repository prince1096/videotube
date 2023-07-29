import React from "react";

import styles from "./Navbar.module.css";

import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";

import { MdPlaylistAdd } from "react-icons/md";

import { MdWatchLater } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.mainnavdiv}>
      <div className={styles.navdiv}>
        <NavLink className={styles.link} to="/">
          <div>
            {" "}
            <AiFillHome /> Home
          </div>
        </NavLink>

        <NavLink className={styles.link} to="/explore">
          <div>
            {" "}
            <MdExplore /> Explore
          </div>
        </NavLink>

        <NavLink className={styles.link} to="/playlist">
          <div>
            {" "}
            <MdPlaylistAdd /> Playlist
          </div>
        </NavLink>

        <NavLink className={styles.link} to="/watchlater">
          <div>
            {" "}
            <MdWatchLater /> Watchlater
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
