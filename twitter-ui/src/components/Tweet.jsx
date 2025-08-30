import profile from "../profile.png";
import { formatDate } from "../utils/helper";
import { useState } from "react";
const Tweet = ({ tweet, updateTweet }) => {
  const date = formatDate(tweet?.createdAt);
  const [isEdit, setIsEdit] = useState(false);
  const [editedTweet, setEditedTweet] = useState(tweet?.content);

  const handleEditSave = () => {
    if (isEdit && editedTweet.trim() !== "") {
      updateTweet(tweet?.id, editedTweet);
    }
    setIsEdit(!isEdit);
  };
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
        {isEdit ? (
          <input
            type="text"
            value={editedTweet}
            onChange={(e) => setEditedTweet(e.target.value)}
          />
        ) : (
          <p className="tweet-content">{tweet?.content}</p>
        )}
        <div className="like-container">
          <span>❤️: {tweet.likeCount}</span>
          <span>❤️: {tweet.likeCount}</span>
          <span>❤️: {tweet.likeCount}</span>
          <button onClick={handleEditSave}>{!isEdit ? "Edit" : "Save"}</button>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
