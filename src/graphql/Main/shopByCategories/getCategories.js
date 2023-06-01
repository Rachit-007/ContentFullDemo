import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query GetCategories {
    singlePhotoCollection(limit: 10) {
      items {
        shopByCategoryCollection(limit: 10) {
          items {
            title
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
