import React, { createContext, useReducer, useEffect } from "react";

import videos from "../data/video";
import categories from "../data/category";
// import catego

export const VideoContext = createContext();

const storedVideos = JSON.parse(localStorage.getItem("watchlater"));

export const initialState = {
  allvideos: [...videos],
  categories: [...categories],
  watchLaterVideo: [...storedVideos] || [],
};

const VideoProvider = ({ children }) => {
  const videoreducerFunction = (state, action) => {
    switch (action.type) {
      case "ALL_DATA":
        return { ...state };

      case "WATCH_LATER":
        return { ...state, watchLaterVideo: action.payload };

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(videoreducerFunction, initialState);

  useEffect(
    () =>
      localStorage.setItem(
        "watchlater",
        JSON.stringify([...state?.watchLaterVideo])
      ),
    [state?.watchLaterVideo]
  );

  return (
    <div>
      <VideoContext.Provider value={{ state, dispatch }}>
        {" "}
        {children}{" "}
      </VideoContext.Provider>
    </div>
  );
};

export default VideoProvider;
