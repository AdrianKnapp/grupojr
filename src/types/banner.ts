export type BannerImagesProps = {
  id: string;
  attributes: {
    width: number;
    height: number;
    formats: {
      large: {
        url: string;
        width: number;
        height: number;
      }
      ,
      medium: {
        url: string;
        width: number;
        height: number;
      }
    }
  }
}

export type BannerProps = {
  title: string;
  images: {
    data: BannerImagesProps[];
  };
}
