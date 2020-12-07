import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "@chakra-ui/react";

import { ArtistItemContainer, ArtistItemName } from "./ArtistItem.styles";

import { ArtistData } from "../../types";

interface Props {
  artist: ArtistData;
}

const ArtistItem = ({ artist }: Props) => {
  const history = useHistory();

  const redirectToArtistPage = () => {
    history.push({
      pathname: `/artist/${artist.id}`,
      state: { artist }
    })
  };

  return (
    <ArtistItemContainer onClick={redirectToArtistPage}>
      <Image
        width="200px"
        height="200px"
        objectFit="cover"
        src={artist.image}
        fallbackSrc="https://www.ecpgr.cgiar.org/fileadmin/templates/ecpgr.org/Assets/images/No_Image_Available.jpg"
        alt="Image"
        cursor="pointer"
      />

      <ArtistItemName
        color="#101010"
        as="h2"
        letterSpacing="-0.03em"
        size="lg"
        textAlign="start"
        cursor="pointer"
      >
        {artist.name}
      </ArtistItemName>
    </ArtistItemContainer>
  );
}

export default ArtistItem;