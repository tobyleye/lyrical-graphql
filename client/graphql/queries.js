import gql from "graphql-tag"

export const fetchSongs = gql`
query {
  songs {
    id
    title
  }
}
`;