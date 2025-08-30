import profile from "../profile.png";
import { formatDate } from "../utils/helper";
const Tweet = ({ tweet }) => {
  const date = formatDate(tweet?.createdAt);
  return (
    <div className="tweet-container">
      <div>
        <img src={profile} className="profile-pic" />
      </div>
      <div>
        <div className="tweet-header">
          <h3>
            Sidharth Surya <span className="user-name">@imsidharthsurya</span>
          </h3>
          <p>{date}</p>
        </div>
        <p className="tweet-content">{tweet?.content}</p>
        <div className="like-container">
          <span>❤️: {tweet.likeCount}</span>
          <span>❤️: {tweet.likeCount}</span>
          <span>❤️: {tweet.likeCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
