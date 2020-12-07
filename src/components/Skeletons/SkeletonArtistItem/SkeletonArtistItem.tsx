import React from "react";
import { Skeleton } from "@chakra-ui/react";

import { SkeletonArtistItemContainer } from "./SkeletonArtistItem.styles";

const SkeletonArtistItem = () => (
  <SkeletonArtistItemContainer>
    <Skeleton
      width="200px"
      height="200px"
      startColor="#E2E8F0"
      endColor="#E2E8F0"
      borderRadius={3}
    />

    <Skeleton
      width="100%" height="30px"
      startColor="#E2E8F0"
      endColor="#E2E8F0"
      borderRadius={3}
    />
  </SkeletonArtistItemContainer>
);

export default SkeletonArtistItem;