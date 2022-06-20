import { BannerImagesProps } from './banner';

export type AttractionProps = {
  id: number;
  attributes: {
    name: string;
    details: string;
    images: {
      data: BannerImagesProps[];
    };
  }
}
