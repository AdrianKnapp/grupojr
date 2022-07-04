type FormatsProps = {
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

export type BannerAttributesProps = {
  url: string;
  width: number;
  height: number;
  formats?: FormatsProps;
}

export type BannerImagesProps = {
  id: string;
  attributes: BannerAttributesProps;
}

export type BannerProps = {
  name: string;
  images: {
    data: BannerImagesProps[];
  };
}

export type ThumbnailProps = {
  id: string;
  attributes: BannerAttributesProps;
}
