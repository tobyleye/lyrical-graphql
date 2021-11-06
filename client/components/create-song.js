import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { createSong } from "../graphql/mutations"
import { fetchSongs  } from "../graphql/queries"

class CreateSong extends React.Component {
  constructor() {
    super();
    this.state = {
      songTitle: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.songTitle,
        },
        refetchQueries: [{query: fetchSongs }]
      })
      .then(() => {
        this.props.router.push("/");
      });
  }

  render() {
    return (
      <form className="mui-form mui-panel" onSubmit={this.handleSubmit}>
        <h4>Create a song</h4>
        <div className="mui-textfield">
          <label htmlFor="">Song title</label>
          <input
            type="text"
            placeholder="enter song title"
            value={this.state.songTitle}
            onChange={(e) => {
              this.setState({
                songTitle: e.target.value,
              });
            }}
          />
        </div>
        <button
          disabled={this.state.songTitle.length === 0}
          type="submit"
          className="mui-btn mui-btn--primary mui-btn--raised"
          style={{ marginRight: 10 }}
        >
          Submit
        </button>
        <Link to="/" className="mui-btn mui-btn--flat mui-btn--danger">
          Cancel
        </Link>
      </form>
    );
  }
}


export default graphql(createSong)(CreateSong);
