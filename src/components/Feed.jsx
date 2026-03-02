import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return null;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users found!</h1>;

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="my-10 flex justify-center">
        <UserCard user={feed[0]} />
      </div>
    </div>
  );
};

export default Feed;