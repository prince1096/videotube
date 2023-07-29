import React from "react";
import Homepage from "../pages/homepage/Homepage";
// import Navbar from "../pages/navbar/Navbar";
import { Route, Routes } from "react-router";
import Explorepage from "../pages/explore/Explorepage";
import Watchlater from "../pages/watchlater/Watchlater";
import Playlist from "../pages/Playlist/Playlist";
import ErrorPage from "../pages/Error/ErrorPage";
import SingleCategory from "../pages/SingleCategory/SingleCategory";
import Singlevideo from "../pages/Singlevideo/Singlevideo";

const RouterPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/singlecategory/:categoryid"
          element={<SingleCategory />}
        />

        <Route path="/singlevideo/:videoid" element={<Singlevideo />} />

        <Route path="/explore" element={<Explorepage />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RouterPage;
