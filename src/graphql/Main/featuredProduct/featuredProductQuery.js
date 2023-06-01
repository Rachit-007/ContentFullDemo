import { gql } from "@apollo/client";

export const GET_FEATURED_PRODUCT = gql`
  query GetFeaturedProduct {
    singlePhotoCollection(limit: 10) {
      items {
        featuredProductCollection(limit: 10) {
          items {
            title
            price
            imageCollection(limit: 10) {
              items {
                url
              }
            }
          }
        }
      }
    }
  }
`;
