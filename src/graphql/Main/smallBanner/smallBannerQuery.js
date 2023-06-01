import { gql } from "@apollo/client";

export const GET_SMALL_BANNER = gql`
  query GetSmallBanner {
    subBanner1Collection(limit: 10) {
      items {
        banner2Collection(limit: 10) {
          items {
            bannersCollection(limit: 10) {
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
