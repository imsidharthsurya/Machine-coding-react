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
  return (
    <>
      <h1>Twitter</h1>

      <PostTweet addTweet={addTweet} />
      <TweetList allTweets={allTweets} updateTweet={updateTweet} />
    </>
  );
}

export default App;
