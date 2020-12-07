import React from "react";
import { Image, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import {
  ArtistContainer,
  AlbumsContainer,
  AlbumContainer,
  AlbumImage,
  AlbumTitle,
  AlbumArtist
} from "./Artist.styles";

import { ArtistData, ArtistAlbumData } from "../../types";

interface State {
  state: {
    artist: ArtistData;
  };
}

const Artist = () => {
  const { state } = useLocation() as State;

  return (
    <ArtistContainer>
      <Image
        width="200px"
        height="200px"
        objectFit="cover"
        src={state.artist.image}
        fallbackSrc="https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg"
        alt="Image"
        justifySelf="center"
      />

      <Heading
        color="#101010"
        as="h2"
        letterSpacing="-0.03em"
        size="lg"
        textAlign="center"
        justifySelf="center"
      >
        {state.artist.name}
      </Heading>

      <AlbumsContainer>
        {state.artist.albums.map(({ id, image, name }: ArtistAlbumData) => (
          <AlbumContainer key={id}>
            <AlbumImage src={image} fallbackSrc="https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg" />

            <AlbumTitle
              color="#101010"
              as="h3"
              letterSpacing="-0.03em"
              size="lg"
              textAlign="start"
              alignSelf="center"
              fontSize={20}
            >
              {name}
            </AlbumTitle>

            <AlbumArtist alignSelf="center">{state.artist.name}</AlbumArtist>
          </AlbumContainer>
        ))}
      </AlbumsContainer>
    </ArtistContainer>
  )
}

export default Artist;