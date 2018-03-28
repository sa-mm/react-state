import React from "react";
import PropTypes from "prop-types";

import CommentsList from "./CommentsList";

import { addComment, removeComment } from "../../store/comments";

class CommentsContainer extends React.Component {
  state = {
    value: ""
  };

  handleTextInput = e => {
    const { value } = e.target;
    this.setState({
      value
    });
  };

  handleSubmit = e => {
    this.context.update(addComment(this.state.value));
    this.setState({
      value: ""
    });
    e.preventDefault();
  };

  render() {
    const { comments } = this.props;
    const { update } = this.context;
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={value} onChange={this.handleTextInput} />
          <input type="submit" value="Submit" />
        </form>
        <CommentsList {...{ comments, update, removeComment }} />
      </div>
    );
  }
}

CommentsContainer.contextTypes = {
  update: PropTypes.func
};

CommentsContainer.propTypes = {
  comments: PropTypes.array
};

export default CommentsContainer;
