import { gql } from "@apollo/client";

export const GET_HEADER = gql`
  query GetData {
    header(id: "6dnLNIvodxWwCOGjelcvOQ") {
      title
      headeItemsCollection(limit: 5) {
        items {
          title
          link
          subCategoryCollection(limit: 10) {
            items {
              title
              link
              subCategoryCollection(limit: 10) {
                items {
                  title
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`;
