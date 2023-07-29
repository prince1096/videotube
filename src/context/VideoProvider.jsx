import React, { createContext, useReducer, useEffect } from "react";

import videos from "../data/video";
import categories from "../data/category";
// import catego

export const VideoContext = createContext();

const storedVideos = JSON.parse(localStorage.getItem("watchlater"));

const storedComments = JSON.parse(localStorage.getItem("comments"));
const storedPlaylist = JSON.parse(localStorage.getItem("playlist"));

export const initialState = {
  allvideos: [...videos],
  categories: [...categories],
  watchLaterVideo: [...storedVideos] || [],
  comments: storedComments || [],
  allplaylist: storedPlaylist || [],
};

const VideoProvider = ({ children }) => {
  const videoreducerFunction = (state, action) => {
    switch (action.type) {
      case "ALL_DATA":
        return { ...state };

      case "WATCH_LATER":
        return { ...state, watchLaterVideo: action.payload };

      case "COMM":
        return { ...state, comments: action.payload };

      case "PLAY":
        return { ...state, allplaylist: action.payload };

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

  useEffect(
    () =>
      localStorage.setItem("comments", JSON.stringify([...state?.comments])),
    [state?.comments]
  );

  useEffect(
    () =>
      localStorage.setItem("playlist", JSON.stringify([...state?.allplaylist])),
    [state?.allplaylist]
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
