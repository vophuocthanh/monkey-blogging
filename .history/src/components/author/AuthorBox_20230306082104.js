import React from "react";

const AuthorBox = ({ userId = {} }) => {
  if (!userId) return null;
  return (
    <div className="author">
      <div className="author-image">
        <img src={user?.avatar} alt="" />
      </div>
      <div className="author-content">
        <h3 className="author-name">{user?.fullname}</h3>
        <p className="author-desc">{user?.decription}</p>
      </div>
    </div>
  );
};

export default AuthorBox;
