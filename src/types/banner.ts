type FormatsModel = {
  large?: {
    url: string;
    width: number;
    height: number;
  }
  ,
  medium?: {
    url: string;
    width: number;
    height: number;
  },
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  }
}

export type BannerImagesProps = {
  id: string;
  attributes: {
    url: string;
    width: number;
    height: number;
    formats?: FormatsModel;
  }
}

export type BannerProps = {
  name: string;
  images: {
    data: BannerImagesProps[];
  };
}

export type ThumbnailProps = {
  id: string;
  attributes: {
    url: string;
    width: number;
    height: number;
    formats?: FormatsModel;
  }
}
