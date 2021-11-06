import React from "react";
import { graphql } from "react-apollo";
import { createSongLyric } from "../graphql/mutations";
import { fetchSongDetails } from "../graphql/queries";

class CreateSongLyric extends React.Component {
  constructor() {
    super();
    this.state = {
      lyric: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.lyric,
      },
      refetchQueries: [
        { query: fetchSongDetails, variables: { id: this.props.songId } },
      ],
    }).then(() => {
        this.setState({ lyric: ''})
    })
  }

  render() {
      let { lyric } = this.state;
    return (
      <form className="mui-panel" onSubmit={this.handleSubmit}>
        <div className="mui-textfield mui-textfield--float-label">
          <textarea id="lyric" value={lyric} onChange={e => this.setState({ lyric: e.target.value })}></textarea>
          <label htmlFor="lyric">Lyric</label>
        </div>
        <button disabled={lyric.length === 0} type="submit" className="mui-btn mui-btn--primary">submit</button>
      </form>
    );
  }
}

export default graphql(createSongLyric)(CreateSongLyric);
