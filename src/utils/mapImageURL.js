import { baseUrl } from "../app/shared/baseUrl";

export const mapImageURL = arr => {
  return arr.map(item => {
    console.log({ item });
    return {
      ...item,
      image: baseUrl + item.image,
    };
  });
};
