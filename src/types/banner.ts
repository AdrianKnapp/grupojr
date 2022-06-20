export type BannerImagesProps = {
  id: string;
  attributes: {
    url: string;
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
      },
      thumbnail: {
        url: string;
        width: number;
        height: number;
      }
    }
  }
}

export type BannerProps = {
  name: string;
  images: {
    data: BannerImagesProps[];
  };
}
