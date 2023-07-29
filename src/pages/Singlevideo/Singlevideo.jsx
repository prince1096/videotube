import React, { useContext, useState } from "react";
import { VideoContext } from "../../context/VideoProvider";
import { useParams } from "react-router-dom";

import styles from "./Singlevideo.module.css";

import { AiFillYoutube } from "react-icons/ai";

import { AiOutlineDelete } from "react-icons/ai";

import { AiOutlineComment } from "react-icons/ai";

import { MdOutlineWatchLater } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

import { MdPlaylistAdd } from "react-icons/md";

const Singlevideo = () => {
  const { state, dispatch } = useContext(VideoContext);

  const [showComments, setShowComments] = useState(false);
  const [cmtText, setCmtText] = useState("");

  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
    video: [],
  });

  const { videoid } = useParams();

  const finalVideo = state?.allvideos?.find((video) => video?._id === +videoid);

  console.log(finalVideo);

  const category = state?.categories?.find(
    ({ category }) => category === finalVideo?.category
  );

  const watchHandler = (video) => {
    dispatch({
      type: "WATCH_LATER",
      payload: [...state?.watchLaterVideo, video],
    });
  };

  const removewatchHandler = (video) => {
    const filtervideoList = state?.watchLaterVideo?.filter(
      (vid) => vid?._id !== video?._id
    );

    dispatch({
      type: "WATCH_LATER",
      payload: [...filtervideoList],
    });
  };

  const presentVideo = state?.watchLaterVideo?.find(
    (later) => later?._id === finalVideo?._id
  );

  const commentHandler = () => {
    setShowComments(!showComments);
    // setShowPlaylist(!showPlaylist);
  };

  const saveCommentHandler = (event) => {
    setCmtText(event.target.value);
  };

  const addCommentHandler = () => {
    if (cmtText === "") {
      return;
    }

    dispatch({ type: "COMM", payload: [...state?.comments, cmtText] });
    setShowComments(!showComments);
    setCmtText("");
  };

  const deleteHandler = (value) => {
    const filtercomments = state?.comments?.filter(
      (comment, index) => index !== value
    );

    dispatch({ type: "COMM", payload: [...filtercomments] });
  };

  const playlistHandler = () => {
    setShowPlaylist(!showPlaylist);
    // setShowComments(!showComments);
  };

  const addPlayListHandler = () => {
    if (playlist?.title === "") {
      return;
    }

    if (playlist?.description === "") {
      return;
    }

    dispatch({ type: "PLAY", payload: [...state?.allplaylist, playlist] });
    setPlaylist({ input: "", description: "" });
    setShowPlaylist(!setPlaylist);
  };

  const videoplaylistHandler = (name, indexvalue) => {
    // console.log(name);
    // console.log(indexvalue);
    const newFilterlist = state?.allplaylist?.reduce?.((acc, curr, index) => {
      // console.log(index, "index");
      return +index === +indexvalue
        ? [...acc, { ...curr, video: [...curr?.video, name] }]
        : [...acc, { ...curr }];
    }, []);

    // const newPlaylist = sta

    // console.log(newFilterlist);

    dispatch({ type: "PLAY", payload: [...newFilterlist] });
  };

  const deletePlaylist = (deletedIndex) => {
    console.log(deletedIndex);
    const filterallPlay = state?.allplaylist?.filter(
      (list, index) => index !== deletedIndex
    );

    console.log(filterallPlay);

    dispatch({ type: "PLAY", payload: [...filterallPlay] });
  };

  return (
    <div className={styles.singlevideo}>
      {/* first part */}
      <div>
        <div className={styles.imgdiv}>
          <img src={finalVideo?.thumbnail} alt="" className={styles.mainimg} />

          <button className={styles.play}>
            {" "}
            <a className={styles.btna} href={finalVideo?.src}>
              <AiFillYoutube className={styles.youtubeicon} />{" "}
            </a>
          </button>
        </div>

        <div className={styles.detailv}>
          <div className={styles.pdiv}>
            <img
              src={category?.thumbnail}
              alt=""
              width="40px"
              height="40px"
              className={styles.imgpp}
            />

            <p className={styles.titlep}>{finalVideo?.title}</p>
          </div>

          <div className={styles.pdiv}>
            <p className={styles.addp}>
              {presentVideo ? (
                <button
                  className={styles.iconbtn}
                  onClick={() => removewatchHandler(finalVideo)}
                >
                  <MdWatchLater />
                </button>
              ) : (
                <button
                  className={styles.iconbtn}
                  onClick={() => watchHandler(finalVideo)}
                >
                  <MdOutlineWatchLater />
                </button>
              )}
            </p>

            <p className={styles.playadd}>
              <button
                onClick={() => playlistHandler()}
                className={styles.commentbtnn}
              >
                <MdPlaylistAdd />
              </button>

              {!showPlaylist && (
                <div className={styles.playinputdiv}>
                  <h5>Add to Playlist</h5>

                  <div>
                    <input
                      type="text"
                      onChange={(event) =>
                        setPlaylist({ ...playlist, title: event.target.value })
                      }
                      placeholder="title"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      onChange={(event) =>
                        setPlaylist({
                          ...playlist,
                          description: event.target.value,
                        })
                      }
                      placeholder="description"
                    />
                  </div>

                  <button
                    className={styles.addlistbtn}
                    onClick={() => addPlayListHandler()}
                  >
                    Add Playlist
                  </button>

                  <div>
                    {state?.allplaylist?.map((name, index) => (
                      <div key={index}>
                        <button
                          onClick={() => videoplaylistHandler(name, index)}
                        >
                          <p>{name?.title}</p>
                        </button>
                        <button onClick={() => deletePlaylist(index)}>X</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </p>

            <p className={styles.cmt}>
              <button
                className={styles.commentbtnn}
                onClick={() => commentHandler()}
              >
                <AiOutlineComment />
              </button>

              {!showComments && (
                <div className={styles.commentarea}>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    className={styles.textarea}
                    placeholder="writecomment"
                    onChange={(event) => saveCommentHandler(event)}
                  ></textarea>
                  <button
                    className={styles.cmtbtn}
                    onClick={() => addCommentHandler()}
                  >
                    Add
                  </button>
                </div>
              )}
            </p>
          </div>
        </div>

        <hr />

        <h3 className={styles.comment}>My Notes</h3>

        <div>
          {state?.comments?.map((comments, index) => (
            <div key={index} className={styles.commbox}>
              <p>{comments}</p>{" "}
              <button
                className={styles.delbtn}
                onClick={() => deleteHandler(index)}
              >
                {" "}
                <AiOutlineDelete />{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Singlevideo;
