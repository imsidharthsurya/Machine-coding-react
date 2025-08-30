import { useState } from "react";
import TweetList from "./components/TweetList";
import { tweets } from "./utils/tweetsData";

function App() {
  const [allTweets, setAllTweets] = useState(tweets);

  return (
    <>
      <h1>Twitter</h1>
      <TweetList allTweets={allTweets} />
    </>
  );
}

export default App;
