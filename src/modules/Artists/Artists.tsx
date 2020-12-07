import React from "react";

import { ArtistsContainer } from "./Artists.styles";

import ArtistItem from "../../components/ArtistItem/ArtistItem";

import SkeletonArtistItem from "../../components/Skeletons/SkeletonArtistItem/SkeletonArtistItem";

import { ArtistData } from "../../types";

interface Props {
  loading: boolean;
  data: {
    queryArtists: Array<ArtistData>;
  };
}

const Artists = ({ loading, data }: Props) => (
  <ArtistsContainer className="artists-container">
    {loading ? (
      <>
        <SkeletonArtistItem />
        <SkeletonArtistItem />
        <SkeletonArtistItem />
        <SkeletonArtistItem />
        <SkeletonArtistItem />
        <SkeletonArtistItem />
      </>
    ) : null}
    {data && data.queryArtists.map((artist: ArtistData) => <ArtistItem key={artist.id} artist={artist} />)}
  </ArtistsContainer>
);

export default Artists;