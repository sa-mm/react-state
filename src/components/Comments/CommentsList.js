import React from "react";
import PropTypes from "prop-types";

const CommentsList = props => {
  const { comments, update, removeComment } = props;
  const handleClick = id => e => {
    update(removeComment(id));
  };

  return (
    <ul>
      {comments.map((comment, idx) => {
        const { txt, id } = comment;
        return (
          <div key={id}>
            <li>{txt}</li>
            <button onClick={handleClick(id)}>remove</button>
          </div>
        );
      })}
    </ul>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsList;
