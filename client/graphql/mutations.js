import gql from "graphql-tag"

export const createSong =  gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export const createSongLyric = gql`
mutation addSongLyric($content:String! $songId:ID!) {
    addLyricToSong(content:$content, songId:$songId) {
      id,
    }
  }
  
`

export const likeLyric = gql`
  mutation likeLyric($lyricId:ID!) {
    likeLyric(id: $lyricId) {
      id
    }
  }
`