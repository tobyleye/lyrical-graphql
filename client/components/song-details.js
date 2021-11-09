import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../graphql/queries";
import CreateSongLyric from "./create-song-lyric";
import { Link } from "react-router";
import { likeLyric } from "../graphql/mutations";
class SongDetails extends React.Component {
  constructor() {
    super();
    this.likeLyric = this.likeLyric.bind(this);
  }

  likeLyric(lyricId) {
    console.log(this.props);
    if (lyricId) {
      this.props.mutate({
        variables: { lyricId },
        refetchQueries: [
          { query: fetchSongDetails, variables: { id: this.props.params.id } },
        ],
      });
    }
  }

  render() {
    let { song } = this.props.data;
    const songId = this.props.params.id;
    return (
      <section>
        {!song ? (
          <div>loading..</div>
        ) : (
          <div>
            <header className="song-detail-header">
              <Link to="/" className="song-detail-back-btn">
                Back
              </Link>
              <h3 className="song-detail-title">{song.title}</h3>
            </header>
            <ul className="collection song-lyric-list">
              {song.lyrics &&
                song.lyrics.map((lyric) => (
                  <li key={lyric.id} className="collection-item">
                    <p>{lyric.content}</p>
                    <button onClick={() => this.likeLyric(lyric.id)}>
                      {lyric.likes} {lyric.likes < 2 ? 'like' : 'likes'}
                    </button>
                  </li>
                ))}
            </ul>

            <CreateSongLyric songId={songId} />
          </div>
        )}
      </section>
    );
  }
}

export default graphql(fetchSongDetails, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(graphql(likeLyric)(SongDetails));
