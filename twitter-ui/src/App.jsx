import { useState } from "react";
import TweetList from "./components/TweetList";
import { tweets } from "./utils/tweetsData";
import PostTweet from "./components/PostTweet";

function App() {
  const [allTweets, setAllTweets] = useState(tweets);
  const addTweet = (tweet) => {
    setAllTweets((prev) => [...prev, tweet]);
    alert("Tweet added");
  };

  const updateTweet = (tweetId, content) => {
    const tweetsCopy = [...allTweets];
    setAllTweets(
      tweetsCopy.map((tweet) => {
        if (tweet.id === tweetId) {
          return { ...tweet, content };
        }
        return tweet;
      })
    );
  };
  const handleSort = () => {
    const tweetsCopy = [...allTweets];
    tweetsCopy.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setAllTweets(tweetsCopy);
  };
  return (
    <>
      <h1>Twitter</h1>

      <PostTweet addTweet={addTweet} />
      <button onClick={handleSort}>Sort Tweet</button>
      <TweetList allTweets={allTweets} updateTweet={updateTweet} />
    </>
  );
}

export default App;
