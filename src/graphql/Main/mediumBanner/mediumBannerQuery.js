import { gql } from "@apollo/client";

export const GET_MEDIUM_BANNER = gql`
  query GetMediumBanner {
    subBanner1Collection(limit: 10) {
      items {
        banner1Collection(limit: 10) {
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
