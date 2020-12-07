export type ArtistAlbumData = {
  id: string;
  image: string;
  name: string;
  tracks: Array<any>;
};

export type ArtistData = {
  id: string;
  image: string;
  name: string;
  albums: Array<ArtistAlbumData>;
};
