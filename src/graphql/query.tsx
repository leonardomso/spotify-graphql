import { gql } from "@apollo/client";

export const QUERY_ARTISTS_BY_NAME = gql`
  query QueryArtirtsByName($byName: String) {
    queryArtists(byName: $byName) {
      name
      id
      image
      albums {
        id
        name
        image
        tracks {
          id
        }
      }
    }
  }
`;
