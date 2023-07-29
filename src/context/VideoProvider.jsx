import React, { createContext, useReducer } from "react";

import videos from "../data/video";
import categories from "../data/category";
// import catego

export const VideoContext = createContext();

export const initialState = {
  allvideos: [...videos],
  categories: [...categories],
};

const VideoProvider = ({ children }) => {
  const videoreducerFunction = (state, action) => {
    switch (action.type) {
      case "ALL_DATA":
        return { ...state };

      default:
        return { ...state };
    }
  };

  const [state, dispatch] = useReducer(videoreducerFunction, initialState);

  // console.log(state?.categories);

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
