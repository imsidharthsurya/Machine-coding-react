import { useState } from "react";

const PostTweet = ({ addTweet }) => {
  const [currentTweet, setCurrentTweet] = useState("");

  const handlePostTweet = () => {
    if (currentTweet.trim() === "") return;
    addTweet({
      id: Math.floor(Math.random() * 10000),
      content: currentTweet,
      likeCount: 10,
      createdAt: new Date(),
    });
    setCurrentTweet("");
  };

  return (
    <>
      <input
        type="text"
        value={currentTweet}
        onChange={(e) => setCurrentTweet(e.target.value)}
      />
      <button onClick={handlePostTweet}>Post</button>
    </>
  );
};

export default PostTweet;
