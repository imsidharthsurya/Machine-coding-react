import Tweet from "./Tweet";

const TweetList = ({ allTweets }) => {
  return (
    <>
      {allTweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet?.id} />;
      })}
    </>
  );
};

export default TweetList;
