import { Link } from "react-router-dom";
function RatingCard({ pic, user, stars, text }) {
  return (
    <div className="rating-card">
      <div className="rating-header">
        <img
          className="avatar"
          src={pic}
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className="rating-info">
          <h4 className="rating-user">{user}</h4>
          <span className="rating-stars">{stars}</span>
        </div>
      </div>
      <p className="rating-text">{text}</p>
    </div>
  );
}

export default RatingCard;
