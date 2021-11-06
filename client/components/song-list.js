import { graphql } from "react-apollo";
import React from "react";
import { Link } from "react-router";
import DeleteSong from "./delete-song";
import { fetchSongs } from "../graphql/queries";

function SongList({ data }) {
  let { loading, songs = [] } = data;
  return (
    <div>
      {loading ? (
        <p>loading..</p>
      ) : (
        <ul className="collection">
          {songs.map((song) => (
            <li className="collection-item" key={song.id}>
              <Link to={`/songs/${song.id}`}>{song.title}</Link>
              <DeleteSong songId={song.id} />
            </li>
          ))}
        </ul>
      )}

      <div className="new-song-btn-wrapper">
        <Link
          to="/song/new"
          className="new-song-btn mui-btn mui-btn--fab mui-btn--primary"
        >
          <span className="material-icons">add</span>
        </Link>
      </div>
    </div>
  );
}

export default graphql(fetchSongs)(SongList);
