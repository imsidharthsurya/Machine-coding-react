import Tweet from "./Tweet";

const TweetList = ({ allTweets, updateTweet }) => {
  return (
    <>
      {allTweets.map((tweet) => {
        return (
          <Tweet tweet={tweet} key={tweet?.id} updateTweet={updateTweet} />
        );
      })}
    </>
  );
};

export default TweetList;
