import React from "react"
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { fetchSongs } from "../graphql/queries";

function DeleteSong(props) {

  const deleteSong = () => {
    props.mutate({
      variables: {
        id: props.songId,
      },
      refetchQueries: [{ query: fetchSongs }]
    })
  };

  return (
    <button onClick={deleteSong} className="delete-song-btn">
      <span className="material-icons">delete</span>
    </button>
  );
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(DeleteSong);
