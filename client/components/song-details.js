import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../graphql/queries";
import CreateSongLyric from "./create-song-lyric";
import { Link } from "react-router"

class SongDetails extends React.Component {
  render() {
    let { loading, song } = this.props.data;
    return (
      <section>
        {loading ? (
          <div>loading..</div>
        ) : (
          <div>
              <header className="song-detail-header">
                  <Link to="/" className="song-detail-back-btn">Back</Link >
            <h3 className="song-detail-title">{song.title}</h3>

              </header>
            <ul className="collection song-lyric-list">
              {song.lyrics.map((lyric) => (
                <li key={lyric.id} className="collection-item">
                  <p>{lyric.content}</p>
                  {/* <button>
                    <span className="material-icons">like</span>
                  </button> */}
                </li>
              ))}
            </ul>

            <CreateSongLyric songId={this.props.params.id} />
          </div>
        )}
      </section>
    );
  }
}

export default graphql(fetchSongDetails, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetails);
