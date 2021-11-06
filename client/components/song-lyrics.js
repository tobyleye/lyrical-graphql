import gql from "graphql-tag"
import { compose, graphql } from 'react-apollo'

function SongLyrics() {
    return (
        <div>
            song lyrcs 
            <span></span>
        </div>
    )
}


const query = gql`
    query {
        song(id: songId) {
            lyrics {
                content
            }
        }
    }
`
export default graphql(query)(SongLyrics)
