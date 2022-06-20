import { AttractionProps } from './attraction';
import { BannerProps } from './banner';

export type PageProps = {
  id: number;
  attributes: {
    name: string;
    slug: string;
    contact: string;
    local: string;
    banner: {
      data: {
        attributes: BannerProps
      }
    };
    attractions: {
      data: AttractionProps[];
    }
  }
}
