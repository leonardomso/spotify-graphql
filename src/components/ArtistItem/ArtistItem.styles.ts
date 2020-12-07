import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/react";

export const ArtistItemContainer = styled.div`
  width: 200px;
  height: fit-content;
  display: grid;
  grid-template-rows: 200px max-content;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

export const ArtistItemName = styled(Heading)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
