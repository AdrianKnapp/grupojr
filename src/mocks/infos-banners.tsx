import { BannerImagesProps } from '../types/banner';

const aboutUsSrcList = [
  'https://res.cloudinary.com/grupo-jr/image/upload/v1655754783/large_IMG_0236_57_382c8e706e.jpg?updated_at=2022-06-20T19:53:05.873Z',
  'https://res.cloudinary.com/grupo-jr/image/upload/v1655997032/large_IMG_0217_44_84ecedc0c0.jpg?updated_at=2022-06-23T15:10:34.784Z',
  'https://res.cloudinary.com/grupo-jr/image/upload/v1655754766/large_IMG_0207_37_68b280e341.jpg?updated_at=2022-06-20T19:52:48.592Z',
];

export const aboutUsBannerImages: BannerImagesProps[] = aboutUsSrcList.map((src, index) => ({
  id: `${index}`,
  attributes: {
    url: src,
    width: null,
    height: null,
    formats: {},
  },
}));

const transporterSrcList = [
  'https://res.cloudinary.com/grupo-jr/image/upload/v1656011488/small_PHOTO_2022_02_18_10_14_38_10_54e65c809d.jpg',
  'https://res.cloudinary.com/grupo-jr/image/upload/v1656011488/small_PHOTO_2022_02_18_10_14_38_9_9241bfd7ea.jpg',
  'https://res.cloudinary.com/grupo-jr/image/upload/v1656011486/small_PHOTO_2022_02_18_10_14_38_7_c0555afaab.jpg',
  'https://res.cloudinary.com/grupo-jr/image/upload/v1656011486/small_PHOTO_2022_02_18_10_14_38_1_92dea4b99e.jpg',
];

// eslint-disable-next-line max-len
export const transporterBannerImages: BannerImagesProps[] = transporterSrcList.map((src, index) => ({
  id: `${index}`,
  attributes: {
    url: src,
    width: null,
    height: null,
    formats: {},
  },
}));
