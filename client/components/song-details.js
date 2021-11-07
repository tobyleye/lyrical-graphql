import React from "react";
import { graphql } from "react-apollo";
import { fetchSongDetails } from "../graphql/queries";
import CreateSongLyric from "./create-song-lyric";
import { Link } from "react-router"
import LikeLyricButton from "./like-lyric-button";
class SongDetails extends React.Component {
  render() {
    let { loading, song } = this.props.data;
    let songId = this.props.params.id 
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
                  <LikeLyricButton lyricId={id} songId={songId}/>
                  
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
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetails);
