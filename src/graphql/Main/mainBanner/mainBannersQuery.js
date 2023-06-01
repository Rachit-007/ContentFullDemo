import { gql } from "@apollo/client";

export const GET_MAIN_BANNER = gql`
  query GetMainBanner {
    mainBannersCollection {
      items {
        bannerCollection {
          items {
            url
          }
        }
      }
    }
  }
`;
