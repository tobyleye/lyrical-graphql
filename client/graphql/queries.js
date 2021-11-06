import gql from "graphql-tag";

export const fetchSongs = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export const fetchSongDetails = gql`
  query fetchSongDetails($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
