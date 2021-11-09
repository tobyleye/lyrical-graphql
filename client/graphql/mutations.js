import gql from "graphql-tag"

export const createSong =  gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id,
      title
    }
  }
`;

export const createSongLyric = gql`
mutation addSongLyric($content:String! $songId:ID!) {
    addLyricToSong(content:$content, songId:$songId) {
      id,
      lyrics {
        id, 
        content,
        likes
      }
    }
  }
  
`

export const likeLyric = gql`
  mutation likeLyric($lyricId:ID!) {
    likeLyric(id: $lyricId) {
      id,
      content,
      likes
    }
  }
`