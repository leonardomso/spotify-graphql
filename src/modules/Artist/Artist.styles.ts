import styled from "@emotion/styled";
import { Heading, Text, Image } from "@chakra-ui/react";

export const ArtistContainer = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px max-content max-content;
  grid-row-gap: 30px;
`;

export const AlbumsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  justify-self: center;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
`;

export const AlbumContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 40px 40px;
  grid-column-gap: 10px;
`;

export const AlbumImage = styled(Image)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const AlbumTitle = styled(Heading)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const AlbumArtist = styled(Text)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;
