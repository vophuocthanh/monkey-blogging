import React from "react";

const AuthorBox = ({ userId = {} }) => {
  if (!userId) return null;
  return (
    <div className="author">
      <div className="author-image">
        <img src="" alt="" />
      </div>
      <div className="author-content">
        <h3 className="author-name">Võ Phước Thạnh</h3>
        <p className="author-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          ducimus est accusamus illum incidunt quia
        </p>
      </div>
    </div>
  );
};

export default AuthorBox;
